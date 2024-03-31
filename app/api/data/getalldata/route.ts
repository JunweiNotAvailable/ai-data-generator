import { getAllData } from "@/app/utils/postgre";
import { NextResponse } from "next/server";

export async function GET (request: Request) {
  try {
    const userEmail = new URL(request.url).searchParams.get('userEmail');
    if (userEmail) {
      console.log(userEmail);
      const result = await getAllData(userEmail);
      console.log(result);
      return new NextResponse(JSON.stringify(result))
    } else {
      return new NextResponse(JSON.stringify({ error: "Failed getting params" }))
    }
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: 'Failed getting data' }))
  }
}