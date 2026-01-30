import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Speed & Optimization',
      description: 'Improving load times, SEO, and overall user experience through code and asset optimization.',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
          {/* Monitor/Screen */}
          <rect x="8" y="12" width="48" height="32" rx="2" stroke="#F59E0B" strokeWidth="2.5" fill="#1F2937"/>
          <rect x="12" y="16" width="40" height="24" fill="#374151"/>
          {/* Speed lines */}
          <path d="M18 24 L28 24 M18 28 L32 28 M18 32 L26 32" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
          {/* Stand */}
          <path d="M28 44 L36 44 M24 48 L40 48" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="32" y1="44" x2="32" y2="48" stroke="#F59E0B" strokeWidth="2.5"/>
        </svg>
      ),
      color: 'from-amber-500 to-orange-600',
      iconBg: 'bg-gradient-to-br from-amber-500/20 to-orange-600/20',
      borderColor: 'hover:border-amber-500/50'
    },
    {
      title: 'Full-Stack Solutions',
      description: 'End-to-end development from frontend UI to backend infrastructure and deployment.',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
          {/* Head outline */}
          <path d="M32 8 C20 8 12 16 12 28 C12 36 16 42 22 46 L22 52 C22 54 24 56 26 56 L38 56 C40 56 42 54 42 52 L42 46 C48 42 52 36 52 28 C52 16 44 8 32 8 Z" 
                stroke="#84CC16" strokeWidth="2.5" fill="#1F2937"/>
          {/* Code brackets inside head */}
          <path d="M24 24 L20 28 L24 32 M40 24 L44 28 L40 32" 
                stroke="#84CC16" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="30" y1="22" x2="34" y2="34" stroke="#84CC16" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      ),
      color: 'from-lime-500 to-green-600',
      iconBg: 'bg-gradient-to-br from-lime-500/20 to-green-600/20',
      borderColor: 'hover:border-lime-500/50'
    },
    {
      title: 'Backend Development',
      description: 'Developing secure and scalable server-side logic, APIs, and database integration.',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
          {/* Database cylinder top */}
          <ellipse cx="32" cy="16" rx="20" ry="6" stroke="#EC4899" strokeWidth="2.5" fill="#1F2937"/>
          <ellipse cx="32" cy="16" rx="20" ry="6" fill="#EC4899" fillOpacity="0.3"/>
          {/* Database cylinder middle */}
          <path d="M12 16 L12 32 C12 35.3 20.3 38 32 38 C43.7 38 52 35.3 52 32 L52 16" 
                stroke="#EC4899" strokeWidth="2.5" fill="#1F2937"/>
          <ellipse cx="32" cy="32" rx="20" ry="6" stroke="#EC4899" strokeWidth="2.5" fill="none"/>
          {/* Database cylinder bottom */}
          <path d="M12 32 L12 48 C12 51.3 20.3 54 32 54 C43.7 54 52 51.3 52 48 L52 32" 
                stroke="#EC4899" strokeWidth="2.5" fill="none"/>
          <ellipse cx="32" cy="48" rx="20" ry="6" stroke="#EC4899" strokeWidth="2.5" fill="none"/>
        </svg>
      ),
      color: 'from-pink-500 to-rose-600',
      iconBg: 'bg-gradient-to-br from-pink-500/20 to-rose-600/20',
      borderColor: 'hover:border-pink-500/50'
    },
    {
      title: 'Frontend Development',
      description: 'Building responsive, user-friendly web interfaces using modern frameworks like React or Vue.',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
          {/* Browser window */}
          <rect x="8" y="12" width="48" height="40" rx="3" stroke="#06B6D4" strokeWidth="2.5" fill="#1F2937"/>
          {/* Browser top bar */}
          <rect x="8" y="12" width="48" height="8" rx="3" fill="#374151"/>
          <circle cx="14" cy="16" r="1.5" fill="#EF4444"/>
          <circle cx="20" cy="16" r="1.5" fill="#F59E0B"/>
          <circle cx="26" cy="16" r="1.5" fill="#10B981"/>
          {/* Code brackets */}
          <path d="M20 28 L16 34 L20 40 M44 28 L48 34 L44 40" 
                stroke="#06B6D4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M28 26 L36 42" stroke="#06B6D4" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      ),
      color: 'from-cyan-500 to-blue-600',
      iconBg: 'bg-gradient-to-br from-cyan-500/20 to-blue-600/20',
      borderColor: 'hover:border-cyan-500/50'
    }
  ];

  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-16">
          Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 ${service.borderColor} transition-all duration-300 hover:shadow-xl hover:shadow-black/50 hover:-translate-y-1`}
            >
              {/* Icon Container */}
              <div className={`${service.iconBg} rounded-2xl w-20 h-20 flex items-center justify-center mb-6 mx-auto transition-transform duration-300 group-hover:scale-110`}>
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white text-center mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm text-center leading-relaxed">
                {service.description}
              </p>

              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
