import React from 'react';
import { ArrowRight, Globe, Database, Cpu } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { AnimatedGraph } from './ui/AnimatedGraph';

interface StepIntroProps {
  onStart: () => void;
}

export const StepIntro: React.FC<StepIntroProps> = ({ onStart }) => {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-12 sm:py-20 space-y-24">
      {/* 1. HERO: Clean, Bold, Spacious */}
      <Reveal className="text-center space-y-8 max-w-2xl mx-auto" delay={50}>
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1D1D1F] leading-[1.12]">
            Infrastruktur digital untuk bisnis yang ingin bertumbuh.
          </h1>
          <p className="text-base sm:text-lg text-[#86868B] font-normal leading-relaxed max-w-xl mx-auto">
            Integrasi website, database terpusat, CRM, dan automasi AI untuk UMKM hingga bisnis menengah.
          </p>
        </div>

        {/* Primary CTA Button: Standard Apple / Framer Token */}
        <div>
          <button
            onClick={onStart}
            className="h-12 px-7 rounded-full bg-[#1D1D1F] hover:bg-[#3A3A3C] text-white text-sm font-medium inline-flex items-center justify-center gap-2 active:scale-[0.98] transition-all duration-150 shadow-sm"
          >
            <span>Mulai Diagnostik Bisnis</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </Reveal>

      {/* 2. INTERACTIVE SHOWCASE GRAPHIC */}
      <Reveal delay={150}>
        <AnimatedGraph />
      </Reveal>

      {/* 3. THREE CORE PILLARS: Concise, Zero Redundancy */}
      <div className="space-y-8">
        <Reveal className="text-center" delay={100}>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F] tracking-tight">
            Fondasi teknologi yang kami bangun.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Reveal delay={150}>
            <div className="p-7 rounded-[18px] bg-white border border-[#E5E5E9] shadow-apple-sm space-y-3 h-full">
              <div className="w-10 h-10 rounded-[10px] bg-[#F5F5F7] text-[#1D1D1F] flex items-center justify-center">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-base text-[#1D1D1F]">
                Website & Funnel
              </h3>
              <p className="text-xs sm:text-sm text-[#86868B] leading-relaxed">
                Halaman penawaran dan katalog interaktif yang memfilter calon pembeli secara otomatis.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="p-7 rounded-[18px] bg-white border border-[#E5E5E9] shadow-apple-sm space-y-3 h-full">
              <div className="w-10 h-10 rounded-[10px] bg-[#EFF6FF] text-[#017EFC] flex items-center justify-center">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-base text-[#1D1D1F]">
                Database & POS
              </h3>
              <p className="text-xs sm:text-sm text-[#86868B] leading-relaxed">
                Sinkronisasi data stok fisik, transaksi kasir, dan pencatatan keuangan secara terpusat.
              </p>
            </div>
          </Reveal>

          <Reveal delay={250}>
            <div className="p-7 rounded-[18px] bg-white border border-[#E5E5E9] shadow-apple-sm space-y-3 h-full">
              <div className="w-10 h-10 rounded-[10px] bg-[#F3E8FF] text-[#8B5CF6] flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-base text-[#1D1D1F]">
                CRM & Automasi AI
              </h3>
              <p className="text-xs sm:text-sm text-[#86868B] leading-relaxed">
                Follow-up prospek WhatsApp otomatis dan asisten pintar untuk menangani pertanyaan rutin.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* 4. BOTTOM ACTION: Consistent Token */}
      <Reveal delay={150}>
        <div className="p-10 sm:p-12 rounded-[20px] bg-white border border-[#E5E5E9] text-center space-y-6 shadow-apple-sm">
          <div className="space-y-2 max-w-md mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1D1D1F] tracking-tight">
              Siap memetakan kebutuhan sistem Anda?
            </h3>
            <p className="text-xs sm:text-sm text-[#86868B]">
              Lakukan evaluasi singkat untuk menemukan prioritas integrasi yang paling relevan.
            </p>
          </div>

          <div>
            <button
              onClick={onStart}
              className="h-12 px-7 rounded-full bg-[#1D1D1F] hover:bg-[#3A3A3C] text-white text-sm font-medium inline-flex items-center justify-center gap-2 active:scale-[0.98] transition-all duration-150 shadow-sm"
            >
              <span>Mulai Diagnostik Bisnis</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
