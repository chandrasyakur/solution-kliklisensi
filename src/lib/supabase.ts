import { createClient } from '@supabase/supabase-js';
import { AssessmentFormData } from '../types/assessment';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || '';

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export interface SubmitAssessmentResult {
  success: boolean;
  leadId?: string;
  isFallback?: boolean;
  error?: string;
}

export async function submitAssessment(formData: AssessmentFormData): Promise<SubmitAssessmentResult> {
  const payload = {
    business_name: formData.businessName,
    city: formData.city,
    industry: formData.industry,
    team_size: formData.teamSize,
    business_model: formData.businessModel,
    selected_bottlenecks: formData.selectedBottlenecks,
    primary_bottleneck_elaboration: formData.primaryBottleneckElaboration,
    desired_solution: formData.desiredSolution,
    timeline: formData.timeline,
    contact_name: formData.contactName,
    whatsapp: formData.whatsapp,
    email: formData.email || null,
    role: formData.role || 'Owner / Pengambil Keputusan',
    status: 'new',
    created_at: new Date().toISOString(),
  };

  // 1. Simpan selalu ke localStorage sebagai fail-safe cadangan lokal
  try {
    const existing = JSON.parse(localStorage.getItem('klik_solution_leads') || '[]');
    const localRecord = { ...payload, id: `local_${Date.now()}` };
    localStorage.setItem('klik_solution_leads', JSON.stringify([localRecord, ...existing]));
  } catch (err) {
    console.warn('Gagal menyimpan cache lokal:', err);
  }

  // 2. Kirim ke Supabase jika client tersedia
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('leads_assessment')
        .insert([payload])
        .select('id')
        .single();

      if (error) {
        console.warn('Supabase insert warning (Tabel leads_assessment mungkin belum dimigrasi di database):', error.message);
        // Fallback tetap dianggap sukses agar prospek/user tidak mengalami error screen
        return {
          success: true,
          isFallback: true,
          error: error.message,
        };
      }

      return {
        success: true,
        leadId: data?.id,
        isFallback: false,
      };
    } catch (err) {
      console.warn('Network error ke Supabase:', err);
      return {
        success: true,
        isFallback: true,
        error: String(err),
      };
    }
  }

  // Jika Supabase URL tidak terisi, tetap return success lokal
  return {
    success: true,
    isFallback: true,
  };
}

export function getLocalSavedLeads(): any[] {
  try {
    return JSON.parse(localStorage.getItem('klik_solution_leads') || '[]');
  } catch {
    return [];
  }
}
