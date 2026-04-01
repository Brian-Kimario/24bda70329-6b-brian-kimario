import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import authRoutes from './routes/auth.routes.js';
import { loggerMiddleware } from './middleware/logger.middleware.js';
import { errorMiddleware } from './middleware/error.middleware.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(loggerMiddleware);

// Routes
app.use('/users', authRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'API is running' });
});

// Error handler
app.use(errorMiddleware);

// IMPORTANT: connect DB for every invocation safely
export default async function handler(req, res) {
  await connectDB();
  return app(req, res);
}