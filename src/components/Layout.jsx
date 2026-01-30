import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-main text-text-main font-sans">
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
