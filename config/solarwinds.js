import axios from 'axios';

const SOLARWINDS_URL = 'https://logs.collector.solarwinds.com/receive';

export async function sendToSolarWinds(logEntry) {
  const token = process.env.SOLARWINDS_TOKEN;
  if (!token) return; // optional feature

  try {
    await axios.post(SOLARWINDS_URL, logEntry, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
  } catch (err) {
    // Do not let logging break the app
    console.error('Failed to send logs to SolarWinds:', err.message || err);
  }
}
