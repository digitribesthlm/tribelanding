import React, { useEffect, useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';

const ContactForm = ({ isOpen, onClose }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isClient, setIsClient] = useState(false);
  const [errorDetails, setErrorDetails] = useState('');

  useEffect(() => {
    setIsClient(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const canSubmit = () => {
    if (typeof window === 'undefined') return true;
    const lastSubmitTime = localStorage.getItem('lastFormSubmit');
    if (!lastSubmitTime) return true;

    const timeSinceLastSubmit = Date.now() - parseInt(lastSubmitTime);
    const thirtySeconds = 30 * 1000;
    return timeSinceLastSubmit > thirtySeconds;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isClient) return;

    if (!canSubmit()) {
      setSubmitStatus('rate-limited');
      return;
    }

    if (e.target.website.value) {
      setSubmitStatus('success');
      return;
    }

    if (!isValidEmail(e.target.email.value)) {
      setSubmitStatus('invalid-email');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorDetails('');

    try {
      const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL;
      
      if (!webhookUrl) {
        throw new Error('Webhook URL is not configured');
      }

      // Simplified payload structure
      const payload = {
        Name: e.target.name.value,
        Email: e.target.email.value,
        Message: e.target.message.value,
        "Submission Date": new Date().toISOString()
      };

      console.log('Sending payload:', payload);

      const response = await fetch(webhookUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      // With no-cors mode, we won't get a meaningful response
      // So we assume success if no error was thrown
      setSubmitStatus('success');
      e.target.reset();
      if (typeof window !== 'undefined') {
        localStorage.setItem('lastFormSubmit', Date.now().toString());
      }
      setTimeout(() => {
        onClose();
        setSubmitStatus(null);
      }, 2000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setErrorDetails('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStatusMessage = () => {
    switch (submitStatus) {
      case 'rate-limited':
        return 'Please wait 30 seconds before submitting another message.';
      case 'invalid-email':
        return 'Please enter a valid email address.';
      case 'error':
        return errorDetails || 'Something went wrong. Please try again.';
      default:
        return '';
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-700 z-50 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      <div 
        className={`fixed right-0 top-0 h-full bg-white shadow-xl transform transition-transform duration-700 ease-in-out z-50 
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          ${isMobile ? 'w-full' : 'w-1/2'}`}
      >
        <div className="p-6 h-full overflow-y-auto">
          <div className="flex justify-between items-center mb-8">
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
              disabled={isSubmitting}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-4 mb-8">
            <h1 className="space-y-0">
              <span className="block text-4xl md:text-5xl font-black tracking-tight text-gray-900">
                LET'S
              </span>
              <span className="block text-4xl md:text-5xl font-black tracking-tight text-blue-500">
                START
              </span>
              <span className="block text-4xl md:text-5xl font-black tracking-tight text-teal-500">
                GROWING
              </span>
            </h1>
            <p className="text-lg text-gray-600">
              Tell us about your goals and we'll get back to you within 24 hours.
            </p>
          </div>

          {submitStatus === 'success' ? (
            <div className="text-center py-8">
              <div className="text-green-500 text-xl font-semibold mb-2">Message sent successfully!</div>
              <p className="text-gray-600">We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="hidden">
                <input
                  type="text"
                  name="website"
                  tabIndex="-1"
                  autoComplete="off"
                />
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  maxLength={50}
                  disabled={isSubmitting}
                  className="w-full px-4 py-2.5 rounded-full border-2 border-gray-300 focus:border-blue-600 focus:ring-0 transition-colors disabled:opacity-50"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-2.5 rounded-full border-2 border-gray-300 focus:border-blue-600 focus:ring-0 transition-colors disabled:opacity-50"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  required
                  minLength={10}
                  maxLength={1000}
                  disabled={isSubmitting}
                  className="w-full px-4 py-2.5 rounded-2xl border-2 border-gray-300 focus:border-blue-600 focus:ring-0 transition-colors disabled:opacity-50"
                  placeholder="Tell us about your project"
                />
              </div>

              {submitStatus && submitStatus !== 'success' && (
                <div className="text-red-500 text-sm">
                  {getStatusMessage()}
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin h-5 w-5 mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </div>

              <div className="text-xs text-gray-500 text-center mt-4">
                This site is protected by spam detection and security measures.
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default ContactForm;
