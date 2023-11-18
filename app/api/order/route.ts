import { prisma } from "@/lib/db/prisma";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
  try {
  
  const body = await req.json()

  const orders = body

      for (const order of orders) {
        const {title, category, description, image, price, rating, quantity} = order

        await prisma.order.create({ 
          data: {
            title,
            category,
            description,
            image,
            price,
            rating,
            quantity,
          }
        }) 
      }

        return NextResponse.json(orders)
    
  } catch (error) {
    console.log("[ORDER_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};