import { deleteChat } from "@/app/utils/postgre";
import { NextResponse } from "next/server";

export async function DELETE (request: Request) {
  try {
    const chatName = new URL(request.url).searchParams.get('chatName');
    const userEmail = new URL(request.url).searchParams.get('userEmail');
    if (chatName && userEmail) {
      await deleteChat(chatName, userEmail);
      return new Response(JSON.stringify({ message: 'Chat deleted' }))
    }
    return new NextResponse(JSON.stringify({ error: "Failed deleting chat" }))
  } catch (error) {
    console.log(error)
    return new NextResponse(JSON.stringify({ error: 'Failed deleting chat' }))
  }
}