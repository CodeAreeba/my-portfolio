import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Resume', id: 'resume' },
    { name: 'Services', id: 'services' },
    { name: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Trigger when section is in the upper part of the viewport
      threshold: 0,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="w-full bg-[var(--color-bg)] text-[var(--color-text)] sticky top-0 z-50 border-b border-gray-800 backdrop-blur-md bg-opacity-80">
      <div className="w-full flex justify-center items-center py-4">
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-sm uppercase font-medium tracking-widest">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`relative group cursor-pointer transition-all duration-300 ${
                activeSection === item.id ? 'text-[var(--color-primary)]' : 'hover:text-[var(--color-primary)]'
              }`}
            >
              <a href={`#${item.id}`} className="py-2 block">
                {item.name}
              </a>
              {/* Underline effect */}
              <span 
                className={`absolute left-0 -bottom-1 h-[2px] bg-[var(--color-primary)] transition-all duration-300 ${
                  activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              ></span>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center pr-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col justify-between w-6 h-5 focus:outline-none"
          >
            <span className={`block h-0.5 bg-[var(--color-primary)] transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 bg-[var(--color-primary)] transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block h-0.5 bg-[var(--color-primary)] transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-[var(--color-bg)] w-full py-4 space-y-4 text-sm uppercase font-medium tracking-widest border-t border-gray-800">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              <a 
                href={`#${item.id}`} 
                className={`block w-full py-2 transition-colors duration-300 ${
                  activeSection === item.id ? 'text-[var(--color-primary)]' : 'hover:text-[var(--color-primary)]'
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>

  );
};

export default Navbar;
