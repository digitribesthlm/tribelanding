// pages/api/submit-form.js
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL;

    if (!webhookUrl) {
      throw new Error('Webhook URL is not configured');
    }

    const payload = {
      data: {
        Name: req.body.name,
        Email: req.body.email,
        Message: req.body.message,
        "Submission Date": new Date().toISOString()
      }
    };

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    res.status(200).json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error submitting form',
      error: error.message 
    });
  }
}