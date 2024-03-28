import { insertChat } from "@/app/utils/postgre";
import { NextResponse } from "next/server";

export async function POST (request: Request) {
  try {
    const body = await request.json();
    const { name, history, userEmail } = body;
    if (name && history && userEmail) {
      await insertChat(name, history, userEmail);
      return new Response(JSON.stringify({ message: "Chat inserted successfully" }));
    }
    return new NextResponse(JSON.stringify({ error: "'name', 'history' or 'userEmail' not defined" }))
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: 'Failed inserting data' }))
  }
}