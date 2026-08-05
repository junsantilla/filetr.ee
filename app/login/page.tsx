import { LoginForm } from "@/components/login-form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Page() {
    const session = await auth();

    if (session) {
        redirect("/profile");
    }

    return (
        <div className="flex w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <LoginForm />
            </div>
        </div>
    );
}
