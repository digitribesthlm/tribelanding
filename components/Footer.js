import React from 'react';

// Chat configuration
const CHAT_CONFIG = {
  enabled: true, // Set to true to enable chat, false to disable
  // The webhook URL is encoded with base64
  encodedUrl: 'aHR0cHM6Ly9uOG4uZGlnaXRyaWJlLnNlL3dlYmhvb2svMmRkY2IzMDctNTlkZS00Y2JjLWExNTUtNGEwMWY0ODhhNzY3L2NoYXQ='
};

const Footer = () => {
  const brandName = process.env.NEXT_PUBLIC_BRAND_NAME || 'Brand';

  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-8">
          <div className="text-center">
            <span className="text-xl font-bold text-blue-600">{brandName}</span>
            <p className="text-gray-600 text-sm mt-2">
              Your partner for digital growth across Europe.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8">
            <a href="/privacy" className="text-gray-600 hover:text-blue-600 text-sm">
              Privacy Policy
            </a>
            <span className="text-gray-300">|</span>
            <a href="/terms" className="text-gray-600 hover:text-blue-600 text-sm">
              Terms of Service
            </a>
            <span className="text-gray-300">|</span>
            <a href="/cookies" className="text-gray-600 hover:text-blue-600 text-sm">
              Cookie Policy
            </a>
          </div>

          <div className="text-center text-gray-600 text-sm pt-8 border-t border-gray-200 w-full">
            © {new Date().getFullYear()} {brandName}. All rights reserved.
          </div>
        </div>
      </div>
      {CHAT_CONFIG.enabled && (
        <script type="module" dangerouslySetInnerHTML={{
          __html: `
            import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
            
            // Decode the URL at runtime when the script actually executes
            const decodedUrl = atob('${CHAT_CONFIG.encodedUrl}');
            
            createChat({
              webhookUrl: decodedUrl,
              initialMessages: [
                'Hi there! 👋 / Hej där! 👋',
                'My name is Samuel. I speak both English and Swedish. How can I assist you today? / Jag heter Samuel. Jag pratar både engelska och svenska. Hur kan jag hjälpa dig idag?'
              ],
              i18n: {
                en: {
                  title: 'Chat with Samuel (English/Swedish)'
                },
                sv: {
                  title: 'Chatta med Samuel (Engelska/Svenska)'
                }
              },
              language: 'auto' // This will attempt to detect the user's language
            });
          `
        }} />
      )}
    </footer>
  );
};

export default Footer;
