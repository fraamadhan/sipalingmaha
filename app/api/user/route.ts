import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/db";
import { hash } from "bcrypt";
import * as z from 'zod';

const userSchema = z
    .object({
        email: z.string().min(1, 'Email is required').email('Invalid email'),
        password: z.string().min(1, 'Password is required').min(8, 'Password must be at least 8 characters')
    })

export async function POST(request: any) {
    try {
        const body = await request.json();
        const {email, password} = userSchema.parse(body);

        //check if email already exists
        const existingUserByEmail = await prisma.user.findUnique({
            where: {
                email: email
            }
        });

        if (existingUserByEmail) {
            return NextResponse.json({status: 407, user: null, message: "User with this email already exists"});
        }

        const hashedPassword = await hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                email: email,
                password: hashedPassword
            }
        })

        const {password: newUserPassword, ...rest} = newUser

        return NextResponse.json({status: 201, message: "User created", user: rest})

    } catch (error) {
        console.log(error);
        return NextResponse.json({status: 501, message: "Something went wrong"})
    }
}