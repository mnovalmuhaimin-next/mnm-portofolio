import React, { useState } from 'react';
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Globe, 
  MessageSquare, 
  Copy, 
  Check, 
  Sparkles,
  ExternalLink,
  Clock,
  ArrowUpRight
} from 'lucide-react';
import { CV_DATA } from '../data/cvData';
import confetti from 'canvas-confetti';

interface ContactSectionProps {
  darkMode: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ darkMode }) => {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  
  // Form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 }
    });

    setSubmitted(true);
  };

  const handleSendViaWhatsApp = () => {
    const text = `Halo Noval, saya ${formData.name || 'Rekan/Recruiter'} (${formData.email || '-'}).%0A%0ATopik: ${formData.subject || 'Diskusi Peluang Kerja/Proyek'}%0A%0APesan:%0A${formData.message || 'Saya ingin berdiskusi lebih lanjut terkait portofolio Anda.'}`;
    window.open(`https://wa.me/6281326690102?text=${text}`, '_blank');
  };

  const handleSendViaEmail = () => {
    const subject = encodeURIComponent(formData.subject || `Pesan dari Portofolio - ${formData.name}`);
    const body = encodeURIComponent(`Halo Muhammad Noval Muhaimin,\n\nNama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`);
    window.location.href = `mailto:${CV_DATA.personal.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="kontak" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-semibold tracking-wider uppercase mb-3 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <Send className="w-3.5 h-3.5" />
            <span>Mari Berkolaborasi</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Hubungi Saya & Diskusikan Peluang
          </h2>
          <p className={`mt-3 text-base sm:text-lg leading-relaxed ${
            darkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Terbuka untuk posisi Fullstack Developer, System Administrator, Pengelola Data, maupun proyek kolaboratif lainnya. Respons cepat via WhatsApp dan Email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Card (Primary Fast Track) */}
            <div className={`p-5 rounded-2xl border transition-all ${
              darkMode 
                ? 'bg-emerald-950/20 border-emerald-500/30 hover:border-emerald-500/50' 
                : 'bg-emerald-50/50 border-emerald-200 hover:border-emerald-300'
            }`}>
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-emerald-400">WhatsApp Langsung</h3>
                    <p className={`text-xs ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                      Respons cepat untuk rekrutmen & proyek
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">
                  Fast Response
                </span>
              </div>

              <div className="mt-4">
                <a
                  href={CV_DATA.personal.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-500 transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Buka Chat di WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className={`p-5 rounded-2xl border transition-all ${
              darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className={`font-bold text-sm ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Email Resmi
                  </h3>
                  <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    {CV_DATA.personal.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${CV_DATA.personal.email}`}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold bg-indigo-600 text-white hover:bg-indigo-500 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Kirim Email</span>
                </a>
                <button
                  onClick={() => handleCopy(CV_DATA.personal.email, 'email')}
                  className={`p-2 rounded-xl border text-xs transition-colors ${
                    darkMode ? 'border-slate-700 hover:bg-slate-800 text-slate-300' : 'border-slate-200 hover:bg-slate-100 text-slate-700'
                  }`}
                  title="Salin Email"
                >
                  {copiedType === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Professional Network Links */}
            <div className={`p-5 rounded-2xl border space-y-3 ${
              darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              {/* LinkedIn */}
              <a
                href={CV_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center justify-between p-2.5 rounded-xl border transition-colors group ${
                  darkMode ? 'border-slate-800 hover:border-sky-500/40 hover:bg-slate-850' : 'border-slate-200 hover:border-sky-300 hover:bg-sky-50/50'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-sky-400" />
                  <span className={`text-xs font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                    LinkedIn Profile
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-sky-400 transition-colors" />
              </a>

              {/* Website Domain */}
              <a
                href={CV_DATA.personal.portfolioUrl}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center justify-between p-2.5 rounded-xl border transition-colors group ${
                  darkMode ? 'border-slate-800 hover:border-indigo-500/40 hover:bg-slate-850' : 'border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/50'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Globe className="w-4 h-4 text-indigo-400" />
                  <span className={`text-xs font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                    {CV_DATA.personal.portfolioDomain}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-400 transition-colors" />
              </a>

              {/* Location Tag */}
              <div className={`flex items-center gap-2.5 p-2.5 rounded-xl text-xs ${
                darkMode ? 'bg-slate-950 text-slate-400' : 'bg-slate-50 text-slate-600'
              }`}>
                <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                <span>{CV_DATA.personal.location} (Siap Relokasi / Remote)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Message Form */}
          <div className={`lg:col-span-7 p-6 sm:p-8 rounded-2xl border ${
            darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-xl shadow-slate-200/50'
          }`}>
            <h3 className={`text-xl font-bold mb-2 flex items-center gap-2 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span>Tinggalkan Pesan Cepat</span>
            </h3>
            <p className={`text-xs mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Kirimkan tawaran rekrutmen atau tawaran proyek. Pesan dapat diteruskan langsung ke WhatsApp atau Email.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-base text-emerald-400">Pesan Siap Diteruskan!</h4>
                  <p className={`text-xs ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    Terima kasih telah menghubungi, <strong>{formData.name}</strong>. Pilih jalur pengiriman di bawah untuk langsung terhubung:
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    onClick={handleSendViaWhatsApp}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-500 transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Lanjutkan via WhatsApp</span>
                  </button>
                  <button
                    onClick={handleSendViaEmail}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 text-white hover:bg-indigo-500 transition-colors cursor-pointer"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Lanjutkan via Email Client</span>
                  </button>
                </div>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className={`text-xs underline hover:no-underline pt-2 inline-block ${
                    darkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}
                >
                  Tulis pesan baru
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className={`text-xs font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Budi Santoso"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors ${
                        darkMode 
                          ? 'bg-slate-950/80 border-slate-800 text-white placeholder-slate-500' 
                          : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className={`text-xs font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      Alamat Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. recruiter@perusahaan.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors ${
                        darkMode 
                          ? 'bg-slate-950/80 border-slate-800 text-white placeholder-slate-500' 
                          : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className={`text-xs font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    Subjek / Nama Perusahaan
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Tawaran Posisi Fullstack Developer (Laravel & Next.js)"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors ${
                      darkMode 
                        ? 'bg-slate-950/80 border-slate-800 text-white placeholder-slate-500' 
                        : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className={`text-xs font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    Pesan Anda *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tuliskan gambaran proyek, kualifikasi posisi, atau detail diskusi yang Anda rencanakan..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors ${
                      darkMode 
                        ? 'bg-slate-950/80 border-slate-800 text-white placeholder-slate-500' 
                        : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold bg-indigo-600 text-white hover:bg-indigo-500 shadow-md shadow-indigo-600/30 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Kirim Pesan</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendViaWhatsApp}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold bg-emerald-600 text-white hover:bg-emerald-500 shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Langsung WhatsApp</span>
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
