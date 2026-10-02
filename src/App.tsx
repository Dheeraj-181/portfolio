import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import FaceRecognitionEngine from './components/sections/FaceRecognitionEngine';
import ArchitectureVisualizer from './components/sections/ArchitectureVisualizer';
import Education from './components/sections/Education';
import Certifications from './components/sections/Certifications';
import Activities from './components/sections/Activities';
import ResumeSection from './components/sections/ResumeSection';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import CursorFollower from './components/3d/CursorFollower';
import ResumeModal from './components/ui/ResumeModal';

export const App: React.FC = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Interactive 3D Cursor Follower for Desktop */}
      <CursorFollower />

      {/* Floating Sticky Navigation Bar */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <About />
        <Skills />
        <FaceRecognitionEngine />
        <Projects />
        <ArchitectureVisualizer />
        <Education />
        <Certifications />
        <Activities />
        <ResumeSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Fullscreen Interactive Resume Viewer Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
};

export default App;
