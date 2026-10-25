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
    <div className="w-full max-w-2xl mx-auto mb-8 px-6">
      {/* Top indicator text */}
      <div className="flex items-center justify-between text-xs text-[#86868B] mb-2.5">
        <span className="font-semibold text-[#1D1D1F]">
          Langkah {currentStep} dari {totalSteps}: {stepNames[currentStep - 1]}
        </span>
        <span>{percentage}%</span>
      </div>

      {/* Progress track */}
      <div className="w-full h-1 bg-[#E5E5E9] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#1D1D1F] rounded-full transition-all duration-300 ease-out"
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
                  ? 'text-[#1D1D1F] font-semibold'
                  : isDone
                  ? 'text-[#505052]'
                  : 'text-[#86868B]'
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-semibold transition-all ${
                  isDone
                    ? 'bg-[#1D1D1F] text-white'
                    : isCurrent
                    ? 'border-2 border-[#1D1D1F] text-[#1D1D1F]'
                    : 'bg-[#F5F5F7] text-[#86868B]'
                }`}
              >
                {isDone ? <Check className="w-2.5 h-2.5 stroke-[3]" /> : stepNum}
              </div>
              <span>{name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
