import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";
import { Product } from "@/hooks/useFetch";

export const POST = async (request: NextRequest) => {
  // @ts-ignore
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  try {
    const reqBody = await request.json();
    const {items} = await reqBody

    const extractingItems = items.map((item: Product) => {
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: item.title,
            description: item.description,
            images: [item.image],
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      };
    })

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: extractingItems,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/checkout`
    });

    return NextResponse.json({
      message: "Connection is Active!",
      success: true,
      id: session.id,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};