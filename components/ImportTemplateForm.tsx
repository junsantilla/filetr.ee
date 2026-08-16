"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

const categories = [
    "React.js",
    "Next.js",
    "Vue.js",
    "Angular.js",
    "Svelte",
    "Node.js",
    "Express.js",
    "NestJS",
    "Django",
    "Flask",
    "Laravel",
    "React Native",
    "Flutter",
    "Python",
    "TypeScript",
    "JavaScript",
    "Java",
    "C#",
    "C++",
    "PHP",
    "Go",
    "Rust",
    "Docker Projects",
    "Kubernetes Configurations",
    "WordPress Plugin Development",
];

const categoryItems = categories.map((item) => ({
    label: item,
    value: item,
}));

export default function ImportTemplateForm({ repo }: { repo: string }) {
    const router = useRouter();

    const [category, setCategory] = useState("");
    const [loading, setLoading] = useState(false);

    async function submit() {
        setLoading(true);

        await fetch("/api/templates", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                repo,
                category,
            }),
        });

        router.push("/profile");
    }

    return (
        <div className="mt-8 space-y-6">
            <div className="p-6 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-neutral-950/95 dark:supports-[backdrop-filter]:bg-neutral-950/60 border dark:border-neutral-800">
                <label className="font-medium">Repository</label>

                <p className="text-neutral-500">{repo}</p>
            </div>

            <div>
                <label className="font-medium">Choose Category</label>

                <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger className="mt-2 w-full bg-white dark:bg-neutral-950 border dark:border-neutral-800 focus:ring-0 focus:ring-offset-0 focus-visible:ring-0">
                        <SelectValue placeholder="Select category" />
                    </SelectTrigger>

                    <SelectContent className="bg-white dark:bg-neutral-950 border dark:border-neutral-800">
                        <SelectGroup>
                            {categoryItems.map((item) => (
                                <SelectItem
                                    className="cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800"
                                    key={item.value}
                                    value={item.value}
                                >
                                    {item.label}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>

                <Button
                    size="sm"
                    disabled={!category || loading}
                    onClick={submit}
                    className="mt-4"
                >
                    {loading ? "Saving..." : "Proceed"}
                </Button>
            </div>
        </div>
    );
}
