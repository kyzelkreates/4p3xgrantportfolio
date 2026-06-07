// Vercel Serverless Function Stub for TextBee lead notifications.
// SECURITY: Do not expose API keys in frontend code, localStorage, README screenshots, or investor files.
// Required Vercel Environment Variables:
// TEXTBEE_API_KEY, TEXTBEE_DEVICE_ID, TEXTBEE_RECIPIENT

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok:false, error:'Method not allowed' });
  const { TEXTBEE_API_KEY, TEXTBEE_DEVICE_ID, TEXTBEE_RECIPIENT } = process.env;
  if (!TEXTBEE_API_KEY || !TEXTBEE_DEVICE_ID || !TEXTBEE_RECIPIENT) {
    return res.status(503).json({ ok:false, error:'TextBee is not configured in secure environment variables.' });
  }
  const lead = req.body || {};
  const message = `4P3X Verse lead: ${lead.name || 'Unknown'} | ${lead.company || ''} | ${lead.email || ''} | ${lead.phone || ''} | ${lead.interest || ''}`;
  try {
    const response = await fetch(`https://api.textbee.dev/api/v1/gateway/devices/${TEXTBEE_DEVICE_ID}/send-sms`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': TEXTBEE_API_KEY },
      body: JSON.stringify({ recipients: [TEXTBEE_RECIPIENT], message })
    });
    const data = await response.json().catch(() => ({}));
    return res.status(response.ok ? 200 : 502).json({ ok: response.ok, data });
  } catch (error) {
    return res.status(500).json({ ok:false, error:'TextBee request failed.' });
  }
}
