import { createEvent, getEvents } from '@/lib/actions/event.actions';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const eventId = await createEvent(body);
    
    return NextResponse.json({ success: true, eventId });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Failed to create event' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const events = await getEvents();
    return NextResponse.json(events);
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch events' },
      { status: 500 }
    );
  }
}