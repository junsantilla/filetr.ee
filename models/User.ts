import mongoose, { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
    {
        githubId: {
            type: String,
            unique: true,
            required: true,
        },
        name: String,
        email: String,
        image: String,
    },
    {
        timestamps: true,
    },
);

export default models.User || model("User", UserSchema);
