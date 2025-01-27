import { ChevronRight } from "lucide-react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

interface BreadcrumbItem {
	label: string;
	href?: string;
}

interface BreadcrumbProps {
	items: BreadcrumbItem[];
	activeTab?: string;
	onTabChange?: (value: string) => void;
	tabs?: { label: string; value: string }[];
}

export function Breadcrumb({
	items,
	activeTab,
	onTabChange,
	tabs,
}: BreadcrumbProps) {
	return (
		<nav aria-label="Breadcrumb" className="flex items-center space-x-2">
			<div className="flex items-center space-x-2 text-sm text-neutral-500 flex-grow dark:text-neutral-400">
				{items.map((item, index) => (
					<div key={index} className="flex items-center">
						{index > 0 && <ChevronRight className="h-4 w-4 mx-2" />}
						<Link
							href={item.href || "#"}
							className="hover:text-neutral-950 dark:hover:text-neutral-50"
						>
							{item.label}
						</Link>
					</div>
				))}
			</div>
			{tabs && (
				<div className="flex-shrink-0">
					<Select value={activeTab} onValueChange={onTabChange}>
						<SelectTrigger className="w-full sm:w-[180px]  ml-2">
							<SelectValue placeholder="Select complexity" />
						</SelectTrigger>
						<SelectContent>
							{tabs.map((tab) => (
								<SelectItem key={tab.value} value={tab.value}>
									{tab.label}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
			)}
		</nav>
	);
}
