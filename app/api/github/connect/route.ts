import { NextResponse } from "next/server";

export async function GET() {
    const githubUrl =
        "https://github.com/login/oauth/authorize" +
        `?client_id=${process.env.GITHUB_CLIENT_ID}` +
        "&scope=repo" +
        `&redirect_uri=${process.env.GITHUB_CONNECT_CALLBACK}`;

    return NextResponse.redirect(githubUrl);
}
