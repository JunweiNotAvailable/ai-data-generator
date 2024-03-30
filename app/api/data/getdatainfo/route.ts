import { getDataInfo } from "@/app/utils/postgre";
import { NextResponse } from "next/server";

export async function GET (request: Request) {
  try {
    const id = parseInt(new URL(request.url).searchParams.get('id') || '');
    if (id) {
      const result = await getDataInfo(id);
      return new Response(JSON.stringify(result))
    }
    return new NextResponse(JSON.stringify({ error: "Failed getting data" }))
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: 'Failed getting data' }))
  }
}