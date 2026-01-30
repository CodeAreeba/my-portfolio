import React from 'react';

const Contact = () => {
  const contactLinks = [
    {
      name: 'GitHub',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
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
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" strokeWidth={1.5} />
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
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      url: 'mailto:your.email@example.com',
      color: 'text-red-400 hover:text-red-300',
      bgColor: 'bg-red-500/20 hover:bg-red-500/30',
      shadowColor: 'hover:shadow-red-500/30'
    },
    {
      name: 'Telegram',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 5L2 12.5l7 1M21 5l-2.5 15L9 13M21 5L9 13m0 0l1 5.5M9 13l4-4" />
        </svg>
      ),
      url: 'https://t.me/yourusername',
      color: 'text-cyan-400 hover:text-cyan-300',
      bgColor: 'bg-cyan-500/20 hover:bg-cyan-500/30',
      shadowColor: 'hover:shadow-cyan-500/30'
    },
    {
      name: 'Phone',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
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
