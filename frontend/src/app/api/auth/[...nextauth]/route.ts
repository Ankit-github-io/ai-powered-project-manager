import NextAuth, { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "MOCK_CLIENT_ID",
      clientSecret: process.env.GITHUB_SECRET || "MOCK_CLIENT_SECRET",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "MOCK_CLIENT_ID",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "MOCK_CLIENT_SECRET",
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token }) {
      // Direct property tracking without any loose structural casting
      if (session.user && token.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
