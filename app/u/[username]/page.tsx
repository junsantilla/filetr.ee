import Image from "next/image";
import { notFound } from "next/navigation";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import ImportedTemplates from "@/components/ImportedTemplates";

interface PublicProfilePageProps {
    params: Promise<{ username: string }>;
}

export default async function PublicProfilePage({
    params,
}: PublicProfilePageProps) {
    const { username } = await params;

    await connectDB();

    const user = await User.findOne({ username })
        .select("username name image")
        .lean();

    if (!user) {
        notFound();
    }

    return (
        <main className="mx-auto max-w-2xl p-6">
            <section className="overflow-hidden border dark:border-neutral-800">
                <div className="flex items-center gap-4 bg-white/95 p-6 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-neutral-950/95 dark:supports-[backdrop-filter]:bg-neutral-950/60">
                    {user.image && (
                        <Image
                            src={user.image}
                            alt="Profile picture"
                            width={80}
                            height={80}
                            className="rounded-full"
                        />
                    )}

                    <div>
                        <h1 className="text-2xl font-bold">
                            {user.name ?? user.username ?? "GitHub user"}
                        </h1>

                        <p className="text-neutral-500">
                            @{user.username ?? "unknown"}
                        </p>
                    </div>
                </div>
            </section>

            <section className="mt-8">
                <h2 className="text-xl font-bold">Imported Templates</h2>

                <p className="mt-1 text-neutral-500">
                    Templates imported by @{user.username}.
                </p>

                <div className="mt-4">
                    <ImportedTemplates username={user.username} readOnly />
                </div>
            </section>
        </main>
    );
}
