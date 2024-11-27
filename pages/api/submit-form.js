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
    console.log('Request body:', req.body); 
    const { name, email, message } = req.body;
    const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL;

    if (!webhookUrl) {
      throw new Error('Missing webhook URL');
    }

    const payload = {
      data: {
        Name: name,
        Email: email,
        Message: message,
        "Submission Date": new Date().toISOString()
      }
    };

    console.log('Payload:', payload); 

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Webhook error:', errorText);
      console.error('Webhook response status:', response.status);
      console.error('Webhook response headers:', response.headers);
      throw new Error(`HTTP error! status: ${response.status}, details: ${errorText}`);
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
}
