import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function GET() {
    const session = await auth();
    const accessToken = session?.accessToken;

    if (!accessToken) {
        return NextResponse.json(
            { error: "GitHub account is not connected." },
            { status: 401 },
        );
    }

    const response = await fetch(
        "https://api.github.com/user/repos?per_page=30&sort=updated",
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                Accept: "application/vnd.github+json",
                "X-GitHub-Api-Version": "2022-11-28",
            },
            cache: "no-store",
        },
    );

    if (!response.ok) {
        return NextResponse.json(
            { error: "Failed to fetch repositories from GitHub." },
            { status: response.status },
        );
    }

    const repos = await response.json();

    return NextResponse.json(repos);
}
