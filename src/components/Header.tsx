import React from 'react';
import logoUrl from '../assets/logo-klik-lisensi.svg';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#E5E5E9] bg-white/90 backdrop-blur-md transition-colors">
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

        {/* Clean right side tag */}
        <div className="text-xs font-medium text-[#515151]">
          <span>Business Diagnostic Tool</span>
        </div>
      </div>
    </header>
  );
};
