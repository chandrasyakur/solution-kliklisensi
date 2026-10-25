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
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-xl h-full bg-slate-950 border-l border-slate-800 flex flex-col p-6 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Database className="w-5 h-5 text-indigo-400" />
            <div>
              <h3 className="font-bold text-white text-base">Panel Data Prospek & DB</h3>
              <p className="text-xs text-slate-400">Monitoring internal (Chandra & Sabik)</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 pt-4 pb-2 text-xs">
          <button
            onClick={() => setActiveTab('leads')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition ${
              activeTab === 'leads'
                ? 'bg-indigo-600 text-white'
                : 'bg-slate-900 text-slate-400 hover:text-white'
            }`}
          >
            Data Masuk ({leads.length})
          </button>
          <button
            onClick={() => setActiveTab('sql')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition ${
              activeTab === 'sql'
                ? 'bg-indigo-600 text-white'
                : 'bg-slate-900 text-slate-400 hover:text-white'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>SQL Supabase</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto py-3 space-y-3">
          {activeTab === 'leads' ? (
            leads.length === 0 ? (
              <div className="text-center py-16 text-slate-500 text-xs">
                Belum ada data masuk. Coba isi form untuk melakukan tes!
              </div>
            ) : (
              leads.map((lead: any, i: number) => (
                <div
                  key={lead.id || i}
                  className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-white">
                      {lead.business_name}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-semibold">
                      {lead.industry}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-slate-400 text-[11px]">
                    <div>
                      Kota: <span className="text-slate-200">{lead.city}</span>
                    </div>
                    <div>
                      Tim: <span className="text-slate-200">{lead.team_size}</span>
                    </div>
                    <div>
                      PIC: <span className="text-slate-200">{lead.contact_name}</span> ({lead.role})
                    </div>
                    <div>
                      WhatsApp: <span className="text-emerald-400 font-medium">{lead.whatsapp}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-800/60 text-slate-300">
                    <div className="text-[10px] text-slate-500 mb-0.5">Solusi yang Diminati:</div>
                    <div className="font-medium text-indigo-300">{lead.desired_solution}</div>
                  </div>

                  {lead.primary_bottleneck_elaboration && (
                    <div className="text-[11px] text-slate-400 italic bg-slate-950 p-2 rounded-lg border border-slate-800/80">
                      "{lead.primary_bottleneck_elaboration}"
                    </div>
                  )}

                  <div className="text-[10px] text-slate-500 pt-1">
                    Waktu kirim: {new Date(lead.created_at).toLocaleString('id-ID')}
                  </div>
                </div>
              ))
            )
          ) : (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Jalankan SQL ini di Supabase SQL Editor Klik Lisensi:
                </span>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-indigo-600 hover:bg-indigo-500 text-white text-[11px] font-semibold transition"
                >
                  {copiedSQL ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedSQL ? 'Tersalin' : 'Salin SQL'}</span>
                </button>
              </div>

              <pre className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-300 font-mono overflow-x-auto whitespace-pre leading-relaxed">
                {sqlCode}
              </pre>
            </div>
          )}
        </div>

        {/* Footer */}
        {activeTab === 'leads' && leads.length > 0 && (
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <span className="text-[11px] text-slate-500">
              Total: {leads.length} prospek lokal
            </span>
            <button
              onClick={handleClear}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-rose-400 hover:bg-rose-500/10 text-xs font-semibold transition"
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
