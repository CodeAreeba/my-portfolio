import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-main text-text-main overflow-hidden font-sans">
      {/* Grid Lines */}
      {/* Top Horizontal Line */}
      <div className="absolute top-12 left-0 w-full h-[1px] bg-neon-gray shadow-neon"></div>
      
      {/* Bottom Horizontal Line */}
      <div className="absolute bottom-12 left-0 w-full h-[1px] bg-neon-gray shadow-neon"></div>
      
      {/* Left Vertical Line */}
      <div className="absolute top-0 left-12 h-full w-[1px] bg-neon-gray shadow-neon"></div>
      
      {/* Right Vertical Line */}
      <div className="absolute top-0 right-12 h-full w-[1px] bg-neon-gray shadow-neon"></div>

      {/* Main Content Area */}
      {/* Use absolute positioning or padding to keep content inside the lines if desired, 
          or just visual lines. Based on "frame" concept, content usually sits inside. */}
      <div className="relative z-10 h-screen overflow-auto px-16 flex flex-col pt-16 pb-14">
        <Navbar />
        <div className="px-4 py-8 flex-1">
            {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
