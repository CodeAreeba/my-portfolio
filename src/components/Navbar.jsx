import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Home', 'About', 'Resume', 'Portfolio', 'Services', 'Contact'];

  return (
    <nav className="w-full bg-[var(--color-bg)] text-[var(--color-text)]">
      <div className="w-full flex justify-center items-center py-4">
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-sm uppercase font-medium tracking-widest">
          {navItems.map((item) => (
            <li
              key={item}
              className="relative group cursor-pointer transition-all duration-300 hover:text-[var(--color-primary)]"
            >
              {item}
              {/* Underline effect */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[var(--color-primary)] transition-all group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
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
              key={item}
              className="cursor-pointer hover:text-[var(--color-primary)] transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
