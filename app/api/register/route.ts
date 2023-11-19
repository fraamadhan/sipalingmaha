import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function POST(request: any) {
    const {email, password} = await request.json()

    try{
        const user = await prisma.user.create({
            data: {
                email,
                password
            },
        });
    
        return NextResponse.json({status: 200, message: "User created successfully", user});
    }catch(err) {
        return NextResponse.json({status: 500, message: "Failed to load data"});
    }

};