import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  MessageCircle,
  RotateCcw,
  Globe,
  Users,
  LayoutDashboard,
  Cpu,
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
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 },
      });
    } catch {
      // ignore
    }
  }, []);

  const handleConsultWhatsApp = () => {
    const adminWA = import.meta.env.VITE_WHATSAPP_ADMIN_NUMBER || '6281234567890';
    const text = encodeURIComponent(
      `Halo Tim Solusi Klik Lisensi,\n\nSaya ${formData.contactName} dari ${formData.businessName} (${formData.city}) baru saja menyelesaikan evaluasi di solution.kliklisensi.com.\n\nIndustri: ${formData.industry}\nKendala: ${formData.primaryBottleneckElaboration || 'Rekap operasional dan integrasi sistem'}\nSolusi yang diminati: ${formData.desiredSolution}\n\nSaya ingin konsultasi lebih lanjut terkait integrasi sistem untuk bisnis kami. Terima kasih.`
    );
    window.open(`https://wa.me/${adminWA}?text=${text}`, '_blank');
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-5 h-5 text-[#1D1D1F]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#1D1D1F]" />;
      case 'LayoutDashboard':
        return <LayoutDashboard className="w-5 h-5 text-[#1D1D1F]" />;
      case 'Sparkles':
      default:
        return <Cpu className="w-5 h-5 text-[#1D1D1F]" />;
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-6 py-6 space-y-12">
      {/* Header Summary */}
      <div className="text-center space-y-3">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1D1D1F] tracking-tight">
          Ringkasan Diagnostik: {formData.businessName}
        </h2>
        <p className="text-sm text-[#86868B]">
          {formData.industry} • {formData.city} • {formData.teamSize}
        </p>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-7 rounded-[18px] bg-white border border-[#E5E5E9] text-center shadow-apple-sm">
          <span className="text-xs font-semibold text-[#86868B]">
            Skor Kesiapan Digital
          </span>
          <div className="text-4xl font-extrabold text-[#1D1D1F] mt-2 mb-1">
            {diagnostic.readinessScore}<span className="text-lg text-[#86868B] font-normal">/100</span>
          </div>
          <p className="text-xs text-[#86868B]">Potensi efisiensi tinggi</p>
        </div>

        <div className="p-7 rounded-[18px] bg-white border border-[#E5E5E9] text-center shadow-apple-sm">
          <span className="text-xs font-semibold text-[#86868B]">
            Fase Operasional
          </span>
          <div className="text-xl font-bold text-[#1D1D1F] mt-3 mb-1">
            {diagnostic.digitalMaturityLevel}
          </div>
          <p className="text-xs text-[#86868B]">Perlu integrasi sistem</p>
        </div>

        <div className="p-7 rounded-[18px] bg-white border border-[#E5E5E9] text-center shadow-apple-sm">
          <span className="text-xs font-semibold text-[#86868B]">
            Target Eksekusi
          </span>
          <div className="text-xl font-bold text-[#1D1D1F] mt-3 mb-1">
            {formData.timeline}
          </div>
          <p className="text-xs text-[#86868B]">Jadwal implementasi</p>
        </div>
      </div>

      {/* Top 3 Detected Bottlenecks */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-[#1D1D1F] tracking-tight">
          Kendala Utama yang Teridentifikasi
        </h3>

        <div className="space-y-3">
          {diagnostic.topThreeBottlenecks.map((item, idx) => (
            <div
              key={item.id}
              className="p-5 rounded-[16px] bg-white border border-[#E5E5E9] shadow-apple-sm flex items-start gap-4"
            >
              <span className="w-6 h-6 rounded-full bg-[#F5F5F7] text-[#1D1D1F] font-semibold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-[#1D1D1F]">{item.title}</h4>
                <p className="text-xs text-[#86868B] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Solutions */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-[#1D1D1F] tracking-tight">
          Rekomendasi Arsitektur
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {diagnostic.recommendedSolutions.map((sol, index) => (
            <div
              key={index}
              className="p-6 rounded-[16px] bg-white border border-[#E5E5E9] shadow-apple-sm space-y-3"
            >
              <div className="w-9 h-9 rounded-[8px] bg-[#F5F5F7] flex items-center justify-center">
                {renderIcon(sol.icon)}
              </div>
              <h4 className="text-sm font-bold text-[#1D1D1F]">{sol.title}</h4>
              <p className="text-xs text-[#86868B] leading-relaxed">
                {sol.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Consultation Action Box */}
      <div className="p-8 sm:p-10 rounded-[20px] bg-white border border-[#E5E5E9] text-center space-y-6 shadow-apple-sm">
        <div className="space-y-2 max-w-md mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-[#1D1D1F] tracking-tight">
            Konsultasikan implementasinya bersama tim kami.
          </h3>
          <p className="text-xs sm:text-sm text-[#86868B]">
            Diskusikan kebutuhan integrasi sistem bisnis Anda secara langsung via WhatsApp.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={handleConsultWhatsApp}
            className="h-12 px-7 rounded-full bg-[#1D1D1F] hover:bg-[#3A3A3C] text-white text-sm font-medium inline-flex items-center justify-center gap-2 active:scale-[0.98] transition-all duration-150 shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Diskusi via WhatsApp</span>
          </button>

          <button
            onClick={onReset}
            className="h-12 px-6 rounded-full bg-white hover:bg-[#F5F5F7] text-[#505052] border border-[#E5E5E9] text-sm font-medium active:scale-[0.98] transition duration-150 inline-flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Mulai Ulang</span>
          </button>
        </div>
      </div>
    </div>
  );
};
