import React from 'react';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: "Bachelor's Degree in Information Technology",
      institution: 'BlueCrest University College',
      period: '2020 - 2024',
      type: 'University',
      achievements: [
        'Completed comprehensive IT curriculum',
        'Specialized in advanced computer skills',
        'Gained expertise in office technology programs',
        'Developed strong foundation in IT solutions'
      ],
      highlight: 'Valedictorian'
    },
    {
      degree: 'High School Diploma',
      institution: 'St. Matthew Lutheran High School',
      period: '2017 - 2020',
      type: 'High School',
      achievements: [
        'Graduated as Valedictorian',
        'Demonstrated exceptional academic excellence',
        'Developed strong leadership and communication skills',
        'Maintained highest academic standards'
      ],
      highlight: 'Valedictorian'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Education</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Academic excellence from high school valedictorian to IT degree completion
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-300 hidden md:block"></div>

            {educationData.map((edu, index) => (
              <div key={index} className="relative mb-12 md:ml-20">
                {/* Timeline dot */}
                <div className="absolute -left-[4.5rem] top-8 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                
                <div className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <h3 className="text-2xl font-bold text-gray-800 mr-4">
                          {edu.degree}
                        </h3>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {edu.highlight}
                        </span>
                      </div>
                      <div className="text-xl text-blue-600 font-semibold mb-2">
                        {edu.institution}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium mr-3">
                          {edu.type}
                        </span>
                        <span className="font-medium">{edu.period}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-4">Key Achievements:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {edu.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {index === 1 && (
                    <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border-l-4 border-yellow-400">
                      <div className="flex items-center">
                        <div className="text-2xl mr-3">🏆</div>
                        <div>
                          <div className="font-bold text-gray-800">Valedictorian Achievement</div>
                          <div className="text-gray-600 text-sm">Highest academic honors in graduating class</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Educational Philosophy</h3>
            <p className="text-gray-600 leading-relaxed">
              "Education is the foundation for continuous growth and professional excellence."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;