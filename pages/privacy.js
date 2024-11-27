import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Globe2, Search, Target, BarChart2, Users, Lightbulb } from 'lucide-react';

const Privacy = () => {
  const brandName = process.env.NEXT_PUBLIC_BRAND_NAME || 'Brand';

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Head>
        <title>Privacy Policy</title>
        <meta 
          name="description" 
          content="Privacy Policy"
        />
      </Head>
      
      <Navbar />

      <main className="flex-grow pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="prose max-w-none">
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
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
