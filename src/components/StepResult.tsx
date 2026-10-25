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
    try {
      confetti({
        particleCount: 70,
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
      `Halo Tim Solusi Klik Lisensi (Sabik & Chandra),\n\nSaya ${formData.contactName} dari ${formData.businessName} (${formData.city}) baru saja menyelesaikan Business Diagnostic Tool di solution.kliklisensi.com.\n\nIndustri: ${formData.industry}\nKendala Utama: ${formData.primaryBottleneckElaboration || 'Rekap operasional & follow up leads'}\nSolusi yang diminati: ${formData.desiredSolution}\n\nSaya ingin diskusi lebih lanjut mengenai rekomendasi arsitektur digital untuk bisnis kami. Terima kasih!`
    );
    window.open(`https://wa.me/${adminWA}?text=${text}`, '_blank');
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-5 h-5 text-[#017EFC]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#10B981]" />;
      case 'LayoutDashboard':
        return <LayoutDashboard className="w-5 h-5 text-[#8B5CF6]" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-5 h-5 text-[#F59E0B]" />;
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-2 space-y-6">
      {/* Top Success Banner */}
      <div className="p-6 rounded-[16px] bg-[#ECFDF5] border border-[#A7F3D0] text-center space-y-2">
        <div className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white text-[#10B981] shadow-xs mb-1">
          <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
        </div>
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#065F46]">
            Diagnosa Selesai Dibuat
          </span>
          <h2 className="text-2xl font-extrabold text-[#202125] tracking-tight mt-0.5">
            Ringkasan Kesiapan Digital: {formData.businessName}
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-[#515151] mt-2 font-medium">
            <span className="flex items-center gap-1">
              <Building className="w-3.5 h-3.5 text-[#017EFC]" />
              {formData.industry}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#017EFC]" />
              {formData.city}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-[#017EFC]" />
              {formData.teamSize}
            </span>
          </div>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        {/* Score Card */}
        <div className="p-5 rounded-[12px] bg-white border border-[#E5E5E9] text-center shadow-apple-sm">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#86868B]">
            Skor Kesiapan Digital
          </span>
          <div className="flex items-center justify-center gap-1 my-1.5">
            <span className="text-4xl font-extrabold text-[#202125]">
              {diagnostic.readinessScore}
            </span>
            <span className="text-[#86868B] text-lg font-bold">/100</span>
          </div>
          <p className="text-[11px] text-[#515151]">
            Potensi efisiensi operasional sangat tinggi untuk ditingkatkan.
          </p>
        </div>

        {/* Phase Card */}
        <div className="p-5 rounded-[12px] bg-white border border-[#E5E5E9] text-center shadow-apple-sm">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#86868B]">
            Tahap Kematangan
          </span>
          <div className="my-2">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#FFFBEB] text-[#92400E] border border-[#FDE68A]">
              {diagnostic.digitalMaturityLevel}
            </span>
          </div>
          <p className="text-[11px] text-[#515151]">
            Proses bisnis mulai membesar melampaui kapasitas metode manual.
          </p>
        </div>

        {/* Urgency Card */}
        <div className="p-5 rounded-[12px] bg-white border border-[#E5E5E9] text-center shadow-apple-sm">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#86868B]">
            Urgensi Modernisasi
          </span>
          <div className="my-2">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#EFF6FF] text-[#017EFC] border border-[#BFDBFE]">
              Prioritas Tinggi
            </span>
          </div>
          <p className="text-[11px] text-[#515151]">
            Target perbaikan: {formData.timeline}
          </p>
        </div>
      </div>

      {/* Top 3 Bottlenecks Detected */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-[#F59E0B]" />
          <h3 className="font-bold text-[#202125] text-base">
            Top 3 Bottleneck Utama yang Perlu Diatasi
          </h3>
        </div>

        <div className="space-y-2.5">
          {diagnostic.topThreeBottlenecks.map((item, idx) => (
            <div
              key={item.id}
              className="p-4 rounded-[12px] bg-white border border-[#E5E5E9] shadow-apple-sm flex items-start gap-3.5"
            >
              <div className="w-6 h-6 rounded-full bg-[#FFFBEB] text-[#B45309] font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#FDE68A]">
                {idx + 1}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-sm font-semibold text-[#202125]">{item.title}</h4>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#EFF6FF] text-[#017EFC] border border-[#BFDBFE]">
                    Solusi: {item.solutionTag}
                  </span>
                </div>
                <p className="text-xs text-[#515151] mt-1 leading-relaxed">
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
          <TrendingUp className="w-4 h-4 text-[#017EFC]" />
          <h3 className="font-bold text-[#202125] text-base">
            Rekomendasi Arsitektur Digital untuk {formData.businessName}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {diagnostic.recommendedSolutions.map((sol, index) => (
            <div
              key={index}
              className="p-4 rounded-[12px] bg-white border border-[#E5E5E9] shadow-apple-sm hover:border-[#BFDBFE] transition duration-150 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-[8px] bg-[#F5F5F7]">
                    {renderIcon(sol.icon)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#EFF6FF] text-[#017EFC] border border-[#BFDBFE]">
                    Rekomendasi #{index + 1}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-[#202125] mb-1">{sol.title}</h4>
                <p className="text-xs text-[#515151] leading-relaxed">
                  {sol.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action / Consultation Offer */}
      <div className="p-6 sm:p-8 rounded-[16px] bg-white border-2 border-[#BFDBFE] text-center space-y-4 shadow-apple-md">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#EFF6FF] text-[#017EFC] border border-[#BFDBFE]">
          <Sparkles className="w-3.5 h-3.5 text-[#017EFC]" />
          Langkah Selanjutnya (Next Action)
        </span>

        <h3 className="text-xl sm:text-2xl font-extrabold text-[#202125] tracking-tight">
          Ingin Bedah Kasus & Rancang Roadmap Solusinya Bersama Kami?
        </h3>

        <p className="text-xs sm:text-sm text-[#515151] max-w-xl mx-auto leading-relaxed">
          Tim Klik Solution (Sabik & Chandra) siap membantu menganalisis spesifikasi teknis, estimasi timeline, dan rekomendasi implementasi (Website, CRM, atau Otomasi AI) dalam sesi konsultasi strategis 20 menit bebas biaya.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={handleConsultWhatsApp}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#10B981] hover:bg-[#059669] text-white font-bold text-sm shadow-md shadow-emerald-500/20 active:scale-[0.98] transition-all duration-150"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Diskusi Langsung via WhatsApp</span>
          </button>

          <button
            onClick={onReset}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white hover:bg-[#F5F5F7] text-[#515151] hover:text-[#202125] border border-[#E5E5E9] text-xs font-semibold active:scale-[0.98] transition duration-150"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Mulai Diagnostik Baru</span>
          </button>
        </div>

        <p className="text-[11px] text-[#86868B] pt-1">
          PIC yang terdaftar: <strong className="text-[#202125]">{formData.contactName}</strong> ({formData.whatsapp})
        </p>
      </div>
    </div>
  );
};
