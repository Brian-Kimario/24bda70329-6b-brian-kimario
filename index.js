import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import authRoutes from './routes/auth.routes.js';
import { loggerMiddleware } from './middleware/logger.middleware.js';
import { errorMiddleware } from './middleware/error.middleware.js';

const PORT = process.env.PORT || 3000;

async function boot() {
  try {
    await connectDB();

    const app = express();

    app.use(cors());
    app.use(express.json());
    app.use(loggerMiddleware);

    app.use('/users', authRoutes);

    app.get('/', (req, res) => {
      res.json({ message: 'API is running' });
    });

    app.use(errorMiddleware);

    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (err) {
    console.error('Failed to boot app:', err);
    process.exit(1);
  }
}

boot();
