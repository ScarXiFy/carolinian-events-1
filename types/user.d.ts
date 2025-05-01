// types/user.d.ts
import { Document } from "mongoose";

declare interface IUser extends Document {
  clerkId: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  photo: string;
  createdAt: Date;
  updatedAt: Date;
}