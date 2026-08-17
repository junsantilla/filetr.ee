import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Template from "@/models/Template";

export async function DELETE(
    req: Request,
    { params }: { params: Promise<{ id: string }> },
) {
    try {
        const { id } = await params;
        await connectDB();

        await Template.findByIdAndDelete(id);

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
