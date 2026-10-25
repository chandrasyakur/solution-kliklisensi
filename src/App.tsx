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

const INITIAL_FORM_DATA: AssessmentFormData = {
  businessName: '',
  city: '',
  industry: '',
  teamSize: '',
  businessModel: '',
  selectedBottlenecks: [],
  primaryBottleneckElaboration: '',
  desiredSolution: '',
  timeline: 'Dalam 1–3 Bulan ke Depan',
  contactName: '',
  whatsapp: '',
  email: '',
  role: 'Owner / Founder',
};

const STEP_NAMES = [
  'Profil Usaha',
  'Diagnosa Kendala',
  'Prioritas Solusi',
  'Kontak PIC',
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
    <div className="min-h-screen bg-[#FAFAFC] text-[#202125] flex flex-col relative font-sans">
      {/* Top Header */}
      <Header
        onOpenAdmin={() => setIsAdminOpen(true)}
        leadCount={leadCount}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col justify-center py-6 sm:py-8">
        {step > 0 && step < 5 && (
          <ProgressBar
            currentStep={step}
            totalSteps={4}
            stepNames={STEP_NAMES}
          />
        )}

        {/* Step Routing */}
        {step === 0 && <StepIntro onStart={handleStart} />}

        {step === 1 && (
          <StepBusinessProfile
            data={formData}
            onChange={updateFormData}
            onNext={handleNextStep}
            onBack={handlePrevStep}
          />
        )}

        {step === 2 && (
          <StepBottlenecks
            data={formData}
            onChange={updateFormData}
            onNext={handleNextStep}
            onBack={handlePrevStep}
          />
        )}

        {step === 3 && (
          <StepPriority
            data={formData}
            onChange={updateFormData}
            onNext={handleNextStep}
            onBack={handlePrevStep}
          />
        )}

        {step === 4 && (
          <StepContact
            data={formData}
            onChange={updateFormData}
            onSubmit={handleSubmit}
            onBack={handlePrevStep}
            isLoading={isLoading}
          />
        )}

        {step === 5 && diagnostic && (
          <StepResult
            formData={formData}
            diagnostic={diagnostic}
            onReset={handleReset}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#E5E5E9] bg-white py-6 text-center text-xs text-[#515151]">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#202125]">Klik Lisensi</span>
            <span className="text-[#86868B]">•</span>
            <span>Digital Infrastructure & Business Diagnostic Portal</span>
          </div>
          <div className="text-[11px] text-[#86868B]">
            Subdomain: <span className="font-mono text-[#017EFC]">solution.kliklisensi.com</span>
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
