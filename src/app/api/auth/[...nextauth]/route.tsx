import { AuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import { userLogin } from '@/services/auth.service';

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Auth',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'text',
                    placeholder: 'your@email.com',
                },
                password: {
                    label: 'Password',
                    type: 'password',
                },
            },
            authorize: async (credentials) => {
                if (!credentials) return null;
                const { email, password } = credentials;
                const user = await userLogin(email, password);
                return user;
            },
        }),
    ],
    pages: {
        signIn: '/signin',
        signOut: '/signout',
    },
    callbacks: {
        session: ({ session, token }) => {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                    role: token.role,
                    avatar: token.avatar,
                    randomKey: token.randomKey,
                },
            };
        },
        jwt: ({ token, user }) => {
            if (user) {
                const u = user as unknown as any;
                return {
                    ...token,
                    id: u.id,
                    role: u.role,
                    randomKey: u.randomKey,
                };
            }
            return token;
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
