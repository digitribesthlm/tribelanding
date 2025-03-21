import React from 'react';
import Head from 'next/head';

const ChatPage = () => {
  return (
    <>
      <Head>
        <title>Chat Solutions | DigiTribe</title>
        <meta name="description" content="Discover how chat solutions can transform your customer service and boost engagement." />
      </Head>
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Transform Your Customer Experience with Live Chat
            </h1>
            <p className="text-xl text-gray-600">
              Connect with your customers in real-time and provide exceptional service
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mb-16">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Instant Connection
              </h2>
              <p className="text-gray-600">
                Live chat provides immediate assistance to your customers, reducing wait times and improving satisfaction. Connect with visitors while their interest is at its peak.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Boost Conversions
              </h2>
              <p className="text-gray-600">
                Studies show that websites with live chat see up to 40% increase in conversion rates. Address concerns instantly and guide customers through their journey.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Cost-Effective Support
              </h2>
              <p className="text-gray-600">
                Handle multiple conversations simultaneously, reducing support costs while maintaining high-quality customer service. Save time and resources while improving efficiency.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Customer Insights
              </h2>
              <p className="text-gray-600">
                Gather valuable feedback and understand your customers better through direct conversations. Use these insights to improve your products and services.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-8">
              Try our chat solution below and experience the difference it can make for your business.
            </p>
          </div>
        </div>
      </div>
      <script type="module" dangerouslySetInnerHTML={{
        __html: `
          import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
          
          createChat({
            webhookUrl: 'https://n8n.digitribe.se/webhook/a022f3ba-4210-4592-8002-b97424fa7bbb/chat',
            initialMessages: [
              'Hi there!',
              'My name is Nick. How can I assist you today?'
            ],
            i18n: {
              en: {
                title: 'Hi there!'
              }
            }
          });
        `
      }} />
    </>
  );
};

export default ChatPage;
