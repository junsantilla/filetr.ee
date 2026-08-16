import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [
        GitHub({
            clientId: process.env.AUTH_GITHUB_ID!,
            clientSecret: process.env.AUTH_GITHUB_SECRET!,
            authorization: {
                params: {
                    scope: "read:user user:email public_repo",
                },
            },
        }),
    ],

    callbacks: {
        async signIn({ user, profile, account }) {
            await connectDB();

            const githubId = String(profile?.id);

            await User.findOneAndUpdate(
                { githubId },
                {
                    githubId,
                    name: user.name,
                    email: user.email,
                    image: user.image,
                    ...(account?.access_token
                        ? { githubAccessToken: account.access_token }
                        : {}),
                },
                { upsert: true, new: true, setDefaultsOnInsert: true },
            );

            return true;
        },

        async jwt({ token, account }) {
            // Runs when user logs in
            if (account?.access_token) {
                token.accessToken = account.access_token;
            }

            return token;
        },

        async session({ session, token }) {
            // Make token available in client/server session
            session.accessToken =
                typeof token.accessToken === "string"
                    ? token.accessToken
                    : undefined;

            return session;
        },
    },
});
