"use client";

import useSWR from "swr";
import { Button } from "./ui/button";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type GithubRepo = {
    id: number;
    name: string;
    description: string | null;
};

export default function GithubRepositories() {
    const { data: repos, error } = useSWR<GithubRepo[]>(
        "/api/github/repos",
        fetcher,
    );

    if (error) {
        return <p className="text-red-500">Failed to load repositories.</p>;
    }

    if (!repos) {
        return <p>Loading repositories...</p>;
    }

    return (
        <div className="divide-y dark:divide-neutral-800 border-t dark:border-neutral-800">
            {repos.map((repo) => (
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

                    <Button size="sm">Import</Button>
                </div>
            ))}
        </div>
    );
}
