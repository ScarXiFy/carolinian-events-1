import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;



// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDB = async () => {
  if (cached.conn) {
    return cached.conn;
  }
  if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
  }
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: 'evently',
      bufferCommands: false,
    }).then(() => {
      console.log('Connected to MongoDB');
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
