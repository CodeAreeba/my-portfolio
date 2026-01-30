import React from 'react';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';

export default function App() {
  return (
    <Layout>
      <Hero />
      <Skills />
    </Layout>
  );
}
