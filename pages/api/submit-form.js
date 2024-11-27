export default async function handler(req, res) {
  // Extensive logging
  console.log('Received request method:', req.method);
  console.log('Request headers:', req.headers);
  console.log('Request body:', JSON.stringify(req.body, null, 2));

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
    console.error('Method not allowed:', req.method);
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL;
    console.log('Webhook URL:', webhookUrl);

    if (!webhookUrl) {
      throw new Error('Webhook URL is not configured');
    }

    const payload = {
      data: {
        Name: req.body.name || "Default Name",
        Email: req.body.email || "default@example.com",
        Message: req.body.message || "Default message",
        "Submission Date": new Date().toISOString()
      }
    };

    console.log('Prepared payload:', JSON.stringify(payload, null, 2));

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    console.log('Webhook response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error response:', errorText);
      throw new Error(`HTTP error! status: ${response.status}, details: ${errorText}`);
    }

    res.status(200).json({ success: true, message: 'Webhook triggered successfully' });
  } catch (error) {
    console.error('Full webhook error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error triggering webhook',
      error: error.message 
    });
  }
}
