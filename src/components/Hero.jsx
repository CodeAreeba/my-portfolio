import React from 'react';
import { motion as Motion } from 'framer-motion';

const Hero = () => {
    return (
      <section id="home" className="relative w-full min-h-[600px] flex items-center justify-between px-8 py-16 overflow-hidden">
        {/* Left Content */}
        <Motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 max-w-2xl z-10"
        >
          {/* Name - Prominently Displayed */}
          <Motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight"
          >
            Areeba
          </Motion.h1>
          
          {/* Role/Title */}
          <Motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl md:text-3xl text-gray-300 mb-8 font-light"
          >
            Full Stack Developer
          </Motion.p>
          
          {/* Personal Details */}
          <Motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <span className="text-[var(--color-primary)]">●</span>
              <span><strong>Birthday:</strong> 28 January 2003</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[var(--color-primary)]">●</span>
              <span><strong>Age:</strong> 23</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[var(--color-primary)]">●</span>
              <span><strong>Degree:</strong> BS Computer Science</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[var(--color-primary)]">●</span>
              <span><strong>City:</strong> Lahore, Pakistan</span>
            </div>
            {/* <div className="flex items-center gap-2">
              <span className="text-[var(--color-primary)]">●</span>
              <span><strong>Freelancer:</strong> Available</span>
            </div> */}
          </Motion.div>
          
          {/* Action Buttons */}
          <Motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex gap-4 flex-wrap"
          >
            <button className="px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all duration-300 font-medium">
              Contact me
            </button>
            <button className="px-8 py-3 border-2 border-gray-700 hover:border-[var(--color-primary)] text-white rounded-lg transition-all duration-300 font-medium">
              View my work
            </button>
          </Motion.div>
        </Motion.div>
        
        {/* Right Visual Design */}
        <Motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="hidden lg:flex flex-1 items-center justify-center relative"
        >
          {/* Main Decorative Container */}
          <div className="relative w-[500px] h-[500px]">
            {/* Large Blob Shape */}
            <Motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 right-0 w-[400px] h-[400px] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] border-2 border-gray-600 opacity-70"
            ></Motion.div>
            
            {/* Medium Blob Shape */}
            <Motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-20 left-10 w-[300px] h-[300px] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] border-2 border-gray-600 opacity-50"
            ></Motion.div>
            
            {/* Small Blob Shape */}
            <Motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-32 left-20 w-[200px] h-[200px] rounded-[50%_50%_50%_50%/60%_40%_60%_40%] border-2 border-[var(--color-primary)] opacity-40"
            ></Motion.div>
            
            {/* Icon Circle 1 - Top Right */}
            <Motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
              className="absolute top-16 right-16 w-16 h-16 rounded-full border-2 border-gray-600 bg-gray-800/50 backdrop-blur-sm flex items-center justify-center shadow-lg"
            >
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </Motion.div>
            
            {/* Icon Circle 2 - Middle Left */}
            <Motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2, type: "spring" }}
              className="absolute top-1/2 left-8 w-20 h-20 rounded-full border-2 border-[var(--color-primary)] bg-gray-800/50 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-[var(--color-primary)]/20"
            >
              <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </Motion.div>
            
            {/* Placeholder for Profile Image */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border-4 border-gray-600 flex items-center justify-center shadow-2xl">
              <div className="text-center">
                <svg className="w-24 h-24 text-gray-500 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                <p className="text-xs text-gray-500">Your Photo Here</p>
              </div>
            </div>
            
            {/* Animated Particles */}
            <div className="absolute top-10 left-1/4 w-2 h-2 bg-[var(--color-primary)] rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-1/4 w-2 h-2 bg-[var(--color-primary)] rounded-full animate-pulse delay-100"></div>
            <div className="absolute top-1/3 right-10 w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-200"></div>
          </div>
        </Motion.div>
      </section>
    );
};

export default Hero;
