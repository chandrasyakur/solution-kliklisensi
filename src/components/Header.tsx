import React from 'react';
import { Database, ShieldCheck } from 'lucide-react';
import logoUrl from '../assets/logo-klik-lisensi.svg';

interface HeaderProps {
  onOpenAdmin: () => void;
  leadCount: number;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAdmin, leadCount }) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#E5E5E9] bg-white/95 backdrop-blur-md transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand identity */}
        <div className="flex items-center gap-3">
          <img
            src={logoUrl}
            alt="Klik Lisensi Logo"
            className="w-8 h-8 object-contain"
          />
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-base tracking-tight text-[#202125]">
              Klik Lisensi
            </span>
            <span className="inline-flex items-center text-[11px] font-semibold tracking-wide px-2 py-0.5 rounded-full bg-[#EFF6FF] text-[#017EFC] border border-[#BFDBFE]">
              Solution
            </span>
          </div>
        </div>

        {/* Right side status / inspector */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#515151] font-medium mr-2">
            <ShieldCheck className="w-4 h-4 text-[#017EFC]" />
            <span>Audit Operasional Resmi</span>
          </div>

          <button
            onClick={onOpenAdmin}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#515151] hover:text-[#202125] bg-[#F5F5F7] hover:bg-[#EBEBED] border border-[#E5E5E9] transition"
            title="Monitoring Internal (Chandra & Sabik)"
          >
            <Database className="w-3.5 h-3.5 text-[#017EFC]" />
            <span className="hidden sm:inline">Data Masuk</span>
            {leadCount > 0 && (
              <span className="ml-0.5 px-1.5 py-0.2 rounded-full bg-[#017EFC] text-[10px] text-white font-bold">
                {leadCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
