-- ==============================================================================
-- MIGRATION: Table leads_assessment (Klik Solution - Business Diagnostic Tool)
-- Jalankan di SQL Editor Supabase Dashboard Klik Lisensi
-- ==============================================================================

CREATE TABLE IF NOT EXISTS public.leads_assessment (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT now() NOT NULL,
    
    -- Profil Bisnis
    business_name TEXT NOT NULL,
    city TEXT NOT NULL,
    industry TEXT NOT NULL,
    team_size TEXT NOT NULL,
    business_model TEXT NOT NULL,
    
    -- Diagnosis & Bottlenecks
    selected_bottlenecks JSONB DEFAULT '[]'::jsonb NOT NULL,
    primary_bottleneck_elaboration TEXT,
    desired_solution TEXT,
    timeline TEXT,
    
    -- PIC & Kontak
    contact_name TEXT NOT NULL,
    whatsapp TEXT NOT NULL,
    email TEXT,
    role TEXT,
    
    -- Pipeline & CRM State
    status TEXT DEFAULT 'new' NOT NULL, -- 'new', 'contacted', 'discovery_scheduled', 'proposal', 'deal', 'archived'
    assigned_to TEXT,                  -- 'sabik', 'chandra', dll
    notes TEXT,
    metadata JSONB DEFAULT '{}'::jsonb
);

-- Indexing untuk kecepatan query & filter
CREATE INDEX IF NOT EXISTS idx_leads_assessment_created_at ON public.leads_assessment (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_assessment_status ON public.leads_assessment (status);
CREATE INDEX IF NOT EXISTS idx_leads_assessment_industry ON public.leads_assessment (industry);
CREATE INDEX IF NOT EXISTS idx_leads_assessment_whatsapp ON public.leads_assessment (whatsapp);

-- Row Level Security (RLS)
ALTER TABLE public.leads_assessment ENABLE ROW LEVEL SECURITY;

-- Policy 1: Publik (Anonim) diperbolehkan submit/insert asesmen
CREATE POLICY "Public can submit assessment" 
ON public.leads_assessment 
FOR INSERT 
TO anon, authenticated 
WITH CHECK (true);

-- Policy 2: Hanya user terautentikasi (Admin / Tim Klik Lisensi) yang bisa baca & kelola data
CREATE POLICY "Authenticated users can read leads" 
ON public.leads_assessment 
FOR SELECT 
TO authenticated 
USING (true);

CREATE POLICY "Authenticated users can update leads" 
ON public.leads_assessment 
FOR UPDATE 
TO authenticated 
USING (true);

COMMENT ON TABLE public.leads_assessment IS 'Data prospek hasil Business Diagnostic Tool solution.kliklisensi.com (Kerjasama Chandra & Sabik)';
