import React from 'react';
import { ArrowLeft, Loader2 } from 'lucide-react';
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
    <div className="w-full max-w-2xl mx-auto px-6 py-6 space-y-8">
      {/* Step Header */}
      <div className="space-y-1.5">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F] tracking-tight">
          Informasi Kontak
        </h2>
        <p className="text-sm text-[#86868B]">
          Data kontak untuk konfirmasi ringkasan hasil diagnosa.
        </p>
      </div>

      <div className="space-y-6 bg-white border border-[#E5E5E9] p-7 sm:p-8 rounded-[18px] shadow-apple-sm">
        {/* Nama PIC */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-[#1D1D1F]">
            Nama Lengkap
          </label>
          <input
            type="text"
            placeholder="Contoh: Budi Santoso"
            value={data.contactName}
            onChange={(e) => onChange({ contactName: e.target.value })}
            className="w-full h-12 px-4 rounded-[10px] bg-white border border-[#E5E5E9] focus:border-[#1D1D1F] focus:ring-1 focus:ring-[#1D1D1F] text-sm text-[#1D1D1F] placeholder-[#86868B] outline-none transition duration-150"
          />
        </div>

        {/* Nomor WhatsApp */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-[#1D1D1F]">
            Nomor WhatsApp
          </label>
          <input
            type="tel"
            placeholder="0812xxxxxxxx"
            value={data.whatsapp}
            onChange={(e) => onChange({ whatsapp: e.target.value })}
            className="w-full h-12 px-4 rounded-[10px] bg-white border border-[#E5E5E9] focus:border-[#1D1D1F] focus:ring-1 focus:ring-[#1D1D1F] text-sm text-[#1D1D1F] placeholder-[#86868B] outline-none transition duration-150"
          />
        </div>

        {/* Jabatan */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-[#1D1D1F]">
            Jabatan di Bisnis
          </label>
          <select
            value={data.role}
            onChange={(e) => onChange({ role: e.target.value })}
            className="w-full h-12 px-4 rounded-[10px] bg-white border border-[#E5E5E9] focus:border-[#1D1D1F] focus:ring-1 focus:ring-[#1D1D1F] text-sm text-[#1D1D1F] outline-none transition duration-150 cursor-pointer"
          >
            <option value="Owner / Founder">Owner / Founder</option>
            <option value="Direktur / Co-Founder">Direktur / Co-Founder</option>
            <option value="Manager Operasional">Manager Operasional</option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-[#1D1D1F]">
            Email (opsional)
          </label>
          <input
            type="email"
            placeholder="nama@perusahaan.com"
            value={data.email}
            onChange={(e) => onChange({ email: e.target.value })}
            className="w-full h-12 px-4 rounded-[10px] bg-white border border-[#E5E5E9] focus:border-[#1D1D1F] focus:ring-1 focus:ring-[#1D1D1F] text-sm text-[#1D1D1F] placeholder-[#86868B] outline-none transition duration-150"
          />
        </div>
      </div>

      {/* Consistent Buttons Token */}
      <div className="flex items-center justify-between pt-2">
        <button
          type="button"
          onClick={onBack}
          disabled={isLoading}
          className="h-12 px-6 rounded-full text-sm font-medium text-[#505052] hover:text-[#1D1D1F] hover:bg-[#F5F5F7] transition-all duration-150 inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali</span>
        </button>

        <button
          type="button"
          disabled={!isFormValid || isLoading}
          onClick={onSubmit}
          className={`h-12 px-8 rounded-full text-sm font-medium inline-flex items-center justify-center gap-2 transition-all duration-150 ${
            isFormValid && !isLoading
              ? 'bg-[#1D1D1F] hover:bg-[#3A3A3C] text-white active:scale-[0.98]'
              : 'bg-[#E5E5E9] text-[#86868B] cursor-not-allowed'
          }`}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Memproses...</span>
            </>
          ) : (
            <span>Lihat Hasil Diagnosa</span>
          )}
        </button>
      </div>
    </div>
  );
};
