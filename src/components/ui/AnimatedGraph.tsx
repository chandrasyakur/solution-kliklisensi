import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Cpu, Database, ShoppingBag } from 'lucide-react';
import { CountUp } from './CountUp';

export const AnimatedGraph: React.FC = () => {
  const [isDrawn, setIsDrawn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsDrawn(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full rounded-[20px] bg-white border border-[#E5E5E9] p-8 sm:p-10 shadow-apple-sm transition-all duration-300">
      {/* Top Architecture Connectivity Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#E5E5E9]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
          <span className="text-xs font-semibold text-[#1D1D1F]">
            Ekosistem Terintegrasi
          </span>
        </div>

        <div className="flex items-center gap-6 text-xs text-[#505052]">
          <div className="flex items-center gap-1.5">
            <ShoppingBag className="w-3.5 h-3.5 text-[#505052]" />
            <span>POS & Transaksi</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Database className="w-3.5 h-3.5 text-[#017EFC]" />
            <span>Database Terpusat</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-[#8B5CF6]" />
            <span>AI Automasi</span>
          </div>
        </div>
      </div>

      {/* Middle Animated Rising Spline */}
      <div className="py-8">
        <div className="flex items-baseline justify-between mb-2">
          <div>
            <div className="text-4xl sm:text-5xl font-extrabold text-[#1D1D1F] tracking-tight">
              <CountUp to={85} suffix="%" duration={1600} />
            </div>
            <p className="text-xs text-[#86868B] mt-1">Efisiensi waktu operasional</p>
          </div>

          <div className="inline-flex items-center gap-1 text-xs font-semibold text-[#10B981] bg-[#ECFDF5] px-2.5 py-1 rounded-full border border-[#A7F3D0]">
            <ArrowUpRight className="w-3.5 h-3.5" />
            <span>+3.4x Konversi</span>
          </div>
        </div>

        {/* Minimalist SVG Spline Curve */}
        <div className="h-40 w-full relative pt-2">
          <svg
            viewBox="0 0 600 140"
            className="w-full h-full overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="appleCurveGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#017EFC" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#017EFC" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Subtle horizontal grid guide */}
            <line x1="0" y1="40" x2="600" y2="40" stroke="#F5F5F7" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="0" y1="90" x2="600" y2="90" stroke="#F5F5F7" strokeWidth="1" strokeDasharray="4 4" />

            {/* Shaded Area */}
            <path
              d="M 10 130 C 140 125, 260 90, 380 50 C 460 25, 530 15, 590 10 L 590 135 L 10 135 Z"
              fill="url(#appleCurveGrad)"
              className="transition-opacity duration-700"
              style={{ opacity: isDrawn ? 1 : 0 }}
            />

            {/* Smooth Stroke Line */}
            <path
              d="M 10 130 C 140 125, 260 90, 380 50 C 460 25, 530 15, 590 10"
              stroke="#017EFC"
              strokeWidth="3"
              strokeLinecap="round"
              style={{
                strokeDasharray: 700,
                strokeDashoffset: isDrawn ? 0 : 700,
                transition: 'stroke-dashoffset 1.6s cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            />

            {/* Interactive End Dot */}
            <circle cx="590" cy="10" r="5" fill="#017EFC" stroke="#FFFFFF" strokeWidth="2.5" />
          </svg>
        </div>
      </div>

      {/* Bottom Clean Numbers (No Clutter) */}
      <div className="pt-6 border-t border-[#E5E5E9] grid grid-cols-3 gap-6 text-center">
        <div>
          <div className="text-xl sm:text-2xl font-bold text-[#1D1D1F]">
            <CountUp to={100} suffix="%" duration={1600} />
          </div>
          <div className="text-xs text-[#86868B] mt-0.5">Data Tersinkron</div>
        </div>
        <div>
          <div className="text-xl sm:text-2xl font-bold text-[#1D1D1F]">
            <CountUp to={24} suffix="/7" duration={1400} />
          </div>
          <div className="text-xs text-[#86868B] mt-0.5">AI Siaga</div>
        </div>
        <div>
          <div className="text-xl sm:text-2xl font-bold text-[#1D1D1F]">
            <CountUp to={3.4} suffix="x" decimals={1} duration={1800} />
          </div>
          <div className="text-xs text-[#86868B] mt-0.5">Pertumbuhan Lead</div>
        </div>
      </div>
    </div>
  );
};
