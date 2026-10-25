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
  const [step, setStep] = useState<number>(0); // 0: Intro, 1: Profil, 2: Bottlenecks, 3: Prioritas, 4: Kontak, 5: Result
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
      // 1. Generate diagnostik cerdas
      const result = generateDiagnostic(formData);
      setDiagnostic(result);

      // 2. Submit ke database Supabase (+ local fallback)
      await submitAssessment(formData);
      refreshLeadCount();

      // 3. Masuk ke halaman hasil
      setStep(5);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error('Submission error:', err);
      // Tetap lanjutkan ke hasil diagnostik
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
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col relative overflow-x-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-indigo-600/10 via-violet-600/5 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Top Header */}
      <Header
        onOpenAdmin={() => setIsAdminOpen(true)}
        leadCount={leadCount}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col justify-center py-6 sm:py-10">
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
      <footer className="border-t border-slate-900 py-6 text-center text-xs text-slate-500">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <span className="font-semibold text-slate-400">Klik Solution</span> • Digital Infrastructure & Modernization Portal
          </div>
          <div className="text-[11px] text-slate-600">
            Subdomain target: <span className="text-slate-400 font-mono">solution.kliklisensi.com</span>
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
