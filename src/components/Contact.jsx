import React from 'react';

const Contact = () => {
  const contactLinks = [
    {
      name: 'GitHub',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.399 1.02 0 2.047.133 3.006.4 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      url: 'https://github.com/yourusername',
      color: 'text-gray-300 hover:text-white',
      bgColor: 'bg-gray-700/20 hover:bg-gray-700/40',
      shadowColor: 'hover:shadow-gray-500/20'
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      url: 'https://linkedin.com/in/yourusername',
      color: 'text-blue-400 hover:text-blue-300',
      bgColor: 'bg-blue-500/20 hover:bg-blue-500/30',
      shadowColor: 'hover:shadow-blue-500/30'
    },
    {
      name: 'Email',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      url: 'mailto:your.email@example.com',
      color: 'text-red-400 hover:text-red-300',
      bgColor: 'bg-red-500/20 hover:bg-red-500/30',
      shadowColor: 'hover:shadow-red-500/30'
    },
    {
      name: 'Phone',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
           <path d="M20.487 17.14l-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a1 1 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391z"/>
        </svg>
      ),
      url: 'tel:+1234567890',
      color: 'text-green-400 hover:text-green-300',
      bgColor: 'bg-green-500/20 hover:bg-green-500/30',
      shadowColor: 'hover:shadow-green-500/30'
    }
  ];

  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-16">
          Contact me
        </h2>

        {/* Contact Icons Grid */}
        <div className="flex flex-wrap justify-center items-center gap-8">
          {contactLinks.map((contact, index) => (
            <a
              key={index}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex items-center justify-center w-24 h-24 rounded-full border-2 border-gray-600 backdrop-blur-sm transition-all duration-300 ${contact.color} ${contact.bgColor} ${contact.shadowColor} hover:border-current hover:scale-110 hover:shadow-xl hover:-translate-y-2`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Icon */}
              <div className="transition-transform duration-300 group-hover:scale-110">
                {contact.icon}
              </div>

              {/* Tooltip */}
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <span className="text-sm font-medium text-white bg-gray-900 px-3 py-1 rounded-lg whitespace-nowrap">
                  {contact.name}
                </span>
              </div>

              {/* Animated ring on hover */}
              <div className="absolute inset-0 rounded-full border-2 border-current opacity-0 group-hover:opacity-100 scale-100 group-hover:scale-125 transition-all duration-500"></div>
            </a>
          ))}
        </div>

        {/* Additional Contact Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-lg">
            Feel free to reach out through any of these platforms
          </p>
          <p className="text-gray-500 text-sm mt-2">
            I typically respond within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
