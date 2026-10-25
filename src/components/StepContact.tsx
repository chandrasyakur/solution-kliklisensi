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
    <div className="w-full max-w-2xl mx-auto px-4 py-2 space-y-6">
      {/* Step Header */}
      <div className="space-y-1">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#017EFC]">
          Langkah 4 dari 4
        </span>
        <h2 className="text-2xl font-bold text-[#202125] tracking-tight">
          Informasi PIC & Pengiriman Ringkasan Diagnostik
        </h2>
        <p className="text-sm text-[#515151]">
          Ringkasan analisis dan rekomendasi arsitektur digital akan langsung disajikan di layar berikutnya dan dikonfirmasi via WhatsApp.
        </p>
      </div>

      <div className="space-y-5 bg-white border border-[#E5E5E9] p-6 rounded-[14px] shadow-apple-sm">
        {/* Nama PIC */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-xs font-semibold text-[#202125]">
            <User className="w-4 h-4 text-[#017EFC]" />
            Nama Lengkap PIC / Pemilik Usaha <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Contoh: Budi Santoso"
            value={data.contactName}
            onChange={(e) => onChange({ contactName: e.target.value })}
            className="w-full px-4 py-2.5 rounded-[10px] bg-white border border-[#E5E5E9] focus:border-[#017EFC] focus:ring-2 focus:ring-[#017EFC]/10 text-sm text-[#202125] placeholder-[#86868B] outline-none transition duration-150"
          />
        </div>

        {/* Nomor WhatsApp */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-xs font-semibold text-[#202125]">
            <Phone className="w-4 h-4 text-[#10B981]" />
            Nomor WhatsApp Aktif <span className="text-rose-500">*</span>
          </label>
          <input
            type="tel"
            placeholder="0812xxxxxxxx atau 62812xxxxxxxx"
            value={data.whatsapp}
            onChange={(e) => onChange({ whatsapp: e.target.value })}
            className="w-full px-4 py-2.5 rounded-[10px] bg-white border border-[#E5E5E9] focus:border-[#017EFC] focus:ring-2 focus:ring-[#017EFC]/10 text-sm text-[#202125] placeholder-[#86868B] outline-none transition duration-150"
          />
          <p className="text-[11px] text-[#515151]">
            Digunakan untuk konfirmasi summary & penjadwalan sesi diskusi solutif jika diperlukan.
          </p>
        </div>

        {/* Jabatan di Bisnis */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-xs font-semibold text-[#202125]">
            <Award className="w-4 h-4 text-[#017EFC]" />
            Peran / Jabatan Anda <span className="text-rose-500">*</span>
          </label>
          <select
            value={data.role}
            onChange={(e) => onChange({ role: e.target.value })}
            className="w-full px-4 py-2.5 rounded-[10px] bg-white border border-[#E5E5E9] focus:border-[#017EFC] focus:ring-2 focus:ring-[#017EFC]/10 text-sm text-[#202125] outline-none transition duration-150 cursor-pointer"
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
          <label className="flex items-center gap-2 text-xs font-semibold text-[#202125]">
            <Mail className="w-4 h-4 text-[#017EFC]" />
            Alamat Email <span className="text-[#86868B] font-normal">(Opsional)</span>
          </label>
          <input
            type="email"
            placeholder="nama@perusahaan.com"
            value={data.email}
            onChange={(e) => onChange({ email: e.target.value })}
            className="w-full px-4 py-2.5 rounded-[10px] bg-white border border-[#E5E5E9] focus:border-[#017EFC] focus:ring-2 focus:ring-[#017EFC]/10 text-sm text-[#202125] placeholder-[#86868B] outline-none transition duration-150"
          />
        </div>

        {/* Security guarantee */}
        <div className="flex items-center gap-2 pt-2 text-[11px] text-[#515151]">
          <ShieldCheck className="w-4 h-4 text-[#10B981] flex-shrink-0" />
          <span>Privasi data bisnis Anda 100% terjaga dan tidak akan dibagikan ke pihak ketiga mana pun.</span>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between pt-2">
        <button
          type="button"
          onClick={onBack}
          disabled={isLoading}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold text-[#515151] hover:text-[#202125] hover:bg-[#E5E5E9]/50 transition duration-150"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali</span>
        </button>

        <button
          type="button"
          disabled={!isFormValid || isLoading}
          onClick={onSubmit}
          className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-150 ${
            isFormValid && !isLoading
              ? 'bg-[#017EFC] hover:bg-[#006ee0] text-white shadow-md shadow-blue-500/25 active:scale-[0.98]'
              : 'bg-[#E5E5E9] text-[#86868B] cursor-not-allowed'
          }`}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Memproses Diagnostik...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 text-white" />
              <span>Kirim & Lihat Laporan Diagnostik</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
