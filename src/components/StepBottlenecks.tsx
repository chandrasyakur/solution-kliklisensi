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
    <div className="w-full max-w-3xl mx-auto px-4 py-2 space-y-6">
      {/* Step Header */}
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#017EFC]">
            Langkah 2 dari 4
          </span>
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#EFF6FF] text-[#017EFC] border border-[#BFDBFE]">
            {selectedCount} Terpilih
          </span>
        </div>
        <h2 className="text-2xl font-bold text-[#202125] tracking-tight">
          Apa Saja Kendala Operasional yang Sedang Dialami?
        </h2>
        <p className="text-sm text-[#515151]">
          Pilih semua kondisi yang sesuai dengan operasional Anda saat ini (bisa memilih lebih dari 1).
        </p>
      </div>

      {/* Segmented Filter Control (Apple / Klik Lisensi Golden Master style) */}
      <div className="flex items-center gap-1 p-1 rounded-[10px] bg-[#F5F5F7] border border-[#E5E5E9] overflow-x-auto scrollbar-none text-xs">
        <button
          type="button"
          onClick={() => setActiveTab('all')}
          className={`px-3 py-1.5 rounded-[8px] font-medium whitespace-nowrap transition-all duration-150 ${
            activeTab === 'all'
              ? 'bg-white text-[#202125] font-semibold shadow-xs'
              : 'text-[#515151] hover:text-[#202125] hover:bg-[#EBEBED]/60'
          }`}
        >
          Semua (12)
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('sales')}
          className={`px-3 py-1.5 rounded-[8px] font-medium whitespace-nowrap transition-all duration-150 ${
            activeTab === 'sales'
              ? 'bg-white text-[#202125] font-semibold shadow-xs'
              : 'text-[#515151] hover:text-[#202125] hover:bg-[#EBEBED]/60'
          }`}
        >
          Sales & Akuisisi
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('operations')}
          className={`px-3 py-1.5 rounded-[8px] font-medium whitespace-nowrap transition-all duration-150 ${
            activeTab === 'operations'
              ? 'bg-white text-[#202125] font-semibold shadow-xs'
              : 'text-[#515151] hover:text-[#202125] hover:bg-[#EBEBED]/60'
          }`}
        >
          Operasional & Data
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('crm')}
          className={`px-3 py-1.5 rounded-[8px] font-medium whitespace-nowrap transition-all duration-150 ${
            activeTab === 'crm'
              ? 'bg-white text-[#202125] font-semibold shadow-xs'
              : 'text-[#515151] hover:text-[#202125] hover:bg-[#EBEBED]/60'
          }`}
        >
          Customer & Retensi
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('automation')}
          className={`px-3 py-1.5 rounded-[8px] font-medium whitespace-nowrap transition-all duration-150 ${
            activeTab === 'automation'
              ? 'bg-white text-[#202125] font-semibold shadow-xs'
              : 'text-[#515151] hover:text-[#202125] hover:bg-[#EBEBED]/60'
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
              className={`p-4 rounded-[12px] border text-left cursor-pointer transition-all duration-150 flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#EFF6FF] border-[#017EFC] shadow-apple-sm ring-1 ring-[#017EFC]'
                  : 'bg-white border-[#E5E5E9] hover:border-[#BFDBFE] hover:bg-[#FBFBFC]'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-[#F5F5F7] text-[#515151]">
                    {item.categoryLabel}
                  </span>

                  {/* Custom Checkbox */}
                  <div
                    className={`w-5 h-5 rounded-[6px] flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-[#017EFC] text-white'
                        : 'border border-[#D1D1D6] bg-white'
                    }`}
                  >
                    {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                </div>

                <h3 className={`text-sm font-semibold mb-1 transition-colors ${
                  isSelected ? 'text-[#017EFC]' : 'text-[#202125]'
                }`}>
                  {item.title}
                </h3>
                <p className="text-xs text-[#515151] leading-relaxed mb-3">
                  {item.description}
                </p>
              </div>

              {/* Bottom Tag */}
              <div className="pt-2 border-t border-[#E5E5E9] flex items-center justify-between text-[11px]">
                <span className="text-[#86868B]">Solusi relevan:</span>
                <span className="font-semibold text-[#017EFC] bg-white px-2 py-0.5 rounded border border-[#BFDBFE]">
                  {item.solutionTag}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {!isFormValid && (
        <div className="flex items-center gap-2 p-3 rounded-[10px] bg-[#FFFBEB] border border-[#FDE68A] text-xs text-[#92400E]">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>Silakan pilih minimal 1 kendala untuk melanjutkan analisis.</span>
        </div>
      )}

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
          <span>Lanjut ke Prioritas Solusi</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
