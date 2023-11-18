import { Ecommerce } from "@/models/ecommerce";
import { NextResponse } from "next/server";



export async function DELETE(req: Request,  { params }: { params: { id: string } }) {
  try {
    await Ecommerce.deleteOne({ id: params.id })
    return NextResponse.json({message: "order deleted successfully"})
    
  } catch (error) {
    console.log("[DELETE_ORDER_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};