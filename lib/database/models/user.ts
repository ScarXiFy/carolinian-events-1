import {Document, Schema, model, models} from 'mongoose';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface IUser extends Document {
  _id: string;
  clerkId: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  photo?: string;
}

const userSchema = new Schema({
  clerkId: { type:String, required: true, unique: true },
  firstName: { type: String, required: true, unique: true },
  lastName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true, minlength: 3, maxlength: 50 },
  password: { type: String, required: true, minlength: 3, maxlength: 50 },
  photo: { type: String },
});

const User = models.User || model('User', userSchema);

export default User;