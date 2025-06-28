import type { Metadata } from "next";
import { StructureTemplate } from "@/components/structure-template";
import { Badge } from "@/components/ui/badge";
import { Folder, FileText } from "lucide-react";

export const metadata: Metadata = {
	title: "Godot Project Structure",
	description:
		"A scalable and maintainable folder structure for Godot game development",
	openGraph: {
		title: "Godot Project Structure",
		description:
			"Learn how to structure your Godot project for scalability and maintainability.",
		images: [
			{
				url: "/opengraph-image/godot",
				width: 1200,
				height: 630,
				alt: "Godot Project Structure Overview",
			},
		],
		url: "/godot",
	},
};

interface FileTreeItem {
	name: string;
	type: "file" | "folder";
	children?: FileTreeItem[];
}

interface ExplanationItem {
	title: string;
	icon: "folder" | "file";
	description: string;
}

const basicStructure: FileTreeItem[] = [
	{
		name: "scenes",
		type: "folder",
		children: [
			{ name: "Main.tscn", type: "file" },
			{ name: "Player.tscn", type: "file" },
		],
	},
	{
		name: "scripts",
		type: "folder",
		children: [
			{ name: "Player.gd", type: "file" },
			{ name: "GameManager.gd", type: "file" },
		],
	},
	{
		name: "assets",
		type: "folder",
		children: [
			{ name: "sprites", type: "folder" },
			{ name: "audio", type: "folder" },
		],
	},
	{ name: "project.godot", type: "file" },
	{ name: "README.md", type: "file" },
];

const intermediateStructure: FileTreeItem[] = [
	{
		name: "scenes",
		type: "folder",
		children: [
			{
				name: "levels",
				type: "folder",
				children: [
					{ name: "Level1.tscn", type: "file" },
					{ name: "Level2.tscn", type: "file" },
				],
			},
			{
				name: "characters",
				type: "folder",
				children: [
					{ name: "Player.tscn", type: "file" },
					{ name: "Enemy.tscn", type: "file" },
				],
			},
			{
				name: "ui",
				type: "folder",
				children: [
					{ name: "MainMenu.tscn", type: "file" },
					{ name: "HUD.tscn", type: "file" },
				],
			},
		],
	},
	{
		name: "scripts",
		type: "folder",
		children: [
			{
				name: "characters",
				type: "folder",
				children: [
					{ name: "Player.gd", type: "file" },
					{ name: "Enemy.gd", type: "file" },
				],
			},
			{
				name: "managers",
				type: "folder",
				children: [
					{ name: "GameManager.gd", type: "file" },
					{ name: "SceneManager.gd", type: "file" },
				],
			},
			{
				name: "ui",
				type: "folder",
				children: [
					{ name: "MainMenu.gd", type: "file" },
					{ name: "HUD.gd", type: "file" },
				],
			},
		],
	},
	{
		name: "assets",
		type: "folder",
		children: [
			{ name: "sprites", type: "folder" },
			{ name: "audio", type: "folder" },
			{ name: "fonts", type: "folder" },
		],
	},
	{ name: "project.godot", type: "file" },
	{ name: "export_presets.cfg", type: "file" },
	{ name: "README.md", type: "file" },
];

const advancedStructure: FileTreeItem[] = [
	{
		name: "scenes",
		type: "folder",
		children: [
			{
				name: "levels",
				type: "folder",
				children: [
					{ name: "Level1.tscn", type: "file" },
					{ name: "Level2.tscn", type: "file" },
					{ name: "TestLevel.tscn", type: "file" },
				],
			},
			{
				name: "characters",
				type: "folder",
				children: [
					{ name: "Player.tscn", type: "file" },
					{ name: "Enemy.tscn", type: "file" },
					{ name: "NPC.tscn", type: "file" },
				],
			},
			{
				name: "ui",
				type: "folder",
				children: [
					{ name: "MainMenu.tscn", type: "file" },
					{ name: "HUD.tscn", type: "file" },
					{ name: "SettingsMenu.tscn", type: "file" },
				],
			},
			{
				name: "environment",
				type: "folder",
				children: [
					{ name: "Platform.tscn", type: "file" },
					{ name: "Collectible.tscn", type: "file" },
				],
			},
			{
				name: "effects",
				type: "folder",
				children: [
					{ name: "Explosion.tscn", type: "file" },
					{ name: "Particle.tscn", type: "file" },
				],
			},
		],
	},
	{
		name: "scripts",
		type: "folder",
		children: [
			{
				name: "characters",
				type: "folder",
				children: [
					{ name: "Player.gd", type: "file" },
					{ name: "Enemy.gd", type: "file" },
					{ name: "BaseCharacter.gd", type: "file" },
				],
			},
			{
				name: "managers",
				type: "folder",
				children: [
					{ name: "GameManager.gd", type: "file" },
					{ name: "SceneManager.gd", type: "file" },
					{ name: "AudioManager.gd", type: "file" },
					{ name: "SaveManager.gd", type: "file" },
				],
			},
			{
				name: "ui",
				type: "folder",
				children: [
					{ name: "MainMenu.gd", type: "file" },
					{ name: "HUD.gd", type: "file" },
					{ name: "BaseUI.gd", type: "file" },
				],
			},
			{
				name: "systems",
				type: "folder",
				children: [
					{ name: "InventorySystem.gd", type: "file" },
					{ name: "DialogueSystem.gd", type: "file" },
				],
			},
			{
				name: "utils",
				type: "folder",
				children: [
					{ name: "Constants.gd", type: "file" },
					{ name: "Utils.gd", type: "file" },
				],
			},
		],
	},
	{
		name: "assets",
		type: "folder",
		children: [
			{
				name: "sprites",
				type: "folder",
				children: [
					{ name: "characters", type: "folder" },
					{ name: "environment", type: "folder" },
					{ name: "ui", type: "folder" },
				],
			},
			{
				name: "audio",
				type: "folder",
				children: [
					{ name: "music", type: "folder" },
					{ name: "sfx", type: "folder" },
				],
			},
			{ name: "fonts", type: "folder" },
			{ name: "shaders", type: "folder" },
		],
	},
	{
		name: "addons",
		type: "folder",
		children: [
			{ name: "custom_plugin", type: "folder" },
		],
	},
	{
		name: "data",
		type: "folder",
		children: [
			{ name: "levels.json", type: "file" },
			{ name: "items.json", type: "file" },
		],
	},
	{ name: "project.godot", type: "file" },
	{ name: "export_presets.cfg", type: "file" },
	{ name: ".gitignore", type: "file" },
	{ name: "README.md", type: "file" },
];

const basicExplanations: ExplanationItem[] = [
	{
		title: "scenes/",
		icon: "folder",
		description:
			"Contains all Godot scene files (.tscn) that represent game objects, levels, and UI elements.",
	},
	{
		title: "scenes/Main.tscn",
		icon: "file",
		description:
			"The main scene file that serves as the entry point for the game.",
	},
	{
		title: "scenes/Player.tscn",
		icon: "file",
		description:
			"Player character scene containing the player node structure and components.",
	},
	{
		title: "scripts/",
		icon: "folder",
		description:
			"Contains all GDScript files (.gd) that define game behavior and logic.",
	},
	{
		title: "scripts/Player.gd",
		icon: "file",
		description:
			"GDScript file controlling player movement, input handling, and player-specific behavior.",
	},
	{
		title: "scripts/GameManager.gd",
		icon: "file",
		description:
			"Central manager script that controls game state, flow, and overall game logic.",
	},
	{
		title: "assets/",
		icon: "folder",
		description:
			"Contains all game assets including sprites, audio files, and other resources.",
	},
	{
		title: "project.godot",
		icon: "file",
		description:
			"Godot project configuration file containing project settings and metadata.",
	},
];

const intermediateExplanations: ExplanationItem[] = [
	{
		title: "scenes/levels/",
		icon: "folder",
		description:
			"Contains scene files for different game levels and environments.",
	},
	{
		title: "scenes/characters/",
		icon: "folder",
		description:
			"Character scene files including player, enemies, and NPCs.",
	},
	{
		title: "scenes/ui/",
		icon: "folder",
		description:
			"User interface scene files including menus, HUD, and UI components.",
	},
	{
		title: "scripts/managers/",
		icon: "folder",
		description:
			"Manager scripts that handle different aspects of the game like scene transitions and game state.",
	},
	{
		title: "export_presets.cfg",
		icon: "file",
		description:
			"Export configuration file defining build settings for different platforms.",
	},
];

const advancedExplanations: ExplanationItem[] = [
	{
		title: "scenes/environment/",
		icon: "folder",
		description:
			"Environmental scene files including platforms, obstacles, and interactive objects.",
	},
	{
		title: "scenes/effects/",
		icon: "folder",
		description:
			"Visual and particle effect scenes for explosions, magic effects, and other visual elements.",
	},
	{
		title: "scripts/systems/",
		icon: "folder",
		description:
			"Game system scripts including inventory, dialogue, and other complex game mechanics.",
	},
	{
		title: "scripts/utils/",
		icon: "folder",
		description:
			"Utility scripts including constants, helper functions, and common utilities.",
	},
	{
		title: "assets/shaders/",
		icon: "folder",
		description:
			"Custom shader files for specialized visual effects and rendering.",
	},
	{
		title: "addons/",
		icon: "folder",
		description:
			"Custom plugins and addons that extend Godot's functionality.",
	},
	{
		title: "data/",
		icon: "folder",
		description:
			"Game data files including level configurations, item definitions, and other data assets.",
	},
];

function ExplanationSection({ title, icon, description }: ExplanationItem) {
	return (
		<div>
			<h3 className="mb-2 text-2xl text-neutral-950 dark:text-neutral-50">
				<Badge>
					{icon === "folder" ? (
						<Folder size={16} className="mr-1" />
					) : (
						<FileText size={16} className="mr-1" />
					)}
					{title}
				</Badge>
			</h3>
			<p>{description}</p>
		</div>
	);
}

const BREADCRUMB_ITEMS = [
	{ label: "Home", href: "/" },
	{ label: "Godot", href: "/godot" },
] as const;

export default function GodotStructurePage() {
	const renderExplanations = (explanations: ExplanationItem[]) => (
		<>
			{explanations.map((item, index) => (
				<ExplanationSection key={index} {...item} />
			))}
		</>
	);

	return (
		<>
			<StructureTemplate
				title="Godot Project Structure"
				description="A scalable and maintainable folder structure for Godot game development"
				breadcrumbItems={[...BREADCRUMB_ITEMS]}
				structures={{
					basic: basicStructure,
					intermediate: intermediateStructure,
					advanced: advancedStructure,
				}}
				explanations={{
					basic: renderExplanations(basicExplanations),
					intermediate: renderExplanations(intermediateExplanations),
					advanced: renderExplanations(advancedExplanations),
				}}
			/>
		</>
	);
}