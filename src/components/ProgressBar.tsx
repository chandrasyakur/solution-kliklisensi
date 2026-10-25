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
    <div className="w-full max-w-3xl mx-auto mb-8 px-4">
      {/* Top indicator text */}
      <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
        <span className="font-semibold text-indigo-400">
          Langkah {currentStep} dari {totalSteps}: {stepNames[currentStep - 1]}
        </span>
        <span className="font-medium text-slate-400">{percentage}% Selesai</span>
      </div>

      {/* Progress track */}
      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-400 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${Math.max(percentage, 5)}%` }}
        />
      </div>

      {/* Steps pills (mobile friendly) */}
      <div className="hidden sm:flex justify-between items-center mt-3 text-[11px] text-slate-500 font-medium">
        {stepNames.map((name, index) => {
          const stepNum = index + 1;
          const isDone = stepNum < currentStep;
          const isCurrent = stepNum === currentStep;

          return (
            <div
              key={name}
              className={`flex items-center gap-1.5 transition-colors ${
                isCurrent
                  ? 'text-indigo-400 font-semibold'
                  : isDone
                  ? 'text-slate-300'
                  : 'text-slate-600'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                  isDone
                    ? 'bg-indigo-600/30 text-indigo-400 border border-indigo-500/40'
                    : isCurrent
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-900 border border-slate-800 text-slate-500'
                }`}
              >
                {isDone ? <Check className="w-3 h-3" /> : stepNum}
              </div>
              <span>{name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
