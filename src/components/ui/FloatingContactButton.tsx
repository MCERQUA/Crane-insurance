import React, { useState } from 'react';
import { Phone, X, Send } from 'lucide-react';

const FloatingContactButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    // Netlify handles the form submission automatically
    setIsOpen(false);
  };

  return (
    <>
      {/* Contact Modal */}
      <div className={`
        fixed inset-0 z-40 flex items-center justify-center p-4
        transition-all duration-300
        ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        
        {/* Modal Content */}
        <div className={`
          relative z-50 w-full max-w-lg
          transform transition-all duration-300
          ${isOpen ? 'scale-100' : 'scale-95'}
        `}>
          <div className="bg-dark-steel/80 backdrop-blur-md rounded-3xl p-8 shadow-elegant border border-construction-yellow/30 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-construction-yellow/10 transition-colors"
            >
              <X className="w-5 h-5 !text-construction-yellow" />
            </button>
            
            <h3 className="text-2xl font-bold !text-construction-yellow mb-6">Get in Touch</h3>
            
            {!showForm ? (
              <div className="space-y-4">
                <a
                  href="tel:844-967-5247"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-dark-steel/40 hover:bg-construction-yellow/10 transition-colors group border border-construction-yellow/20"
                >
                  <div className="p-3 rounded-full bg-construction-yellow/10 group-hover:bg-construction-yellow/20 transition-colors">
                    <Phone className="w-6 h-6 !text-construction-yellow" />
                  </div>
                  <div>
                    <p className="font-bold !text-construction-yellow">Call Us</p>
                    <p className="text-sm text-aluminum/80">844-967-5247</p>
                  </div>
                </a>
                
                <button
                  onClick={() => setShowForm(true)}
                  className="w-full p-4 rounded-2xl bg-construction-yellow hover:bg-construction-yellow/90 !text-dark-steel font-bold transition-all duration-300 transform hover:-translate-y-0.5 shadow-soft hover:shadow-medium border border-construction-yellow flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Quick Contact Form
                </button>

                <button
                  onClick={() => {
                    setIsOpen(false);
                    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full p-4 rounded-2xl bg-dark-steel/40 hover:bg-construction-yellow/10 !text-construction-yellow font-bold transition-all duration-300 border border-construction-yellow/20"
                >
                  Full Quote Form
                </button>
              </div>
            ) : (
              <form 
                name="quick-contact" 
                method="POST" 
                data-netlify="true"
                netlify-honeypot="bot-field"
                data-netlify-recaptcha="true"
                className="space-y-4"
                onSubmit={handleFormSubmit}
              >
                <input type="hidden" name="form-name" value="quick-contact" />
                <p className="hidden">
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>
                
                <div className="space-y-2">
                  <label htmlFor="quick-name" className="block text-sm font-semibold !text-construction-yellow">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="quick-name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-dark-steel/60 border border-construction-yellow/30 !text-aluminum placeholder-aluminum/50 focus:border-construction-yellow focus:outline-none focus:ring-2 focus:ring-construction-yellow/20"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="quick-email" className="block text-sm font-semibold !text-construction-yellow">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="quick-email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-dark-steel/60 border border-construction-yellow/30 !text-aluminum placeholder-aluminum/50 focus:border-construction-yellow focus:outline-none focus:ring-2 focus:ring-construction-yellow/20"
                    placeholder="your@company.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="quick-phone" className="block text-sm font-semibold !text-construction-yellow">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="quick-phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-xl bg-dark-steel/60 border border-construction-yellow/30 !text-aluminum placeholder-aluminum/50 focus:border-construction-yellow focus:outline-none focus:ring-2 focus:ring-construction-yellow/20"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="quick-message" className="block text-sm font-semibold !text-construction-yellow">
                    Message *
                  </label>
                  <textarea
                    id="quick-message"
                    name="message"
                    required
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl bg-dark-steel/60 border border-construction-yellow/30 !text-aluminum placeholder-aluminum/50 focus:border-construction-yellow focus:outline-none focus:ring-2 focus:ring-construction-yellow/20 resize-none"
                    placeholder="How can we help you with crane insurance?"
                  ></textarea>
                </div>

                <div data-netlify-recaptcha="true"></div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="flex-1 px-4 py-3 rounded-xl bg-dark-steel/40 hover:bg-construction-yellow/10 !text-aluminum font-medium transition-all duration-300 border border-construction-yellow/20"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-3 rounded-xl bg-construction-yellow hover:bg-construction-yellow/90 !text-dark-steel font-bold transition-all duration-300 transform hover:-translate-y-0.5 shadow-soft hover:shadow-medium border border-construction-yellow"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Floating Button with Glass Effect */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-30 group"
        aria-label="Contact us"
      >
        <div className="relative">
          {/* Subtle glow effect */}
          <div className="absolute inset-0 rounded-full bg-construction-yellow opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
          
          {/* Button with glass effect */}
          <div className="
            relative w-14 h-14 sm:w-16 sm:h-16 rounded-full
            bg-dark-steel/80 backdrop-blur-md
            border border-construction-yellow/40
            shadow-glass
            transform transition-all duration-300
            group-hover:scale-110 group-hover:bg-dark-steel/90
            flex items-center justify-center
            overflow-hidden
          ">
            {/* Glass light effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-construction-yellow/10 to-transparent" />
            <Phone className="w-6 h-6 sm:w-7 sm:h-7 !text-construction-yellow relative z-10" />
          </div>
          
          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full border-2 border-construction-yellow/40 animate-ping" />
        </div>
      </button>
    </>
  );
};

export default FloatingContactButton;
