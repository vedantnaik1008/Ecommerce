import { prisma } from '@/lib/db/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const body = await req.json();
    const {
        order, category, description, image, price, quantity, rating, title, userId
    } = body;
    try {
        const order = await prisma.order.create({
            data: {
              User: {
                connect: { id: userId } 
              },  
              category,
              description,
              image, 
              price,   
              quantity,   
              rating,   
              title  
            },
          });

       

        return NextResponse.json(order);
    } catch (error) {
        console.log('[ORDER_ERROR]', error);
        return new NextResponse('Internal Error', { status: 500 });
    }
}
