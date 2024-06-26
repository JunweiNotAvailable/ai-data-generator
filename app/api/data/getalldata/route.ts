import { getAllData } from "@/app/utils/postgre";
import { NextResponse } from "next/server";

export async function GET (request: Request) {
  const userEmail = new URL(request.url).searchParams.get('userEmail');
  if (userEmail) {
    const result = await getAllData(userEmail);
    return new NextResponse(JSON.stringify(result))
  } else {
    return new NextResponse(JSON.stringify({ error: "Failed getting params" }))
  }
}