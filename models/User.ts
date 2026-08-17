import mongoose, { Schema, model, models } from "mongoose";

export interface IUser {
    githubId: string;
    username?: string;
    name?: string;
    email?: string;
    image?: string;
    githubAccessToken?: string;
}

const UserSchema = new Schema<IUser>(
    {
        githubId: {
            type: String,
            unique: true,
            required: true,
        },

        username: {
            type: String,
            unique: true,
            sparse: true,
        },

        name: String,

        email: String,

        image: String,

        githubAccessToken: String,
    },
    {
        timestamps: true,
    },
);

const User =
    (models.User as mongoose.Model<IUser>) || model<IUser>("User", UserSchema);

export default User;
