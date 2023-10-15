import { combinedData } from "@/constants/api";

import { NextResponse } from "next/server";




export async function GET() {
  try {
    // const { userId } = auth();

    // if (!userId) {
    //   return new NextResponse("Unauthorized", { status: 401 });
    // }

   

    return NextResponse.json(combinedData);
  } catch (error: any) {
    console.log("[FETCH_ERROR]",error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};