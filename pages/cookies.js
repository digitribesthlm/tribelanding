import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Cookies = () => {
  const brandName = process.env.NEXT_PUBLIC_BRAND_NAME || 'Brand';

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Head>
        <title>Cookie Policy</title>
        <meta 
          name="description" 
          content="Cookie Policy"
        />
      </Head>
      
      <Navbar />

      <main className="flex-grow pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
          <div className="prose max-w-none">
            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction 22</h2>
              <p>
                {brandName} uses cookies on our website. By using the Service, you consent to the use of cookies.
              </p>
              <p>
                Our Cookie Policy explains what cookies are, how we use cookies, how third-parties we may partner with may use cookies on the Service, your choices regarding cookies and further information about cookies.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">2. What are cookies</h2>
              <p>
                Cookies are small pieces of text, sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">3. How {brandName} uses cookies</h2>
              <p>
                When you use and access the Service, we may place a number of cookies files in your web browser. We use cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>To enable certain functions of the Service</li>
                <li>To provide analytics</li>
                <li>To store your preferences</li>
              </ul>
              <p className="mt-4">
                We use only functional cookies that are required for the operation of our site. We do not use cookies for IP tracking or any other invasive tracking methods.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">4. Your choices regarding cookies</h2>
              <p>
                If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser. Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cookies;
