import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Cpu, Database, Eye, Lock, Play, CheckCircle2, ChevronRight } from 'lucide-react';
import { ARYANETIX_ENGINE_SPECS } from '../../data/portfolioData';
import FaceMeshCanvas from '../3d/FaceMeshCanvas';

export const FaceRecognitionEngine: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  // Auto playback simulation
  React.useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setActiveStep((prev) => (prev >= ARYANETIX_ENGINE_SPECS.pipelineSteps.length ? 1 : prev + 1));
      }, 1800);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const currentStepData = ARYANETIX_ENGINE_SPECS.pipelineSteps.find(s => s.step === activeStep);

  return (
    <section id="aryanetix-engine" className="py-24 relative overflow-hidden bg-surface-300/60 border-t border-b border-border-subtle">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>DEEP LEARNING BIOMETRICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Aryanetix Face Recognition <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">Engine V2</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            A privacy-conscious edge biometrics pipeline engineered with MediaPipe alignment, ArcFace deep representations, FAISS high-dimensional vector search, and authenticated encryption.
          </p>
        </div>

        {/* Interactive Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: 3D Face Mesh Simulation Canvas */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <FaceMeshCanvas activeStep={activeStep} />

            {/* Simulation controls */}
            <div className="flex items-center gap-3 mt-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 text-xs font-mono transition-colors"
              >
                <Play className={`w-3.5 h-3.5 ${isPlaying ? 'animate-pulse text-cyan-400' : ''}`} />
                {isPlaying ? 'PAUSE PIPELINE' : 'SIMULATE LIVE PIPELINE'}
              </button>
              <button
                onClick={() => setActiveStep((prev) => (prev >= ARYANETIX_ENGINE_SPECS.pipelineSteps.length ? 1 : prev + 1))}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-surface-100 border border-white/10 text-slate-300 hover:text-white text-xs font-mono transition-colors"
              >
                <span>NEXT STEP</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right: Step-by-Step Pipeline Inspector */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-border-subtle shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-border-subtle mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                    Inference Pipeline Architecture
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  Step {activeStep} of {ARYANETIX_ENGINE_SPECS.pipelineSteps.length}
                </span>
              </div>

              {/* Active Step Highlight Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="mb-8 p-5 rounded-xl bg-cyan-950/20 border border-cyan-500/30"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 font-mono font-bold shrink-0">
                      0{activeStep}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white flex items-center gap-2">
                        {currentStepData?.name}
                        {activeStep === 9 && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                      </h4>
                      <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                        {currentStepData?.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Pipeline Step Interactive Stepper */}
              <div className="grid grid-cols-3 sm:grid-cols-9 gap-2 mb-8">
                {ARYANETIX_ENGINE_SPECS.pipelineSteps.map((step) => {
                  const isActive = step.step === activeStep;
                  const isDone = step.step < activeStep;
                  return (
                    <button
                      key={step.step}
                      onClick={() => {
                        setIsPlaying(false);
                        setActiveStep(step.step);
                      }}
                      className={`h-11 rounded-lg flex flex-col items-center justify-center transition-all ${
                        isActive
                          ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20 ring-2 ring-cyan-300'
                          : isDone
                          ? 'bg-cyan-950/60 border border-cyan-500/40 text-cyan-300'
                          : 'bg-surface-100 border border-white/5 text-slate-400 hover:border-white/20'
                      }`}
                    >
                      <span className="text-[11px] font-mono leading-none">{step.step}</span>
                      <span className="text-[9px] truncate max-w-[90%] opacity-80 mt-0.5">
                        {step.name.split(' ')[0]}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Technical Specifications Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-border-subtle">
                {ARYANETIX_ENGINE_SPECS.securityFeatures.map((sec, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-surface-200/50 border border-border-subtle">
                    <div className="flex items-center gap-2 text-cyan-300 font-mono text-xs font-semibold mb-1">
                      {idx === 0 && <Eye className="w-3.5 h-3.5" />}
                      {idx === 1 && <Lock className="w-3.5 h-3.5" />}
                      {idx === 2 && <ShieldCheck className="w-3.5 h-3.5" />}
                      {idx === 3 && <Database className="w-3.5 h-3.5" />}
                      <span>{sec.title}</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {sec.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 text-center">
                <p className="text-[11px] font-mono text-slate-400">
                  * Note: Technical specifications reflect algorithmic implementation architecture and privacy requirements rather than unverified commercial guarantees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaceRecognitionEngine;
