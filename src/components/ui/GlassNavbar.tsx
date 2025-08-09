import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const GlassNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Coverage', href: '#services' },
    { label: 'Compliance', href: '#compliance' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Quote', href: '#contact-form' },
  ];

  return (
    <>
      {/* Dark sand background bar - only when not scrolled */}
      {!isScrolled && (
        <div className="fixed top-0 left-0 right-0 h-20 bg-gradient-to-b from-charcoal-black/40 to-transparent z-40" />
      )}
      
      <nav className={`fixed top-0 left-0 right-0 z-50 p-4 transition-all duration-300`}>
        <div className="max-w-7xl mx-auto">
          {/* Glass container with multiple layers for depth */}
          <div className="relative">
            {/* Outer glow effect when scrolled */}
            {isScrolled && (
              <div 
                className="absolute inset-0 rounded-3xl opacity-50"
                style={{
                  background: 'radial-gradient(circle at center, rgba(123, 94, 72, 0.1), transparent 70%)',
                  filter: 'blur(20px)',
                }}
              />
            )}
            
            {/* Main glass container */}
            <div
              className={`relative rounded-3xl px-6 py-4 transition-all duration-700 overflow-hidden ${
                isScrolled ? 'glass-navbar-enhanced' : 'bg-transparent'
              }`}
              style={{
                backgroundColor: isScrolled ? 'rgba(123, 94, 72, 0.15)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(24px) saturate(1.8)' : 'none',
                WebkitBackdropFilter: isScrolled ? 'blur(24px) saturate(1.8)' : 'none',
                border: isScrolled ? '1px solid rgba(255, 255, 255, 0.2)' : 'none',
                boxShadow: isScrolled 
                  ? `0 8px 32px 0 rgba(31, 38, 135, 0.25),
                     inset 0 1px 0 0 rgba(255, 255, 255, 0.2),
                     inset 0 -1px 0 0 rgba(0, 0, 0, 0.1),
                     0 0 0 1px rgba(0, 0, 0, 0.05)` 
                  : 'none',
              }}
            >
              {/* Inner light reflection when scrolled */}
              {isScrolled && (
                <div 
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at 30% 0%, rgba(255, 255, 255, 0.15), transparent 50%)',
                  }}
                />
              )}
              
              <div className="relative z-10 flex items-center justify-between">
                {/* Logo - Adjusted sizes: smaller on desktop, same on mobile */}
                <a href="/" className="flex items-center group">
                  <div className="text-2xl font-bold transition-all duration-300 !text-construction-yellow"
                  style={{
                    textShadow: '0 0 3px rgba(0, 0, 0, 0.8), 0 1px 4px rgba(0, 0, 0, 0.6), 1px 1px 0 rgba(0, 0, 0, 0.8), -1px -1px 0 rgba(0, 0, 0, 0.8), 1px -1px 0 rgba(0, 0, 0, 0.8), -1px 1px 0 rgba(0, 0, 0, 0.8)'
                  }}>
                    <span className="!text-construction-yellow">Crane</span> Insurance
                  </div>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="font-medium transition-all duration-300 !text-construction-yellow hover:brightness-110"
                      style={{
                        textShadow: '0 0 2px rgba(0, 0, 0, 0.8), 0 1px 3px rgba(0, 0, 0, 0.6), 1px 1px 0 rgba(0, 0, 0, 0.8), -1px -1px 0 rgba(0, 0, 0, 0.8), 1px -1px 0 rgba(0, 0, 0, 0.8), -1px 1px 0 rgba(0, 0, 0, 0.8)'
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                  <button className={`
                    px-6 py-2 rounded-full font-medium transition-all duration-300
                    relative overflow-hidden
                    ${
                      isScrolled 
                        ? 'bg-construction-yellow text-charcoal-black hover:bg-amber backdrop-blur-sm shadow-lg' 
                        : 'bg-construction-yellow/20 text-aluminum border border-aluminum/30 hover:bg-construction-yellow/30 backdrop-blur-sm'
                    }
                  `}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                    <span className="relative z-10">Get Quote</span>
                  </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="md:hidden p-2 rounded-xl transition-colors hover:bg-construction-yellow/10"
                  aria-label="Toggle menu"
                  style={{
                    filter: 'drop-shadow(0 0 3px rgba(0, 0, 0, 0.9)) drop-shadow(1px 1px 0 rgba(0, 0, 0, 0.9)) drop-shadow(-1px -1px 0 rgba(0, 0, 0, 0.9)) drop-shadow(1px -1px 0 rgba(0, 0, 0, 0.9)) drop-shadow(-1px 1px 0 rgba(0, 0, 0, 0.9)) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.7))'
                  }}
                >
                  {isOpen ? (
                    <X className="w-6 h-6 !text-construction-yellow" />
                  ) : (
                    <Menu className="w-6 h-6 !text-construction-yellow" />
                  )}
                </button>
              </div>

              {/* Mobile Menu */}
              <div className={`
                md:hidden overflow-hidden transition-all duration-300
                ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}
              `}>
                <div className="space-y-2 py-2">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 rounded-2xl font-medium transition-all duration-300 !text-construction-yellow hover:bg-construction-yellow/10"
                      style={{
                        textShadow: '0 0 2px rgba(0, 0, 0, 0.8), 0 1px 3px rgba(0, 0, 0, 0.6), 1px 1px 0 rgba(0, 0, 0, 0.8), -1px -1px 0 rgba(0, 0, 0, 0.8), 1px -1px 0 rgba(0, 0, 0, 0.8), -1px 1px 0 rgba(0, 0, 0, 0.8)'
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                  <button className="
                    w-full px-4 py-3 rounded-2xl font-medium transition-all duration-300
                    bg-construction-yellow/80 !text-dark-steel hover:bg-construction-yellow/90 
                    backdrop-blur-sm border border-construction-yellow/30 shadow-glass
                    relative overflow-hidden
                  ">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                    <span className="relative z-10">Get Quote</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default GlassNavbar;
