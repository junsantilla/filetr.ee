import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);

    const code = searchParams.get("code");

    if (!code) {
        return NextResponse.redirect(new URL("/profile", req.url));
    }

    const tokenResponse = await fetch(
        "https://github.com/login/oauth/access_token",
        {
            method: "POST",
            headers: {
                Accept: "application/json",
            },
            body: JSON.stringify({
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code,
            }),
        },
    );

    const data = await tokenResponse.json();

    console.log(data);

    return NextResponse.redirect(new URL("/profile", req.url));
}
