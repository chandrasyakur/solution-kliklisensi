import React, { useState } from 'react';
import { X, Database, Copy, Check, Trash2, Code2 } from 'lucide-react';
import { getLocalSavedLeads } from '../lib/supabase';

interface AdminDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onDataCleared: () => void;
}

export const AdminDrawer: React.FC<AdminDrawerProps> = ({
  isOpen,
  onClose,
  onDataCleared,
}) => {
  const [copiedSQL, setCopiedSQL] = useState(false);
  const [activeTab, setActiveTab] = useState<'leads' | 'sql'>('leads');

  if (!isOpen) return null;

  const leads = getLocalSavedLeads();

  const handleClear = () => {
    if (confirm('Hapus semua data prospek tes lokal?')) {
      localStorage.removeItem('klik_solution_leads');
      onDataCleared();
    }
  };

  const sqlCode = `-- SQL Migration untuk Supabase Klik Lisensi:
CREATE TABLE IF NOT EXISTS public.leads_assessment (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT now() NOT NULL,
    business_name TEXT NOT NULL,
    city TEXT NOT NULL,
    industry TEXT NOT NULL,
    team_size TEXT NOT NULL,
    business_model TEXT NOT NULL,
    selected_bottlenecks JSONB DEFAULT '[]'::jsonb NOT NULL,
    primary_bottleneck_elaboration TEXT,
    desired_solution TEXT,
    timeline TEXT,
    contact_name TEXT NOT NULL,
    whatsapp TEXT NOT NULL,
    email TEXT,
    role TEXT,
    status TEXT DEFAULT 'new' NOT NULL
);

ALTER TABLE public.leads_assessment ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can submit assessment" ON public.leads_assessment FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can read leads" ON public.leads_assessment FOR SELECT TO authenticated USING (true);`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(sqlCode);
    setCopiedSQL(true);
    setTimeout(() => setCopiedSQL(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/40 backdrop-blur-xs animate-fade-in">
      <div className="w-full max-w-xl h-full bg-white border-l border-[#E5E5E9] shadow-2xl flex flex-col p-6 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#E5E5E9]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-[8px] bg-[#EFF6FF] text-[#017EFC] flex items-center justify-center">
              <Database className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-[#202125] text-base">Monitoring Prospek & DB</h3>
              <p className="text-xs text-[#515151]">Panel internal tim Klik Solution (Chandra & Sabik)</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#515151] hover:text-[#202125] hover:bg-[#F5F5F7] transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher (Segmented Control style) */}
        <div className="flex items-center gap-1 p-1 rounded-[10px] bg-[#F5F5F7] border border-[#E5E5E9] my-4 text-xs">
          <button
            onClick={() => setActiveTab('leads')}
            className={`flex-1 py-1.5 rounded-[8px] font-semibold transition-all duration-150 ${
              activeTab === 'leads'
                ? 'bg-white text-[#202125] shadow-xs'
                : 'text-[#515151] hover:text-[#202125]'
            }`}
          >
            Data Masuk ({leads.length})
          </button>
          <button
            onClick={() => setActiveTab('sql')}
            className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-[8px] font-semibold transition-all duration-150 ${
              activeTab === 'sql'
                ? 'bg-white text-[#202125] shadow-xs'
                : 'text-[#515151] hover:text-[#202125]'
            }`}
          >
            <Code2 className="w-3.5 h-3.5 text-[#017EFC]" />
            <span>SQL Supabase</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto py-1 space-y-3">
          {activeTab === 'leads' ? (
            leads.length === 0 ? (
              <div className="text-center py-16 text-[#86868B] text-xs">
                Belum ada data masuk. Coba isi form untuk melakukan tes!
              </div>
            ) : (
              leads.map((lead: any, i: number) => (
                <div
                  key={lead.id || i}
                  className="p-4 rounded-[12px] bg-[#FAFAFC] border border-[#E5E5E9] text-xs space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-[#202125]">
                      {lead.business_name}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#EFF6FF] text-[#017EFC] border border-[#BFDBFE] font-semibold">
                      {lead.industry}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[#515151] text-[11px]">
                    <div>
                      Kota: <span className="text-[#202125] font-medium">{lead.city}</span>
                    </div>
                    <div>
                      Tim: <span className="text-[#202125] font-medium">{lead.team_size}</span>
                    </div>
                    <div>
                      PIC: <span className="text-[#202125] font-medium">{lead.contact_name}</span> ({lead.role})
                    </div>
                    <div>
                      WA: <span className="text-[#10B981] font-bold">{lead.whatsapp}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#E5E5E9] text-[#202125]">
                    <div className="text-[10px] text-[#86868B] mb-0.5">Solusi yang Diminati:</div>
                    <div className="font-semibold text-[#017EFC]">{lead.desired_solution}</div>
                  </div>

                  {lead.primary_bottleneck_elaboration && (
                    <div className="text-[11px] text-[#515151] italic bg-white p-2.5 rounded-[8px] border border-[#E5E5E9]">
                      "{lead.primary_bottleneck_elaboration}"
                    </div>
                  )}

                  <div className="text-[10px] text-[#86868B] pt-1">
                    Waktu kirim: {new Date(lead.created_at).toLocaleString('id-ID')}
                  </div>
                </div>
              ))
            )
          ) : (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#515151]">
                  Jalankan SQL ini di Supabase SQL Editor Klik Lisensi:
                </span>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#017EFC] hover:bg-[#006ee0] text-white text-[11px] font-semibold transition shadow-xs"
                >
                  {copiedSQL ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedSQL ? 'Tersalin' : 'Salin SQL'}</span>
                </button>
              </div>

              <pre className="p-4 rounded-[10px] bg-[#F5F5F7] border border-[#E5E5E9] text-[11px] text-[#202125] font-mono overflow-x-auto whitespace-pre leading-relaxed">
                {sqlCode}
              </pre>
            </div>
          )}
        </div>

        {/* Footer */}
        {activeTab === 'leads' && leads.length > 0 && (
          <div className="pt-4 border-t border-[#E5E5E9] flex items-center justify-between">
            <span className="text-[11px] text-[#86868B]">
              Total: {leads.length} prospek lokal
            </span>
            <button
              onClick={handleClear}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-rose-600 hover:bg-rose-50 text-xs font-semibold transition"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Hapus Data Tes</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
