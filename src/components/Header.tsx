import React from 'react';
import { Database, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenAdmin: () => void;
  leadCount: number;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAdmin, leadCount }) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand identity */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base tracking-tight text-white">
                Klik Solution
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                Diagnostic
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              by Klik Lisensi • <span className="text-slate-500">solution.kliklisensi.com</span>
            </p>
          </div>
        </div>

        {/* Action badge / Admin test trigger */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenAdmin}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition"
            title="Lihat Data Prospek Tersimpan"
          >
            <Database className="w-3.5 h-3.5 text-indigo-400" />
            <span className="hidden sm:inline">Data Masuk</span>
            {leadCount > 0 && (
              <span className="ml-1 px-1.5 py-0.2 rounded-full bg-indigo-600 text-[10px] text-white font-bold">
                {leadCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
