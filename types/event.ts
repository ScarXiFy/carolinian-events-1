import { ObjectId } from "mongodb";

export interface Event {
  _id?: ObjectId;
  title: string;
  description: string;
  location: string;
  imageUrl: string;
  startDateTime: Date;
  endDateTime: Date;
  categoryId: string;
  price: string;
  isFree: boolean;
  url?: string;
  organizerId: string; // Clerk user ID
  createdAt: Date;
}

export interface Category {
  _id?: ObjectId;
  name: string;
  slug: string;
}