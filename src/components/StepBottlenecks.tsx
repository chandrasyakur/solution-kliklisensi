import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Check, AlertCircle } from 'lucide-react';
import { AssessmentFormData, BottleneckCategory } from '../types/assessment';
import { BOTTLENECK_OPTIONS } from '../data/assessmentData';

interface StepBottlenecksProps {
  data: AssessmentFormData;
  onChange: (updates: Partial<AssessmentFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export const StepBottlenecks: React.FC<StepBottlenecksProps> = ({
  data,
  onChange,
  onNext,
  onBack,
}) => {
  const [activeTab, setActiveTab] = useState<BottleneckCategory | 'all'>('all');

  const toggleBottleneck = (id: string) => {
    const current = data.selectedBottlenecks;
    const exists = current.includes(id);
    const updated = exists
      ? current.filter((item) => item !== id)
      : [...current, id];
    onChange({ selectedBottlenecks: updated });
  };

  const filteredItems = BOTTLENECK_OPTIONS.filter((item) => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  const selectedCount = data.selectedBottlenecks.length;
  const isFormValid = selectedCount > 0;

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-4 space-y-6">
      {/* Step Header */}
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
            Langkah 2 dari 4
          </span>
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
            {selectedCount} Kendala Terpilih
          </span>
        </div>
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Apa Saja Kendala Operasional yang Sedang Dialami?
        </h2>
        <p className="text-sm text-slate-400">
          Pilih semua kondisi yang sesuai dengan operasional Anda saat ini (bisa memilih lebih dari 1).
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
        <button
          type="button"
          onClick={() => setActiveTab('all')}
          className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all ${
            activeTab === 'all'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
          }`}
        >
          Semua (12)
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('sales')}
          className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all ${
            activeTab === 'sales'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
          }`}
        >
          Sales & Akuisisi
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('operations')}
          className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all ${
            activeTab === 'operations'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
          }`}
        >
          Operasional & Data
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('crm')}
          className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all ${
            activeTab === 'crm'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
          }`}
        >
          Customer & Retensi
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('automation')}
          className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all ${
            activeTab === 'automation'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
          }`}
        >
          Otomasi & AI
        </button>
      </div>

      {/* Grid of Bottleneck Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {filteredItems.map((item) => {
          const isSelected = data.selectedBottlenecks.includes(item.id);

          return (
            <div
              key={item.id}
              onClick={() => toggleBottleneck(item.id)}
              className={`p-4 rounded-xl border text-left cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                isSelected
                  ? 'bg-indigo-950/40 border-indigo-500 shadow-md shadow-indigo-950/40 ring-1 ring-indigo-500'
                  : 'bg-slate-900/50 border-slate-800/90 hover:border-slate-700 hover:bg-slate-900'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800/80 text-slate-400">
                    {item.categoryLabel}
                  </span>

                  {/* Custom Checkbox */}
                  <div
                    className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-indigo-600 text-white'
                        : 'border border-slate-700 bg-slate-950'
                    }`}
                  >
                    {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                </div>

                <h3 className={`text-sm font-semibold mb-1 transition-colors ${
                  isSelected ? 'text-white' : 'text-slate-200'
                }`}>
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-3">
                  {item.description}
                </p>
              </div>

              {/* Bottom Tag */}
              <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px]">
                <span className="text-slate-500">Solusi relevan:</span>
                <span className="font-semibold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                  {item.solutionTag}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {!isFormValid && (
        <div className="flex items-center gap-2 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>Silakan pilih minimal 1 kendala untuk melanjutkan analisis.</span>
        </div>
      )}

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
          <span>Lanjut ke Prioritas Solusi</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
