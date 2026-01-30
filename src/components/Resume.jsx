import React from 'react';
import SectionReveal from './SectionReveal';

const Resume = () => {
  const education = [
    {
      degree: 'BS Computer Science',
      institution: 'Superior University',
      period: '04/2023 - Present',
      location: 'Lahore/Punjab',
      details: '3.91 CGPA | Semester 7th',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      )
    },
    {
      degree: 'Intermediate',
      institution: 'Punjab Group Of Colleges',
      period: '08/2019 - 05/2021',
      location: 'Lahore/Punjab',
      details: '1083/1100 | Pre-Medical',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      degree: 'Matriculation',
      institution: 'Govt Model Girls High School',
      period: '04/2017 - 04/2019',
      location: 'Lahore/Punjab',
      details: '1049/1100 | Biological Sciences',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const workExperience = [
    {
      title: 'Junior Developer',
      company: 'Zemalt Pvt Ltd',
      period: '09/2025 - Present',
      location: 'Lahore/Pakistan',
      projects: [
        {
          name: 'HRMS',
          tech: 'React.js, Node.js, Express.js, MongoDB, MUI',
          link: 'hr.ztesting.site'
        },
        {
          name: 'POS Billing System',
          tech: 'React.js, Node.js, Express.js, MongoDB, MUI',
          link: 'pos.ztesting.site'
        },
        {
          name: 'Appointment Management System',
          tech: 'React.js, Node.js, Express.js, MongoDB, MUI',
          link: 'doctor.ztesting.site'
        }
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Web Development Internship',
      company: 'Zemalt Pvt Ltd',
      period: '07/2025 - 09/2025',
      location: 'Lahore/Pakistan',
      description: 'Gained hands-on experience in full-stack web development',
      technologies: ['HTML', 'Custom CSS', 'JavaScript', 'React.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    }
  ];

  return (
    <section id="resume" className="w-full py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <SectionReveal>
          <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-16">
            Resume
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <SectionReveal delay={0.2}>
            <div>
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              Education
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-700"></div>
              
              {education.map((edu, index) => (
                <div key={index} className="relative pl-16 pb-10 last:pb-0">
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-gray-800 border-2 border-[var(--color-primary)] flex items-center justify-center text-[var(--color-primary)]">
                    {edu.icon}
                  </div>
                  
                  {/* Content Card */}
                  <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-5 border border-gray-500/70 hover:border-[var(--color-primary)] transition-all duration-300 shadow-lg shadow-gray-900/50"
                    style={{
                      boxShadow: '0 4px 20px rgba(156, 163, 175, 0.15), 0 0 0 1px rgba(156, 163, 175, 0.2)'
                    }}
                  >
                    <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                    <p className="text-[var(--color-primary)] font-semibold mb-2">{edu.institution}</p>
                    <div className="flex flex-wrap gap-2 text-sm text-gray-400 mb-2">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {edu.period}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {edu.location}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm font-medium">{edu.details}</p>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </SectionReveal>

          {/* Work Experience Section */}
          <SectionReveal delay={0.4}>
            <div>
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              Work Experience
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-700"></div>
              
              {workExperience.map((work, index) => (
                <div key={index} className="relative pl-16 pb-10 last:pb-0">
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-gray-800 border-2 border-[var(--color-primary)] flex items-center justify-center text-[var(--color-primary)]">
                    {work.icon}
                  </div>
                  
                  {/* Content Card */}
                  <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-5 border border-gray-500/70 hover:border-[var(--color-primary)] transition-all duration-300 shadow-lg shadow-gray-900/50"
                    style={{
                      boxShadow: '0 4px 20px rgba(156, 163, 175, 0.15), 0 0 0 1px rgba(156, 163, 175, 0.2)'
                    }}
                  >
                    <h4 className="text-xl font-bold text-white mb-2">{work.title}</h4>
                    <p className="text-[var(--color-primary)] font-semibold mb-2">{work.company}</p>
                    <div className="flex flex-wrap gap-2 text-sm text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {work.period}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {work.location}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm mb-3">{work.description}</p>
                    
                    {/* Projects */}
                    {work.projects && (
                      <div className="space-y-2 mt-3">
                        <p className="text-sm font-semibold text-gray-300">Projects:</p>
                        {work.projects.map((project, pIndex) => (
                          <div key={pIndex} className="bg-gray-900/50 rounded-lg p-3 border border-gray-700/50">
                            <div className="flex items-start justify-between gap-2 mb-1">
                              <p className="text-sm font-semibold text-white">{project.name}</p>
                              <a 
                                href={`https://${project.link}`} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-xs text-[var(--color-primary)] hover:underline flex items-center gap-1"
                              >
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                Visit
                              </a>
                            </div>
                            <p className="text-xs text-gray-400">{project.tech}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* Technologies */}
                    {work.technologies && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {work.technologies.map((tech, tIndex) => (
                          <span key={tIndex} className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};

export default Resume;
