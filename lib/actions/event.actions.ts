import clientPromise from '@/lib/database/mongodb';
import { Event } from '@/lib/models/event.model';

export async function createEvent(event: Omit<Event, '_id'>) {
  const client = await clientPromise;
  const db = client.db();
  
  const result = await db.collection('events').insertOne({
    ...event,
    createdAt: new Date(),
  });

  return result.insertedId;
}

export async function getEvents() {
  const client = await clientPromise;
  const db = client.db();
  
  return db.collection<Event>('events')
    .find()
    .sort({ createdAt: -1 })
    .toArray();
}