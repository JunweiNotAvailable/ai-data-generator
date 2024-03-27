import NextAuth from 'next-auth/next';
import GithubProvider from 'next-auth/providers/github';

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.clientId as string,
      clientSecret: process.env.clientSecret as string,
      authorization: { params: { scope: 'read:user user:email' } },
    }),
  ],
});

export { handler as GET, handler as POST };