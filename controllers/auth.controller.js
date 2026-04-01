import createError from 'http-errors';
import { StatusCodes } from 'http-status-codes';
import User from '../models/user.model.js';
import { generateToken } from '../utils/jwt.js';

export async function registerUser(req, res, next) {
  try {
    const { fullName, email, password } = req.body;
    const user = await User.create({ fullName, email, password });

    const safe = {
      id: user._id,
      fullName: user.fullName,
      email: user.email,
      createdAt: user.createdAt
    };

    res.status(StatusCodes.CREATED).json({ message: 'User registered successfully', data: safe });
  } catch (err) {
    next(err);
  }
}

export async function loginUser(req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return next(createError(401, 'Invalid email or password'));

    const isValid = await user.comparePassword(password);
    if (!isValid) return next(createError(401, 'Invalid email or password'));

    const token = generateToken(user._id.toString());

    res.json({
      message: 'Login successful',
      data: {
        token,
        id: user._id,
        fullName: user.fullName,
        email: user.email
      }
    });
  } catch (err) {
    next(err);
  }
}

export async function getCurrentUser(req, res, next) {
  try {
    const userId = req.user && req.user.userId;
    if (!userId) return next(createError(401, 'Unauthorized'));

    const user = await User.findById(userId).select('-password');
    if (!user) return next(createError(404, 'User not found'));

    res.json({ message: 'User fetched successfully', data: user });
  } catch (err) {
    next(err);
  }
}
