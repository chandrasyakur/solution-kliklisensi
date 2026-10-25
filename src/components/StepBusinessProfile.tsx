import React from 'react';
import { ArrowRight, Building2, MapPin, Briefcase, Users2, ArrowLeft } from 'lucide-react';
import { AssessmentFormData, IndustryType } from '../types/assessment';
import { INDUSTRIES, TEAM_SIZES, BUSINESS_MODELS } from '../data/assessmentData';

interface StepBusinessProfileProps {
  data: AssessmentFormData;
  onChange: (updates: Partial<AssessmentFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export const StepBusinessProfile: React.FC<StepBusinessProfileProps> = ({
  data,
  onChange,
  onNext,
  onBack,
}) => {
  const isFormValid =
    data.businessName.trim().length > 1 &&
    data.city.trim().length > 1 &&
    data.industry !== '' &&
    data.teamSize !== '' &&
    data.businessModel !== '';

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-2 space-y-6">
      {/* Step Header */}
      <div className="space-y-1">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#017EFC]">
          Langkah 1 dari 4
        </span>
        <h2 className="text-2xl font-bold text-[#202125] tracking-tight">
          Profil & Skala Operasional Bisnis
        </h2>
        <p className="text-sm text-[#515151]">
          Data ini membantu kami memetakan kompleksitas sistem yang tepat sesuai ukuran bisnis Anda.
        </p>
      </div>

      <div className="space-y-5 bg-white border border-[#E5E5E9] p-6 rounded-[14px] shadow-apple-sm">
        {/* Nama Bisnis */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-xs font-semibold text-[#202125]">
            <Building2 className="w-4 h-4 text-[#017EFC]" />
            Nama Bisnis / Brand / Usaha <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Contoh: Kopi Senja, PT Maju Sejahtera, dsb."
            value={data.businessName}
            onChange={(e) => onChange({ businessName: e.target.value })}
            className="w-full px-4 py-2.5 rounded-[10px] bg-white border border-[#E5E5E9] focus:border-[#017EFC] focus:ring-2 focus:ring-[#017EFC]/10 text-sm text-[#202125] placeholder-[#86868B] outline-none transition duration-150"
          />
        </div>

        {/* Kota / Domisili */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-xs font-semibold text-[#202125]">
            <MapPin className="w-4 h-4 text-[#017EFC]" />
            Domisili / Kota Kantor Utama <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Contoh: Jakarta Timur, Bogor, Surabaya, dll."
            value={data.city}
            onChange={(e) => onChange({ city: e.target.value })}
            className="w-full px-4 py-2.5 rounded-[10px] bg-white border border-[#E5E5E9] focus:border-[#017EFC] focus:ring-2 focus:ring-[#017EFC]/10 text-sm text-[#202125] placeholder-[#86868B] outline-none transition duration-150"
          />
        </div>

        {/* Industri */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-xs font-semibold text-[#202125]">
            <Briefcase className="w-4 h-4 text-[#017EFC]" />
            Kategori Industri <span className="text-rose-500">*</span>
          </label>
          <select
            value={data.industry}
            onChange={(e) => onChange({ industry: e.target.value as IndustryType })}
            className="w-full px-4 py-2.5 rounded-[10px] bg-white border border-[#E5E5E9] focus:border-[#017EFC] focus:ring-2 focus:ring-[#017EFC]/10 text-sm text-[#202125] outline-none transition duration-150 cursor-pointer"
          >
            <option value="" disabled>
              -- Pilih Kategori Industri --
            </option>
            {INDUSTRIES.map((ind) => (
              <option key={ind} value={ind}>
                {ind}
              </option>
            ))}
          </select>
        </div>

        {/* Skala Tim */}
        <div className="space-y-2.5">
          <label className="flex items-center gap-2 text-xs font-semibold text-[#202125]">
            <Users2 className="w-4 h-4 text-[#017EFC]" />
            Jumlah Tim / Karyawan Saat Ini <span className="text-rose-500">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {TEAM_SIZES.map((size) => {
              const isSelected = data.teamSize === size;
              return (
                <button
                  type="button"
                  key={size}
                  onClick={() => onChange({ teamSize: size })}
                  className={`px-3.5 py-2.5 rounded-[10px] text-left text-xs font-medium border transition-all duration-150 ${
                    isSelected
                      ? 'bg-[#EFF6FF] border-[#017EFC] text-[#017EFC] font-semibold'
                      : 'bg-white border-[#E5E5E9] text-[#515151] hover:border-[#BFDBFE] hover:bg-[#F5F5F7]'
                  }`}
                >
                  {size}
                </button>
              );
            })}
          </div>
        </div>

        {/* Model Bisnis */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-[#202125] block">
            Model Transaksi Utama <span className="text-rose-500">*</span>
          </label>
          <div className="grid grid-cols-3 gap-2">
            {BUSINESS_MODELS.map((model) => {
              const isSelected = data.businessModel === model;
              return (
                <button
                  type="button"
                  key={model}
                  onClick={() => onChange({ businessModel: model })}
                  className={`py-2 px-3 rounded-[10px] text-center text-xs font-medium border transition-all duration-150 ${
                    isSelected
                      ? 'bg-[#EFF6FF] border-[#017EFC] text-[#017EFC] font-semibold'
                      : 'bg-white border-[#E5E5E9] text-[#515151] hover:border-[#BFDBFE] hover:bg-[#F5F5F7]'
                  }`}
                >
                  {model}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between pt-2">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold text-[#515151] hover:text-[#202125] hover:bg-[#E5E5E9]/50 transition duration-150"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali</span>
        </button>

        <button
          type="button"
          disabled={!isFormValid}
          onClick={onNext}
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-150 ${
            isFormValid
              ? 'bg-[#017EFC] hover:bg-[#006ee0] text-white shadow-md shadow-blue-500/20 active:scale-[0.98]'
              : 'bg-[#E5E5E9] text-[#86868B] cursor-not-allowed'
          }`}
        >
          <span>Lanjut ke Diagnosa Kendala</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
