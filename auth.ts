import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  callbacks: {
    async session({ session, user, token }) {
      // Add user ID to the session object
      if (session.user) {
        session.user.id = user?.id || token?.sub;
      }
      return session;
    },
  },
});
