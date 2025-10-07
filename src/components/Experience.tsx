import React, { useState } from 'react';

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      title: 'Technical Program Officer',
      company: 'Center for Integrated Solutions',
      period: 'Present',
      type: 'Current Role',
      description: 'Leading technical programs and coordinating IT solutions for organizational growth and efficiency.',
      responsibilities: [
        'Oversee technical program implementation',
        'Coordinate cross-functional teams',
        'Manage IT infrastructure projects',
        'Ensure quality deliverables and timelines'
      ]
    },
    {
      title: 'Project Coordinator',
      company: 'Center for Integrated Solutions',
      period: 'Present',
      type: 'Current Role',
      description: 'Managing multiple projects simultaneously while ensuring successful delivery and stakeholder satisfaction.',
      responsibilities: [
        'Coordinate project activities and resources',
        'Monitor project progress and milestones',
        'Facilitate communication between teams',
        'Prepare project reports and documentation'
      ]
    },
    {
      title: 'Administrative Assistant',
      company: 'Liberty Equipment and Logistics Services',
      period: '2023 – 2024',
      type: 'Full-time',
      description: 'Provided comprehensive administrative support while managing office technology systems.',
      responsibilities: [
        'Managed office operations and documentation',
        'Coordinated logistics and equipment tracking',
        'Maintained databases and filing systems',
        'Supported management with daily operations'
      ]
    },
    {
      title: 'Marketing Agent and Data Personnel',
      company: "Ida's Medicals",
      period: '2021 – 2023',
      type: 'Full-time',
      description: 'Combined marketing initiatives with data management to drive business growth.',
      responsibilities: [
        'Developed marketing strategies and campaigns',
        'Managed customer data and analytics',
        'Created promotional materials',
        'Analyzed market trends and customer behavior'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A progressive career journey from intern to technical leadership roles
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center mb-8 gap-2">
            {experiences.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                Role {index + 1}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8 lg:p-12">
            <div className="mb-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <h3 className="text-3xl font-bold text-gray-800 mb-2 lg:mb-0">
                  {experiences[activeTab].title}
                </h3>
                <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  {experiences[activeTab].type}
                </span>
              </div>
              <div className="text-xl text-blue-600 font-semibold mb-2">
                {experiences[activeTab].company}
              </div>
              <div className="text-gray-600 font-medium">
                {experiences[activeTab].period}
              </div>
            </div>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {experiences[activeTab].description}
            </p>

            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">Key Responsibilities:</h4>
              <ul className="grid md:grid-cols-2 gap-3">
                {experiences[activeTab].responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;