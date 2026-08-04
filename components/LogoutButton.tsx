"use client";

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

export default function LogoutButton() {
    return (
        <Button variant="outline" size="sm" onClick={() => signOut()}>
            Logout
        </Button>
    );
}
