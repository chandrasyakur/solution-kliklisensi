import React from 'react';
import {
  ArrowRight,
  Cpu,
  Database,
  Globe,
  Radio,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Zap,
  TrendingUp,
} from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { AnimatedGraph } from './ui/AnimatedGraph';

interface StepIntroProps {
  onStart: () => void;
}

export const StepIntro: React.FC<StepIntroProps> = ({ onStart }) => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-4 sm:py-8 space-y-12">
      {/* 1. HERO SECTION: Judul -> Deskripsi Singkat -> LANGSUNG BUTTON */}
      <Reveal className="text-center space-y-5 max-w-3xl mx-auto" delay={50}>
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#EFF6FF] text-[#017EFC] border border-[#BFDBFE]">
          <Zap className="w-3.5 h-3.5 text-[#017EFC]" />
          <span>Infrastruktur Digital & Integrasi Bisnis</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#202125] leading-[1.18]">
          Modernisasi & Integrasikan <br className="hidden sm:inline" />
          <span className="text-[#017EFC]">Seluruh Ekosistem Digital</span> Bisnis Anda
        </h1>

        <p className="text-base sm:text-lg text-[#515151] max-w-2xl mx-auto leading-relaxed">
          Solusi terpadu untuk <strong className="text-[#202125] font-semibold">UMKM hingga Medium Business</strong>. Dari implementasi AI praktis, CRM WhatsApp terpusat, hingga integrasi database dan hardware POS/IoT—semua dirancang agar operasional bisnis Anda scalable tanpa ribet.
        </p>

        {/* CTA BUTTON LANGSUNG DI BAWAH DESKRIPSI UTAMA */}
        <div className="pt-2 flex flex-col items-center justify-center gap-3">
          <button
            onClick={onStart}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#017EFC] hover:bg-[#006ee0] text-white font-bold text-base shadow-lg shadow-blue-500/25 active:scale-[0.98] transition-all duration-150 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Mulai Diagnosa Kebutuhan Bisnis Anda</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#86868B] font-medium pt-1">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#017EFC]" />
              Hanya 3 Menit
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
              100% Bebas Biaya
            </span>
            <span>•</span>
            <span>Rekomendasi Arsitektur Digital Instan</span>
          </div>
        </div>
      </Reveal>

      {/* 2. ANIMATED GRAPHIC & REALTIME COUNT-UP METRICS */}
      <Reveal delay={150}>
        <AnimatedGraph />
      </Reveal>

      {/* 3. SOLUSI-SOLUSI YANG DITAWARKAN (UMKM, SMALL & MEDIUM BUSINESS) */}
      <div className="space-y-6 pt-2">
        <Reveal className="text-center space-y-2 max-w-2xl mx-auto" delay={100}>
          <span className="text-xs font-bold uppercase tracking-wider text-[#017EFC]">
            Lini Solusi & Kapabilitas
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202125] tracking-tight">
            Apa yang Bisa Diintegrasikan untuk Bisnis Anda?
          </h2>
          <p className="text-sm text-[#515151]">
            Kami tidak menjual software generik yang rumit. Kami membangun jembatan teknologi yang menyatukan sistem yang sudah berjalan di bisnis Anda.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card 1: AI Integration */}
          <Reveal delay={150}>
            <div className="p-6 rounded-[14px] bg-white border border-[#E5E5E9] shadow-apple-sm hover:border-[#BFDBFE] transition duration-200 h-full flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-[10px] bg-[#EFF6FF] text-[#017EFC] flex items-center justify-center mb-4">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#202125] text-base mb-2">
                  Implementasi Teknologi AI Praktis
                </h3>
                <p className="text-xs sm:text-sm text-[#515151] leading-relaxed mb-4">
                  AI bukan lagi mimpi mahal perusahaan enterprise. Hadirkan AI Agent cerdas untuk menjawab 70%+ FAQ pelanggan secara natural 24 jam nonstop, otomatisasi rekap penjualan, hingga asisten analitik data harian langsung ke WhatsApp Owner.
                </p>
              </div>
              <div className="pt-3 border-t border-[#E5E5E9] flex items-center justify-between text-xs text-[#017EFC] font-semibold">
                <span>Hasil: Hemat waktu rekap 80%</span>
                <TrendingUp className="w-4 h-4" />
              </div>
            </div>
          </Reveal>

          {/* Card 2: CRM & Database */}
          <Reveal delay={200}>
            <div className="p-6 rounded-[14px] bg-white border border-[#E5E5E9] shadow-apple-sm hover:border-[#BFDBFE] transition duration-200 h-full flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-[10px] bg-[#ECFDF5] text-[#10B981] flex items-center justify-center mb-4">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#202125] text-base mb-2">
                  Sentralisasi Database & CRM WhatsApp
                </h3>
                <p className="text-xs sm:text-sm text-[#515151] leading-relaxed mb-4">
                  Hentikan kebiasaan menyimpan kontak pelanggan di HP pribadi admin yang rawan hilang. Kami bangun database pelanggan terpusat dengan sistem auto-tagging, riwayat transaksi, dan jadwal broadcast follow-up otomatis yang meningkatkan repeat order.
                </p>
              </div>
              <div className="pt-3 border-t border-[#E5E5E9] flex items-center justify-between text-xs text-[#10B981] font-semibold">
                <span>Hasil: 0 prospek tercecer & repeat order naik</span>
                <TrendingUp className="w-4 h-4" />
              </div>
            </div>
          </Reveal>

          {/* Card 3: Modern Web & Conversion Funnel */}
          <Reveal delay={250}>
            <div className="p-6 rounded-[14px] bg-white border border-[#E5E5E9] shadow-apple-sm hover:border-[#BFDBFE] transition duration-200 h-full flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-[10px] bg-[#EFF6FF] text-[#017EFC] flex items-center justify-center mb-4">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#202125] text-base mb-2">
                  Website Kredibel & Portal Pemesanan Cepat
                </h3>
                <p className="text-xs sm:text-sm text-[#515151] leading-relaxed mb-4">
                  Ubah penawaran Anda menjadi mesin penjualan yang bekerja 24 jam. Kami rancang landing page berkecepatan tinggi, katalog interaktif, dan portal reservasi/checkout yang langsung memfilter calon pembeli serius sebelum masuk ke tim sales Anda.
                </p>
              </div>
              <div className="pt-3 border-t border-[#E5E5E9] flex items-center justify-between text-xs text-[#017EFC] font-semibold">
                <span>Hasil: Konversi traffic naik hingga 3.4x</span>
                <TrendingUp className="w-4 h-4" />
              </div>
            </div>
          </Reveal>

          {/* Card 4: Hardware, POS & IoT Integration */}
          <Reveal delay={300}>
            <div className="p-6 rounded-[14px] bg-white border border-[#E5E5E9] shadow-apple-sm hover:border-[#BFDBFE] transition duration-200 h-full flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-[10px] bg-[#FFFBEB] text-[#B45309] flex items-center justify-center mb-4">
                  <Radio className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#202125] text-base mb-2">
                  Integrasi Hardware, POS Kasir & IoT
                </h3>
                <p className="text-xs sm:text-sm text-[#515151] leading-relaxed mb-4">
                  Untuk bisnis ritel, F&B, maupun manufaktur/gudang: kami sanggup mengintegrasikan sistem kasir (POS), scanner barcode, mutasi perbankan otomatis, hingga perangkat hardware IoT agar sinkron dengan laporan cloud secara real-time.
                </p>
              </div>
              <div className="pt-3 border-t border-[#E5E5E9] flex items-center justify-between text-xs text-[#B45309] font-semibold">
                <span>Hasil: 100% data transaksi & stok sinkron</span>
                <TrendingUp className="w-4 h-4" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* 4. HASIL & NILAI TAMBAH BISNIS (WHY KLIK SOLUTION) */}
      <Reveal delay={100}>
        <div className="p-6 sm:p-8 rounded-[16px] bg-[#F5F5F7] border border-[#E5E5E9]">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-center space-y-1">
              <h3 className="text-xl font-bold text-[#202125]">
                Dibuat Khusus untuk Kebutuhan Riil Operasional
              </h3>
              <p className="text-xs sm:text-sm text-[#515151]">
                Kami paham tantangan para pemilik bisnis: butuh solusi yang cepat jalan, hemat biaya, dan tidak memberatkan tim lapangan.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#202125]">
              <div className="flex items-start gap-2.5 p-3 rounded-[10px] bg-white border border-[#E5E5E9]">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                <span><strong>Bebas Over-engineering:</strong> Solusi bertahap sesuai skala & budget bisnis Anda.</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-[10px] bg-white border border-[#E5E5E9]">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                <span><strong>Integrasi Sistem Lama:</strong> Tidak perlu buang tools yang sudah nyaman dipakai tim.</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-[10px] bg-white border border-[#E5E5E9]">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                <span><strong>Eksperiens Tim Lapangan:</strong> UI mudah dipahami oleh staf kasir, admin, hingga owner.</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-[10px] bg-white border border-[#E5E5E9]">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                <span><strong>Konsultasi & Pendampingan:</strong> Didampingi langsung dari tahap analisa hingga go-live.</span>
              </div>
            </div>

            {/* Bottom Mini CTA */}
            <div className="text-center pt-2">
              <button
                onClick={onStart}
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#017EFC] hover:bg-[#006ee0] text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/20 active:scale-[0.98] transition cursor-pointer"
              >
                <span>Mulai Diagnosa Bisnis Anda Sekarang</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
