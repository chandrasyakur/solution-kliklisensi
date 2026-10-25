import React from 'react';
import { Check } from 'lucide-react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  stepNames: string[];
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  totalSteps,
  stepNames,
}) => {
  const percentage = Math.round(((currentStep - 1) / (totalSteps - 1)) * 100);

  return (
    <div className="w-full max-w-3xl mx-auto mb-6 px-4">
      {/* Top indicator text */}
      <div className="flex items-center justify-between text-xs text-[#515151] mb-2 font-medium">
        <span className="font-semibold text-[#017EFC]">
          Langkah {currentStep} dari {totalSteps}: {stepNames[currentStep - 1]}
        </span>
        <span className="text-[#86868B]">{percentage}% Selesai</span>
      </div>

      {/* Progress track */}
      <div className="w-full h-1.5 bg-[#E5E5E9] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#017EFC] rounded-full transition-all duration-400 ease-out"
          style={{ width: `${Math.max(percentage, 5)}%` }}
        />
      </div>

      {/* Steps pills */}
      <div className="hidden sm:flex justify-between items-center mt-3 text-[11px]">
        {stepNames.map((name, index) => {
          const stepNum = index + 1;
          const isDone = stepNum < currentStep;
          const isCurrent = stepNum === currentStep;

          return (
            <div
              key={name}
              className={`flex items-center gap-1.5 transition-colors ${
                isCurrent
                  ? 'text-[#017EFC] font-bold'
                  : isDone
                  ? 'text-[#202125] font-medium'
                  : 'text-[#86868B]'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-semibold transition-all ${
                  isDone
                    ? 'bg-[#EFF6FF] text-[#017EFC] border border-[#BFDBFE]'
                    : isCurrent
                    ? 'bg-[#017EFC] text-white shadow-sm'
                    : 'bg-[#F5F5F7] border border-[#E5E5E9] text-[#86868B]'
                }`}
              >
                {isDone ? <Check className="w-3 h-3 stroke-[2.5]" /> : stepNum}
              </div>
              <span>{name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
