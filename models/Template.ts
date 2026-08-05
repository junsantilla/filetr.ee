import mongoose from "mongoose";

const TemplateSchema = new mongoose.Schema(
    {
        repo: {
            type: String,
            required: true,
        },

        category: {
            type: String,
            required: true,
        },

        userEmail: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

export default mongoose.models.Template ||
    mongoose.model("Template", TemplateSchema);
