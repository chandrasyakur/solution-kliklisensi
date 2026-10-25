import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ProgressBar } from './components/ProgressBar';
import { StepIntro } from './components/StepIntro';
import { StepBusinessProfile } from './components/StepBusinessProfile';
import { StepBottlenecks } from './components/StepBottlenecks';
import { StepPriority } from './components/StepPriority';
import { StepContact } from './components/StepContact';
import { StepResult } from './components/StepResult';
import { AdminDrawer } from './components/AdminDrawer';
import { AssessmentFormData, DiagnosticResult } from './types/assessment';
import { generateDiagnostic } from './data/assessmentData';
import { submitAssessment, getLocalSavedLeads } from './lib/supabase';
import { Reveal } from './components/ui/Reveal';

const INITIAL_FORM_DATA: AssessmentFormData = {
  businessName: '',
  city: '',
  industry: '',
  teamSize: '',
  businessModel: '',
  selectedBottlenecks: [],
  primaryBottleneckElaboration: '',
  desiredSolution: '',
  timeline: 'Dalam 1-3 Bulan',
  contactName: '',
  whatsapp: '',
  email: '',
  role: 'Owner / Founder',
};

const STEP_NAMES = [
  'Profil',
  'Kendala',
  'Prioritas',
  'Kontak',
];

export const App: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const [formData, setFormData] = useState<AssessmentFormData>(INITIAL_FORM_DATA);
  const [diagnostic, setDiagnostic] = useState<DiagnosticResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAdminOpen, setIsAdminOpen] = useState<boolean>(false);
  const [leadCount, setLeadCount] = useState<number>(0);

  useEffect(() => {
    refreshLeadCount();
  }, []);

  const refreshLeadCount = () => {
    const list = getLocalSavedLeads();
    setLeadCount(list.length);
  };

  const updateFormData = (updates: Partial<AssessmentFormData>) => {
    setFormData((prev) => ({ ...prev, ...updates }));
  };

  const handleStart = () => {
    setStep(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextStep = () => {
    setStep((prev) => prev + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevStep = () => {
    setStep((prev) => Math.max(0, prev - 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const result = generateDiagnostic(formData);
      setDiagnostic(result);

      await submitAssessment(formData);
      refreshLeadCount();

      setStep(5);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error('Submission error:', err);
      const result = generateDiagnostic(formData);
      setDiagnostic(result);
      setStep(5);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM_DATA);
    setDiagnostic(null);
    setStep(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAFAFC] text-[#1D1D1F] flex flex-col relative font-sans">
      {/* Top Header */}
      <Header onStart={handleStart} isFormActive={step > 0} />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col justify-center py-8 sm:py-12">
        {step > 0 && step < 5 && (
          <Reveal delay={50}>
            <ProgressBar
              currentStep={step}
              totalSteps={4}
              stepNames={STEP_NAMES}
            />
          </Reveal>
        )}

        {/* Step Routing */}
        {step === 0 && <StepIntro onStart={handleStart} />}

        {step === 1 && (
          <Reveal delay={50}>
            <StepBusinessProfile
              data={formData}
              onChange={updateFormData}
              onNext={handleNextStep}
              onBack={handlePrevStep}
            />
          </Reveal>
        )}

        {step === 2 && (
          <Reveal delay={50}>
            <StepBottlenecks
              data={formData}
              onChange={updateFormData}
              onNext={handleNextStep}
              onBack={handlePrevStep}
            />
          </Reveal>
        )}

        {step === 3 && (
          <Reveal delay={50}>
            <StepPriority
              data={formData}
              onChange={updateFormData}
              onNext={handleNextStep}
              onBack={handlePrevStep}
            />
          </Reveal>
        )}

        {step === 4 && (
          <Reveal delay={50}>
            <StepContact
              data={formData}
              onChange={updateFormData}
              onSubmit={handleSubmit}
              onBack={handlePrevStep}
              isLoading={isLoading}
            />
          </Reveal>
        )}

        {step === 5 && diagnostic && (
          <Reveal delay={50}>
            <StepResult
              formData={formData}
              diagnostic={diagnostic}
              onReset={handleReset}
            />
          </Reveal>
        )}
      </main>

      {/* Clean Minimalist Footer */}
      <footer className="border-t border-[#E5E5E9] bg-white py-8 text-center text-xs text-[#86868B]">
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-center">
          <div className="flex items-center gap-1.5 font-normal">
            <span>Powered by</span>
            <button
              onClick={() => setIsAdminOpen(true)}
              className="font-medium text-[#1D1D1F] hover:underline cursor-pointer"
              title={leadCount > 0 ? `${leadCount} data masuk` : 'Panel Data'}
            >
              Klik Lisensi
            </button>
          </div>
        </div>
      </footer>

      {/* Admin / Inspector Drawer */}
      <AdminDrawer
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        onDataCleared={refreshLeadCount}
      />
    </div>
  );
};

export default App;
