import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Terms = () => {
  const brandName = process.env.NEXT_PUBLIC_BRAND_NAME || 'Brand';

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Head>
        <title>Terms of Service</title>
        <meta 
          name="description" 
          content="Terms of Service"
        />
      </Head>
      
      <Navbar />

      <main className="flex-grow pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <div className="prose max-w-none">
            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing and using {brandName}'s website and services, you agree to be bound by these 
                Terms of Service and all applicable laws and regulations.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily access the materials on {brandName}'s website for 
                personal, non-commercial transitory viewing only.
              </p>
            </section>

            {/* Add more sections as needed */}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
