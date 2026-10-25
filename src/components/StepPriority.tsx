import React from 'react';
import { ArrowRight, ArrowLeft, Target, Clock, HelpCircle } from 'lucide-react';
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
    <div className="w-full max-w-2xl mx-auto px-4 py-2 space-y-6">
      {/* Step Header */}
      <div className="space-y-1">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#017EFC]">
          Langkah 3 dari 4
        </span>
        <h2 className="text-2xl font-bold text-[#202125] tracking-tight">
          Prioritas & Arah Solusi yang Diharapkan
        </h2>
        <p className="text-sm text-[#515151]">
          Bantu kami memahami ekspektasi dan urgensi penanganan masalah di bisnis Anda.
        </p>
      </div>

      <div className="space-y-6 bg-white border border-[#E5E5E9] p-6 rounded-[14px] shadow-apple-sm">
        {/* Detail Masalah Paling Krusial */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-xs font-semibold text-[#202125]">
            <Target className="w-4 h-4 text-[#017EFC]" />
            Apa 1 masalah yang paling krusial / menghambat pertumbuhan bisnis dalam waktu dekat?
          </label>
          <p className="text-[11px] text-[#515151]">
            Boleh ceritakan singkat dengan bahasa sehari-hari.
          </p>
          <textarea
            rows={3}
            placeholder="Contoh: Kami punya 3 admin WA tapi responnya lambat dan sering rebutan prospek. Ingin sistem otomatis yang bagi lead adil dan bisa follow-up otomatis."
            value={data.primaryBottleneckElaboration}
            onChange={(e) => onChange({ primaryBottleneckElaboration: e.target.value })}
            className="w-full px-4 py-3 rounded-[10px] bg-white border border-[#E5E5E9] focus:border-[#017EFC] focus:ring-2 focus:ring-[#017EFC]/10 text-sm text-[#202125] placeholder-[#86868B] outline-none transition duration-150 resize-none"
          />
        </div>

        {/* Jenis Solusi yang Paling Dipertimbangkan */}
        <div className="space-y-2.5">
          <label className="flex items-center gap-2 text-xs font-semibold text-[#202125]">
            <HelpCircle className="w-4 h-4 text-[#017EFC]" />
            Solusi yang menurut Anda paling mendesak dibutuhkan: <span className="text-rose-500">*</span>
          </label>
          <div className="space-y-2">
            {DESIRED_SOLUTIONS.map((sol) => {
              const isSelected = data.desiredSolution === sol;
              return (
                <div
                  key={sol}
                  onClick={() => onChange({ desiredSolution: sol })}
                  className={`p-3 rounded-[10px] border text-xs font-medium cursor-pointer transition-all duration-150 flex items-center gap-3 ${
                    isSelected
                      ? 'bg-[#EFF6FF] border-[#017EFC] text-[#017EFC] font-semibold'
                      : 'bg-white border-[#E5E5E9] text-[#515151] hover:border-[#BFDBFE] hover:bg-[#F5F5F7]'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors ${
                      isSelected
                        ? 'border-[#017EFC] bg-[#017EFC]'
                        : 'border-[#D1D1D6] bg-white'
                    }`}
                  >
                    {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                  <span>{sol}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-xs font-semibold text-[#202125]">
            <Clock className="w-4 h-4 text-[#017EFC]" />
            Kapan Anda berencana mengeksekusi solusinya? <span className="text-rose-500">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {TIMELINES.map((time) => {
              const isSelected = data.timeline === time;
              return (
                <button
                  type="button"
                  key={time}
                  onClick={() => onChange({ timeline: time })}
                  className={`py-2.5 px-3 rounded-[10px] text-center text-xs font-medium border transition-all duration-150 ${
                    isSelected
                      ? 'bg-[#EFF6FF] border-[#017EFC] text-[#017EFC] font-semibold'
                      : 'bg-white border-[#E5E5E9] text-[#515151] hover:border-[#BFDBFE] hover:bg-[#F5F5F7]'
                  }`}
                >
                  {time}
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
          <span>Lanjut ke Info Kontak PIC</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
