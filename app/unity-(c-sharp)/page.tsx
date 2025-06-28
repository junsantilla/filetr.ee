import type { Metadata } from "next";
import { StructureTemplate } from "@/components/structure-template";
import { Badge } from "@/components/ui/badge";
import { Folder, FileText } from "lucide-react";

export const metadata: Metadata = {
	title: "Unity (C#) Project Structure",
	description:
		"A scalable and maintainable folder structure for Unity game development",
	openGraph: {
		title: "Unity (C#) Project Structure",
		description:
			"Learn how to structure your Unity project for scalability and maintainability.",
		images: [
			{
				url: "/opengraph-image/unity-c-sharp",
				width: 1200,
				height: 630,
				alt: "Unity (C#) Project Structure Overview",
			},
		],
		url: "/unity-(c-sharp)",
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
		name: "Assets",
		type: "folder",
		children: [
			{
				name: "Scripts",
				type: "folder",
				children: [
					{ name: "PlayerController.cs", type: "file" },
					{ name: "GameManager.cs", type: "file" },
				],
			},
			{
				name: "Scenes",
				type: "folder",
				children: [
					{ name: "MainMenu.unity", type: "file" },
					{ name: "GameScene.unity", type: "file" },
				],
			},
			{
				name: "Prefabs",
				type: "folder",
				children: [
					{ name: "Player.prefab", type: "file" },
					{ name: "Enemy.prefab", type: "file" },
				],
			},
			{
				name: "Materials",
				type: "folder",
				children: [
					{ name: "PlayerMaterial.mat", type: "file" },
				],
			},
		],
	},
	{
		name: "ProjectSettings",
		type: "folder",
	},
	{ name: "README.md", type: "file" },
];

const intermediateStructure: FileTreeItem[] = [
	{
		name: "Assets",
		type: "folder",
		children: [
			{
				name: "Scripts",
				type: "folder",
				children: [
					{
						name: "Player",
						type: "folder",
						children: [
							{ name: "PlayerController.cs", type: "file" },
							{ name: "PlayerHealth.cs", type: "file" },
						],
					},
					{
						name: "Enemies",
						type: "folder",
						children: [
							{ name: "EnemyAI.cs", type: "file" },
							{ name: "EnemyHealth.cs", type: "file" },
						],
					},
					{
						name: "Managers",
						type: "folder",
						children: [
							{ name: "GameManager.cs", type: "file" },
							{ name: "UIManager.cs", type: "file" },
						],
					},
				],
			},
			{
				name: "Scenes",
				type: "folder",
				children: [
					{ name: "MainMenu.unity", type: "file" },
					{ name: "Level1.unity", type: "file" },
					{ name: "Level2.unity", type: "file" },
				],
			},
			{
				name: "Prefabs",
				type: "folder",
				children: [
					{ name: "Characters", type: "folder" },
					{ name: "Environment", type: "folder" },
					{ name: "UI", type: "folder" },
				],
			},
			{
				name: "Art",
				type: "folder",
				children: [
					{ name: "Textures", type: "folder" },
					{ name: "Models", type: "folder" },
					{ name: "Materials", type: "folder" },
				],
			},
			{
				name: "Audio",
				type: "folder",
				children: [
					{ name: "Music", type: "folder" },
					{ name: "SFX", type: "folder" },
				],
			},
		],
	},
	{
		name: "ProjectSettings",
		type: "folder",
	},
	{ name: "README.md", type: "file" },
];

const advancedStructure: FileTreeItem[] = [
	{
		name: "Assets",
		type: "folder",
		children: [
			{
				name: "Scripts",
				type: "folder",
				children: [
					{
						name: "Core",
						type: "folder",
						children: [
							{ name: "GameManager.cs", type: "file" },
							{ name: "SceneManager.cs", type: "file" },
							{ name: "SaveSystem.cs", type: "file" },
						],
					},
					{
						name: "Player",
						type: "folder",
						children: [
							{ name: "PlayerController.cs", type: "file" },
							{ name: "PlayerStats.cs", type: "file" },
							{ name: "PlayerInput.cs", type: "file" },
						],
					},
					{
						name: "Enemies",
						type: "folder",
						children: [
							{ name: "BaseEnemy.cs", type: "file" },
							{ name: "EnemyAI.cs", type: "file" },
							{ name: "EnemySpawner.cs", type: "file" },
						],
					},
					{
						name: "UI",
						type: "folder",
						children: [
							{ name: "UIManager.cs", type: "file" },
							{ name: "MenuController.cs", type: "file" },
							{ name: "HUDController.cs", type: "file" },
						],
					},
					{
						name: "Utils",
						type: "folder",
						children: [
							{ name: "ObjectPool.cs", type: "file" },
							{ name: "Extensions.cs", type: "file" },
							{ name: "Constants.cs", type: "file" },
						],
					},
					{
						name: "ScriptableObjects",
						type: "folder",
						children: [
							{ name: "GameSettings.cs", type: "file" },
							{ name: "ItemData.cs", type: "file" },
						],
					},
				],
			},
			{
				name: "Scenes",
				type: "folder",
				children: [
					{ name: "Bootstrap.unity", type: "file" },
					{ name: "MainMenu.unity", type: "file" },
					{ name: "Gameplay.unity", type: "file" },
					{ name: "Settings.unity", type: "file" },
				],
			},
			{
				name: "Prefabs",
				type: "folder",
				children: [
					{ name: "Characters", type: "folder" },
					{ name: "Environment", type: "folder" },
					{ name: "UI", type: "folder" },
					{ name: "Effects", type: "folder" },
				],
			},
			{
				name: "Art",
				type: "folder",
				children: [
					{ name: "Textures", type: "folder" },
					{ name: "Models", type: "folder" },
					{ name: "Materials", type: "folder" },
					{ name: "Animations", type: "folder" },
					{ name: "Shaders", type: "folder" },
				],
			},
			{
				name: "Audio",
				type: "folder",
				children: [
					{ name: "Music", type: "folder" },
					{ name: "SFX", type: "folder" },
					{ name: "AudioMixers", type: "folder" },
				],
			},
			{
				name: "Data",
				type: "folder",
				children: [
					{ name: "ScriptableObjects", type: "folder" },
					{ name: "Localization", type: "folder" },
				],
			},
			{
				name: "Plugins",
				type: "folder",
				children: [
					{ name: "ThirdParty", type: "folder" },
				],
			},
		],
	},
	{
		name: "ProjectSettings",
		type: "folder",
	},
	{
		name: "Packages",
		type: "folder",
	},
	{ name: "README.md", type: "file" },
];

const basicExplanations: ExplanationItem[] = [
	{
		title: "Assets/",
		icon: "folder",
		description:
			"The main folder containing all game assets including scripts, scenes, prefabs, and art.",
	},
	{
		title: "Assets/Scripts/",
		icon: "folder",
		description:
			"Contains all C# scripts that define game behavior and logic.",
	},
	{
		title: "Scripts/PlayerController.cs",
		icon: "file",
		description:
			"Script controlling player movement, input handling, and player-specific behavior.",
	},
	{
		title: "Scripts/GameManager.cs",
		icon: "file",
		description:
			"Central manager script that controls game state, flow, and overall game logic.",
	},
	{
		title: "Assets/Scenes/",
		icon: "folder",
		description:
			"Contains Unity scene files that represent different levels or screens in the game.",
	},
	{
		title: "Assets/Prefabs/",
		icon: "folder",
		description:
			"Contains prefab assets - reusable game objects that can be instantiated multiple times.",
	},
	{
		title: "Assets/Materials/",
		icon: "folder",
		description:
			"Contains material assets that define how surfaces appear in the game.",
	},
	{
		title: "ProjectSettings/",
		icon: "folder",
		description:
			"Unity project configuration files including input settings, physics, and build settings.",
	},
];

const intermediateExplanations: ExplanationItem[] = [
	{
		title: "Scripts/Player/",
		icon: "folder",
		description:
			"Organized folder containing all player-related scripts and components.",
	},
	{
		title: "Scripts/Enemies/",
		icon: "folder",
		description:
			"Contains enemy AI, behavior, and enemy-specific game logic scripts.",
	},
	{
		title: "Scripts/Managers/",
		icon: "folder",
		description:
			"Manager scripts that handle different aspects of the game like UI, audio, and game state.",
	},
	{
		title: "Prefabs/Characters/",
		icon: "folder",
		description:
			"Character prefabs including player characters, NPCs, and enemies.",
	},
	{
		title: "Prefabs/Environment/",
		icon: "folder",
		description:
			"Environmental prefabs like buildings, props, and level elements.",
	},
	{
		title: "Art/",
		icon: "folder",
		description:
			"Organized art assets including textures, 3D models, and materials.",
	},
	{
		title: "Audio/",
		icon: "folder",
		description:
			"Audio assets organized by type including music and sound effects.",
	},
];

const advancedExplanations: ExplanationItem[] = [
	{
		title: "Scripts/Core/",
		icon: "folder",
		description:
			"Core game systems including save/load, scene management, and fundamental game mechanics.",
	},
	{
		title: "Scripts/Utils/",
		icon: "folder",
		description:
			"Utility scripts including object pooling, extension methods, and helper functions.",
	},
	{
		title: "Scripts/ScriptableObjects/",
		icon: "folder",
		description:
			"ScriptableObject definitions for data-driven design and configuration.",
	},
	{
		title: "Scenes/Bootstrap.unity",
		icon: "file",
		description:
			"Initial scene that loads first to initialize core systems before transitioning to main menu.",
	},
	{
		title: "Art/Animations/",
		icon: "folder",
		description:
			"Animation clips, animator controllers, and animation-related assets.",
	},
	{
		title: "Art/Shaders/",
		icon: "folder",
		description:
			"Custom shader files for specialized visual effects and rendering.",
	},
	{
		title: "Data/",
		icon: "folder",
		description:
			"Game data including ScriptableObject instances and localization files.",
	},
	{
		title: "Data/Localization/",
		icon: "folder",
		description:
			"Localization files for supporting multiple languages in the game.",
	},
	{
		title: "Plugins/",
		icon: "folder",
		description:
			"Third-party plugins and external libraries integrated into the project.",
	},
	{
		title: "Packages/",
		icon: "folder",
		description:
			"Unity Package Manager packages and dependencies for the project.",
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
	{ label: "Unity (C#)", href: "/unity-(c-sharp)" },
] as const;

export default function UnityCSharpStructurePage() {
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
				title="Unity (C#) Project Structure"
				description="A scalable and maintainable folder structure for Unity game development"
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