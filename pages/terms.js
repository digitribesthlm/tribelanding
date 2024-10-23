// src/app/terms/page.js
const TermsOfService = () => {
    const brandName = process.env.NEXT_PUBLIC_BRAND_NAME || 'Brand';
  
    return (
      <div className="min-h-screen bg-white">
        <main className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <div className="prose prose-lg">
           
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
  
  export default TermsOfService;