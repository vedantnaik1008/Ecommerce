import { prisma } from "@/lib/db/prisma";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: Request){
    try {
        const order = await prisma.order.findMany({
            include:{
                User: true,
            }
        });
        return NextResponse.json(order)
    } catch (error) {
        console.log("order fetch failed", error)
    }
}