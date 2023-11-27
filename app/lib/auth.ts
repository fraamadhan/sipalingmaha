import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/app/lib/db";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: '/'
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
          name: "Credentials",
          credentials: {
            email: { label: "Email", type: "email", placeholder: "jsmith@gmail.com" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials) {
            
            if (!credentials?.email || !credentials.password) {
                return null;
            }

            const existingUser = await prisma.user.findUnique({
                where: {email: credentials.email}
            });

            if (!existingUser) {
                return null
            }

            const passwordMatch = await compare(credentials.password, existingUser.password);
            
            if (!passwordMatch) {
                return null
            }

            return {
                id: existingUser.id,
                email: existingUser.email,
                role: existingUser.role,
            }
          }
        })
    ],
    callbacks: {
        async session({session, user, token}) {
            
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                    email: token.email,
                    role: token.role,
                }
            }
        },
        async jwt({token, user }) {
            if (user) {
                return {
                    ...token,
                    id: user.id,
                    email: user.email,
                    role: user.role,
                }
            }
            return token
        }
    }
}