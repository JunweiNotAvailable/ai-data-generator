import { AuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.clientId as string,
      clientSecret: process.env.clientSecret as string,
      authorization: { params: { scope: 'read:user user:email' } },
    }),
  ],
}