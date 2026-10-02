import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Layers, Users, Database, Smartphone, GraduationCap, Activity } from 'lucide-react';
import { ARYANETIX_ARCHITECTURE_NODES } from '../../data/portfolioData';

export const ArchitectureVisualizer: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('super-admin');

  const selectedNode = ARYANETIX_ARCHITECTURE_NODES.find(n => n.id === selectedNodeId) || ARYANETIX_ARCHITECTURE_NODES[0];

  return (
    <section id="architecture" className="py-24 relative overflow-hidden bg-background">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-blue-500/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs font-mono mb-4">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span>ENTERPRISE DISTRIBUTED SYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Aryanetix Unified <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">Architecture</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            A synchronized multi-tier topology connecting institution leadership, faculty, and students with real-time Firestore replication and cross-platform native endpoints.
          </p>
        </div>

        {/* Visual Architecture & Inspector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Interactive Topology Graph */}
          <div className="lg:col-span-8 glass-card rounded-2xl p-6 sm:p-10 border border-border-subtle relative overflow-hidden">
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/5">
              <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider">
                TOPOLOGY INTERACTION GRAPH
              </span>
              <span className="text-xs font-mono text-slate-400">
                Click any tier node to inspect
              </span>
            </div>

            {/* Architecture Node Tree */}
            <div className="flex flex-col items-center space-y-6 relative">
              {/* Tier 1: Super Admin */}
              <button
                onClick={() => setSelectedNodeId('super-admin')}
                className={`group relative px-6 py-3.5 rounded-xl border transition-all ${
                  selectedNodeId === 'super-admin'
                    ? 'bg-cyan-950/80 border-cyan-400 shadow-[0_0_25px_rgba(0,242,254,0.3)] ring-2 ring-cyan-400/50'
                    : 'bg-surface-100 border-white/10 hover:border-cyan-500/40'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Shield className="w-4 h-4 text-cyan-400" />
                  <span className="font-mono text-xs sm:text-sm font-bold text-white tracking-wider">SUPER ADMIN</span>
                </div>
              </button>

              {/* Connecting Line */}
              <div className="w-0.5 h-6 bg-gradient-to-b from-cyan-400 to-blue-400 relative">
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-300 animate-ping" />
              </div>

              {/* Tier 2: Web Dashboard */}
              <button
                onClick={() => setSelectedNodeId('web-dashboard')}
                className={`group relative px-6 py-3.5 rounded-xl border transition-all ${
                  selectedNodeId === 'web-dashboard'
                    ? 'bg-blue-950/80 border-blue-400 shadow-[0_0_25px_rgba(59,130,246,0.3)] ring-2 ring-blue-400/50'
                    : 'bg-surface-100 border-white/10 hover:border-blue-500/40'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Layers className="w-4 h-4 text-blue-400" />
                  <span className="font-mono text-xs sm:text-sm font-bold text-white tracking-wider">WEB DASHBOARD</span>
                </div>
              </button>

              {/* Split Lines to Principal & Teachers */}
              <div className="relative w-full max-w-md h-6 flex justify-between items-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-blue-400" />
                <div className="absolute top-3 left-[25%] right-[25%] h-0.5 bg-gradient-to-r from-violet-400 via-blue-400 to-purple-400" />
                <div className="absolute top-3 left-[25%] w-0.5 h-3 bg-violet-400" />
                <div className="absolute top-3 right-[25%] w-0.5 h-3 bg-purple-400" />
              </div>

              {/* Tier 3: Principal & Teachers */}
              <div className="grid grid-cols-2 gap-6 w-full max-w-md">
                <button
                  onClick={() => setSelectedNodeId('principal')}
                  className={`px-4 py-3 rounded-xl border transition-all flex items-center justify-center gap-2 ${
                    selectedNodeId === 'principal'
                      ? 'bg-violet-950/80 border-violet-400 shadow-[0_0_20px_rgba(139,92,246,0.3)] ring-2 ring-violet-400/50'
                      : 'bg-surface-100 border-white/10 hover:border-violet-500/40'
                  }`}
                >
                  <Users className="w-4 h-4 text-violet-400" />
                  <span className="font-mono text-xs sm:text-sm font-bold text-white">PRINCIPAL</span>
                </button>

                <button
                  onClick={() => setSelectedNodeId('teachers')}
                  className={`px-4 py-3 rounded-xl border transition-all flex items-center justify-center gap-2 ${
                    selectedNodeId === 'teachers'
                      ? 'bg-purple-950/80 border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.3)] ring-2 ring-purple-400/50'
                      : 'bg-surface-100 border-white/10 hover:border-purple-500/40'
                  }`}
                >
                  <Users className="w-4 h-4 text-purple-400" />
                  <span className="font-mono text-xs sm:text-sm font-bold text-white">TEACHERS</span>
                </button>
              </div>

              {/* Converging Lines to Firebase Core */}
              <div className="relative w-full max-w-md h-6">
                <div className="absolute top-0 left-[25%] w-0.5 h-3 bg-violet-400" />
                <div className="absolute top-0 right-[25%] w-0.5 h-3 bg-purple-400" />
                <div className="absolute top-3 left-[25%] right-[25%] h-0.5 bg-gradient-to-r from-violet-400 via-amber-400 to-purple-400" />
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-amber-400" />
              </div>

              {/* Tier 4: Firebase / Cloud Firestore Core */}
              <button
                onClick={() => setSelectedNodeId('firebase')}
                className={`relative px-8 py-4 rounded-xl border transition-all ${
                  selectedNodeId === 'firebase'
                    ? 'bg-amber-950/80 border-amber-400 shadow-[0_0_30px_rgba(245,158,11,0.3)] ring-2 ring-amber-400/50'
                    : 'bg-surface-100 border-amber-500/30 hover:border-amber-400'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Database className="w-5 h-5 text-amber-400 animate-pulse" />
                  <div className="text-left">
                    <div className="font-mono text-xs sm:text-sm font-bold text-amber-300">FIREBASE & CLOUD FIRESTORE</div>
                    <div className="text-[10px] text-slate-400 font-mono">Serverless Database & Auth Engine</div>
                  </div>
                </div>
              </button>

              {/* Line to Mobile App */}
              <div className="w-0.5 h-6 bg-gradient-to-b from-amber-400 to-emerald-400 relative">
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-amber-300 animate-ping" />
              </div>

              {/* Tier 5: Mobile App */}
              <button
                onClick={() => setSelectedNodeId('mobile-app')}
                className={`relative px-6 py-3.5 rounded-xl border transition-all ${
                  selectedNodeId === 'mobile-app'
                    ? 'bg-emerald-950/80 border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.3)] ring-2 ring-emerald-400/50'
                    : 'bg-surface-100 border-white/10 hover:border-emerald-500/40'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Smartphone className="w-4 h-4 text-emerald-400" />
                  <span className="font-mono text-xs sm:text-sm font-bold text-white tracking-wider">FLUTTER MOBILE APP</span>
                </div>
              </button>

              {/* Split Lines to Mobile Endpoints */}
              <div className="relative w-full max-w-md h-6 flex justify-between items-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-emerald-400" />
                <div className="absolute top-3 left-[25%] right-[25%] h-0.5 bg-gradient-to-r from-purple-400 via-emerald-400 to-cyan-400" />
                <div className="absolute top-3 left-[25%] w-0.5 h-3 bg-purple-400" />
                <div className="absolute top-3 right-[25%] w-0.5 h-3 bg-cyan-400" />
              </div>

              {/* Tier 6: End Users (Teachers & Students) */}
              <div className="grid grid-cols-2 gap-6 w-full max-w-md">
                <button
                  onClick={() => setSelectedNodeId('teachers')}
                  className={`px-4 py-3 rounded-xl border transition-all flex items-center justify-center gap-2 ${
                    selectedNodeId === 'teachers'
                      ? 'bg-purple-950/80 border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.3)] ring-2 ring-purple-400/50'
                      : 'bg-surface-100 border-white/10 hover:border-purple-500/40'
                  }`}
                >
                  <Users className="w-4 h-4 text-purple-400" />
                  <span className="font-mono text-xs sm:text-sm font-bold text-white">TEACHERS (APP)</span>
                </button>

                <button
                  onClick={() => setSelectedNodeId('students')}
                  className={`px-4 py-3 rounded-xl border transition-all flex items-center justify-center gap-2 ${
                    selectedNodeId === 'students'
                      ? 'bg-cyan-950/80 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)] ring-2 ring-cyan-400/50'
                      : 'bg-surface-100 border-white/10 hover:border-cyan-500/40'
                  }`}
                >
                  <GraduationCap className="w-4 h-4 text-cyan-400" />
                  <span className="font-mono text-xs sm:text-sm font-bold text-white">STUDENTS (APP)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right: Selected Node Details Inspector */}
          <div className="lg:col-span-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedNode.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="glass-card rounded-2xl p-6 sm:p-8 border border-border-subtle sticky top-28"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-bold font-mono text-slate-950"
                    style={{ backgroundColor: selectedNode.color }}
                  >
                    T{selectedNode.tier}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 tracking-wider uppercase">
                      {selectedNode.role}
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      {selectedNode.name}
                    </h3>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-xs font-mono text-slate-400 uppercase mb-1">Architecture Function</h4>
                    <p className="text-sm text-slate-200 leading-relaxed">
                      {selectedNode.desc}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-surface-200/60 border border-white/5 space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-400">Security Boundary:</span>
                      <span className="text-emerald-400 font-semibold">Strict Role ACL</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-400">Latency Target:</span>
                      <span className="text-cyan-400 font-semibold">&lt; 150ms P99 Sync</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-400">Offline Fallback:</span>
                      <span className="text-blue-400 font-semibold">Local Queue Buffer</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border-subtle">
                  <div className="text-[11px] font-mono text-slate-400 uppercase mb-2">Connected Protocols</div>
                  <div className="flex flex-wrap gap-1.5">
                    {['TLS 1.3', 'Firestore WebSockets', 'AES-256', 'OAuth / Firebase Auth'].map((proto) => (
                      <span key={proto} className="px-2.5 py-1 rounded bg-surface-100 text-[11px] font-mono text-slate-300 border border-white/5">
                        {proto}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureVisualizer;
