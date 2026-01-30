import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full text-[var(--color-text)] py-6 flex flex-col items-center justify-center space-y-2 mt-auto">
      <div className="flex space-x-6 text-sm">
        <a href="#" className="hover:text-[var(--color-primary)] transition-colors duration-300">GitHub</a>
        <a href="#" className="hover:text-[var(--color-primary)] transition-colors duration-300">LinkedIn</a>
        <a href="#" className="hover:text-[var(--color-primary)] transition-colors duration-300">Twitter</a>
      </div>
      <div className="text-xs text-gray-500 tracking-wider">
        &copy; {new Date().getFullYear()} Mr.Bande. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
