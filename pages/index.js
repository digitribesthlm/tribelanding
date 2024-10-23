import React from 'react';
import { ArrowRight, Search, BarChart2, Globe2, Trophy, Target, Rocket } from 'lucide-react';

const HeroSection = () => {
  const brandName = process.env.NEXT_PUBLIC_BRAND_NAME || 'Brand';
  const imageName = process.env.NEXT_PUBLIC_IMAGE_NAME || '/placeholder.jpg';

  const seoServices = [
    {
      name: "Technical SEO",
      icon: <Globe2 className="w-8 h-8 text-blue-500" />,
      description: "Optimize your website's infrastructure for better search engine visibility and performance."
    },
    {
      name: "Content Strategy",
      icon: <Search className="w-8 h-8 text-blue-500" />,
      description: "Data-driven content creation that targets high-value keywords and user intent."
    },
    {
      name: "On-Page SEO",
      icon: <Target className="w-8 h-8 text-blue-500" />,
      description: "Optimize your pages' content, meta tags, and structure for maximum search impact."
    },
    {
      name: "Competitor Analysis",
      icon: <Rocket className="w-8 h-8 text-blue-500" />,
      description: "Monitor competitor activities and identify opportunities for strategic action by analyzing their backlink profiles and content strategies."
    },
    
    {
      name: "Performance",
      icon: <BarChart2 className="w-8 h-8 text-blue-500" />,
      description: "Speed optimization and core web vitals improvement for better rankings."
    },
    {
      name: "Local SEO",
      icon: <Trophy className="w-8 h-8 text-blue-500" />,
      description: "Dominate local search results and attract customers in your area."
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation */}
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-blue-600">{brandName}</span>
            </div>
            <div>
              <button className="text-gray-600 hover:text-blue-600 font-medium">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center gap-12 py-16">
            {/* Left Column with Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-blue-100 to-teal-50">
                <img 
                  src={imageName}
                  alt="SEO Services" 
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    e.target.src = '/api/placeholder/800/800';
                  }}
                />
              </div>
            </div>

            {/* Right Column with Text */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="space-y-6">
                <h1 className="space-y-2">
                  <span className="block text-6xl lg:text-7xl font-black tracking-tight text-gray-900">
                    RANK
                  </span>
                  <span className="block text-6xl lg:text-7xl font-black tracking-tight text-blue-500">
                    HIGHER
                  </span>
                  <span className="block text-6xl lg:text-7xl font-black tracking-tight text-teal-500">
                    GROW FASTER
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mt-6">
                  Drive organic growth with data-driven SEO strategies. 
                  Our comprehensive approach combines technical expertise, 
                  content optimization, and proven methodologies to boost 
                  your search rankings.
                </p>
              </div>
              
              <div className="flex gap-4">
                <button className="inline-flex items-center px-6 py-3 text-base font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
                  Get Free Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="inline-flex items-center px-6 py-3 text-base font-bold text-blue-600 border-2 border-blue-600 rounded-full hover:bg-blue-50 transition-colors">
                  Our Process
                </button>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="py-16 border-t border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">100+</div>
                <div className="text-gray-600 mt-2">Websites Optimized</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">92%</div>
                <div className="text-gray-600 mt-2">Ranking Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">10x</div>
                <div className="text-gray-600 mt-2">Traffic Growth</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">24/7</div>
                <div className="text-gray-600 mt-2">Monitoring</div>
              </div>
            </div>
          </div>

          {/* Services Grid Section */}
          <div className="py-16">
            <h2 className="text-4xl font-bold text-center mb-12">Comprehensive SEO Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {seoServices.map((service, index) => (
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

          {/* Process Section */}
          <div className="py-16 bg-gray-50 rounded-3xl px-8">
            <h2 className="text-4xl font-bold text-center mb-12">Our SEO Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-4">1. Audit</div>
                <p className="text-gray-600">Comprehensive analysis of your current SEO performance.</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-4">2. Strategy</div>
                <p className="text-gray-600">Custom SEO roadmap based on data and objectives</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-4">3. Optimize</div>
                <p className="text-gray-600">Implementation of technical and content improvements</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-4">4. Scale</div>
                <p className="text-gray-600">Continuous optimization and growth strategies</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col items-center space-y-8">
            <div className="text-center">
              <span className="text-xl font-bold text-blue-600">{brandName}</span>
              <p className="text-gray-600 text-sm mt-2">
                Elevating your digital presence through strategic SEO.
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8">
              <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">
                Privacy Policy
              </a>
              <span className="text-gray-300">|</span>
              <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">
                Terms of Service
              </a>
              <span className="text-gray-300">|</span>
              <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">
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