"use client";

import useSWR from "swr";
import { Button } from "./ui/button";
import Link from "next/link";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type GithubRepo = {
    id: number;
    name: string;
    description: string | null;
};

type Template = {
    _id: string;
    repo: string;
};

export default function GithubRepositories() {
    const { data: repos, error } = useSWR<GithubRepo[]>(
        "/api/github/repos",
        fetcher,
    );

    const { data: templates } = useSWR<Template[]>("/api/templates", fetcher);

    if (error) {
        return <p className="text-red-500">Failed to load repositories.</p>;
    }

    if (!repos || !templates) {
        return <p>Loading repositories...</p>;
    }

    const importedRepos = new Set(templates.map((template) => template.repo));

    const availableRepos = repos.filter(
        (repo) => !importedRepos.has(repo.name),
    );

    if (availableRepos.length === 0) {
        return (
            <p className="text-neutral-500">
                All your repositories have been imported.
            </p>
        );
    }

    return (
        <div className="divide-y dark:divide-neutral-800 border-t dark:border-neutral-800">
            {availableRepos.map((repo) => (
                <div
                    key={repo.id}
                    className="flex items-center justify-between py-4"
                >
                    <div className="min-w-0">
                        <h3 className="font-medium">{repo.name}</h3>

                        <p className="text-sm text-neutral-500 truncate max-w-md">
                            {repo.description || "No description"}
                        </p>
                    </div>

                    <Link href={`/templates/import?repo=${repo.name}`}>
                        <Button size="sm">Import</Button>
                    </Link>
                </div>
            ))}
        </div>
    );
}
