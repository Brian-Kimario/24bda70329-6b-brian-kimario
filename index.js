import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';

const app = express();

// Middleware
app.use(express.json());

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'JWT Banking API',
    status: 'Running',
    version: '1.0.0'
  });
});

// Routes
app.use('/api/auth', authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ 
    message: 'Server error',
    error: process.env.NODE_ENV === 'production' ? 'Internal Server Error' : err.message 
  });
});

// Database connection (for Vercel)
connectDB().catch(err => {
  console.error('Database connection failed:', err);
  process.exit(1);
});

const PORT = process.env.PORT || 3000;

// Only listen if not in serverless environment
if (process.env.VERCEL === undefined) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;