import React, { useState, useEffect } from 'react';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Technical Skills',
      icon: 'https://d64gsuwffb70l.cloudfront.net/68d405a1fc64bf2d785eb19f_1758725590775_021e16e0.webp',
      skills: [
        { name: 'Office Technology', level: 95 },
        { name: 'IT Support', level: 90 },
        { name: 'Data Management', level: 85 },
        { name: 'System Administration', level: 80 }
      ]
    },
    {
      title: 'Leadership Skills',
      icon: 'https://d64gsuwffb70l.cloudfront.net/68d405a1fc64bf2d785eb19f_1758725592536_5f48032b.webp',
      skills: [
        { name: 'Team Leadership', level: 95 },
        { name: 'Project Management', level: 90 },
        { name: 'Strategic Planning', level: 85 },
        { name: 'Decision Making', level: 88 }
      ]
    },
    {
      title: 'Communication',
      icon: 'https://d64gsuwffb70l.cloudfront.net/68d405a1fc64bf2d785eb19f_1758725594294_944c93ce.webp',
      skills: [
        { name: 'Written Communication', level: 92 },
        { name: 'Presentation Skills', level: 88 },
        { name: 'Client Relations', level: 90 },
        { name: 'Cross-team Collaboration', level: 95 }
      ]
    },
    {
      title: 'Personal Qualities',
      icon: 'https://d64gsuwffb70l.cloudfront.net/68d405a1fc64bf2d785eb19f_1758725596061_41e667a8.webp',
      skills: [
        { name: 'Problem Solving', level: 93 },
        { name: 'Adaptability', level: 90 },
        { name: 'Time Management', level: 88 },
        { name: 'Continuous Learning', level: 95 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div id="skills-section" className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive skill set spanning technical expertise, leadership capabilities, and strong communication
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 rounded-lg overflow-hidden mr-4 shadow-md">
                  <img 
                    src={category.icon} 
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-blue-600 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${categoryIndex * 200 + skillIndex * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Core Competencies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Team Collaboration', 'Creative Problem Solving', 'Continuous Learning', 'Results-Driven', 'Adaptable Leadership'].map((competency, index) => (
                <span 
                  key={index}
                  className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full font-medium"
                >
                  {competency}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;