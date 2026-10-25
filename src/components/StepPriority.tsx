import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { AssessmentFormData } from '../types/assessment';
import { DESIRED_SOLUTIONS, TIMELINES } from '../data/assessmentData';

interface StepPriorityProps {
  data: AssessmentFormData;
  onChange: (updates: Partial<AssessmentFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export const StepPriority: React.FC<StepPriorityProps> = ({
  data,
  onChange,
  onNext,
  onBack,
}) => {
  const isFormValid =
    data.desiredSolution !== '' && data.timeline !== '';

  return (
    <div className="w-full max-w-2xl mx-auto px-6 py-6 space-y-8">
      {/* Step Header */}
      <div className="space-y-1.5">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F] tracking-tight">
          Prioritas Solusi
        </h2>
        <p className="text-sm text-[#86868B]">
          Tentukan urgensi dan arah perbaikan yang ingin difokuskan terlebih dahulu.
        </p>
      </div>

      <div className="space-y-6 bg-white border border-[#E5E5E9] p-7 sm:p-8 rounded-[18px] shadow-apple-sm">
        {/* Catatan Kendala Tambahan */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-[#1D1D1F]">
            Masalah paling krusial saat ini (opsional)
          </label>
          <textarea
            rows={3}
            placeholder="Ceritakan singkat kendala yang paling menyita waktu tim Anda."
            value={data.primaryBottleneckElaboration}
            onChange={(e) => onChange({ primaryBottleneckElaboration: e.target.value })}
            className="w-full p-4 rounded-[10px] bg-white border border-[#E5E5E9] focus:border-[#1D1D1F] focus:ring-1 focus:ring-[#1D1D1F] text-sm text-[#1D1D1F] placeholder-[#86868B] outline-none transition duration-150 resize-none"
          />
        </div>

        {/* Jenis Solusi yang Paling Dipertimbangkan */}
        <div className="space-y-2.5">
          <label className="text-xs font-semibold text-[#1D1D1F]">
            Solusi yang paling dibutuhkan
          </label>
          <div className="space-y-2">
            {DESIRED_SOLUTIONS.map((sol) => {
              const isSelected = data.desiredSolution === sol;
              return (
                <div
                  key={sol}
                  onClick={() => onChange({ desiredSolution: sol })}
                  className={`p-3.5 rounded-[10px] border text-xs cursor-pointer transition-all duration-150 flex items-center gap-3 ${
                    isSelected
                      ? 'bg-[#1D1D1F] border-[#1D1D1F] text-white font-medium'
                      : 'bg-white border-[#E5E5E9] text-[#505052] hover:border-[#1D1D1F]'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors ${
                      isSelected
                        ? 'border-white bg-white'
                        : 'border-[#D1D1D6] bg-white'
                    }`}
                  >
                    {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-[#1D1D1F]" />}
                  </div>
                  <span>{sol}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-[#1D1D1F]">
            Ekspektasi waktu implementasi
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {TIMELINES.map((time) => {
              const isSelected = data.timeline === time;
              return (
                <button
                  type="button"
                  key={time}
                  onClick={() => onChange({ timeline: time })}
                  className={`h-11 px-3 rounded-[10px] text-center text-xs transition-all duration-150 border ${
                    isSelected
                      ? 'bg-[#1D1D1F] border-[#1D1D1F] text-white font-medium'
                      : 'bg-white border-[#E5E5E9] text-[#505052] hover:border-[#1D1D1F]'
                  }`}
                >
                  {time}
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
          <span>Lanjut ke Kontak</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
