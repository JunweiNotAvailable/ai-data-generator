import { insertMessage } from "@/app/utils/postgre";
import { NextResponse } from "next/server";

export async function POST (request: Request) {
  try {
    const body = await request.json();
    const { chatName, messages, userEmail } = body;
    if (chatName && messages && userEmail) {
      await insertMessage(chatName, messages, userEmail);
      return new Response(JSON.stringify({ message: "Messages inserted successfully" }));
    }
    return new NextResponse(JSON.stringify({ error: "Failed inserting data" }))
  } catch (error) {
    console.log(error)
    return new NextResponse(JSON.stringify({ error: 'Failed inserting data' }))
  }
}