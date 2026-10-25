import React, { useEffect, useState } from 'react';
import { Cpu, MessageSquare, ShoppingBag, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { CountUp } from './CountUp';

export const AnimatedGraph: React.FC = () => {
  const [isDrawn, setIsDrawn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsDrawn(true), 250);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full rounded-[16px] bg-white border border-[#E5E5E9] shadow-apple-md p-5 sm:p-7 relative overflow-hidden transition-all duration-300">
      {/* Top Bar Status */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[#E5E5E9]">
        <div className="flex items-center gap-2.5">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#10B981]"></span>
          </div>
          <span className="text-xs font-semibold text-[#202125]">
            Integrated Digital Architecture
          </span>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0]">
            Live Sync
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs font-medium text-[#515151]">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#017EFC]"></span>
            <span>Otomasi AI & CRM</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
            <span>Database & POS</span>
          </div>
        </div>
      </div>

      {/* Middle Graph & Architecture Visual */}
      <div className="py-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left: Dynamic Rising Growth Curve */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#86868B]">
                Peningkatan Efisiensi & Output
              </span>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-3xl font-extrabold text-[#202125]">
                  <CountUp to={85} suffix="%" duration={1600} />
                </span>
                <span className="inline-flex items-center gap-0.5 text-xs font-bold text-[#10B981] bg-[#ECFDF5] px-2 py-0.5 rounded-full border border-[#A7F3D0]">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                  +3.4x Growth
                </span>
              </div>
            </div>
            <span className="text-[11px] text-[#86868B]">Sebelum vs Sesudah Integrasi</span>
          </div>

          {/* SVG Animated Growth Curve */}
          <div className="h-44 w-full relative">
            <svg
              viewBox="0 0 500 160"
              className="w-full h-full overflow-visible"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background horizontal grid lines */}
              <line x1="0" y1="30" x2="500" y2="30" stroke="#F0F0F3" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="0" y1="75" x2="500" y2="75" stroke="#F0F0F3" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="0" y1="120" x2="500" y2="120" stroke="#F0F0F3" strokeWidth="1" strokeDasharray="3 3" />

              {/* Area gradient under the rising curve */}
              <defs>
                <linearGradient id="curveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#017EFC" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#017EFC" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Shaded Area */}
              <path
                d="M 10 145 C 100 140, 160 120, 240 85 C 320 50, 400 35, 490 20 L 490 155 L 10 155 Z"
                fill="url(#curveGradient)"
                className="transition-opacity duration-1000"
                style={{ opacity: isDrawn ? 1 : 0 }}
              />

              {/* Dynamic Stroke Line */}
              <path
                d="M 10 145 C 100 140, 160 120, 240 85 C 320 50, 400 35, 490 20"
                stroke="#017EFC"
                strokeWidth="3.5"
                strokeLinecap="round"
                style={{
                  strokeDasharray: 600,
                  strokeDashoffset: isDrawn ? 0 : 600,
                  transition: 'stroke-dashoffset 1.8s cubic-bezier(0.22, 1, 0.36, 1)',
                }}
              />

              {/* Node Data Points */}
              <circle cx="10" cy="145" r="4.5" fill="#FFFFFF" stroke="#017EFC" strokeWidth="2.5" />
              <circle cx="240" cy="85" r="5" fill="#FFFFFF" stroke="#017EFC" strokeWidth="3" />
              <circle cx="490" cy="20" r="6" fill="#017EFC" stroke="#FFFFFF" strokeWidth="3" className="animate-pulse" />
            </svg>
          </div>
        </div>

        {/* Right: Connected System Pillars */}
        <div className="lg:col-span-5 space-y-2.5">
          <div className="p-3 rounded-[12px] bg-[#FAFAFC] border border-[#E5E5E9] flex items-center gap-3 transition-transform hover:scale-[1.01]">
            <div className="w-8 h-8 rounded-[8px] bg-[#EFF6FF] text-[#017EFC] flex items-center justify-center flex-shrink-0">
              <Cpu className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-[#202125]">AI Agent & Automasi</h4>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
              </div>
              <p className="text-[11px] text-[#515151] truncate">Respon FAQ 24/7 & rekap instan</p>
            </div>
          </div>

          <div className="p-3 rounded-[12px] bg-[#FAFAFC] border border-[#E5E5E9] flex items-center gap-3 transition-transform hover:scale-[1.01]">
            <div className="w-8 h-8 rounded-[8px] bg-[#ECFDF5] text-[#10B981] flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-[#202125]">WhatsApp CRM & Leads</h4>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
              </div>
              <p className="text-[11px] text-[#515151] truncate">Follow-up otomatis, 0 prospek tercecer</p>
            </div>
          </div>

          <div className="p-3 rounded-[12px] bg-[#FAFAFC] border border-[#E5E5E9] flex items-center gap-3 transition-transform hover:scale-[1.01]">
            <div className="w-8 h-8 rounded-[8px] bg-[#FFFBEB] text-[#B45309] flex items-center justify-center flex-shrink-0">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-[#202125]">POS, Hardware & IoT</h4>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
              </div>
              <p className="text-[11px] text-[#515151] truncate">Stok kasir & mutasi bank tersambung</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom KPI Highlights Bar */}
      <div className="pt-4 border-t border-[#E5E5E9] grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        <div>
          <div className="text-lg font-extrabold text-[#202125]">
            <CountUp to={100} suffix="%" duration={1800} />
          </div>
          <div className="text-[11px] text-[#86868B] font-medium">Sinkronisasi Data</div>
        </div>
        <div>
          <div className="text-lg font-extrabold text-[#202125]">
            <CountUp to={24} suffix="/7" duration={1400} />
          </div>
          <div className="text-[11px] text-[#86868B] font-medium">AI CS Standby</div>
        </div>
        <div>
          <div className="text-lg font-extrabold text-[#202125]">
            <CountUp to={80} suffix="%" duration={1700} />
          </div>
          <div className="text-[11px] text-[#86868B] font-medium">Waktu Rekap Hemat</div>
        </div>
        <div>
          <div className="text-lg font-extrabold text-[#202125]">
            <CountUp to={3.4} suffix="x" decimals={1} duration={1900} />
          </div>
          <div className="text-[11px] text-[#86868B] font-medium">Rata-rata Konversi</div>
        </div>
      </div>
    </div>
  );
};
