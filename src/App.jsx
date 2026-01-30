import React from 'react';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Services from './components/Services';
import Contact from './components/Contact';

export default function App() {
  return (
    <Layout>
      <Hero />
      <Skills />
      <Services />
      <Contact />
    </Layout>
  );
}
