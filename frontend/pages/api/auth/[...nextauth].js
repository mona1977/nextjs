//Developer : SURENDRA GUPTA
//Date : 6-Oct-2022


const options = {
  site: process.env.NEXTAUTH_URL
}
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import mongoose from "mongoose";
import { compare } from "bcrypt";
import { User } from "../auth/signup"


export default NextAuth({
	  //configure json web token
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60,
        updateAge: 24 * 60 * 60,
    },
    providers: [
        CredentialsProvider({
            name: "Authorization",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                const res = await fetch("https://www.api.com/api/login", {
                    method: "POST",
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" },
                });
                const data = await res.json();
                if (data.status == "ok") {
                    return data.user;
                }
                return null;
            },
        }),
    ],
    secret: "LlKq6ZtYbr+hTC073mAmAh5/h2HwMfsFo4hrfCx5mLg=",
    callbacks: {
        async jwt({ token, user, account }) {
            // Keep access_token session after signin
            if (account) {
                token.accessToken = account.access_token;
                token.user = user;
            }
            return token;
        },
        async session({ session, token, user }) {
            // send properties to the client
            session.accessToken = token.accessToken;
            session.user = token.user;
            return session;
        },
    },
});
