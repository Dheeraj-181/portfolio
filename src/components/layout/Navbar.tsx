import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, Send } from 'lucide-react';
import { PERSONAL_INFO, NAV_LINKS } from '../../data/portfolioData';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Active section detection
      const sections = NAV_LINKS.map(l => l.href.substring(1));
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i]);
        if (sec && sec.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 flex justify-center ${
          isScrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div
          className={`mx-auto px-4 sm:px-6 w-[95%] max-w-7xl rounded-2xl transition-all duration-300 ${
            isScrolled
              ? 'bg-[#0a0d14]/85 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
              : 'bg-transparent border border-transparent'
          }`}
        >
          <div className="flex items-center justify-between h-14">
            {/* Brand Logo */}
            <a
              href="#home"
              className="flex items-center gap-2.5 text-white font-bold group"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-mono text-sm text-slate-950 font-black shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                DR
              </div>
              <div className="flex flex-col">
                <span className="font-bold tracking-tight text-sm sm:text-base group-hover:text-cyan-300 transition-colors">
                  {PERSONAL_INFO.displayName}
                </span>
                <span className="text-[10px] font-mono text-cyan-400/80 -mt-0.5 tracking-wider">
                  ENGINEER &amp; BUILDER
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      isActive
                        ? 'text-cyan-300 bg-cyan-950/60 border border-cyan-500/30'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Quick Actions (Desktop) */}
            <div className="hidden sm:flex items-center gap-2.5">
              <button
                onClick={onOpenResumeModal}
                className="px-3.5 py-1.5 rounded-xl bg-surface-100 hover:bg-surface-50 border border-white/10 text-slate-200 hover:text-white text-xs font-mono font-medium flex items-center gap-1.5 transition-all shadow-sm"
              >
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                <span>Resume</span>
              </button>

              <a
                href="#contact"
                className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 text-xs font-mono font-bold flex items-center gap-1.5 transition-all shadow-md shadow-cyan-500/20 hover:scale-[1.02]"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Contact</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={onOpenResumeModal}
                className="sm:hidden px-2.5 py-1 rounded-lg bg-surface-100 border border-white/10 text-xs font-mono text-cyan-400"
              >
                Resume
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-surface-100 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 lg:hidden p-5 rounded-2xl bg-[#0c101a]/95 backdrop-blur-2xl border border-white/15 shadow-2xl space-y-3"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-mono text-cyan-400 font-semibold uppercase">Portfolio Navigation</span>
              <span className="text-[10px] font-mono text-slate-400">Dheeraj Reddy</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2 rounded-xl text-xs font-mono transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                        : 'bg-surface-200 text-slate-300 hover:text-white border border-white/5'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                  </a>
                );
              })}
            </div>

            <div className="pt-2 flex gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="flex-1 py-2 rounded-xl bg-surface-100 border border-white/10 text-center text-xs font-mono text-slate-200"
              >
                View Full Resume
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-center text-xs font-mono"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
