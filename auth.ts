import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [
        GitHub({
            clientId: process.env.AUTH_GITHUB_ID!,
            clientSecret: process.env.AUTH_GITHUB_SECRET!,
        }),
    ],

    callbacks: {
        async signIn({ user, profile }) {
            await connectDB();

            const githubId = String(profile?.id);

            const existing = await User.findOne({
                githubId,
            });

            if (!existing) {
                await User.create({
                    githubId,
                    name: user.name,
                    email: user.email,
                    image: user.image,
                });
            }

            return true;
        },
    },
});
