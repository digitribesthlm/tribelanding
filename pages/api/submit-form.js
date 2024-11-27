import crypto from 'crypto';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;
    const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL;
    const macSecret = process.env.AIRTABLE_MAC_SECRET; // Add this to .env.local

    if (!webhookUrl || !macSecret) {
      throw new Error('Missing webhook URL or MAC secret');
    }

    const payload = {
      records: [
        {
          fields: {
            Name: name,
            Email: email,
            Message: message,
            "Submission Date": new Date().toISOString()
          }
        }
      ]
    };

    const body = Buffer.from(JSON.stringify(payload), 'utf8');
    const macSecretDecoded = Buffer.from(macSecret, 'base64');
    const hmac = crypto.createHmac('sha256', macSecretDecoded);
    hmac.update(body.toString(), 'ascii');
    const contentHmac = 'hmac-sha256=' + hmac.digest('hex');

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Airtable-Content-HMAC': contentHmac
      },
      body: body
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Airtable error:', errorText);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
}
