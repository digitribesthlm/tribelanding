import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  const brandName = process.env.NEXT_PUBLIC_BRAND_NAME || 'Brand';
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@example.com';

  const handleContact = () => {
    window.location.href = `mailto:${contactEmail}`;
  };

  return (
    <nav className="border-b fixed w-full bg-white z-50">
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
  );
};

export default Navbar;
