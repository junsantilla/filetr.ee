import ImportTemplateForm from "../../../components/ImportTemplateForm";

export default function ImportTemplatePage({
    searchParams,
}: {
    searchParams: {
        repo?: string;
    };
}) {
    return (
        <main className="mx-auto max-w-2xl p-6">
            <h1 className="text-2xl font-bold">Import Template</h1>

            <p className="text-neutral-500 mt-2">
                Setup your GitHub repository as a FileTree template.
            </p>

            <ImportTemplateForm repo={searchParams.repo || ""} />
        </main>
    );
}
