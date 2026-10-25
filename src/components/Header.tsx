import React from 'react';
import logoUrl from '../assets/logo-klik-lisensi.svg';

interface HeaderProps {
  onStart?: () => void;
  isFormActive?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onStart, isFormActive }) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#E5E5E9] bg-white/80 backdrop-blur-md transition-colors">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand identity: Clean and uncluttered */}
        <div className="flex items-center gap-2.5">
          <img
            src={logoUrl}
            alt="Klik Lisensi Logo"
            className="w-7 h-7 object-contain"
          />
          <span className="font-semibold text-base tracking-tight text-[#1D1D1F]">
            Klik Lisensi
          </span>
        </div>

        {/* Right side single action */}
        {!isFormActive && onStart && (
          <button
            onClick={onStart}
            className="h-9 px-4 rounded-full text-xs font-medium text-[#1D1D1F] bg-[#F5F5F7] hover:bg-[#EBEBED] active:scale-[0.98] transition-all duration-150"
          >
            Mulai Diagnostik
          </button>
        )}
      </div>
    </header>
  );
};
