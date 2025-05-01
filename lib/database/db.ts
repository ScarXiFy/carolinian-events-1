// lib/db.ts
import clientPromise from "./mongodb";
import { Event, Category } from "@/types/event"; // Add this import

export async function getDb() {
  const client = await clientPromise;
  return client.db(process.env.MONGODB_DB);
}

export async function getEventsCollection() {
  const db = await getDb();
  return db.collection<Event>("events"); // Now using imported Event type
}

export async function getCategoriesCollection() {
  const db = await getDb();
  return db.collection<Category>("categories"); // Now using imported Category type
}