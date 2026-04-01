import { sendToSolarWinds } from '../config/solarwinds.js';

export function loggerMiddleware(req, res, next) {
  const start = Date.now();
  const { method, url } = req;

  res.on('finish', () => {
    const duration = Date.now() - start;
    const logEntry = {
      timestamp: new Date().toISOString(),
      method,
      url,
      status: res.statusCode,
      duration
    };
    // Best-effort send to optional remote collector
    sendToSolarWinds(logEntry).catch(() => {});
    // Also local console
    console.log(`${method} ${url} ${res.statusCode} - ${duration}ms`);
  });

  next();
}
