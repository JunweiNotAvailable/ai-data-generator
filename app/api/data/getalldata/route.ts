import { getAllData } from "@/app/utils/postgre";
import { NextResponse } from "next/server";

export async function GET (request: Request) {
  try {
    const userEmail = new URL(request.url).searchParams.get('userEmail');
    if (userEmail) {
      const result = await getAllData(userEmail);
      return new Response(JSON.stringify(result))
    }
    return new NextResponse(JSON.stringify({ error: "Failed getting data" }))
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: 'Failed getting data' }))
  }
}