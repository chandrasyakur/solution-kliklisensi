import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, Zap, Cpu, BarChart3, Users } from 'lucide-react';

interface StepIntroProps {
  onStart: () => void;
}

export const StepIntro: React.FC<StepIntroProps> = ({ onStart }) => {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-4 sm:py-8">
      {/* Hero Badge */}
      <div className="text-center mb-5">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#EFF6FF] text-[#017EFC] border border-[#BFDBFE]">
          <Zap className="w-3.5 h-3.5 text-[#017EFC]" />
          Business Diagnostic & Digital Infrastructure Audit
        </span>
      </div>

      {/* Main Headline */}
      <div className="text-center space-y-3 mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#202125] leading-tight">
          Temukan <span className="text-[#017EFC]">3 Bottleneck Utama</span> Operasional Bisnis Anda
        </h1>
        <p className="text-base sm:text-lg text-[#515151] max-w-2xl mx-auto leading-relaxed">
          Apakah tim Anda masih berkutat dengan rekap manual, leads tercecer, atau pekerjaan repetitif? Luangkan <strong className="text-[#202125] font-semibold">3 menit</strong> untuk mengukur kesiapan digital bisnis Anda dan dapatkan rekomendasi solusi terarah.
        </p>
      </div>

      {/* 3 Pillars Value Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8">
        <div className="p-5 rounded-[12px] bg-white border border-[#E5E5E9] shadow-apple-sm hover:border-[#BFDBFE] transition duration-200">
          <div className="w-9 h-9 rounded-[8px] bg-[#EFF6FF] text-[#017EFC] flex items-center justify-center mb-3">
            <BarChart3 className="w-4 h-4" />
          </div>
          <h2 className="font-bold text-[#202125] text-sm mb-1">Diagnosa Presisi</h2>
          <p className="text-xs text-[#515151] leading-relaxed">
            Identifikasi kebocoran waktu dan profit dari sisi sales, operasional, dan retensi customer.
          </p>
        </div>

        <div className="p-5 rounded-[12px] bg-white border border-[#E5E5E9] shadow-apple-sm hover:border-[#BFDBFE] transition duration-200">
          <div className="w-9 h-9 rounded-[8px] bg-[#EFF6FF] text-[#017EFC] flex items-center justify-center mb-3">
            <Cpu className="w-4 h-4" />
          </div>
          <h2 className="font-bold text-[#202125] text-sm mb-1">Rekomendasi Nyata</h2>
          <p className="text-xs text-[#515151] leading-relaxed">
            Bukan software over-engineered. Rekomendasi solusi praktis: Website, CRM, atau Otomasi AI.
          </p>
        </div>

        <div className="p-5 rounded-[12px] bg-white border border-[#E5E5E9] shadow-apple-sm hover:border-[#BFDBFE] transition duration-200">
          <div className="w-9 h-9 rounded-[8px] bg-[#ECFDF5] text-[#10B981] flex items-center justify-center mb-3">
            <Users className="w-4 h-4" />
          </div>
          <h2 className="font-bold text-[#202125] text-sm mb-1">Diskusi 1-on-1</h2>
          <p className="text-xs text-[#515151] leading-relaxed">
            Opsi sesi konsultasi gratis bersama konsultan arsitektur digital kami untuk bedah kasus bisnis.
          </p>
        </div>
      </div>

      {/* CTA Box */}
      <div className="p-6 sm:p-8 rounded-[16px] bg-white border border-[#E5E5E9] text-center shadow-apple-md">
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-[#515151] mb-6 font-medium">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#017EFC]" />
            <span>Estimasi: 3 Menit</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#10B981]" />
            <span>Kerahasiaan Data Terjamin</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#017EFC]" />
            <span>100% Bebas Biaya</span>
          </div>
        </div>

        <button
          onClick={onStart}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#017EFC] hover:bg-[#006ee0] text-white font-bold text-sm shadow-md shadow-blue-500/25 active:scale-[0.98] transition-all duration-150"
        >
          <span>Mulai Diagnosa Bisnis Anda</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <p className="text-[12px] text-[#86868B] mt-3">
          Cocok untuk Pemilik Bisnis, Founder, Direktur, maupun Manajer Operasional.
        </p>
      </div>
    </div>
  );
};
