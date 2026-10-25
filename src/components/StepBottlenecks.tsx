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
    <div className="w-full max-w-3xl mx-auto px-6 py-6 space-y-8">
      {/* Step Header */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F] tracking-tight">
            Kendala Operasional
          </h2>
          <span className="text-xs font-medium text-[#86868B]">
            {selectedCount} dipilih
          </span>
        </div>
        <p className="text-sm text-[#86868B]">
          Pilih kendala yang saat ini dialami operasional bisnis Anda.
        </p>
      </div>

      {/* Segmented Filter Control: Pill shaped, clean */}
      <div className="flex items-center gap-1 p-1 rounded-full bg-[#F5F5F7] border border-[#E5E5E9] overflow-x-auto scrollbar-none text-xs">
        <button
          type="button"
          onClick={() => setActiveTab('all')}
          className={`h-8 px-4 rounded-full font-medium whitespace-nowrap transition-all duration-150 ${
            activeTab === 'all'
              ? 'bg-white text-[#1D1D1F] shadow-xs'
              : 'text-[#86868B] hover:text-[#1D1D1F]'
          }`}
        >
          Semua
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('sales')}
          className={`h-8 px-4 rounded-full font-medium whitespace-nowrap transition-all duration-150 ${
            activeTab === 'sales'
              ? 'bg-white text-[#1D1D1F] shadow-xs'
              : 'text-[#86868B] hover:text-[#1D1D1F]'
          }`}
        >
          Sales & Web
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('operations')}
          className={`h-8 px-4 rounded-full font-medium whitespace-nowrap transition-all duration-150 ${
            activeTab === 'operations'
              ? 'bg-white text-[#1D1D1F] shadow-xs'
              : 'text-[#86868B] hover:text-[#1D1D1F]'
          }`}
        >
          Operasional & Data
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('crm')}
          className={`h-8 px-4 rounded-full font-medium whitespace-nowrap transition-all duration-150 ${
            activeTab === 'crm'
              ? 'bg-white text-[#1D1D1F] shadow-xs'
              : 'text-[#86868B] hover:text-[#1D1D1F]'
          }`}
        >
          CRM & WhatsApp
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('automation')}
          className={`h-8 px-4 rounded-full font-medium whitespace-nowrap transition-all duration-150 ${
            activeTab === 'automation'
              ? 'bg-white text-[#1D1D1F] shadow-xs'
              : 'text-[#86868B] hover:text-[#1D1D1F]'
          }`}
        >
          Automasi & AI
        </button>
      </div>

      {/* Grid of Bottleneck Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredItems.map((item) => {
          const isSelected = data.selectedBottlenecks.includes(item.id);

          return (
            <div
              key={item.id}
              onClick={() => toggleBottleneck(item.id)}
              className={`p-5 rounded-[16px] border text-left cursor-pointer transition-all duration-150 flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#FBFBFC] border-[#1D1D1F] shadow-apple-sm'
                  : 'bg-white border-[#E5E5E9] hover:border-[#1D1D1F]'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-medium text-[#86868B]">
                    {item.categoryLabel}
                  </span>
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-[#1D1D1F] text-white'
                        : 'border border-[#D1D1D6] bg-white'
                    }`}
                  >
                    {isSelected && <Check className="w-3 h-3 stroke-[2.5]" />}
                  </div>
                </div>

                <h3 className="text-sm font-semibold text-[#1D1D1F]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#86868B] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {!isFormValid && (
        <div className="flex items-center gap-2 text-xs text-[#86868B]">
          <AlertCircle className="w-4 h-4 text-[#F59E0B]" />
          <span>Pilih minimal satu kendala untuk melanjutkan.</span>
        </div>
      )}

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
          <span>Lanjut ke Prioritas</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
