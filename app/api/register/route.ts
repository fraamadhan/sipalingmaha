import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: any) {
    const { email, password } = await request.json();

    try {
        const user = await prisma.user.create({
            data: {
                email,
                password,
            },
        });

        const responseData = { status: 200, message: "User created successfully", user };
        console.log(NextResponse.json(responseData))
        return NextResponse.json(responseData);
    } catch (err) {
        console.error("Error creating user:", err);

        const errorResponseData = { status: 500, message: "Failed to load data" };

        return NextResponse.json(errorResponseData);
    }
}
