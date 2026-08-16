import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Template from "@/models/Template";

export async function DELETE(
    req: Request,
    { params }: { params: { id: string } },
) {
    try {
        await connectDB();

        await Template.findByIdAndDelete(params.id);

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
