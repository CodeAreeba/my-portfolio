import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-main text-text-main font-sans">
      {/* Subtle Neon Gray Gradient Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-500/15 via-transparent to-gray-600/15"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gray-400/10 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-500/8 via-transparent to-transparent"></div>
      </div>

      {/* Border Frame Container - extends with content */}
      <div className="relative min-h-screen">
        {/* Top Horizontal Line */}
        <div className="absolute top-12 left-0 right-0 h-[1px] bg-neon-gray shadow-neon"></div>
        
        {/* Left Vertical Line - extends with content */}
        <div className="absolute top-0 left-12 bottom-0 w-[1px] bg-neon-gray shadow-neon"></div>
        
        {/* Right Vertical Line - extends with content */}
        <div className="absolute top-0 right-12 bottom-0 w-[1px] bg-neon-gray shadow-neon"></div>
        
        {/* Bottom Horizontal Line - positioned at the end of content */}
        <div className="absolute bottom-12 left-0 right-0 h-[1px] bg-neon-gray shadow-neon"></div>

        {/* Main Content Area */}
        <div className="relative z-10 px-16 flex flex-col pt-16 pb-14 min-h-screen">
          <Navbar />
          <div className="px-4 py-8 flex-1">
              {children}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
