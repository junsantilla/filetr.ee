export interface FileTreeItem {
	name: string;
	type: "file" | "folder";
	children?: FileTreeItem[];
}

export const basicStructure: FileTreeItem[] = [
	{
		name: "node_modules",
		type: "folder",
	},
	{
		name: "public",
		type: "folder",
		children: [{ name: "favicon.ico", type: "file" }],
	},
	{
		name: "src",
		type: "folder",
		children: [
			{
				name: "controllers",
				type: "folder",
				children: [{ name: "userController.js", type: "file" }],
			},
			{
				name: "models",
				type: "folder",
				children: [{ name: "user.js", type: "file" }],
			},
			{
				name: "middlewares",
				type: "folder",
				children: [{ name: "authMiddleware.js", type: "file" }],
			},
			{
				name: "routes",
				type: "folder",
				children: [{ name: "userRoutes.js", type: "file" }],
			},
			{
				name: "app.js",
				type: "file",
			},
		],
	},
	{
		name: "package.json",
		type: "file",
	},
	{
		name: "README.md",
		type: "file",
	},
];
