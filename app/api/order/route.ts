import { prisma } from '@/lib/db/prisma';
import { auth, currentUser } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const body = await req.json();
    const {
        id,
        userId,
        title,
        price,
        description,
        image,
        rating,
        category,
        quantity,
    } = body;
    try {
        const UserExist = await prisma.order.findFirst({
            where: {
                id: id,
                userId,
            },
        });

        if (!UserExist) {
            return new NextResponse('no user found', { status: 401 });
        }

        const createOrder = await prisma.order.create({
            data: {
                id,
                userId,
                title,
                price,
                description,
                image,
                rating,
                category,
                quantity,
            },
        });

        return NextResponse.json(createOrder);
    } catch (error) {
        console.log('[ORDER_ERROR]', error);
        return new NextResponse('Internal Error', { status: 500 });
    }
}
