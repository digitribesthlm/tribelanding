import React, { useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import ContactForm from './ContactForm';

const Navbar = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const brandName = process.env.NEXT_PUBLIC_BRAND_NAME || 'Brand';
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const handleContact = () => {
    setIsContactFormOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactFormOpen(false);
  };

  return (
    <>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`}
        strategy="lazyOnload"
      />
      
      <nav className="border-b fixed w-full bg-white z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-blue-600 hover:text-blue-800 transition-colors">
                {brandName}
              </Link>
            </div>
            <div>
              <button 
                onClick={handleContact}
                className="text-gray-600 hover:text-blue-600 font-medium"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </nav>

      <ContactForm 
        isOpen={isContactFormOpen}
        onClose={handleCloseContact}
      />
    </>
  );
};

export default Navbar;
