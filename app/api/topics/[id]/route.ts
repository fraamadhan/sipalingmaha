import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function PUT(request: any, { params }: any) {
    const {id} = params;
    console.log(id);
    
    const {newTitle, newDescription} = await request.json()
    
    try {
        await prisma.topic.update({
            where: {
                id: id
            },
            data: {
                topicTitle: newTitle,
                topicDescription: newDescription,
            }
        })
        const responseData = {status: 200, message: "Topic updated"}

        return NextResponse.json(responseData)
    } catch(err) {
        const errorResponseData = {status: 500, message: "Failed to update data"}

        return NextResponse.json(errorResponseData)
    }
}

export async function GET(request: any, {params}: any) {
    const {id} = params;
    try {
        const topic = await prisma.topic.findFirst({
            where: {
                id: id,
            }
        })

        const responseData = {status: 200, message: "data found", topic}

        return NextResponse.json(responseData)
        
    } catch(err) {
        const errorResponseData = {status: 400, message: "Data not found"}

        return NextResponse.json(errorResponseData)
    }
}