import mongoose from 'mongoose';

let isConnected = false;

export async function connectDB() {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    throw new Error('MONGO_URI is not set in environment');
  }

  // ✅ Prevent multiple connections (important for Vercel)
  if (isConnected) {
    return;
  }

  try {
    const db = await mongoose.connect(uri);

    isConnected = db.connections[0].readyState === 1;

    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    throw err;
  }
}