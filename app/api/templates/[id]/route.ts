import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { connectDB } from "@/lib/mongodb";
import Template from "@/models/Template";

export async function DELETE(
    req: Request,
    { params }: { params: Promise<{ id: string }> },
) {
    const session = await auth();

    if (!session?.user?.email) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const { id } = await params;

        await connectDB();

        // Scope the delete to the signed-in user so one account cannot remove
        // another account's template by guessing its id.
        const deleted = await Template.findOneAndDelete({
            _id: id,
            userEmail: session.user.email,
        });

        if (!deleted) {
            return NextResponse.json(
                { error: "Template not found" },
                { status: 404 },
            );
        }

        return NextResponse.json({
            success: true,
        });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to delete template" },
            { status: 500 },
        );
    }
}
