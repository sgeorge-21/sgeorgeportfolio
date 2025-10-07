import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['IT Professional', 'Project Coordinator', 'Technical Program Officer', 'Team Leader'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url('https://d64gsuwffb70l.cloudfront.net/68d405a1fc64bf2d785eb19f_1758725587214_dc17cab4.webp')` }}
      ></div>
      
      
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center min-h-screen">
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-blue-400">Stevina</span>
          </h1>
          
          <div className="text-2xl lg:text-3xl mb-8 h-12">
            <span className="text-blue-300 font-semibold transition-all duration-500">
              {roles[currentRole]}
            </span>
          </div>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
            A highly resourceful, enthusiastic and creative IT professional seeking to drive innovation 
            and excellence through advanced computer skills and team leadership.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/CV.pdf"
              download
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Download CV
            </a>
            <button 
              onClick={handleContact}
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
        
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative">
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-blue-400 shadow-2xl">
              <img 
                src="\SG.jpg"
                alt="Stevina R.A.N. George"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full animate-pulse opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;