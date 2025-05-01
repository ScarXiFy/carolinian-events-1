// types/global.d.ts
import { MongoClient } from 'mongodb';

declare global {
  namespace NodeJS {
    interface Global {
      _mongoClientPromise: Promise<MongoClient> | undefined;
    }
  }
}

export {}; // Important for module augmentation