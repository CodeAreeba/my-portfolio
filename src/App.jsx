import React from 'react';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Services from './components/Services';
import Contact from './components/Contact';

export default function App() {
  return (
    <Layout>
      <Hero />
      <Skills />
      <Projects />
      <Resume />
      <Services />
      <Contact />
    </Layout>
  );
}
