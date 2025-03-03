"use client";

import { useState } from "react";
import { File, Folder, ChevronDown } from "lucide-react";

interface FileTreeItem {
	name: string;
	type: "file" | "folder";
	children?: FileTreeItem[];
}

interface FileTreeComponentProps {
	items: FileTreeItem[];
	level?: number;
}

function FileTreeComponent({ items, level = 0 }: FileTreeComponentProps) {
	const [expandedFolders, setExpandedFolders] = useState<
		Record<string, boolean>
	>(() =>
		items.reduce((acc, item) => {
			if (item.type === "folder") {
				acc[item.name] = true;
			}
			return acc;
		}, {} as Record<string, boolean>)
	);

	const toggleFolder = (name: string) => {
		setExpandedFolders((prev) => ({ ...prev, [name]: !prev[name] }));
	};

	return (
		<ul className="space-y-0.5">
			{items.map((item, index) => (
				<li key={index} className="relative">
					<div
						className={`
              group flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm
              ${
								item.children
									? "font-medium cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800"
									: "text-neutral-500 dark:text-neutral-400"
							}
              ${level === 0 ? "text-base" : "text-sm"}
            `}
						onClick={() => item.children && toggleFolder(item.name)}
					>
						{item.children && (
							<ChevronDown
								className={`h-4 w-4 shrink-0 transition-transform ${
									expandedFolders[item.name] ? "rotate-0" : "-rotate-90"
								}`}
							/>
						)}
						{!item.children && <span className="w-0" />}
						{item.type === "folder" ? (
							<Folder className="h-4 w-4 shrink-0 text-neutral-500 dark:text-neutral-400" />
						) : (
							<File className="h-4 w-4 shrink-0 text-neutral-500 dark:text-neutral-400" />
						)}
						<span className="flex-grow truncate">{item.name}</span>
					</div>
					{item.children && expandedFolders[item.name] && (
						<div className="relative ml-4 mt-0.5 pl-4 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-neutral-200 dark:before:bg-neutral-800">
							<FileTreeComponent items={item.children} level={level + 1} />
						</div>
					)}
				</li>
			))}
		</ul>
	);
}

export { FileTreeComponent };
export type { FileTreeItem };
