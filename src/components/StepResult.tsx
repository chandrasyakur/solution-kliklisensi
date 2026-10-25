import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  CheckCircle2,
  TrendingUp,
  AlertTriangle,
  MessageCircle,
  RotateCcw,
  Sparkles,
  Globe,
  Users,
  LayoutDashboard,
  Building,
  MapPin,
} from 'lucide-react';
import { AssessmentFormData, DiagnosticResult } from '../types/assessment';

interface StepResultProps {
  formData: AssessmentFormData;
  diagnostic: DiagnosticResult;
  onReset: () => void;
}

export const StepResult: React.FC<StepResultProps> = ({
  formData,
  diagnostic,
  onReset,
}) => {
  useEffect(() => {
    // Fire celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // ignore
    }
  }, []);

  // WhatsApp click handler dengan pre-filled message yang profesional
  const handleConsultWhatsApp = () => {
    const adminWA = import.meta.env.VITE_WHATSAPP_ADMIN_NUMBER || '6281234567890';
    const text = encodeURIComponent(
      `Halo Tim Solusi Klik Lisensi (Sabik & Chandra),\n\nSaya ${formData.contactName} dari ${formData.businessName} (${formData.city}) baru saja menyelesaikan Business Diagnostic Tool.\n\nIndustri: ${formData.industry}\nKendala Utama: ${formData.primaryBottleneckElaboration || 'Rekap operasional & follow up leads'}\nSolusi yang diminati: ${formData.desiredSolution}\n\nSaya ingin diskusi lebih lanjut mengenai rekomendasi arsitektur digital untuk bisnis kami. Terima kasih!`
    );
    window.open(`https://wa.me/${adminWA}?text=${text}`, '_blank');
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-5 h-5 text-indigo-400" />;
      case 'Users':
        return <Users className="w-5 h-5 text-emerald-400" />;
      case 'LayoutDashboard':
        return <LayoutDashboard className="w-5 h-5 text-violet-400" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-4 space-y-8">
      {/* Top Success Banner */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-indigo-950/40 border border-emerald-500/30 text-center space-y-3">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 ring-4 ring-emerald-500/20 mb-1">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
            Diagnosa Selesai Dibuat
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
            Ringkasan Kesiapan Digital: {formData.businessName}
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400 mt-2">
            <span className="flex items-center gap-1">
              <Building className="w-3.5 h-3.5 text-indigo-400" />
              {formData.industry}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-indigo-400" />
              {formData.city}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-indigo-400" />
              {formData.teamSize}
            </span>
          </div>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Score Card */}
        <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 text-center">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            Skor Kesiapan Digital
          </span>
          <div className="flex items-center justify-center gap-1 my-2">
            <span className="text-4xl font-extrabold text-white">
              {diagnostic.readinessScore}
            </span>
            <span className="text-slate-500 text-lg font-bold">/100</span>
          </div>
          <p className="text-[11px] text-slate-400">
            Potensi efisiensi operasional sangat tinggi untuk ditingkatkan.
          </p>
        </div>

        {/* Phase Card */}
        <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 text-center">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            Tahap Kematangan
          </span>
          <div className="my-2">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-300 border border-amber-500/20">
              {diagnostic.digitalMaturityLevel}
            </span>
          </div>
          <p className="text-[11px] text-slate-400">
            Proses bisnis mulai membesar melampaui kapasitas metode manual.
          </p>
        </div>

        {/* Urgency Card */}
        <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 text-center">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            Urgensi Modernisasi
          </span>
          <div className="my-2">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
              Prioritas Tinggi
            </span>
          </div>
          <p className="text-[11px] text-slate-400">
            Target perbaikan: {formData.timeline}
          </p>
        </div>
      </div>

      {/* Top 3 Bottlenecks Detected */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-400" />
          <h3 className="font-bold text-white text-base">
            Top 3 Bottleneck Utama yang Perlu Diatasi
          </h3>
        </div>

        <div className="space-y-2.5">
          {diagnostic.topThreeBottlenecks.map((item, idx) => (
            <div
              key={item.id}
              className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3.5"
            >
              <div className="w-6 h-6 rounded-full bg-amber-500/10 text-amber-400 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5 border border-amber-500/20">
                {idx + 1}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    Solusi: {item.solutionTag}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Digital Solutions */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-indigo-400" />
          <h3 className="font-bold text-white text-base">
            Rekomendasi Arsitektur Digital untuk {formData.businessName}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {diagnostic.recommendedSolutions.map((sol, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-indigo-500/30 transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-lg bg-slate-800/80">
                    {renderIcon(sol.icon)}
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Rekomendasi #{index + 1}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white mb-1.5">{sol.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {sol.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Big Action / Consultation Offer */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-tr from-indigo-950 via-slate-900 to-violet-950 border border-indigo-500/40 text-center space-y-4 shadow-2xl shadow-indigo-950/50">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          Langkah Selanjutnya (Next Action)
        </span>

        <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
          Ingin Bedah Kasus & Rancang Roadmap Solusinya Bersama Kami?
        </h3>

        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
          Tim Klik Solution (Sabik & Chandra) siap membantu menganalisis spesifikasi teknis, estimasi timeline, dan rekomendasi implementasi (Website, CRM, atau Otomasi AI) dalam sesi konsultasi strategis 20 menit bebas biaya.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={handleConsultWhatsApp}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transform hover:-translate-y-0.5 transition duration-200"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Diskusi Langsung via WhatsApp</span>
          </button>

          <button
            onClick={onReset}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-semibold transition"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Mulai Diagnostik Baru</span>
          </button>
        </div>

        <p className="text-[11px] text-slate-500 pt-1">
          PIC yang terdaftar: <strong className="text-slate-400">{formData.contactName}</strong> ({formData.whatsapp})
        </p>
      </div>
    </div>
  );
};
