import { insertData } from "@/app/utils/postgre";
import { NextResponse } from "next/server";

export async function POST (request: Request) {
  try {
    const body = await request.json();
    const { name, user_email, prompt, sample, filename, generating_step } = body;
    if (name && user_email && prompt && sample && filename && generating_step !== undefined) {
      const id = await insertData(body);
      return new Response(JSON.stringify({ id: id }));
    }
    return new NextResponse(JSON.stringify({ error: "Failed inserting data" }))
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: 'Failed inserting data' }))
  }
}