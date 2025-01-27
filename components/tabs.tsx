"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface TabsProps {
  tabs: { label: string; value: string }[]
  activeTab: string
  onTabChange: (value: string) => void
}

export function Tabs({ tabs, activeTab, onTabChange }: TabsProps) {
  return (
    <div className="flex space-x-1 rounded-xl bg-neutral-100 p-1 dark:bg-neutral-800">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onTabChange(tab.value)}
          className={cn(
            "w-full rounded-lg px-3 py-1.5 text-sm font-medium transition-all",
            activeTab === tab.value
              ? "bg-white text-neutral-950 shadow-sm dark:bg-neutral-950 dark:text-neutral-50"
              : "text-neutral-500 hover:bg-white/50 hover:text-neutral-950 dark:text-neutral-400 dark:hover:bg-neutral-950/50 dark:hover:text-neutral-50",
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}

