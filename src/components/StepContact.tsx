import React from 'react';
import { ArrowLeft, User, Phone, Mail, Award, ShieldCheck, Loader2, Sparkles } from 'lucide-react';
import { AssessmentFormData } from '../types/assessment';

interface StepContactProps {
  data: AssessmentFormData;
  onChange: (updates: Partial<AssessmentFormData>) => void;
  onSubmit: () => void;
  onBack: () => void;
  isLoading: boolean;
}

export const StepContact: React.FC<StepContactProps> = ({
  data,
  onChange,
  onSubmit,
  onBack,
  isLoading,
}) => {
  const isFormValid =
    data.contactName.trim().length > 1 &&
    data.whatsapp.trim().length >= 9 &&
    data.role.trim().length > 0;

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-4 space-y-6">
      {/* Step Header */}
      <div className="space-y-1">
        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
          Langkah 4 dari 4
        </span>
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Informasi PIC & Pengiriman Ringkasan Diagnostik
        </h2>
        <p className="text-sm text-slate-400">
          Ringkasan analisis dan rekomendasi arsitektur digital akan langsung disajikan di layar berikutnya dan dikonfirmasi via WhatsApp.
        </p>
      </div>

      <div className="space-y-5 bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
        {/* Nama PIC */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-xs font-semibold text-slate-200">
            <User className="w-4 h-4 text-indigo-400" />
            Nama Lengkap PIC / Pemilik Usaha <span className="text-pink-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Contoh: Budi Santoso"
            value={data.contactName}
            onChange={(e) => onChange({ contactName: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm text-white placeholder-slate-500 outline-none transition"
          />
        </div>

        {/* Nomor WhatsApp */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-xs font-semibold text-slate-200">
            <Phone className="w-4 h-4 text-emerald-400" />
            Nomor WhatsApp Aktif <span className="text-pink-500">*</span>
          </label>
          <div className="relative">
            <input
              type="tel"
              placeholder="0812xxxxxxxx atau 62812xxxxxxxx"
              value={data.whatsapp}
              onChange={(e) => onChange({ whatsapp: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm text-white placeholder-slate-500 outline-none transition"
            />
          </div>
          <p className="text-[11px] text-slate-400">
            Digunakan untuk konfirmasi summary & penjadwalan sesi diskusi solutif jika diperlukan.
          </p>
        </div>

        {/* Jabatan di Bisnis */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-xs font-semibold text-slate-200">
            <Award className="w-4 h-4 text-indigo-400" />
            Peran / Jabatan Anda <span className="text-pink-500">*</span>
          </label>
          <select
            value={data.role}
            onChange={(e) => onChange({ role: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm text-white outline-none transition cursor-pointer"
          >
            <option value="Owner / Founder">Owner / Founder</option>
            <option value="Co-Founder / Direktur">Co-Founder / Direktur</option>
            <option value="Manager Operasional / Marketing">Manager Operasional / Marketing</option>
            <option value="Staff / PIC IT">Staff / PIC IT</option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </div>

        {/* Email (Opsional) */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-xs font-semibold text-slate-200">
            <Mail className="w-4 h-4 text-indigo-400" />
            Alamat Email <span className="text-slate-500 font-normal">(Opsional)</span>
          </label>
          <input
            type="email"
            placeholder="nama@perusahaan.com"
            value={data.email}
            onChange={(e) => onChange({ email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm text-white placeholder-slate-500 outline-none transition"
          />
        </div>

        {/* Security guarantee */}
        <div className="flex items-center gap-2 pt-2 text-[11px] text-slate-400">
          <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
          <span>Privasi data bisnis Anda 100% terjaga dan tidak akan dibagikan ke pihak ketiga mana pun.</span>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between pt-2">
        <button
          type="button"
          onClick={onBack}
          disabled={isLoading}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali</span>
        </button>

        <button
          type="button"
          disabled={!isFormValid || isLoading}
          onClick={onSubmit}
          className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm transition-all ${
            isFormValid && !isLoading
              ? 'bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white shadow-lg shadow-indigo-600/30 transform hover:-translate-y-0.5'
              : 'bg-slate-800 text-slate-500 cursor-not-allowed'
          }`}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Memproses Diagnostik...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 text-indigo-200" />
              <span>Kirim & Lihat Laporan Diagnostik</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
