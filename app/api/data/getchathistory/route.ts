import { getChatHistory } from "@/app/utils/postgre";
import { NextResponse } from "next/server";

export async function GET (request: Request) {
  try {
    const chatName = new URL(request.url).searchParams.get('chatName');
    const userEmail = new URL(request.url).searchParams.get('userEmail');
    if (chatName && userEmail) {
      const result = await getChatHistory(chatName, userEmail);
      return new Response(JSON.stringify(result))
    }
    return new NextResponse(JSON.stringify({ error: "'chatName' or 'userEmail' not defined" }))
  } catch (error) {
    console.log(error)
    return new NextResponse(JSON.stringify({ error: 'Data not found' }))
  }
}