import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import GithubRepositories from "@/components/GithubRepositories";
import ImportedTemplates from "@/components/ImportedTemplates";

export default async function Profile() {
    const session = await auth();

    if (!session) {
        redirect("/");
    }

    await connectDB();

    const user = await User.findOne({
        email: session.user?.email,
    }).lean();

    return (
        <main className="mx-auto max-w-2xl p-6">
            <div className="border dark:border-neutral-800">
                <div className="flex items-center gap-4 p-6 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-neutral-950/95 dark:supports-[backdrop-filter]:bg-neutral-950/60">
                    {session.user?.image && (
                        <Image
                            src={session.user.image}
                            alt="Profile picture"
                            width={80}
                            height={80}
                            className="rounded-full"
                        />
                    )}

                    <div>
                        <h1 className="text-2xl font-bold">
                            {session.user?.name}
                        </h1>

                        <p className="text-neutral-500">
                            {session.user?.email}
                        </p>
                    </div>
                </div>

                {/* <div className="border-t dark:border-neutral-800 p-6">
                    <h2 className="font-semibold">Account Information</h2>

                    <div className="mt-3 space-y-2">
                        <p>Provider: GitHub</p>
                        <p>Status: Active</p>
                    </div>
                </div> */}
            </div>

            <div className="mt-8">
                <h2 className="text-xl font-bold">Imported Templates</h2>

                <p className="text-neutral-500">
                    Your GitHub repositories added to FileTree.
                </p>

                <div className="mt-4">
                    <ImportedTemplates />
                </div>
            </div>

            <div className="mt-8">
                <h2 className="text-xl font-bold">Repositories</h2>

                <p className="text-neutral-500">
                    Import your GitHub projects to FileTree templates.
                </p>

                <div className="mt-4">
                    <GithubRepositories />
                </div>
            </div>
        </main>
    );
}
