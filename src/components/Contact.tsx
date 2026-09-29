import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Phone, 
  Mail, 
  Github, 
  Send, 
  Copy, 
  Check, 
  ExternalLink, 
  MapPin, 
  Clock, 
  CheckCircle2 
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please specify sender identification (name).';
    if (!formData.email.trim()) {
      errs.email = 'Please specify return coordinates (email).';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please specify subject / project scope.';
    if (!formData.message.trim()) errs.message = 'Please provide transmission payload (message).';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 7000);
    }, 1200);
  };

  return (
    <section id="contact" className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-20 lg:py-28">
      {/* Section Header */}
      <div className="flex flex-col gap-2 mb-12">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono-code uppercase text-[#00f5ff] tracking-widest font-semibold">
            // TRANSMISSION PROTOCOL &amp; CONTACT CHANNELS
          </span>
          <div className="h-[1px] flex-grow max-w-xs bg-white/10"></div>
        </div>
        <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          Initiate Direct Communication
        </h2>
        <p className="text-sm sm:text-base text-slate-300 max-w-xl mt-1">
          Available for software engineering roles, generative AI engineering, or full-stack web and mobile initiatives.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Coordinates from Official CV */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Primary Phone Card (CV) */}
          <div className="glass-panel rounded-2xl p-6 flex items-center justify-between shadow-xl hover:border-[#00f5ff]/30 transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#00f5ff]/10 border border-[#00f5ff]/30 flex items-center justify-center text-[#00f5ff]">
                <Phone size={22} />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-mono-code uppercase text-slate-400">
                  PRIMARY PHONE (OFFICIAL CV)
                </span>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="font-sora text-base sm:text-lg font-bold text-white hover:text-[#00f5ff] transition-colors"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>

            <button
              onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
              className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-all"
              title="Copy Primary Phone"
              aria-label="Copy Primary Phone"
            >
              {copiedField === 'phone' ? (
                <Check size={16} className="text-emerald-400" />
              ) : (
                <Copy size={16} />
              )}
            </button>
          </div>

          {/* Alternate Contact Phone */}
          <div className="glass-panel rounded-2xl p-6 flex items-center justify-between shadow-xl hover:border-[#818cf8]/30 transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#818cf8]/10 border border-[#818cf8]/30 flex items-center justify-center text-[#818cf8]">
                <Phone size={22} />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-mono-code uppercase text-slate-400">
                  ALTERNATE DIRECT LINE
                </span>
                <a
                  href={`tel:${PERSONAL_INFO.phoneAlt}`}
                  className="font-sora text-base sm:text-lg font-bold text-white hover:text-[#818cf8] transition-colors"
                >
                  {PERSONAL_INFO.phoneAlt}
                </a>
              </div>
            </div>

            <button
              onClick={() => copyToClipboard(PERSONAL_INFO.phoneAlt, 'phoneAlt')}
              className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-all"
              title="Copy Alternate Phone"
              aria-label="Copy Alternate Phone"
            >
              {copiedField === 'phoneAlt' ? (
                <Check size={16} className="text-emerald-400" />
              ) : (
                <Copy size={16} />
              )}
            </button>
          </div>

          {/* Email Card */}
          <div className="glass-panel rounded-2xl p-6 flex items-center justify-between shadow-xl hover:border-[#c084fc]/30 transition-all truncate">
            <div className="flex items-center gap-4 truncate mr-2">
              <div className="w-12 h-12 rounded-xl bg-[#c084fc]/10 border border-[#c084fc]/30 flex items-center justify-center text-[#c084fc] shrink-0">
                <Mail size={22} />
              </div>
              <div className="flex flex-col truncate">
                <span className="text-[11px] font-mono-code uppercase text-slate-400">
                  SECURE INBOX
                </span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-sora text-sm sm:text-base font-bold text-white hover:text-[#c084fc] transition-colors truncate"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            <button
              onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
              className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-all shrink-0"
              title="Copy Email"
              aria-label="Copy Email"
            >
              {copiedField === 'email' ? (
                <Check size={16} className="text-emerald-400" />
              ) : (
                <Copy size={16} />
              )}
            </button>
          </div>

          {/* Location & Address Card */}
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
            <MapPin size={18} className="text-[#00f5ff] shrink-0 mt-0.5" />
            <div className="flex flex-col">
              <span className="text-xs font-mono-code text-white font-semibold">
                RESIDENCE &amp; LOCATION
              </span>
              <span className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                {PERSONAL_INFO.address}
              </span>
              <span className="text-[11px] font-mono-code text-slate-400 mt-1">
                References available upon request (Will be furnished upon demand)
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: High-End Transmission Form */}
        <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 shadow-2xl relative">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name Input */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-name"
                  className="text-xs font-mono-code uppercase text-slate-300 font-medium"
                >
                  Sender Identification
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: '' });
                  }}
                  placeholder="e.g. Dr. Alex Mercer / Tech Lead"
                  className={`w-full px-4 py-3 rounded-xl bg-[#080b14] border ${
                    errors.name ? 'border-rose-500' : 'border-white/10'
                  } text-white placeholder-slate-500 text-sm font-mono-code focus:outline-none focus:border-[#00f5ff] focus:ring-1 focus:ring-[#00f5ff] transition-all`}
                />
                {errors.name && (
                  <span className="text-xs text-rose-400 font-mono-code">{errors.name}</span>
                )}
              </div>

              {/* Email Input */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-email"
                  className="text-xs font-mono-code uppercase text-slate-300 font-medium"
                >
                  Return Coordinates (Email)
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: '' });
                  }}
                  placeholder="e.g. alex@company.ai"
                  className={`w-full px-4 py-3 rounded-xl bg-[#080b14] border ${
                    errors.email ? 'border-rose-500' : 'border-white/10'
                  } text-white placeholder-slate-500 text-sm font-mono-code focus:outline-none focus:border-[#00f5ff] focus:ring-1 focus:ring-[#00f5ff] transition-all`}
                />
                {errors.email && (
                  <span className="text-xs text-rose-400 font-mono-code">{errors.email}</span>
                )}
              </div>
            </div>

            {/* Subject Input */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-subject"
                className="text-xs font-mono-code uppercase text-slate-300 font-medium"
              >
                Project Scope / Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                value={formData.subject}
                onChange={(e) => {
                  setFormData({ ...formData, subject: e.target.value });
                  if (errors.subject) setErrors({ ...errors, subject: '' });
                }}
                placeholder="e.g. Autonomous AI Chat Pipeline / Full-Stack Initiative"
                className={`w-full px-4 py-3 rounded-xl bg-[#080b14] border ${
                  errors.subject ? 'border-rose-500' : 'border-white/10'
                } text-white placeholder-slate-500 text-sm font-mono-code focus:outline-none focus:border-[#00f5ff] focus:ring-1 focus:ring-[#00f5ff] transition-all`}
              />
              {errors.subject && (
                <span className="text-xs text-rose-400 font-mono-code">{errors.subject}</span>
              )}
            </div>

            {/* Message Area */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-message"
                className="text-xs font-mono-code uppercase text-slate-300 font-medium"
              >
                Transmission Payload (Message)
              </label>
              <textarea
                id="contact-message"
                rows={4}
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                  if (errors.message) setErrors({ ...errors, message: '' });
                }}
                placeholder="Outline project specifications, team opportunities, or engineering timelines..."
                className={`w-full px-4 py-3 rounded-xl bg-[#080b14] border ${
                  errors.message ? 'border-rose-500' : 'border-white/10'
                } text-white placeholder-slate-500 text-sm font-mono-code resize-none focus:outline-none focus:border-[#00f5ff] focus:ring-1 focus:ring-[#00f5ff] transition-all`}
              ></textarea>
              {errors.message && (
                <span className="text-xs text-rose-400 font-mono-code">{errors.message}</span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitting}
              className="mt-2 w-full py-3.5 px-6 rounded-xl bg-[#00f5ff] hover:bg-[#00dce5] text-[#090d16] font-sora text-sm font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,245,255,0.4)] hover:shadow-[0_0_28px_rgba(0,245,255,0.6)] transition-all transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60"
            >
              {submitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-[#090d16] border-t-transparent rounded-full animate-spin"></span>
                  <span>Transmitting Encrypted Payload...</span>
                </>
              ) : (
                <>
                  <span>Transmit Direct Message</span>
                  <Send size={16} />
                </>
              )}
            </button>

            {/* Success State Alert */}
            {submitted && (
              <div className="p-4 rounded-xl bg-[#00f5ff]/15 border border-[#00f5ff]/40 text-[#00f5ff] font-mono-code text-xs flex items-center gap-2.5 animate-in fade-in duration-300">
                <CheckCircle2 size={18} className="shrink-0" />
                <span>
                  TRANSMISSION RECEIVED: Thank you. Muhammad Ahmed will review your coordinates and respond promptly.
                </span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
