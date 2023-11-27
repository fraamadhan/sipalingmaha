import { authOptions } from "@/app/lib/auth";
import { PrismaClient } from "@prisma/client"
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: any) {

    const session = await getServerSession(authOptions)

    const {title, description} = await request.json();
    const id = session?.user.id

    if (!!session?.user &&
        session?.user.role !== "REGULAR" &&
        session?.user.role !== "ADMIN") {
            return NextResponse.json({status: 401, message: "Who are you?"})
        }

    try {
        const topic = await prisma.topic.create({
            data: {
                topicTitle: title,
                topicDescription: description,
                user: {
                    connect: {
                        id: id
                    }
                }
            },
        })
        
        const responseData = { status: 201, message: "Topics created successfully", topic}
        return NextResponse.json(responseData)
    } catch(err) {

        const errorResponseData = { status: 500, message: "Failed to load data" };

        return NextResponse.json(errorResponseData)
    }
}

export async function GET() {

    const session = await getServerSession(authOptions)

    if (!!session?.user &&
        session?.user.role !== "REGULAR" &&
        session?.user.role !== "ADMIN") {
            return NextResponse.json({status: 401, message: "Who are you?"})
        }

    try {
        const topics = await prisma.topic.findMany({
            include: {
                user: {
                    select: {
                        email: true,
                    },
                }
            }
        })
        const responseData = {status: 200, message: "Topics fetched successfully euy", topics}
        return NextResponse.json(responseData)
    } catch(err) {
        const errorResponseData = {status: 500, message: "Failed to load data"};
        return NextResponse.json(errorResponseData)
    }
}

export async function DELETE(request: any) {

    const session = await getServerSession(authOptions)
    if (!!session?.user &&
        session?.user.role !== "REGULAR" &&
        session?.user.role !== "ADMIN") {
            return NextResponse.json({status: 401, message: "Who are you?"})
        }

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