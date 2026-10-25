import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
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
    <div className="w-full max-w-2xl mx-auto px-6 py-6 space-y-8">
      {/* Step Header */}
      <div className="space-y-1.5">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F] tracking-tight">
          Profil Bisnis
        </h2>
        <p className="text-sm text-[#86868B]">
          Informasi dasar untuk menyesuaikan arsitektur sistem dengan skala operasional Anda.
        </p>
      </div>

      <div className="space-y-6 bg-white border border-[#E5E5E9] p-7 sm:p-8 rounded-[18px] shadow-apple-sm">
        {/* Nama Bisnis */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-[#1D1D1F]">
            Nama Bisnis / Brand
          </label>
          <input
            type="text"
            placeholder="Contoh: Kopi Senja, PT Maju Bersama"
            value={data.businessName}
            onChange={(e) => onChange({ businessName: e.target.value })}
            className="w-full h-12 px-4 rounded-[10px] bg-white border border-[#E5E5E9] focus:border-[#1D1D1F] focus:ring-1 focus:ring-[#1D1D1F] text-sm text-[#1D1D1F] placeholder-[#86868B] outline-none transition duration-150"
          />
        </div>

        {/* Kota / Domisili */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-[#1D1D1F]">
            Kota Operasional
          </label>
          <input
            type="text"
            placeholder="Contoh: Jakarta Timur, Bogor, Surabaya"
            value={data.city}
            onChange={(e) => onChange({ city: e.target.value })}
            className="w-full h-12 px-4 rounded-[10px] bg-white border border-[#E5E5E9] focus:border-[#1D1D1F] focus:ring-1 focus:ring-[#1D1D1F] text-sm text-[#1D1D1F] placeholder-[#86868B] outline-none transition duration-150"
          />
        </div>

        {/* Industri */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-[#1D1D1F]">
            Kategori Industri
          </label>
          <select
            value={data.industry}
            onChange={(e) => onChange({ industry: e.target.value as IndustryType })}
            className="w-full h-12 px-4 rounded-[10px] bg-white border border-[#E5E5E9] focus:border-[#1D1D1F] focus:ring-1 focus:ring-[#1D1D1F] text-sm text-[#1D1D1F] outline-none transition duration-150 cursor-pointer"
          >
            <option value="" disabled>
              Pilih Kategori Industri
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
          <label className="text-xs font-semibold text-[#1D1D1F]">
            Jumlah Tim Saat Ini
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {TEAM_SIZES.map((size) => {
              const isSelected = data.teamSize === size;
              return (
                <button
                  type="button"
                  key={size}
                  onClick={() => onChange({ teamSize: size })}
                  className={`h-11 px-4 rounded-[10px] text-left text-xs transition-all duration-150 border ${
                    isSelected
                      ? 'bg-[#1D1D1F] border-[#1D1D1F] text-white font-medium'
                      : 'bg-white border-[#E5E5E9] text-[#505052] hover:border-[#1D1D1F]'
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
          <label className="text-xs font-semibold text-[#1D1D1F]">
            Model Bisnis
          </label>
          <div className="grid grid-cols-3 gap-2.5">
            {BUSINESS_MODELS.map((model) => {
              const isSelected = data.businessModel === model;
              return (
                <button
                  type="button"
                  key={model}
                  onClick={() => onChange({ businessModel: model })}
                  className={`h-11 px-3 rounded-[10px] text-center text-xs transition-all duration-150 border ${
                    isSelected
                      ? 'bg-[#1D1D1F] border-[#1D1D1F] text-white font-medium'
                      : 'bg-white border-[#E5E5E9] text-[#505052] hover:border-[#1D1D1F]'
                  }`}
                >
                  {model}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Consistent Buttons Token */}
      <div className="flex items-center justify-between pt-2">
        <button
          type="button"
          onClick={onBack}
          className="h-12 px-6 rounded-full text-sm font-medium text-[#505052] hover:text-[#1D1D1F] hover:bg-[#F5F5F7] transition-all duration-150 inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali</span>
        </button>

        <button
          type="button"
          disabled={!isFormValid}
          onClick={onNext}
          className={`h-12 px-7 rounded-full text-sm font-medium inline-flex items-center justify-center gap-2 transition-all duration-150 ${
            isFormValid
              ? 'bg-[#1D1D1F] hover:bg-[#3A3A3C] text-white active:scale-[0.98]'
              : 'bg-[#E5E5E9] text-[#86868B] cursor-not-allowed'
          }`}
        >
          <span>Lanjut ke Kendala</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
