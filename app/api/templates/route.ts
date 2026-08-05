import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { connectDB } from "@/lib/mongodb";
import Template from "@/models/Template";

export async function POST(req: Request) {
    const session = await auth();

    if (!session?.user?.email) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();

    await connectDB();

    const template = await Template.create({
        repo: body.repo,

        category: body.category,

        userEmail: session.user.email,
    });

    return NextResponse.json(template);
}

export async function GET() {
    const session = await auth();

    if (!session?.user?.email) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();

    const templates = await Template.find({
        userEmail: session.user.email,
    }).sort({
        createdAt: -1,
    });

    return NextResponse.json(templates);
}
