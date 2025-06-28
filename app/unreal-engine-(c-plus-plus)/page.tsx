import type { Metadata } from "next";
import { StructureTemplate } from "@/components/structure-template";
import { Badge } from "@/components/ui/badge";
import { Folder, FileText } from "lucide-react";

export const metadata: Metadata = {
	title: "Unreal Engine (C++) Project Structure",
	description:
		"A scalable and maintainable folder structure for Unreal Engine game development",
	openGraph: {
		title: "Unreal Engine (C++) Project Structure",
		description:
			"Learn how to structure your Unreal Engine project for scalability and maintainability.",
		images: [
			{
				url: "/opengraph-image/unreal-engine-c-plus-plus",
				width: 1200,
				height: 630,
				alt: "Unreal Engine (C++) Project Structure Overview",
			},
		],
		url: "/unreal-engine-(c-plus-plus)",
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
		name: "Source",
		type: "folder",
		children: [
			{
				name: "MyGame",
				type: "folder",
				children: [
					{ name: "MyGame.cpp", type: "file" },
					{ name: "MyGame.h", type: "file" },
					{ name: "MyGameGameModeBase.cpp", type: "file" },
					{ name: "MyGameGameModeBase.h", type: "file" },
					{ name: "MyGamePlayerController.cpp", type: "file" },
					{ name: "MyGamePlayerController.h", type: "file" },
				],
			},
		],
	},
	{
		name: "Content",
		type: "folder",
		children: [
			{ name: "Blueprints", type: "folder" },
			{ name: "Maps", type: "folder" },
			{ name: "Materials", type: "folder" },
		],
	},
	{ name: "MyGame.uproject", type: "file" },
	{ name: "README.md", type: "file" },
];

const intermediateStructure: FileTreeItem[] = [
	{
		name: "Source",
		type: "folder",
		children: [
			{
				name: "MyGame",
				type: "folder",
				children: [
					{ name: "MyGame.cpp", type: "file" },
					{ name: "MyGame.h", type: "file" },
					{
						name: "Player",
						type: "folder",
						children: [
							{ name: "MyGameCharacter.cpp", type: "file" },
							{ name: "MyGameCharacter.h", type: "file" },
							{ name: "MyGamePlayerController.cpp", type: "file" },
							{ name: "MyGamePlayerController.h", type: "file" },
						],
					},
					{
						name: "GameModes",
						type: "folder",
						children: [
							{ name: "MyGameGameModeBase.cpp", type: "file" },
							{ name: "MyGameGameModeBase.h", type: "file" },
						],
					},
					{
						name: "Weapons",
						type: "folder",
						children: [
							{ name: "BaseWeapon.cpp", type: "file" },
							{ name: "BaseWeapon.h", type: "file" },
						],
					},
				],
			},
		],
	},
	{
		name: "Content",
		type: "folder",
		children: [
			{
				name: "Blueprints",
				type: "folder",
				children: [
					{ name: "Player", type: "folder" },
					{ name: "Weapons", type: "folder" },
					{ name: "UI", type: "folder" },
				],
			},
			{
				name: "Maps",
				type: "folder",
				children: [
					{ name: "MainMenu.umap", type: "file" },
					{ name: "Level1.umap", type: "file" },
				],
			},
			{
				name: "Art",
				type: "folder",
				children: [
					{ name: "Materials", type: "folder" },
					{ name: "Textures", type: "folder" },
					{ name: "Meshes", type: "folder" },
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
	{ name: "MyGame.uproject", type: "file" },
	{ name: "README.md", type: "file" },
];

const advancedStructure: FileTreeItem[] = [
	{
		name: "Source",
		type: "folder",
		children: [
			{
				name: "MyGame",
				type: "folder",
				children: [
					{ name: "MyGame.cpp", type: "file" },
					{ name: "MyGame.h", type: "file" },
					{ name: "MyGame.Build.cs", type: "file" },
					{
						name: "Core",
						type: "folder",
						children: [
							{ name: "MyGameGameInstance.cpp", type: "file" },
							{ name: "MyGameGameInstance.h", type: "file" },
							{ name: "MyGameSaveGame.cpp", type: "file" },
							{ name: "MyGameSaveGame.h", type: "file" },
						],
					},
					{
						name: "Player",
						type: "folder",
						children: [
							{ name: "MyGameCharacter.cpp", type: "file" },
							{ name: "MyGameCharacter.h", type: "file" },
							{ name: "MyGamePlayerController.cpp", type: "file" },
							{ name: "MyGamePlayerController.h", type: "file" },
							{ name: "MyGamePlayerState.cpp", type: "file" },
							{ name: "MyGamePlayerState.h", type: "file" },
						],
					},
					{
						name: "GameModes",
						type: "folder",
						children: [
							{ name: "MyGameGameModeBase.cpp", type: "file" },
							{ name: "MyGameGameModeBase.h", type: "file" },
							{ name: "MyGameGameState.cpp", type: "file" },
							{ name: "MyGameGameState.h", type: "file" },
						],
					},
					{
						name: "Weapons",
						type: "folder",
						children: [
							{ name: "BaseWeapon.cpp", type: "file" },
							{ name: "BaseWeapon.h", type: "file" },
							{ name: "WeaponComponent.cpp", type: "file" },
							{ name: "WeaponComponent.h", type: "file" },
						],
					},
					{
						name: "AI",
						type: "folder",
						children: [
							{ name: "BaseAICharacter.cpp", type: "file" },
							{ name: "BaseAICharacter.h", type: "file" },
							{ name: "MyGameAIController.cpp", type: "file" },
							{ name: "MyGameAIController.h", type: "file" },
						],
					},
					{
						name: "UI",
						type: "folder",
						children: [
							{ name: "MyGameHUD.cpp", type: "file" },
							{ name: "MyGameHUD.h", type: "file" },
							{ name: "BaseUserWidget.cpp", type: "file" },
							{ name: "BaseUserWidget.h", type: "file" },
						],
					},
					{
						name: "Utils",
						type: "folder",
						children: [
							{ name: "MyGameUtils.cpp", type: "file" },
							{ name: "MyGameUtils.h", type: "file" },
							{ name: "MyGameTypes.h", type: "file" },
						],
					},
				],
			},
		],
	},
	{
		name: "Content",
		type: "folder",
		children: [
			{
				name: "Blueprints",
				type: "folder",
				children: [
					{ name: "Player", type: "folder" },
					{ name: "Weapons", type: "folder" },
					{ name: "AI", type: "folder" },
					{ name: "UI", type: "folder" },
					{ name: "GameModes", type: "folder" },
				],
			},
			{
				name: "Maps",
				type: "folder",
				children: [
					{ name: "MainMenu.umap", type: "file" },
					{ name: "Level1.umap", type: "file" },
					{ name: "TestLevel.umap", type: "file" },
				],
			},
			{
				name: "Art",
				type: "folder",
				children: [
					{ name: "Materials", type: "folder" },
					{ name: "Textures", type: "folder" },
					{ name: "Meshes", type: "folder" },
					{ name: "Animations", type: "folder" },
					{ name: "VFX", type: "folder" },
				],
			},
			{
				name: "Audio",
				type: "folder",
				children: [
					{ name: "Music", type: "folder" },
					{ name: "SFX", type: "folder" },
					{ name: "Dialogue", type: "folder" },
				],
			},
			{
				name: "Data",
				type: "folder",
				children: [
					{ name: "DataTables", type: "folder" },
					{ name: "Curves", type: "folder" },
				],
			},
		],
	},
	{
		name: "Config",
		type: "folder",
		children: [
			{ name: "DefaultEngine.ini", type: "file" },
			{ name: "DefaultGame.ini", type: "file" },
		],
	},
	{
		name: "Plugins",
		type: "folder",
		children: [
			{ name: "CustomPlugins", type: "folder" },
		],
	},
	{ name: "MyGame.uproject", type: "file" },
	{ name: "README.md", type: "file" },
];

const basicExplanations: ExplanationItem[] = [
	{
		title: "Source/",
		icon: "folder",
		description:
			"Contains all C++ source code files for the Unreal Engine project.",
	},
	{
		title: "Source/MyGame/",
		icon: "folder",
		description:
			"Main game module containing core C++ classes and game logic.",
	},
	{
		title: "MyGame.cpp/.h",
		icon: "file",
		description:
			"Main game module files that define the primary game module and its initialization.",
	},
	{
		title: "MyGameGameModeBase.cpp/.h",
		icon: "file",
		description:
			"Game mode class that defines the rules and flow of the game.",
	},
	{
		title: "MyGamePlayerController.cpp/.h",
		icon: "file",
		description:
			"Player controller class that handles player input and interaction with the game world.",
	},
	{
		title: "Content/",
		icon: "folder",
		description:
			"Contains all game assets including blueprints, maps, materials, and art assets.",
	},
	{
		title: "MyGame.uproject",
		icon: "file",
		description:
			"Unreal Engine project file that defines project settings and module dependencies.",
	},
];

const intermediateExplanations: ExplanationItem[] = [
	{
		title: "Source/MyGame/Player/",
		icon: "folder",
		description:
			"Player-related C++ classes including character, controller, and player-specific logic.",
	},
	{
		title: "Source/MyGame/GameModes/",
		icon: "folder",
		description:
			"Game mode classes that define different gameplay rules and states.",
	},
	{
		title: "Source/MyGame/Weapons/",
		icon: "folder",
		description:
			"Weapon system classes including base weapon functionality and weapon components.",
	},
	{
		title: "Content/Blueprints/",
		icon: "folder",
		description:
			"Blueprint assets organized by functionality for visual scripting and game logic.",
	},
	{
		title: "Content/Art/",
		icon: "folder",
		description:
			"Art assets including materials, textures, and 3D meshes organized by type.",
	},
	{
		title: "Content/Audio/",
		icon: "folder",
		description:
			"Audio assets including music, sound effects, and audio cues.",
	},
];

const advancedExplanations: ExplanationItem[] = [
	{
		title: "MyGame.Build.cs",
		icon: "file",
		description:
			"Build configuration file that defines module dependencies and compilation settings.",
	},
	{
		title: "Source/MyGame/Core/",
		icon: "folder",
		description:
			"Core game systems including game instance, save system, and fundamental game mechanics.",
	},
	{
		title: "Source/MyGame/AI/",
		icon: "folder",
		description:
			"AI system classes including AI characters, controllers, and behavior logic.",
	},
	{
		title: "Source/MyGame/UI/",
		icon: "folder",
		description:
			"User interface classes including HUD, widgets, and UI management systems.",
	},
	{
		title: "Source/MyGame/Utils/",
		icon: "folder",
		description:
			"Utility classes, helper functions, and custom data types used throughout the project.",
	},
	{
		title: "Content/Art/VFX/",
		icon: "folder",
		description:
			"Visual effects assets including particle systems and special effects.",
	},
	{
		title: "Content/Data/",
		icon: "folder",
		description:
			"Data assets including data tables, curves, and configuration data.",
	},
	{
		title: "Config/",
		icon: "folder",
		description:
			"Configuration files for engine settings, game settings, and project configuration.",
	},
	{
		title: "Plugins/",
		icon: "folder",
		description:
			"Custom plugins and third-party plugins integrated into the project.",
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
	{ label: "Unreal Engine (C++)", href: "/unreal-engine-(c-plus-plus)" },
] as const;

export default function UnrealEngineCPlusPlusStructurePage() {
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
				title="Unreal Engine (C++) Project Structure"
				description="A scalable and maintainable folder structure for Unreal Engine game development"
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