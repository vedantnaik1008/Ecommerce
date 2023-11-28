import { prisma } from "@/lib/db/prisma";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
  try {
   
  const body = await req.json()

  const orders = body

      for (const order of orders) {
        const {id} = order

        const createOrder = await prisma.user.findUnique({
          where: {
            id
          }
        })
        return NextResponse.json(createOrder)
      }

       
    
  } catch (error) {
    console.log("[ORDER_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};