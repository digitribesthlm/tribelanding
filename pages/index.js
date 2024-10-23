// src/app/page.js
import React from 'react';
import Head from 'next/head';
import { ArrowRight, Globe2, Search, Target, BarChart2, Users, Lightbulb } from 'lucide-react';

const HeroSection = () => {
  const brandName = process.env.NEXT_PUBLIC_BRAND_NAME || 'Brand';
  const imageName = process.env.NEXT_PUBLIC_IMAGE_NAME || '/placeholder.jpg';
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@example.com';

  const digitalServices = [
    {
      name: "Performance Marketing",
      icon: <Target className="w-8 h-8 text-blue-500" />,
      description: "Strategic PPC campaigns across Google, Meta, LinkedIn, and more. Drive targeted traffic that converts."
    },
    {
      name: "Search Engine Optimization",
      icon: <Search className="w-8 h-8 text-blue-500" />,
      description: "Dominate search rankings with data-driven SEO strategies tailored to your market and audience."
    },
    {
      name: "Journey Optimization",
      icon: <Users className="w-8 h-8 text-blue-500" />,
      description: "Enhance every touchpoint of your customer journey with advanced analytics and optimization."
    },
    {
      name: "International Growth",
      icon: <Globe2 className="w-8 h-8 text-blue-500" />,
      description: "Expand your reach across 10 European markets with localized digital strategies."
    },
    {
      name: "Data & Analytics",
      icon: <BarChart2 className="w-8 h-8 text-blue-500" />,
      description: "Turn data into insights with comprehensive tracking and performance measurement."
    },
    {
      name: "Strategy & Innovation",
      icon: <Lightbulb className="w-8 h-8 text-blue-500" />,
      description: "Custom digital strategies that align with your business goals and market dynamics."
    }
  ];

  const countries = [
    "Sweden", "Finland", "Denmark", "Norway", "Holland",
    "Germany", "Spain", "France", "Italy", "UK"
  ];

  const handleContact = () => {
    window.location.href = `mailto:${contactEmail}`;
  };

  const scrollToServices = () => {
    document.getElementById('services').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Head>
        <title>{brandName} - Your Digital Growth Partner Across Europe</title>
        <meta 
          name="description" 
          content="Full-service digital growth agency driving results for B2B and B2C companies across 10 European markets through performance marketing, SEO, and customer journey optimization."
        />
      </Head>
      <nav className="border-b fixed w-full bg-white z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-blue-600">{brandName}</span>
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

      <main className="flex-grow pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center gap-12 py-16">
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-blue-100 to-teal-50">
                <img 
                  src={imageName}
                  alt="Digital Growth Partner" 
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    e.target.src = '/api/placeholder/800/800';
                  }}
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-8">
              <div className="space-y-6">
                <h1 className="space-y-2">
                  <span className="block text-6xl lg:text-7xl font-black tracking-tight text-gray-900">
                    GROW
                  </span>
                  <span className="block text-6xl lg:text-7xl font-black tracking-tight text-blue-500">
                    ACROSS
                  </span>
                  <span className="block text-6xl lg:text-7xl font-black tracking-tight text-teal-500">
                    EUROPE
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mt-6">
                  Your full-service digital growth partner across 10 European markets. 
                  We combine performance marketing, SEO, and customer journey optimization 
                  to drive results for B2B and B2C companies.
                </p>
              </div>
              
              <div className="flex gap-4">
                <button 
                  onClick={handleContact}
                  className="inline-flex items-center px-6 py-3 text-base font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
                >
                  Start Growing
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button 
                  onClick={scrollToServices}
                  className="inline-flex items-center px-6 py-3 text-base font-bold text-blue-600 border-2 border-blue-600 rounded-full hover:bg-blue-50 transition-colors"
                >
                  Our Approach
                </button>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="py-16 border-t border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">25+</div>
                <div className="text-gray-600 mt-2">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">10</div>
                <div className="text-gray-600 mt-2">European Markets</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">Stockholm</div>
                <div className="text-gray-600 mt-2">Headquarters</div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div id="services" className="py-16 scroll-mt-20">
            <h2 className="text-4xl font-bold text-center mb-12">Full-Service Digital Growth</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {digitalServices.map((service, index) => (
                <div 
                  key={index} 
                  className="p-8 rounded-xl border hover:shadow-lg transition-all duration-300 bg-white hover:scale-105"
                >
                  <div className="space-y-4">
                    <div className="flex justify-center">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-center text-gray-800">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 text-center">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Countries Section */}
          <div className="py-16 bg-gray-50 rounded-3xl px-8">
            <h2 className="text-4xl font-bold text-center mb-12">Our European Presence</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {countries.map((country, index) => (
                <div key={index} className="text-center p-4">
                  <span className="text-lg font-semibold text-gray-800">{country}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

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
      </footer>
    </div>
  );
};

export default HeroSection;
