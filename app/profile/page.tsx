import { auth } from "@/auth";
import { redirect } from "next/navigation";
import LogoutButton from "@/components/LogoutButton";
import Image from "next/image";

export default async function Profile() {
    const session = await auth();

    if (!session) {
        redirect("/");
    }

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

                <div className="border-t dark:border-neutral-800 p-6">
                    <h2 className="font-semibold">Account Information</h2>
                    <div className="mt-3 space-y-2">
                        <p>Provider: GitHub</p>
                        <p>Status: Active</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
