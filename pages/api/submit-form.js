export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    console.log('Request body:', req.body); // Log the request body
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

    console.log('Payload:', payload); // Log the payload

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
