import { getEventsCollection } from "@/lib/database/db"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const eventsCollection = await getEventsCollection()
    
    const result = await eventsCollection.insertOne({
      ...body,
      createdAt: new Date(),
    })

    return NextResponse.json(result)
  } catch (error) {
    console.error("Event creation error:", error)
    return NextResponse.json(
      { error: "Failed to create event" },
      { status: 500 }
    )
  }
}