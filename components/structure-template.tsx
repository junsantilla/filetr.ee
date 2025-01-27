"use client"

import { useState } from "react"
import { Breadcrumb } from "@/components/breadcrumb"
import { FileTreeComponent, type FileTreeItem } from "@/components/file-tree"

interface StructureTemplateProps {
  title: string
  description: string
  breadcrumbItems: { label: string; href: string }[]
  structures: {
    basic: FileTreeItem[]
    intermediate: FileTreeItem[]
    advanced: FileTreeItem[]
  }
  explanations: {
    basic: React.ReactNode
    intermediate: React.ReactNode
    advanced: React.ReactNode
  }
}

export function StructureTemplate({
  title,
  description,
  breadcrumbItems,
  structures,
  explanations,
}: StructureTemplateProps) {
  const [activeTab, setActiveTab] = useState("intermediate")

  const tabs = [
    { label: "Basic", value: "basic" },
    { label: "Intermediate", value: "intermediate" },
    { label: "Advanced", value: "advanced" },
  ]

  return (
    <>
      <div className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-neutral-950/95 dark:supports-[backdrop-filter]:bg-neutral-950/60">
        <div className="mx-auto max-w-7xl">
          <div className="flex h-14 items-center justify-between overflow-x-auto scrollbar-hide px-4">
            <Breadcrumb items={breadcrumbItems} activeTab={activeTab} onTabChange={setActiveTab} tabs={tabs} />
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-8">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-bold">{title}</h1>
          </div>
          <p className="mt-4 text-lg text-neutral-500 dark:text-neutral-400">{description}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr,2fr]">
          <div className="rounded-lg border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
            <h3 className="mb-4 font-medium">File Structure</h3>
            <div className="pt-1">
              <FileTreeComponent items={structures[activeTab as keyof typeof structures]} />
            </div>
          </div>

          <div className="space-y-6">
            <section>
              <h2 className="mb-4 text-xl font-semibold">Overview</h2>
              <p className="text-neutral-500 text-base dark:text-neutral-400">
                {activeTab === "basic" &&
                  "This basic structure is ideal for small projects or when learning. It keeps things simple and easy to understand."}
                {activeTab === "intermediate" &&
                  "This intermediate structure introduces more organization. It's suitable for medium-sized projects."}
                {activeTab === "advanced" &&
                  "This advanced structure follows a feature-first organization pattern, making it easy to manage large applications. It separates concerns while keeping related files close together, improving developer experience and code maintainability."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">Directory Structure Explanation</h2>
              <div className="space-y-4 text-neutral-500 text-base dark:text-neutral-400">
                {explanations[activeTab as keyof typeof explanations]}
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold">Best Practices</h2>
              <ul className="list-disc space-y-2 text-neutral-500 text-base dark:text-neutral-400">
                <li>Keep components or modules focused and single-responsibility</li>
                <li>Use index files for cleaner imports when applicable</li>
                <li>Maintain consistent naming conventions</li>
                <li>Co-locate related files (tests, types, etc.)</li>
                <li>Keep feature-specific code close to its feature</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}

