import { BottleneckItem, IndustryType, TeamSizeType, BusinessModelType, AssessmentFormData, DiagnosticResult } from '../types/assessment';

export const INDUSTRIES: IndustryType[] = [
  'F&B / Kuliner',
  'Ritel & Toko Offline',
  'E-Commerce / Toko Online',
  'Jasa Profesional & Agensi',
  'Kesehatan & Kecantikan',
  'Manufaktur & Distribusi',
  'Properti & Konstruksi',
  'Edukasi & Pelatihan',
  'Lainnya',
];

export const TEAM_SIZES: TeamSizeType[] = [
  '1-4 orang (Solo / Mikro)',
  '5-19 orang (UMKM Berkembang)',
  '20-50 orang (Menengah / Established)',
  '> 50 orang (Skala Besar)',
];

export const BUSINESS_MODELS: BusinessModelType[] = [
  'B2C',
  'B2B',
  'B2B & B2C (Hybrid)',
];

export const BOTTLENECK_OPTIONS: BottleneckItem[] = [
  // Pilar 1: Sales & Akusisi
  {
    id: 'sales-traffic-conversion',
    category: 'sales',
    categoryLabel: 'Sales & Akuisisi',
    title: 'Trafik / Leads Ada tapi Konversi Rendah',
    description: 'Banyak orang tanya-tanya di WA / IG tapi sedikit sekali yang jadi bayar.',
    solutionTag: 'Website',
  },
  {
    id: 'sales-no-website',
    category: 'sales',
    categoryLabel: 'Sales & Akuisisi',
    title: 'Belum Punya Website Kredibel / Landing Page',
    description: 'Masih mengandalkan katalog PDF / feed medsos yang menyulitkan calon klien membaca penawaran.',
    solutionTag: 'Website',
  },
  {
    id: 'sales-slow-followup',
    category: 'sales',
    categoryLabel: 'Sales & Akuisisi',
    title: 'Follow-up Prospek Lambat & Sering Tercecer',
    description: 'Prospek menumpuk di chat admin pribadi, sering lupa di-follow up hingga akhirnya lari ke kompetitor.',
    solutionTag: 'CRM',
  },

  // Pilar 2: Operasional & Manajemen Data
  {
    id: 'ops-manual-excel',
    category: 'operations',
    categoryLabel: 'Operasional & Data',
    title: 'Pencatatan Masih Manual (Excel / Buku)',
    description: 'Transaksi, inventori atau pesanan dicatat manual, makan waktu rekap dan sering selisih.',
    solutionTag: 'Sistem Data',
  },
  {
    id: 'ops-team-coordination',
    category: 'operations',
    categoryLabel: 'Operasional & Data',
    title: 'Koordinasi Tim & Delegasi Tugas Berantakan',
    description: 'Status pekerjaan, timeline klien, atau orderan sering miskomunikasi antar divisi.',
    solutionTag: 'Sistem Data',
  },
  {
    id: 'ops-no-central-dashboard',
    category: 'operations',
    categoryLabel: 'Operasional & Data',
    title: 'Owner Buta Angka Real-Time',
    description: 'Sulit tahu laba bersih harian, tren penjualan, atau performa cabang tanpa menunggu rekap bulanan.',
    solutionTag: 'Sistem Data',
  },

  // Pilar 3: Customer Relationship & Retensi
  {
    id: 'crm-dormant-database',
    category: 'crm',
    categoryLabel: 'Customer & Retensi',
    title: 'Database Pelanggan Menumpuk Tapi Menganggur',
    description: 'Punya ribuan kontak tapi tidak pernah di-broadcast terarah, repeat order hanya mengandalkan ingatan pelanggan.',
    solutionTag: 'CRM',
  },
  {
    id: 'crm-cs-overwhelmed',
    category: 'crm',
    categoryLabel: 'Customer & Retensi',
    title: 'Customer Service Kewalahan Jawab FAQ',
    description: 'CS lelah menjawab pertanyaan berulang (harga, lokasi, ongkir, katalog) setiap hari.',
    solutionTag: 'Automasi AI',
  },
  {
    id: 'crm-no-loyalty',
    category: 'crm',
    categoryLabel: 'Customer & Retensi',
    title: 'Tidak Ada Sistem Membership / Loyalitas',
    description: 'Customer merasa tidak ada pembeda antara pembeli pertama dengan pelanggan setia.',
    solutionTag: 'CRM',
  },

  // Pilar 4: Efisiensi Waktu & Otomasi AI
  {
    id: 'auto-repetitive-tasks',
    category: 'automation',
    categoryLabel: 'Otomasi & AI',
    title: 'Tugas Repetitif Menghabiskan 2-4 Jam Tiap Hari',
    description: 'Kirim invoice, verifikasi mutasi bayar, update status order masih diklik satu per satu oleh manusia.',
    solutionTag: 'Automasi AI',
  },
  {
    id: 'auto-owner-trapped',
    category: 'automation',
    categoryLabel: 'Otomasi & AI',
    title: 'Owner Terjebak di Teknis Operasional (Micromanaging)',
    description: 'Kalau owner tidak ada di tempat / tidak pegang HP, operasional kantor atau toko tersendat.',
    solutionTag: 'Sistem Data',
  },
  {
    id: 'auto-confused-ai',
    category: 'automation',
    categoryLabel: 'Otomasi & AI',
    title: 'Ingin Implementasi AI tapi Bingung Mulai dari Mana',
    description: 'Sadar AI bisa memangkas biaya operasional, tapi belum tahu *use-case* nyata yang langsung menghasilkan ROI.',
    solutionTag: 'Automasi AI',
  },
];

export const DESIRED_SOLUTIONS = [
  'Website Profesional / Landing Page Konversi Tinggi',
  'Sistem CRM & Database Pelanggan Otomatis (WhatsApp Integrated)',
  'Web App / Sistem ERP Operasional Khusus (Custom)',
  'AI Chatbot Customer Service 24/7 & Asisten Otomasi Internal',
  'Audit & Konsultasi Arsitektur Digital Menyeluruh',
  'Belum Yakin (Ingin Diskusi Dulu)',
];

export const TIMELINES = [
  'Segera (Bulan Ini / 1-2 Minggu)',
  'Dalam 1-3 Bulan ke Depan',
  'Hanya Cari Info / Riset Awal',
];

/**
 * Menganalisis jawaban dan meng-generate laporan diagnostik instan
 */
export function generateDiagnostic(formData: AssessmentFormData): DiagnosticResult {
  const selectedItems = BOTTLENECK_OPTIONS.filter((item) =>
    formData.selectedBottlenecks.includes(item.id)
  );

  // Ambil top 3 bottlenecks
  const topThreeBottlenecks =
    selectedItems.length > 0
      ? selectedItems.slice(0, 3)
      : BOTTLENECK_OPTIONS.slice(0, 3);

  // Hitung perkiraan readiness score berdasarkan skala tim & jumlah bottleneck
  const count = formData.selectedBottlenecks.length;
  let readinessScore = Math.max(35, 95 - count * 10);
  if (formData.teamSize.includes('Solo')) readinessScore = 55;
  if (formData.teamSize.includes('> 50')) readinessScore = 48;

  let digitalMaturityLevel: DiagnosticResult['digitalMaturityLevel'] = 'Scaling Bottleneck';
  if (count <= 2) digitalMaturityLevel = 'Ready for Modernization';
  else if (count >= 5) digitalMaturityLevel = 'Emerging';

  // Rekomendasi solusi yang dipersonalisasi
  const hasSalesIssues = selectedItems.some((i) => i.category === 'sales');
  const hasOpsIssues = selectedItems.some((i) => i.category === 'operations');
  const hasCrmIssues = selectedItems.some((i) => i.category === 'crm');
  const hasAutoIssues = selectedItems.some((i) => i.category === 'automation');

  const recommendedSolutions: DiagnosticResult['recommendedSolutions'] = [];

  if (hasSalesIssues || formData.desiredSolution.includes('Website')) {
    recommendedSolutions.push({
      title: 'Digital Front-Office & Funnel Konversi',
      description:
        'Bangun landing page atau portal interaktif berkecepatan tinggi yang memfilter prospek serius sebelum masuk ke WhatsApp tim sales.',
      icon: 'Globe',
      priority: 'High',
    });
  }

  if (hasCrmIssues || formData.desiredSolution.includes('CRM')) {
    recommendedSolutions.push({
      title: 'Centralized CRM & WhatsApp Automation',
      description:
        'Sentralisasi database pelanggan, otomatisasi pengingat repeat order, dan broadcast tersegmen tanpa risiko nomor diblokir.',
      icon: 'Users',
      priority: 'High',
    });
  }

  if (hasOpsIssues || formData.desiredSolution.includes('ERP')) {
    recommendedSolutions.push({
      title: 'Custom Internal Operations Portal',
      description:
        'Gantikan spreadsheet yang rapuh dengan dashboard operasional berbasis cloud yang terhubung langsung ke mutasi rekening dan inventori.',
      icon: 'LayoutDashboard',
      priority: 'Medium',
    });
  }

  if (hasAutoIssues || formData.desiredSolution.includes('AI') || recommendedSolutions.length < 2) {
    recommendedSolutions.push({
      title: 'AI Customer Assistant & Routine Task Automation',
      description:
        'Penerapan AI Agent cerdas untuk menangani 70% FAQ pelanggan selama 24 jam serta otomasi rekap data harian ke laporan owner.',
      icon: 'Sparkles',
      priority: 'High',
    });
  }

  return {
    readinessScore,
    digitalMaturityLevel,
    topThreeBottlenecks,
    recommendedSolutions,
  };
}
