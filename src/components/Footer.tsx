import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleEmailClick = () => {
    window.open('mailto:srangeorge@gmail.com');
  };

  const handlePhoneClick = (phone: string) => {
    window.open(`tel:${phone}`);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <button 
              onClick={scrollToTop}
              className="text-2xl font-bold mb-4 hover:text-blue-400 transition-colors duration-300"
            >
              Stevina R.A.N. George
            </button>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              A highly resourceful, enthusiastic and creative IT professional dedicated to 
              driving innovation and excellence through advanced technical skills and team leadership.
            </p>
            <div className="space-y-2">
              <button 
                onClick={handleEmailClick}
                className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <span className="mr-2">📧</span>
                srangeorge@gmail.com
              </button>
              <button 
                onClick={() => handlePhoneClick('+231770459501')}
                className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <span className="mr-2">📱</span>
                +231 7704 59501
              </button>
              <div className="flex items-center text-gray-400">
                <span className="mr-2">📍</span>
                Lower Johnsonville, Liberia
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Professional Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Professional</h3>
            <ul className="space-y-2 text-gray-400">
              <li>IT Professional</li>
              <li>Project Coordinator</li>
              <li>Technical Program Officer</li>
              <li>Team Leader</li>
            </ul>
            <div className="mt-6">
              <button
                onClick={() => scrollToSection('#contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © {currentYear} Stevina R.A.N. George. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">Built with React & Tailwind CSS</span>
              <button 
                onClick={scrollToTop}
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors duration-300"
                title="Back to top"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;