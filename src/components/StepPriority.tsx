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
    <div className="w-full max-w-2xl mx-auto px-4 py-4 space-y-6">
      {/* Step Header */}
      <div className="space-y-1">
        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
          Langkah 3 dari 4
        </span>
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Prioritas & Arah Solusi yang Diharapkan
        </h2>
        <p className="text-sm text-slate-400">
          Bantu kami memahami ekspektasi dan urgensi penanganan masalah di bisnis Anda.
        </p>
      </div>

      <div className="space-y-6 bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
        {/* Detail Masalah Paling Krusial */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-xs font-semibold text-slate-200">
            <Target className="w-4 h-4 text-indigo-400" />
            Apa 1 masalah yang paling krusial / menghambat pertumbuhan bisnis dalam waktu dekat?
          </label>
          <p className="text-[11px] text-slate-400">
            Boleh ceritakan singkat dengan bahasa sehari-hari.
          </p>
          <textarea
            rows={3}
            placeholder="Contoh: Kami punya 3 admin WA tapi responnya lambat dan sering rebutan prospek. Ingin sistem otomatis yang bagi lead adil dan bisa follow-up otomatis."
            value={data.primaryBottleneckElaboration}
            onChange={(e) => onChange({ primaryBottleneckElaboration: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm text-white placeholder-slate-500 outline-none transition resize-none"
          />
        </div>

        {/* Jenis Solusi yang Paling Dipertimbangkan */}
        <div className="space-y-2.5">
          <label className="flex items-center gap-2 text-xs font-semibold text-slate-200">
            <HelpCircle className="w-4 h-4 text-indigo-400" />
            Solusi yang menurut Anda paling mendesak dibutuhkan: <span className="text-pink-500">*</span>
          </label>
          <div className="space-y-2">
            {DESIRED_SOLUTIONS.map((sol) => {
              const isSelected = data.desiredSolution === sol;
              return (
                <div
                  key={sol}
                  onClick={() => onChange({ desiredSolution: sol })}
                  className={`p-3 rounded-xl border text-xs font-medium cursor-pointer transition-all flex items-center gap-3 ${
                    isSelected
                      ? 'bg-indigo-600/20 border-indigo-500 text-white'
                      : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 ${
                      isSelected
                        ? 'border-indigo-500 bg-indigo-600'
                        : 'border-slate-700 bg-slate-950'
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
          <label className="flex items-center gap-2 text-xs font-semibold text-slate-200">
            <Clock className="w-4 h-4 text-indigo-400" />
            Kapan Anda berencana mengeksekusi solusinya? <span className="text-pink-500">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {TIMELINES.map((time) => {
              const isSelected = data.timeline === time;
              return (
                <button
                  type="button"
                  key={time}
                  onClick={() => onChange({ timeline: time })}
                  className={`py-2.5 px-3 rounded-xl text-center text-xs font-medium border transition-all ${
                    isSelected
                      ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-sm'
                      : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
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
          <span>Lanjut ke Info Kontak PIC</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
