import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import Template from "@/models/Template";

export async function GET(
    req: Request,
    { params }: { params: Promise<{ username: string }> },
) {
    const { username } = await params;

    await connectDB();

    const user = await User.findOne({ username }).select("email").lean();

    if (!user?.email) {
        return NextResponse.json([]);
    }

    const templates = await Template.find({ userEmail: user.email })
        .select("_id repo category createdAt")
        .sort({ createdAt: -1 })
        .lean();

    return NextResponse.json(templates);
}
