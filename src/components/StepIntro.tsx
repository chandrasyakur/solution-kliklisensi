import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, Zap, Cpu, BarChart3, Users } from 'lucide-react';

interface StepIntroProps {
  onStart: () => void;
}

export const StepIntro: React.FC<StepIntroProps> = ({ onStart }) => {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-6">
      {/* Hero Badge */}
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
          <Zap className="w-3.5 h-3.5 text-indigo-400" />
          Diagnostic & Infrastructure Assessment
        </span>
      </div>

      {/* Main Headline */}
      <div className="text-center space-y-4 mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Temukan <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">3 Bottleneck Utama</span> Operasional Bisnis Anda
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Apakah tim Anda masih berkutat dengan rekap manual, leads tercecer, atau pekerjaan repetitif? Luangkan <strong className="text-white">3 menit</strong> untuk mengukur kesiapan digital bisnis Anda dan dapatkan rekomendasi solusi terarah.
        </p>
      </div>

      {/* 3 Pillars Value Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/40 transition duration-300">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-3">
            <BarChart3 className="w-5 h-5" />
          </div>
          <h2 className="font-bold text-white text-sm mb-1">Diagnosa Presisi</h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            Identifikasi kebocoran waktu dan profit dari sisi sales, operasional, dan retensi customer.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-violet-500/40 transition duration-300">
          <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center mb-3">
            <Cpu className="w-5 h-5" />
          </div>
          <h2 className="font-bold text-white text-sm mb-1">Rekomendasi Nyata</h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            Bukan software over-engineered. Rekomendasi solusi praktis: Website, CRM, atau Otomasi AI.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/40 transition duration-300">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-3">
            <Users className="w-5 h-5" />
          </div>
          <h2 className="font-bold text-white text-sm mb-1">Diskusi 1-on-1</h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            Opsi sesi konsultasi gratis bersama konsultan arsitektur digital kami untuk bedah kasus bisnis.
          </p>
        </div>
      </div>

      {/* CTA Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-indigo-950/40 via-slate-900/80 to-slate-900/90 border border-indigo-500/30 text-center shadow-xl shadow-indigo-950/30">
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 mb-6">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-indigo-400" />
            <span>Estimasi: 3 Menit</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Kerahasiaan Data Terjamin</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-violet-400" />
            <span>100% Bebas Biaya</span>
          </div>
        </div>

        <button
          onClick={onStart}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold text-base shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transform hover:-translate-y-0.5 active:translate-y-0 transition duration-200"
        >
          <span>Mulai Diagnosa Bisnis Anda</span>
          <ArrowRight className="w-5 h-5" />
        </button>

        <p className="text-[12px] text-slate-500 mt-4">
          Cocok untuk Pemilik Bisnis, Founder, Direktur, maupun Manajer Operasional.
        </p>
      </div>
    </div>
  );
};
