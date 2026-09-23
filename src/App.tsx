import { useState } from 'react';
import {
  MarketCover,
  MarketKeyFindings,
  MarketNarrativeRail,
  MarketDistribution,
  MarketSegmentAnalysis,
  MarketContactsBasis,
  OutlookCover,
  OutlookContents,
  OutlookNarrative,
  OutlookSectionOpener,
  OutlookBodyEmphasis,
  OutlookAssessmentMatrix,
  OutlookContactsGovernance,
  WorkflowOperatingMap,
  WorkflowTransformationMap,
  WorkflowIntelligenceArchitecture,
} from './pages';
import { C, Icon, iconNames, OweleenLogo } from './system';
import Downloads from './Downloads';
import EditableFigure from './EditableFigure';
import TemplateEditorModal, { type TemplateItem } from './TemplateEditorModal';

export const templates: readonly TemplateItem[] = [
  // Set A: Market Notes (A1 — A6)
  {
    code: 'A1',
    set: 'Set A: Market Notes',
    num: '01',
    title: 'Cover — CPL vs. CPQL Complete Report',
    desc: 'Executive research cover with Dubai skyline visual, metadata, and twin crescent brandmark.',
    isDark: true,
    Component: MarketCover,
    key: 'A1_Cover',
  },
  {
    code: 'A2',
    set: 'Set A: Market Notes',
    num: '02',
    title: 'Key Findings — The Wrong Number',
    desc: 'The core argument: why CPL is disconnected from revenue, BANT definition, and 15× multiplier.',
    isDark: false,
    Component: MarketKeyFindings,
    key: 'A2_Key-Findings-Pull-Quote',
  },
  {
    code: 'A3',
    set: 'Set A: Market Notes',
    num: '03',
    title: 'Narrative + Rail — UAE CPL Benchmarks',
    desc: 'UAE 2025–2026 CPL inflation (25–35% YoY), global Meta +38% CPA surge, and channel bar chart.',
    isDark: false,
    Component: MarketNarrativeRail,
    key: 'A3_Narrative-Indicator-Rail',
  },
  {
    code: 'A4',
    set: 'Set A: Market Notes',
    num: '04',
    title: 'Distribution — CPQL Channel Revelation',
    desc: 'Why portals are 38% cheaper than Meta per qualified buyer; full multiplier comparison.',
    isDark: false,
    Component: MarketDistribution,
    key: 'A4_Distribution-Share-Exhibits',
  },
  {
    code: 'A5',
    set: 'Set A: Market Notes',
    num: '05',
    title: 'Segment Analysis — 5 Failure Points',
    desc: 'The 5 operational breakdown points that kill qualification, plus the 0–130 lead scoring model.',
    isDark: false,
    Component: MarketSegmentAnalysis,
    key: 'A5_Segment-Analysis-Banded',
  },
  {
    code: 'A6',
    set: 'Set A: Market Notes',
    num: '06',
    title: 'Contacts + Basis — Dead Database Opportunity',
    desc: 'Why 40% of leads buy within 24 months, 10–20× ROI reactivation, author contacts, and methodology.',
    isDark: false,
    Component: MarketContactsBasis,
    key: 'A6_Contacts-Basis',
  },

  // Set B: Strategic Outlook (B1 — B7)
  {
    code: 'B1',
    set: 'Set B: Strategic Outlook',
    num: '07',
    title: 'Cover — Strategic Outlook: CPL vs. CPQL',
    desc: 'Vertical corporate executive cover: Why UAE brokerages misallocate AED 455,270/mo.',
    isDark: true,
    Component: OutlookCover,
    key: 'B1_Cover',
  },
  {
    code: 'B2',
    set: 'Set B: Strategic Outlook',
    num: '08',
    title: 'Agenda — 13-Section Table of Contents',
    desc: 'Executive briefing index spanning channel economics, failure points, and reallocation.',
    isDark: false,
    Component: OutlookContents,
    key: 'B2_Contents-Publication-Map',
  },
  {
    code: 'B3',
    set: 'Set B: Strategic Outlook',
    num: '09',
    title: 'Narrative — Arithmetic of Lead Dilution',
    desc: 'Detailed breakdown of the volume trap, agency fee alignment, and BANT qualification math.',
    isDark: false,
    Component: OutlookNarrative,
    key: 'B3_Background-Narrative',
  },
  {
    code: 'B4',
    set: 'Set B: Strategic Outlook',
    num: '10',
    title: 'Section Opener — Conversion Architecture',
    desc: 'Dark full-bleed breaker page introducing the 15 operational failure points.',
    isDark: true,
    Component: OutlookSectionOpener,
    key: 'B4_Section-Opener',
  },
  {
    code: 'B5',
    set: 'Set B: Strategic Outlook',
    num: '11',
    title: 'Revenue Leak — Quantifying AED 455,270/mo',
    desc: 'Line-by-line financial audit of 15 operational levers (C1–C15) draining brokerage revenue.',
    isDark: false,
    Component: OutlookBodyEmphasis,
    key: 'B5_Body-Emphasis-Panel',
  },
  {
    code: 'B6',
    set: 'Set B: Strategic Outlook',
    num: '12',
    title: 'Reallocation Matrix — +41% Qualified Leads',
    desc: 'Budget shift model from CPL to CPQL (AED 75k spend) and before/after Oweleen AI impact.',
    isDark: false,
    Component: OutlookAssessmentMatrix,
    key: 'B6_Assessment-Matrix-Quote',
  },
  {
    code: 'B7',
    set: 'Set B: Strategic Outlook',
    num: '13',
    title: 'Scorecard & Governance — 14-Point Audit',
    desc: 'Brokerage self-assessment quiz, maturity bands (Blind to Optimised), and executive takeaway.',
    isDark: false,
    Component: OutlookContactsGovernance,
    key: 'B7_Contacts-Governance',
  },

  // Set C: Workflow & Diagrams (C1 — C3)
  {
    code: 'C1',
    set: 'Set C: Workflow & Diagrams',
    num: '14',
    title: 'Operating Map — BANT Qualification Flow',
    desc: '5-stage end-to-end conversion architecture: Ingestion, <60s AI, BANT, Tier Routing, Viewing.',
    isDark: false,
    Component: WorkflowOperatingMap,
    key: 'C1_Operating-Map-Current-State',
  },
  {
    code: 'C2',
    set: 'Set C: Workflow & Diagrams',
    num: '15',
    title: 'Transformation Map — Capital Reallocation',
    desc: 'Visual flow comparing legacy volume-centric ad spend with optimised CPQL revenue stack.',
    isDark: false,
    Component: WorkflowTransformationMap,
    key: 'C2_Transformation-Map',
  },
  {
    code: 'C3',
    set: 'Set C: Workflow & Diagrams',
    num: '16',
    title: 'Intelligence Architecture — Multi-Model AI',
    desc: 'Dark technical system flow: Webhooks, 0–130 scoring core, and human broker authority.',
    isDark: true,
    Component: WorkflowIntelligenceArchitecture,
    key: 'C3_Intelligence-Architecture',
  },
];

const swatches = [
  ['Ivory', C.ivory, 'Page ground'],
  ['Paper', C.paper, 'Panels / emphasis'],
  ['Midnight', C.midnight, 'Deep ground / type'],
  ['Slate', C.slate, 'Supporting copy'],
  ['Rule', C.rule, 'Hairline borders'],
  ['Copper', C.copper, 'Accents & numerals'],
];

function Spec({ onPrintAllReport, onCopySummary }: { onPrintAllReport: () => void; onCopySummary: () => void }) {
  return (
    <section style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 32px 24px', color: C.ivory }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <OweleenLogo variant="full" color="light" size={1.25} />
        <div style={{ display: 'flex', gap: 10 }}>
          <span style={{ fontSize: 11, padding: '3px 8px', border: `1px solid ${C.copper}`, color: C.copperSoft }}>
            SEPTEMBER 2026 EDITION
          </span>
          <span style={{ fontSize: 11, padding: '3px 8px', background: 'rgba(255,255,255,0.1)', color: C.ivory }}>
            16 PRODUCTION PAGES
          </span>
        </div>
      </div>

      <h1 className="serif" style={{ fontSize: 54, fontWeight: 400, margin: '26px 0 10px', letterSpacing: '-.02em', lineHeight: 1.08 }}>
        CPL vs. CPQL: The Complete Intelligence Report
      </h1>
      <p style={{ color: C.copperSoft, fontSize: 17, fontWeight: 300, margin: 0, maxWidth: 860, lineHeight: 1.45 }}>
        UAE Real Estate Brokerage Research Series. Why UAE brokerages misallocate capital to Cost Per Lead, and how Cost Per Qualified Lead (CPQL) reveals where revenue actually disappears. Populated across 16 publication templates ready for live editing and PDF extraction.
      </p>

      {/* Primary Action Extraction Banner */}
      <div
        style={{
          marginTop: 22,
          padding: '16px 20px',
          background: 'rgba(184,112,63,0.15)',
          borderLeft: `3px solid ${C.copper}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ color: C.copper, fontSize: 20 }}>✦</span>
          <div style={{ fontSize: 12.5, lineHeight: 1.45, color: C.ivory }}>
            <b>Full Report Ready for Quality Review & Extraction:</b> All 16 pages are populated with verified UAE benchmarks, revenue leaks, and conversion math.
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          <button
            type="button"
            onClick={onPrintAllReport}
            style={{
              cursor: 'pointer',
              font: 'inherit',
              fontSize: 12,
              fontWeight: 600,
              padding: '8px 16px',
              background: C.copper,
              color: C.ivory,
              border: `1px solid ${C.copper}`,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              transition: 'all 0.15s ease',
            }}
            className="hover:opacity-90"
          >
            <span>⎙</span>
            <span>Export Full Report (All 16 Pages PDF)</span>
          </button>

          <button
            type="button"
            onClick={onCopySummary}
            style={{
              cursor: 'pointer',
              font: 'inherit',
              fontSize: 12,
              padding: '8px 14px',
              background: 'rgba(255,255,255,0.08)',
              color: C.copperSoft,
              border: `1px solid rgba(255,255,255,0.2)`,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              transition: 'all 0.15s ease',
            }}
            className="hover:text-white hover:border-white"
          >
            <span>📋</span>
            <span>Copy Full Report (Markdown)</span>
          </button>
        </div>
      </div>

      {/* Authentic Brand Assets Showcase */}
      <div id="brand-assets" style={{ marginTop: 24, background: '#16222D', border: `1px solid rgba(255,255,255,0.12)`, padding: '20px 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14, flexWrap: 'wrap', gap: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span className="t-meta" style={{ color: C.copper, fontSize: 10, letterSpacing: '.24em' }}>OFFICIAL BRAND ASSETS</span>
            <span style={{ width: 1, height: 14, background: 'rgba(255,255,255,0.2)' }} />
            <span style={{ color: C.mist, fontSize: 12 }}>Twin Crescents & Geometric Wordmark</span>
          </div>
          <span className="t-note" style={{ color: C.copperSoft }}>Standard Scalable Vector Assets (.svg)</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {/* Asset 1: Symbol */}
          <div style={{ background: '#0E1820', border: '1px solid rgba(255,255,255,0.08)', padding: '16px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span className="t-meta" style={{ color: C.mist, fontSize: 9 }}>BRANDMARK SYMBOL</span>
              <span className="t-note" style={{ color: C.copperSoft, fontSize: 9 }}>oweleen-symbol.svg</span>
            </div>
            <div style={{ padding: '20px 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <OweleenLogo variant="symbol" color="light" symbolSize={48} title="Oweleen Twin Crescents" />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 10 }}>
              <span className="t-note" style={{ color: C.mist }}>Facing Twin Crescents ( )</span>
              <a
                href="/assets/brand/oweleen-symbol.svg"
                download="oweleen-symbol.svg"
                style={{ fontSize: 11, color: C.copperSoft, textDecoration: 'none', padding: '3px 8px', border: `1px solid ${C.copper}` }}
                className="hover:text-white"
              >
                Download SVG ↓
              </a>
            </div>
          </div>

          {/* Asset 2: Wordmark */}
          <div style={{ background: '#0E1820', border: '1px solid rgba(255,255,255,0.08)', padding: '16px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span className="t-meta" style={{ color: C.mist, fontSize: 9 }}>WORDMARK</span>
              <span className="t-note" style={{ color: C.copperSoft, fontSize: 9 }}>oweleen-wordmark.svg</span>
            </div>
            <div style={{ padding: '24px 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <OweleenLogo variant="wordmark" color="light" size={1.2} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 10 }}>
              <span className="t-note" style={{ color: C.mist }}>Wide-Spaced Geometric Sans</span>
              <a
                href="/assets/brand/oweleen-wordmark.svg"
                download="oweleen-wordmark.svg"
                style={{ fontSize: 11, color: C.copperSoft, textDecoration: 'none', padding: '3px 8px', border: `1px solid ${C.copper}` }}
                className="hover:text-white"
              >
                Download SVG ↓
              </a>
            </div>
          </div>

          {/* Asset 3: Combined */}
          <div style={{ background: '#0E1820', border: '1px solid rgba(255,255,255,0.08)', padding: '16px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span className="t-meta" style={{ color: C.mist, fontSize: 9 }}>COMBINED LOCKUP</span>
              <span className="t-note" style={{ color: C.copperSoft, fontSize: 9 }}>oweleen-logo-combined.svg</span>
            </div>
            <div style={{ padding: '20px 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <OweleenLogo variant="full" color="light" size={1.1} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 10 }}>
              <span className="t-note" style={{ color: C.mist }}>Symbol + Wordmark</span>
              <a
                href="/assets/brand/oweleen-logo-combined.svg"
                download="oweleen-logo-combined.svg"
                style={{ fontSize: 11, color: C.copperSoft, textDecoration: 'none', padding: '3px 8px', border: `1px solid ${C.copper}` }}
                className="hover:text-white"
              >
                Download SVG ↓
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Overview 3-Set Summary Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginTop: 24 }}>
        <div style={{ background: '#212A32', borderTop: `2px solid ${C.copper}`, padding: '16px 18px' }}>
          <div className="t-meta" style={{ color: C.copperSoft }}>SET A (A1 — A6)</div>
          <div className="serif" style={{ fontSize: 20, color: C.ivory, margin: '4px 0 4px' }}>Market Notes</div>
          <div style={{ fontSize: 11, color: '#A0B0BC' }}>Cover, Key findings, Indicator rails, District distributions, Rent bands & Contacts.</div>
        </div>

        <div style={{ background: '#212A32', borderTop: `2px solid ${C.midnight}`, padding: '16px 18px' }}>
          <div className="t-meta" style={{ color: C.copperSoft }}>SET B (B1 — B7)</div>
          <div className="serif" style={{ fontSize: 20, color: C.ivory, margin: '4px 0 4px' }}>Strategic Outlook</div>
          <div style={{ fontSize: 11, color: '#A0B0BC' }}>Cover, Contents map, Narrative, Dark section opener, Emphasis panel, Assessment matrix & Governance.</div>
        </div>

        <div style={{ background: '#212A32', borderTop: `2px solid ${C.copper}`, padding: '16px 18px' }}>
          <div className="t-meta" style={{ color: C.copperSoft }}>SET C (C1 — C3)</div>
          <div className="serif" style={{ fontSize: 20, color: C.ivory, margin: '4px 0 4px' }}>Workflow & Diagrams</div>
          <div style={{ fontSize: 11, color: '#A0B0BC' }}>Sequential swimlane step map, Comparative transformation matrix & Dark system architecture diagram.</div>
        </div>
      </div>

      {/* Brand tokens and specifications */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24, marginTop: 32, borderTop: '1px solid #3A444E', paddingTop: 24 }}>
        <div>
          <div className="t-id">Palette</div>
          <div style={{ marginTop: 12, display: 'grid', gap: 6 }}>
            {swatches.map(([n, c]) => (
              <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11 }}>
                <i style={{ width: 18, height: 18, background: c, border: '1px solid #555' }} />
                <b style={{ fontWeight: 500, width: 56 }}>{n}</b>
                <span style={{ opacity: 0.6, fontSize: 10 }}>{c}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="t-id">Typography</div>
          <div style={{ marginTop: 12, fontSize: 11, lineHeight: 1.8, opacity: 0.85 }}>
            <div><span className="serif" style={{ fontSize: 18 }}>Newsreader</span> — display serif</div>
            <div style={{ fontSize: 13 }}>Figtree — clean geometric sans</div>
            <div style={{ opacity: 0.7, marginTop: 4, fontSize: 10 }}>
              L01 ID 11/caps +.22em copper<br />
              L02 Headline 60/0.98 serif<br />
              L03 Support 18/1.35 light slate<br />
              L05 Body 12.5/1.65 Figtree
            </div>
          </div>
        </div>

        <div>
          <div className="t-id">A4 Geometry</div>
          <div style={{ marginTop: 12, fontSize: 11, lineHeight: 1.8, opacity: 0.75 }}>
            A4 Standard · 794 × 1123 px (96 dpi)<br />
            Content width: 698 px<br />
            Margins: 40 top · 48 side · 36 bottom<br />
            Dark Pages: A1, B1, B4, C3 (#0E2233)<br />
            Light Pages: Ivory (#F4F1EB)
          </div>
        </div>

        <div>
          <div className="t-id">Iconography System</div>
          <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 10 }}>
            {iconNames.slice(0, 18).map((n) => (
              <div key={n} title={n}>
                <Icon name={n} size={18} color={C.ivory} />
              </div>
            ))}
          </div>
          <div style={{ fontSize: 10, opacity: 0.6, marginTop: 10 }}>
            24 grid · 1.4 stroke · round caps · monoline
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [activeTemplateCode, setActiveTemplateCode] = useState<string | null>(null);
  const [selectedSet, setSelectedSet] = useState<string>('all');
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const activeTemplate = templates.find((t) => t.code === activeTemplateCode) || templates[0];

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg((cur) => (cur === msg ? null : cur)), 3500);
  };

  const handlePrintAllReport = () => {
    document.body.classList.add('printing-all-report');
    showToast('Opening print dialog. In print settings, select "Save as PDF", Paper Size: A4, Margins: None.');
    const cleanup = () => {
      document.body.classList.remove('printing-all-report');
      window.removeEventListener('afterprint', cleanup);
    };
    window.addEventListener('afterprint', cleanup);
    window.print();
    setTimeout(cleanup, 2500);
  };

  const handleCopySummary = async () => {
    try {
      await navigator.clipboard.writeText(reportMarkdownText);
      showToast('✓ Copied complete intelligence report (Markdown) to clipboard!');
    } catch {
      // Fallback download
      const blob = new Blob([reportMarkdownText], { type: 'text/markdown' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'oweleen-cpl-vs-cpql-report.md';
      a.click();
      URL.revokeObjectURL(url);
      showToast('✓ Downloaded complete intelligence report as Markdown file!');
    }
  };

  const setTabs = [
    { id: 'all', label: 'All 16 Templates', count: templates.length },
    { id: 'Set A: Market Notes', label: 'Set A: Market Notes', codeRange: 'A1 — A6', count: 6 },
    { id: 'Set B: Strategic Outlook', label: 'Set B: Strategic Outlook', codeRange: 'B1 — B7', count: 7 },
    { id: 'Set C: Workflow & Diagrams', label: 'Set C: Workflow & Diagrams', codeRange: 'C1 — C3', count: 3 },
  ];

  const displayedTemplates = selectedSet === 'all'
    ? templates
    : templates.filter((t) => t.set.startsWith(selectedSet.split(':')[0]));

  return (
    <main style={{ paddingBottom: 100 }}>
      {/* Toast Feedback Notification */}
      {toastMsg && (
        <div
          role="status"
          style={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            zIndex: 100,
            background: C.midnight,
            color: C.ivory,
            borderLeft: `4px solid ${C.copper}`,
            padding: '12px 18px',
            fontSize: 12,
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <span style={{ color: C.copper, fontSize: 16 }}>✦</span>
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Sticky Top Navigation Bar with Authentic Combination Logo */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 40,
          background: 'rgba(14, 34, 51, 0.96)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
          padding: '12px 32px',
        }}
      >
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <OweleenLogo variant="full" color="light" size={1.0} />
            <span style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.18)' }} className="hidden sm:inline" />
            <span style={{ fontSize: 11, letterSpacing: '.18em', color: '#8C9BA6', textTransform: 'uppercase' }} className="hidden sm:inline">
              CPL vs. CPQL Research Report
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 12 }}>
            <button
              type="button"
              onClick={handlePrintAllReport}
              style={{
                background: 'transparent',
                color: C.copperSoft,
                border: `1px solid ${C.copper}`,
                padding: '4px 10px',
                fontSize: 11,
                cursor: 'pointer',
              }}
              className="hover:bg-amber-900/30"
            >
              Export PDF (All 16) ⎙
            </button>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
            <a
              href="#downloads"
              style={{ color: '#8C9BA6', textDecoration: 'none', transition: 'color 0.15s' }}
              className="hover:text-white"
            >
              Downloads
            </a>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
            <button
              type="button"
              onClick={() => setActiveTemplateCode('A1')}
              style={{
                background: C.copper,
                color: C.ivory,
                border: 'none',
                padding: '4px 12px',
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '0.08em',
                cursor: 'pointer',
              }}
              className="hover:opacity-90"
            >
              Live Editor ↗
            </button>
          </div>
        </div>
      </header>

      <Spec onPrintAllReport={handlePrintAllReport} onCopySummary={handleCopySummary} />
      <Downloads onOpenTemplate={(code) => setActiveTemplateCode(code)} />

      {/* Set Category Tabs Bar */}
      <section style={{ maxWidth: 1100, margin: '40px auto 0', padding: '0 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #3A444E', paddingBottom: 14, flexWrap: 'wrap', gap: 12 }}>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {setTabs.map((tab) => {
              const active = selectedSet === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedSet(tab.id)}
                  style={{
                    cursor: 'pointer',
                    font: 'inherit',
                    fontSize: 12,
                    padding: '8px 16px',
                    background: active ? C.copper : '#1E252D',
                    color: C.ivory,
                    border: `1px solid ${active ? C.copper : '#3E4A56'}`,
                    fontWeight: active ? 600 : 400,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    transition: 'all 0.15s ease',
                  }}
                >
                  <span>{tab.label}</span>
                  <span
                    style={{
                      fontSize: 10,
                      padding: '2px 6px',
                      borderRadius: 10,
                      background: active ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.1)',
                    }}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          <span style={{ fontSize: 11, color: C.mist }}>
            Showing <b>{displayedTemplates.length}</b> of 16 templates
          </span>
        </div>
      </section>

      {/* Render 16 Editable Figures */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '70px 50px', marginTop: 40, padding: '0 24px' }}>
        {displayedTemplates.map((tpl) => (
          <EditableFigure
            key={tpl.code}
            code={tpl.code}
            set={tpl.set}
            num={tpl.num}
            title={tpl.title}
            desc={tpl.desc}
            onOpenEditor={(code) => setActiveTemplateCode(code)}
          >
            <tpl.Component />
          </EditableFigure>
        ))}
      </div>

      {/* Interactive Full-Screen Editor & PDF Exporter */}
      {activeTemplateCode && (
        <TemplateEditorModal
          isOpen={true}
          template={activeTemplate}
          templates={templates}
          onClose={() => setActiveTemplateCode(null)}
          onSelectTemplate={(code) => setActiveTemplateCode(code)}
        />
      )}

      {/* Hidden Multi-Page Report Container for Print Extraction */}
      <div id="report-print-root" style={{ display: 'none' }}>
        {templates.map((tpl) => (
          <div key={tpl.code} className="report-page-wrapper">
            <tpl.Component />
          </div>
        ))}
      </div>
    </main>
  );
}

const reportMarkdownText = `# CPL vs. CPQL: The Complete Intelligence Report
**UAE Real Estate Brokerage Research Series | September 2026**
*Published by Oweleen Applied Intelligence Desk*

---

## Executive Summary
Every brokerage in the UAE measures Cost Per Lead (CPL). It is the wrong number.
CPL measures what you paid to make a phone ring. It tells you nothing about whether the person on the other end was ever going to buy.
The number that determines actual marketing ROI is **Cost Per Qualified Lead (CPQL)** — what you paid, in real AED, to produce one buyer who had confirmed budget, confirmed timeline, confirmed intent, and was ready to view.

The gap between CPL and CPQL is where most brokerage revenue disappears. Not to the market. Not to competitors. To a metric nobody is measuring.

---

## 1. Core Definitions
- **Cost Per Lead (CPL):** Total Ad Spend ÷ Total Leads Generated. Measures volume efficiency of a paid channel.
- **Cost Per Qualified Lead (CPQL):** Total Ad Spend ÷ Total Qualified Leads.
- **The BANT Qualification Filter:**
  1. Budget Confirmed: Verified budget range matching available inventory.
  2. Authority Confirmed: Sole or primary decision-maker.
  3. Need Confirmed: Specific property type, location, and requirement.
  4. Timeline Confirmed: Ready to purchase within <=6 months.
  5. Intent Confirmed: Agrees to viewing appointment or structured advisory call.

---

## 2. UAE Market CPL Benchmarks (2025–2026)
- **Competitive Benchmark (Top Campaigns):** AED 30 – 100 (Median AED 65)
- **Meta / Instagram (UAE Real Estate):** AED 30 – 300 (Median AED 80)
- **Off-Plan Agency-Sourced:** AED 30 – 120 (Median AED 75)
- **Click-to-WhatsApp (CTWA):** AED 48 – 240 (Median AED 110)
- **Google Search (High Intent):** AED 150 – 900 (Median AED 400)
- **Inflation Trend:** Meta UAE CPL inflates 25–35% annually. Global Meta CPA increased 38% (2025 to 2026) to $38.19 median.

---

## 3. UAE Market CPQL Benchmarks: The Real Channel Cost
| Channel | Stated CPL | Qual Rate | Multiplier | Real CPQL | Broker Perception |
|---|---|---|---|---|---|
| Meta / Instagram | AED 80 | 1 in 15 (7%) | 15x | AED 1,200 | "Cheap" |
| Google Search | AED 400 | 1 in 6 (17%) | 6–8x | AED 2,400–3,200 | "Expensive" |
| Property Finder / Bayut | AED 250 | 1 in 3 (33%) | 3x | AED 750 | "Mid-range" |
| Referral Pipeline | AED 0–400 | 1 in 1.5 (67%) | 1.5x | AED 0–267 | "Free" |
| Click-to-WhatsApp (CTWA) | AED 48–240 | 1 in 4–5 (20–25%) | 4–5x | AED 192–1,200 | "Similar to Meta" |

**Key Revelation:** The portal lead at AED 250 delivers qualified buyers at **AED 750** — **38% cheaper** than an AED 80 Meta lead (AED 1,200 CPQL).

---

## 4. The 5 Operational Failure Points That Kill Qualification
1. **Speed to Lead >5 Minutes:** Buyer contacts another brokerage. Qualification drops 21x.
2. **Single Follow-up Attempt:** 44% of brokers abandon lead after touch 1. 70% of closeable deals abandoned.
3. **No Qualification Framework:** Same script used for all lead types. BANT qualified deals win at 45% vs 25% unvetted.
4. **Wrong Channel for Segment:** Sending email to a WhatsApp-first UAE buyer drops response from 60% to 8–12%.
5. **After-Hours Coverage Gap:** 40% of UAE enquiries arrive 8pm–2am with zero broker response.

---

## 5. The Monthly GCI Leak: Quantifying 15 Levers (AED 455,270/mo)
For a mid-size brokerage (500 leads/mo, AED 75,000 ad spend), the combined operational revenue leak is **AED 455,270/month** (AED 5,463,240 annually):
- C1: Speed-to-lead failure (917 min avg vs <5 min): AED 80,560
- C2: Follow-up cadence (1.3 touches vs 14 required): AED 53,000
- C3: No WhatsApp Business API: AED 38,160
- C4: No lead scoring system: AED 42,400
- C5: No bot-human hybrid: AED 31,800
- C6: Dead database abandoned: AED 7,950
- C7: No CPQL tracking / wrong channel spend: AED 42,400
- C8: No BANT qualification framework: AED 31,800
- C9: After-hours coverage gap: AED 25,440
- C10: CRM hygiene failure: AED 21,200
- C11: Attribution failure: AED 16,960
- C12: No agent performance dashboard: AED 21,200
- C13: No referral generation system: AED 21,200
- C14: No viewing conversion scripts: AED 10,600
- C15: No offer gate process: AED 10,600

---

## 6. Channel Reallocation: +41% Qualified Leads with Identical Budget
Reallocating AED 75,000 monthly marketing spend:
- **Legacy Stack (CPL-Optimized):** Meta 40% (AED 30k), Google 33% (AED 25k), Portals 20% (AED 15k), Referral 0%, CTWA 7% (AED 5k). Yields 73 qualified leads at blended CPQL of AED 1,027.
- **Optimised Stack (CPQL-Optimized):** Portals 30% (AED 22.5k), Meta 25% (AED 18.75k), Google 20% (AED 15k), CTWA 15% (AED 11.25k), Referral 10% (AED 7.5k). Yields **103 qualified leads (+41%)** at blended CPQL of **AED 728 (-29%)**.

---

## 7. AI Impact on CPQL (Before vs After Oweleen)
- Lead response time: 917 minutes -> 60 seconds
- Follow-up touches: 1.3 touches -> 14 automated touches
- MQL -> SQL conversion rate: 13% -> 32%+
- Blended CPQL: AED 1,027 -> AED 350–450 (56–66% reduction)

---

## 8. The CPQL Scorecard Maturity Model
- **0–3 pts:** CPQL Blind (Estimated CPQL: AED 1,000–3,000+)
- **4–7 pts:** CPQL Aware (Estimated CPQL: AED 700–1,000)
- **8–11 pts:** CPQL Managed (Estimated CPQL: AED 400–700)
- **12–14 pts:** CPQL Optimised (Estimated CPQL: AED 200–400)

**The Core Rule:** “You have been optimising the cost of filling the pipe. Oweleen optimises the cost of what comes out of it.”
`;
