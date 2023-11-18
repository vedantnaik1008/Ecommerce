import { NextResponse } from "next/server";
import { Ecommerce } from "@/models/ecommerce";
import dbConnect from "@/lib/mongodb";
export async function POST(req: Request) {
  await dbConnect();
  try {
    
  const body = await req.json()

  const orders = body

      for (const order of orders) {
        const {title, category, description, image, price, rating, quantity} = order

        await Ecommerce.create({ 
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