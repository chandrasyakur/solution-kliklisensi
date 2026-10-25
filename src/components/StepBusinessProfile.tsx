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
    <div className="w-full max-w-2xl mx-auto px-4 py-4 space-y-6">
      {/* Step Header */}
      <div className="space-y-1">
        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
          Langkah 1 dari 4
        </span>
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Profil & Skala Operasional Bisnis
        </h2>
        <p className="text-sm text-slate-400">
          Data ini membantu kami memetakan kompleksitas sistem yang tepat sesuai ukuran bisnis Anda.
        </p>
      </div>

      <div className="space-y-5 bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
        {/* Nama Bisnis */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-xs font-semibold text-slate-200">
            <Building2 className="w-4 h-4 text-indigo-400" />
            Nama Bisnis / Brand / Usaha <span className="text-pink-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Contoh: Kopi Senja, PT Maju Sejahtera, dsb."
            value={data.businessName}
            onChange={(e) => onChange({ businessName: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm text-white placeholder-slate-500 outline-none transition"
          />
        </div>

        {/* Kota / Domisili */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-xs font-semibold text-slate-200">
            <MapPin className="w-4 h-4 text-indigo-400" />
            Domisili / Kota Kantor Utama <span className="text-pink-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Contoh: Jakarta Timur, Bogor, Surabaya, dll."
            value={data.city}
            onChange={(e) => onChange({ city: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm text-white placeholder-slate-500 outline-none transition"
          />
        </div>

        {/* Industri */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-xs font-semibold text-slate-200">
            <Briefcase className="w-4 h-4 text-indigo-400" />
            Kategori Industri <span className="text-pink-500">*</span>
          </label>
          <select
            value={data.industry}
            onChange={(e) => onChange({ industry: e.target.value as IndustryType })}
            className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm text-white outline-none transition cursor-pointer"
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
          <label className="flex items-center gap-2 text-xs font-semibold text-slate-200">
            <Users2 className="w-4 h-4 text-indigo-400" />
            Jumlah Tim / Karyawan Saat Ini <span className="text-pink-500">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {TEAM_SIZES.map((size) => {
              const isSelected = data.teamSize === size;
              return (
                <button
                  type="button"
                  key={size}
                  onClick={() => onChange({ teamSize: size })}
                  className={`px-3.5 py-3 rounded-xl text-left text-xs font-medium border transition-all ${
                    isSelected
                      ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-sm'
                      : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
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
          <label className="text-xs font-semibold text-slate-200 block">
            Model Transaksi Utama <span className="text-pink-500">*</span>
          </label>
          <div className="grid grid-cols-3 gap-2">
            {BUSINESS_MODELS.map((model) => {
              const isSelected = data.businessModel === model;
              return (
                <button
                  type="button"
                  key={model}
                  onClick={() => onChange({ businessModel: model })}
                  className={`py-2.5 px-3 rounded-xl text-center text-xs font-medium border transition-all ${
                    isSelected
                      ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-sm'
                      : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
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
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali</span>
        </button>

        <button
          type="button"
          disabled={!isFormValid}
          onClick={onNext}
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
            isFormValid
              ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/25 transform hover:-translate-y-0.5'
              : 'bg-slate-800 text-slate-500 cursor-not-allowed'
          }`}
        >
          <span>Lanjut ke Diagnosa Kendala</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
