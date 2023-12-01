import { prisma } from '@/lib/db/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const body = await req.json();
    const {title, image, description, price, quantity, rating, category, User} = body
    try {
        
        const order = await prisma.order.create({
            data: {
                title,
                image,
                description,
                price,
                quantity,
                rating,
                category,
                User
            }
          });

       

        return NextResponse.json(order);
    } catch (error) {
        console.log('[ORDER_ERROR]', error);
        return new NextResponse('Internal Error', { status: 500 });
    }
}
