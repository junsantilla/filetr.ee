"use client";

import { useSession } from "next-auth/react";

export default function UserProfile() {
    const { data: session } = useSession();

    if (!session) return <p>Not signed in</p>;

    return (
        <div>
            <p>{session.user?.name}</p>
            <p>{session.user?.email}</p>
            <img
                src={session.user?.image ?? ""}
                alt="Avatar"
                width={50}
                height={50}
            />
        </div>
    );
}
