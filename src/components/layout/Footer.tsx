import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 bg-[#04060a] border-t border-white/5 relative overflow-hidden text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/5">
          {/* Left info */}
          <div className="text-center md:text-left space-y-2">
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white uppercase">
              {PERSONAL_INFO.fullName}
            </h3>
            <p className="text-sm text-cyan-400/90 font-mono">
              Building software. Exploring AI. Creating useful technology.
            </p>
          </div>

          {/* Social links & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${PERSONAL_INFO.contact.email}`}
              aria-label="Email"
              className="w-10 h-10 rounded-xl bg-surface-100 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-xl bg-surface-100 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-xl bg-surface-100 border border-white/10 flex items-center justify-center text-slate-300 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 transition-colors ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <p>© 2026 Dheeraj Reddy. All rights reserved.</p>
          <p className="text-slate-600">Built with React, TypeScript, Three.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
