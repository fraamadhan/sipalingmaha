import { authOptions } from "@/app/lib/auth";
import { prisma } from "@/app/lib/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {

    try {

        let topic
        const session = await getServerSession(authOptions)
        let id = session?.user.id
        
        if (session?.user.role === "REGULAR") {
            topic = await prisma.topic.findMany({
                where: {
                    userId: id
                }
            })
            const responseData = {status: 200, message: "data found", topic}

            return NextResponse.json(responseData)
        }

        topic = await prisma.topic.findMany()

        const responseData = {status: 200, message: "data found", topic}

        return NextResponse.json(responseData)
            
    } catch(err) {
        const errorResponseData = {status: 400, message: "Data not found"}

        return NextResponse.json(errorResponseData)
    }
}