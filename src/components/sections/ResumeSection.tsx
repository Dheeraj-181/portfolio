import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, FileText, CheckCircle, Eye } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface ResumeSectionProps {
  onOpenResumeModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResumeModal }) => {
  return (
    <section id="resume" className="py-24 relative overflow-hidden bg-background">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
            <FileText className="w-3.5 h-3.5" />
            <span>CURRICULUM VITAE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Resume</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Download my latest resume to explore my education, technical skills, projects, certifications and experience.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            {/* DOWNLOAD RESUME */}
            <a
              href="/resume.pdf"
              download="Kalvapalle_Krishna_Dheeraj_Reddy_Resume.pdf"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold font-mono text-sm flex items-center gap-2.5 transition-all shadow-[0_0_25px_rgba(0,242,254,0.3)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-4 h-4 text-slate-950" />
              <span>DOWNLOAD RESUME</span>
            </a>

            {/* VIEW RESUME (New Tab) */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-surface-100 hover:bg-surface-50 border border-white/10 hover:border-cyan-500/40 text-white font-mono text-sm flex items-center gap-2.5 transition-all shadow-sm active:scale-[0.98]"
            >
              <ExternalLink className="w-4 h-4 text-cyan-400" />
              <span>VIEW RESUME</span>
            </a>

            {/* Quick Interactive Modal Preview */}
            <button
              onClick={onOpenResumeModal}
              className="px-5 py-3.5 rounded-xl bg-cyan-950/40 hover:bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-mono text-xs flex items-center gap-2 transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>INTERACTIVE MODAL PREVIEW</span>
            </button>
          </div>
        </div>

        {/* Realistic ATS Resume Preview Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto rounded-2xl bg-[#0b0e17] border border-white/15 p-6 sm:p-10 shadow-2xl relative overflow-hidden font-sans"
        >
          {/* Subtle Watermark Badge */}
          <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-[11px] font-mono">
            <CheckCircle className="w-3 h-3" />
            <span>ATS-Optimized PDF</span>
          </div>

          {/* Resume Header */}
          <div className="border-b border-white/10 pb-6 mb-6">
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              {PERSONAL_INFO.fullName}
            </h3>
            <p className="text-cyan-400 font-mono text-xs sm:text-sm mt-1">
              Computer Science &amp; Engineering Student | Full-Stack Developer | AI/ML Enthusiast | SaaS Builder
            </p>
            <p className="text-slate-400 text-xs font-mono mt-2">
              Rayachoty, AP, India  •  Phone: +91 8555080042  •  Email: dheerajreddy181@gmail.com  •  GitHub: github.com/Dheeraj-181
            </p>
          </div>

          {/* Education Preview */}
          <div className="mb-6">
            <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold mb-3 pb-1 border-b border-cyan-500/20">
              EDUCATION
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-slate-200 font-bold">Sri Sai Institute of Technology and Science (SSITS)</div>
                  <div className="text-slate-400">B.Tech in Computer Science and Engineering</div>
                </div>
                <div className="text-slate-400 font-mono">2024 - 2028</div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-slate-200 font-bold">Sri Chaitanya Junior College</div>
                  <div className="text-slate-400">Intermediate (12th Standard) – Aggregate: 87.8%</div>
                </div>
                <div className="text-slate-400 font-mono">2024</div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-slate-200 font-bold">Vignan High School</div>
                  <div className="text-slate-400">Secondary School Certificate (10th Standard) – Aggregate: 88.1%</div>
                </div>
                <div className="text-slate-400 font-mono">2022</div>
              </div>
            </div>
          </div>

          {/* Technical Skills Preview */}
          <div className="mb-6">
            <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold mb-3 pb-1 border-b border-cyan-500/20">
              TECHNICAL SKILLS
            </h4>
            <div className="space-y-1.5 text-xs text-slate-300">
              <div><strong className="text-white font-mono">Programming:</strong> Python, JavaScript, SQL</div>
              <div><strong className="text-white font-mono">Web &amp; Cloud:</strong> React.js, HTML5, CSS3, Firebase, Cloud Firestore, REST APIs, Serverless</div>
              <div><strong className="text-white font-mono">AI / ML:</strong> TensorFlow, PyTorch, Scikit-learn, NumPy, Pandas, Computer Vision, ArcFace, ONNX, FAISS</div>
              <div><strong className="text-white font-mono">Mobile &amp; Tools:</strong> Flutter, Git, Tableau, Power BI, MS Office</div>
            </div>
          </div>

          {/* Projects Preview */}
          <div className="mb-6">
            <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold mb-3 pb-1 border-b border-cyan-500/20">
              FEATURED PROJECTS
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <div className="text-slate-200 font-bold flex items-center justify-between">
                  <span>Aryanetix – Smart Institutional Management SaaS Platform</span>
                  <span className="text-[10px] font-mono text-cyan-400">aryanetix.dev887654321.workers.dev</span>
                </div>
                <p className="text-slate-400 mt-0.5">
                  Multi-role institutional operating system with ArcFace biometric attendance, ONNX edge inference, FAISS vector search, and Flutter mobile clients.
                </p>
              </div>
              <div>
                <div className="text-slate-200 font-bold">ExamMap – University-Focused Study Planner</div>
                <p className="text-slate-400 mt-0.5">
                  Academic planner tracking syllabi, attendance thresholds, backlog remediation, and personalized revision timetables.
                </p>
              </div>
            </div>
          </div>

          {/* Certifications & Languages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-white/10 text-xs">
            <div>
              <span className="font-mono text-cyan-400 font-bold">CERTIFICATIONS: </span>
              <span className="text-slate-300">Quantum Computing, IBM CSR Box</span>
            </div>
            <div>
              <span className="font-mono text-cyan-400 font-bold">LANGUAGES: </span>
              <span className="text-slate-300">English, Telugu, Hindi</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
