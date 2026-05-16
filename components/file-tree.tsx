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
		<ul className="space-y-0.5 font-mono">
			{items.map((item, index) => {
				const isFolder = item.type === "folder";
				const hasChildren = !!item.children;
				const isExpanded = expandedFolders[item.name];

				return (
					<li key={index} className="relative">
						<div
							className={`group flex items-center gap-2 rounded-md px-2 py-1 text-[13px] ${
								hasChildren
									? "cursor-pointer hover:bg-emerald-500/5 dark:hover:bg-emerald-500/10"
									: ""
							}`}
							onClick={() => hasChildren && toggleFolder(item.name)}
						>
							{hasChildren ? (
								<ChevronDown
									className={`h-3.5 w-3.5 shrink-0 text-neutral-400 transition-transform dark:text-neutral-600 ${
										isExpanded ? "rotate-0" : "-rotate-90"
									}`}
								/>
							) : (
								<span className="w-3.5 shrink-0" />
							)}
							{isFolder ? (
								<Folder className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
							) : (
								<File className="h-4 w-4 shrink-0 text-neutral-400 dark:text-neutral-500" />
							)}
							<span
								className={`flex-grow truncate ${
									isFolder
										? "font-medium text-neutral-900 dark:text-neutral-100"
										: "text-neutral-600 dark:text-neutral-400"
								}`}
							>
								{item.name}
								{isFolder ? "/" : ""}
							</span>
						</div>
						{hasChildren && isExpanded && (
							<div className="relative ml-[10px] pl-3 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-neutral-200 dark:before:bg-neutral-800">
								<FileTreeComponent
									items={item.children!}
									level={level + 1}
								/>
							</div>
						)}
					</li>
				);
			})}
		</ul>
	);
}

export { FileTreeComponent };
export type { FileTreeItem };
