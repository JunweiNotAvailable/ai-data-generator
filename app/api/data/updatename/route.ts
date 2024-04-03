import { updateDataName } from "@/app/utils/postgre";
import { NextResponse } from "next/server";

export async function POST (request: Request) {
  try {
    const body = await request.json();
    const { id, name } = body;
    if (id && name) {
      await updateDataName(id, name);
      return new Response(JSON.stringify({ message: "Data updated successfully" }));
    }
    return new NextResponse(JSON.stringify({ error: "Failed updating data" }))
  } catch (error) {
    console.log(error)
    return new NextResponse(JSON.stringify({ error: 'Failed updating data' }))
  }
}