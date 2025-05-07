import { ObjectId } from 'mongodb';

export interface Event {
  _id?: ObjectId;
  title: string;
  description: string;
  location: string;
  imageUrl: string;
  startDate: Date;
  endDate: Date;
  categoryId: string;
  price: string;
  isFree: boolean;
  url?: string;
  organizerId: string;
  createdAt: Date;
}