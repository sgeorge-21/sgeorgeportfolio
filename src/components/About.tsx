import React from 'react';

const About: React.FC = () => {
  const stats = [
    { number: '4+', label: 'Years Experience' },
    { number: '6+', label: 'Roles Held' },
    { number: '100%', label: 'Dedication' },
    { number: '1st', label: 'Class Honors' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Passionate IT Professional 
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              A highly resourceful, enthusiastic, and innovative IT professional with a passion for coding, web development, and digital transformation. 
              Skilled in designing, developing, and implementing efficient technical solutions that enhance organizational productivity and user experience.
              Currently serving as a Project Coordinator and Technical Program Officer at the Center for Integrated Solutions, where I manage technology-driven 
              projects, oversee software deployments, and support the development of integrated web-based systems.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Proficient in a range of programming languages and web technologies including HTML, CSS, JavaScript, and Python, with hands-on experience in 
              database management, system administration, and front-end/back-end development.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              A strong believer in teamwork and collaboration, I thrive in dynamic environments that encourage creativity, innovation, and continuous learning. 
              With a positive attitude and a results-driven mindset, I’m eager to leverage my technical expertise and passion for development to help organizations 
              build robust digital solutions and achieve their IT goals.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {['Team Leadership', 'Project Management', 'IT Solutions', 'Communication', 'Problem Solving'].map((skill, index) => (
                <span 
                  key={index}
                  className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;