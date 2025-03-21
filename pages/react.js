import React from 'react';
import Head from 'next/head';

const ReactPage = () => {
  // Chat configuration
  const CHAT_CONFIG = {
    enabled: true, // Enable chat by default on this page
    encodedUrl: 'aHR0cHM6Ly9uOG4uZGlnaXRyaWJlLnNlL3dlYmhvb2svMmRkY2IzMDctNTlkZS00Y2JjLWExNTUtNGEwMWY0ODhhNzY3L2NoYXQ='
  };

  return (
    <>
      <Head>
        <title>React Development | DigiTribe</title>
        <meta name="description" content="Expert React development services for modern web applications" />
      </Head>
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              React Development Services
            </h1>
            <p className="text-xl text-gray-600">
              Building modern, scalable web applications with React
            </p>
          </div>

          <div className="prose prose-lg mx-auto">
            <p>
              Our team specializes in creating high-performance React applications 
              that deliver exceptional user experiences. With expertise in the latest 
              React features and best practices, we help businesses build scalable 
              and maintainable web applications.
            </p>
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
                'Hi there!',
                'My name is Nathan. How can I assist you today?'
              ],
              i18n: {
                en: {
                  title: 'Hi there!'
                }
              }
            });
          `
        }} />
      )}
    </>
  );
};

export default ReactPage;
