import { Document, Schema, model, models } from "mongoose";

export interface IEvent extends Document {
  _id: string;
  title: string;
  createdAt: Date;
  date: Date;
  description: string;
  location: string;
  imageUrl?: string;
  startDateTime: Date;
  endDateTime: Date;
  price: number;
  url?: string;
  category?: { _id: string; name: string };
  organizer?: { _id: string; firstName: string, lastName: string };

}

const eventSchema = new Schema({
  title: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  imageUrl: { type: String},
  startDateTime: { type: Date, required: true },
  endDateTime: { type: Date, required: true },
  price: { type: Number, required: true },
  url: {type: String},
  category: { type: Schema.Types.ObjectId, ref: 'Categpry' },
  organizer: { type: Schema.Types.ObjectId, ref: 'User' },
});

const Event = models.Event || model('Event', eventSchema);

export default Event;