import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.2 }}
            className="relative z-10 w-full max-w-4xl h-[88vh] bg-[#0c101a] border border-white/15 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-surface-100/80">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                    {PERSONAL_INFO.fullName}
                    <span className="text-[10px] font-mono font-normal text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30 hidden sm:inline">
                      ATS Verified
                    </span>
                  </h3>
                  <p className="text-xs font-mono text-slate-400">
                    Official Resume • PDF Format
                  </p>
                </div>
              </div>

              {/* Action buttons in header */}
              <div className="flex items-center gap-2">
                <a
                  href="/resume.pdf"
                  download="Kalvapalle_Krishna_Dheeraj_Reddy_Resume.pdf"
                  className="px-3.5 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-mono font-bold flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Download</span>
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-surface-200 border border-white/10 text-slate-300 hover:text-white transition-colors"
                  title="Open in new browser tab"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  onClick={onClose}
                  className="p-2 rounded-xl bg-surface-200 border border-white/10 text-slate-400 hover:text-white transition-colors ml-1"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Body: Embedded PDF or Live Preview */}
            <div className="flex-1 bg-[#141926] p-2 relative overflow-hidden">
              <iframe
                src="/resume.pdf#toolbar=1"
                title="Resume PDF"
                className="w-full h-full rounded-2xl border border-white/5 bg-white"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
