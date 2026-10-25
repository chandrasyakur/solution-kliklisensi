export type IndustryType =
  | 'F&B / Kuliner'
  | 'Ritel & Toko Offline'
  | 'E-Commerce / Toko Online'
  | 'Jasa Profesional & Agensi'
  | 'Kesehatan & Kecantikan'
  | 'Manufaktur & Distribusi'
  | 'Properti & Konstruksi'
  | 'Edukasi & Pelatihan'
  | 'Lainnya';

export type TeamSizeType =
  | '1-4 orang (Solo / Mikro)'
  | '5-19 orang (UMKM Berkembang)'
  | '20-50 orang (Menengah / Established)'
  | '> 50 orang (Skala Besar)';

export type BusinessModelType = 'B2C' | 'B2B' | 'B2B & B2C (Hybrid)';

export type BottleneckCategory = 'sales' | 'operations' | 'crm' | 'automation';

export interface BottleneckItem {
  id: string;
  category: BottleneckCategory;
  categoryLabel: string;
  title: string;
  description: string;
  solutionTag: 'Website' | 'CRM' | 'Automasi AI' | 'Sistem Data';
}

export interface AssessmentFormData {
  // Step 1: Profil Bisnis
  businessName: string;
  city: string;
  industry: IndustryType | '';
  teamSize: TeamSizeType | '';
  businessModel: BusinessModelType | '';

  // Step 2: Bottlenecks (Multi-select)
  selectedBottlenecks: string[];

  // Step 3: Prioritas & Ekspektasi
  primaryBottleneckElaboration: string;
  desiredSolution: string;
  timeline: string;

  // Step 4: PIC & Kontak
  contactName: string;
  whatsapp: string;
  email: string;
  role: string;
}

export interface DiagnosticResult {
  readinessScore: number; // 0-100
  digitalMaturityLevel: 'Emerging' | 'Scaling Bottleneck' | 'Ready for Modernization';
  topThreeBottlenecks: BottleneckItem[];
  recommendedSolutions: {
    title: string;
    description: string;
    icon: string;
    priority: 'High' | 'Medium';
  }[];
}
