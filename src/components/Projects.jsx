import React, { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'University', 'Business', 'Personal'];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack online shopping platform with payment integration, product management, and user authentication.',
      category: 'Business',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'University Management System',
      description: 'Comprehensive student portal with course enrollment, grade tracking, and administrative dashboard.',
      category: 'University',
      technologies: ['Next.js', 'PostgreSQL', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop',
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'Personal Portfolio Website',
      description: 'Modern and responsive portfolio website showcasing projects, skills, and professional experience.',
      category: 'Personal',
      technologies: ['React', 'Tailwind CSS', 'Vite'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      github: '#',
      demo: '#'
    },
    {
      id: 4,
      title: 'Fitness Tracker Application',
      description: 'Mobile-responsive health monitoring app with workout tracking, calorie counting, and progress analytics.',
      category: 'Business',
      technologies: ['React Native', 'Firebase', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop',
      github: '#',
      demo: '#'
    },
    {
      id: 5,
      title: 'Library Management System',
      description: 'Digital library system for book cataloging, member management, and automated borrowing/return processes.',
      category: 'University',
      technologies: ['Python', 'Django', 'MySQL', 'Bootstrap'],
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop',
      github: '#',
      demo: '#'
    },
    {
      id: 6,
      title: 'Weather Dashboard',
      description: 'Real-time weather application with location-based forecasts, interactive maps, and weather alerts.',
      category: 'Personal',
      technologies: ['JavaScript', 'OpenWeather API', 'CSS3'],
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop',
      github: '#',
      demo: '#'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-8">
          Portfolio
        </h2>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`relative px-6 py-2 text-lg font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'text-white'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              {filter}
              {/* Active underline */}
              {activeFilter === filter && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--color-primary)] animate-slideIn"></span>
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-gray-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-500/50 hover:border-[var(--color-primary)] transition-all duration-300 shadow-lg shadow-gray-900/50 hover:shadow-2xl hover:shadow-[var(--color-primary)]/20 hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`,
                boxShadow: '0 4px 20px rgba(156, 163, 175, 0.12), 0 0 0 1px rgba(156, 163, 175, 0.15)'
              }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-[var(--color-primary)]/90 backdrop-blur-sm rounded-full text-xs font-semibold text-white shadow-lg">
                  {project.category}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-gray-600 hover:border-gray-500 bg-transparent hover:bg-gray-700/30 text-gray-300 hover:text-white rounded-lg transition-all duration-300 text-sm font-semibold shadow-sm hover:shadow-md"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[var(--color-primary)] to-purple-600 hover:from-[var(--color-primary)]/90 hover:to-purple-600/90 text-white rounded-lg transition-all duration-300 text-sm font-semibold shadow-lg shadow-[var(--color-primary)]/30 hover:shadow-xl hover:shadow-[var(--color-primary)]/40"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
