import React from 'react';
import { ArrowRight, Globe2, Search, Target, BarChart2, Users, Lightbulb } from 'lucide-react';

// src/app/privacy/page.js
const PrivacyPolicy = () => {
    const brandName = process.env.NEXT_PUBLIC_BRAND_NAME || 'Brand';
  
    return (
      <div className="min-h-screen bg-white">
        <main className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="prose prose-lg">
        
            
            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p>
                At {brandName}, we take your privacy seriously. This Privacy Policy explains how we collect,
                use, disclose, and safeguard your information when you visit our website.
              </p>
            </section>
  
            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
              <p>
                We collect information that you provide directly to us when you:
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>Contact us through our website</li>
                <li>Subscribe to our newsletter</li>
                <li>Request a consultation</li>
                <li>Interact with our services</li>
              </ul>
            </section>
  
            {/* Add more sections as needed */}
          </div>
          
          <div className="mt-8">
            <a 
              href="/" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              ← Back to Home
            </a>
          </div>
        </main>
      </div>
    );
  };
  
  export default PrivacyPolicy;