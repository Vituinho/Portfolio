import React from 'react';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Education from '@/components/sections/Education';
import Recommendations from '@/components/sections/Recommendations';
import Languages from '@/components/sections/Languages';
import Books from '@/components/sections/Books';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Recommendations />
      <Languages />
      <Books />
      <Contact />
    </div>
  );
}
