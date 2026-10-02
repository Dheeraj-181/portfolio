import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Direct mailto generation with prefilled fields
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.contact.email}?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhoneToClipboard = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.contact.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-surface-300/40 border-t border-border-subtle">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>COMMUNICATIONS CHANNEL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">Meaningful</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            I'm always interested in interesting software ideas, collaborations, hackathons and opportunities to build useful technology.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-4">
            {/* Direct Email Card */}
            <div className="glass-card rounded-2xl p-6 border border-border-subtle shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                  PRIMARY EMAIL
                </span>
                <button
                  onClick={copyEmailToClipboard}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-surface-100 hover:bg-surface-50 text-slate-300 hover:text-white text-xs font-mono transition-colors"
                >
                  {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-cyan-400" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <a
                    href={`mailto:${PERSONAL_INFO.contact.email}`}
                    className="text-sm sm:text-base font-bold text-white hover:text-cyan-300 transition-colors"
                  >
                    {PERSONAL_INFO.contact.email}
                  </a>
                  <p className="text-xs text-slate-400 mt-0.5">Direct responses to project &amp; collaboration inquiries</p>
                </div>
              </div>
            </div>

            {/* Direct Phone Card */}
            <div className="glass-card rounded-2xl p-6 border border-border-subtle shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                  PHONE CONTACT
                </span>
                <button
                  onClick={copyPhoneToClipboard}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-surface-100 hover:bg-surface-50 text-slate-300 hover:text-white text-xs font-mono transition-colors"
                >
                  {copiedPhone ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-cyan-400" />}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <a
                    href={`tel:${PERSONAL_INFO.contact.phone.replace(/\s+/g, '')}`}
                    className="text-sm sm:text-base font-bold text-white hover:text-cyan-300 transition-colors font-mono"
                  >
                    {PERSONAL_INFO.contact.phone}
                  </a>
                  <p className="text-xs text-slate-400 mt-0.5">Available for direct voice calls &amp; WhatsApp</p>
                </div>
              </div>
            </div>

            {/* GitHub Profile Card */}
            <a
              href={PERSONAL_INFO.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-6 border border-border-subtle hover:border-cyan-500/40 transition-all flex items-center justify-between group shadow-xl block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-surface-100 border border-white/5 flex items-center justify-center text-slate-200 group-hover:text-cyan-400 transition-colors shrink-0">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    GitHub Profile
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">Explore open source repositories &amp; experiments</p>
                </div>
              </div>
              <span className="text-xs font-mono text-cyan-400 group-hover:translate-x-1 transition-transform">
                &rarr;
              </span>
            </a>

            {/* LinkedIn Profile Card */}
            <a
              href={PERSONAL_INFO.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-6 border border-border-subtle hover:border-blue-500/40 transition-all flex items-center justify-between group shadow-xl block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-surface-100 border border-white/5 flex items-center justify-center text-blue-400 group-hover:text-blue-300 transition-colors shrink-0">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                    LinkedIn Network
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">Professional engineering connections &amp; updates</p>
                </div>
              </div>
              <span className="text-xs font-mono text-blue-400 group-hover:translate-x-1 transition-transform">
                &rarr;
              </span>
            </a>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-border-subtle shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-400 mb-6 font-mono">
                Submitting launches a direct mail compose draft to ensure reliable transmission.
              </p>

              {isSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">Message Prompt Initiated</h4>
                  <p className="text-xs text-slate-300">
                    Your local email client has been prepared with your message payload. You can also reach out directly at {PERSONAL_INFO.contact.email}.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-4 py-2 rounded-xl bg-surface-100 text-xs font-mono text-slate-300 hover:text-white transition-colors"
                  >
                    Reset Form
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name or company"
                      className="w-full px-4 py-3 rounded-xl bg-surface-200 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-surface-200 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, collaboration opportunity, or question..."
                      className="w-full px-4 py-3 rounded-xl bg-surface-200 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold font-mono text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-cyan-500/20 active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4 text-slate-950" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
