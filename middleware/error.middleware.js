import { StatusCodes } from 'http-status-codes';

export function errorMiddleware(err, req, res, next) { // eslint-disable-line no-unused-vars
  const status = err.status || err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const message = err.message || 'Internal Server Error';

  const payload = { success: false, message };
  if (process.env.NODE_ENV === 'development' && err.stack) {
    payload.stack = err.stack;
  }

  res.status(status).json(payload);
}
