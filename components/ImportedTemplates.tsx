"use client";

import useSWR from "swr";
import { Button } from "./ui/button";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type Template = {
    _id: string;
    repo: string;
    category: string;
};

interface ImportedTemplatesProps {
    username?: string;
    readOnly?: boolean;
}

export default function ImportedTemplates({
    username,
    readOnly = false,
}: ImportedTemplatesProps) {
    const endpoint = username
        ? `/api/templates/public/${encodeURIComponent(username)}`
        : "/api/templates";

    const {
        data: templates,
        error,
        mutate,
    } = useSWR<Template[]>(endpoint, fetcher);

    async function deleteTemplate(id: string) {
        const confirmed = confirm(
            "Are you sure you want to delete this template?",
        );

        if (!confirmed) return;

        await fetch(`/api/templates/${id}`, {
            method: "DELETE",
        });

        // Refresh templates list
        mutate();
    }

    if (error) {
        return <p className="text-red-500">Failed to load templates.</p>;
    }

    if (!templates) {
        return <p>Loading templates...</p>;
    }

    if (templates.length === 0) {
        return <p className="text-neutral-500">No imported templates yet.</p>;
    }

    return (
        <div className="divide-y dark:divide-neutral-800 border-t dark:border-neutral-800">
            {templates.map((template) => (
                <div
                    key={template._id}
                    className="flex items-center justify-between py-4"
                >
                    <div>
                        <h3 className="font-medium">{template.repo}</h3>

                        <p className="text-sm text-neutral-500">
                            {template.category}
                        </p>
                    </div>

                    {!readOnly && (
                        <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                                View
                            </Button>

                            <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => deleteTemplate(template._id)}
                            >
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
