import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: any) {
    const {title, description} = await request.json();

    try {
        const topic = await prisma.topic.create({
            data: {
                topicTitle: title,
                topicDescription: description,
            },
        })
        console.log(topic);
        
        const responseData = { status: 201, message: "Topics created successfully", topic}
        return NextResponse.json(responseData)
    } catch(err) {

        const errorResponseData = { status: 500, message: "Failed to load data" };

        return NextResponse.json(errorResponseData)
    }
}

export async function GET() {

    try {
        const topics = await prisma.topic.findMany()
        const responseData = {status: 200, message: "Topics fetched successfully euy", topics}
        return NextResponse.json(responseData)
    } catch(err) {
        const errorResponseData = {status: 500, message: "Failed to load data"};
        return NextResponse.json(errorResponseData)
    }
}

export async function DELETE(request: any) {
    const id = request.nextUrl.searchParams.get("id");

    try {
        await prisma.topic.delete({
            where: {
                id: id
            }
        })
        const responseData = {status: 200, message: "Topics deleted successfully euy"}
        return NextResponse.json(responseData)
    } catch(err) {
        const errorResponseData = {status: 500, message: "Failed to delete data"};
        return NextResponse.json(errorResponseData)
    }
}