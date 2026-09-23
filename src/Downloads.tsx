import { useState, type ReactNode } from 'react';
import m from './manifest.json';
import { C } from './system';
import { saveFile } from './download';

type Status = { name: string; state: 'busy' | 'done' | 'error'; url?: string; msg?: string } | null;

interface DownloadsProps {
  onOpenTemplate?: (code: string) => void;
}

export default function Downloads({ onOpenTemplate }: DownloadsProps) {
  const [st, setSt] = useState<Status>(null);
  const [activeSetFilter, setActiveSetFilter] = useState<string>('all');

  const go = async (f: string) => {
    setSt({ name: f, state: 'busy' });
    try {
      const url = await saveFile(f);
      setSt({ name: f, state: 'done', url });
    } catch (e) {
      setSt({ name: f, state: 'error', msg: String(e) });
    }
  };

  const Btn = ({ f, children, primary }: { f: string; children: ReactNode; primary?: boolean }) => {
    const busy = st?.name === f && st.state === 'busy';
    return (
      <button
        type="button"
        onClick={() => go(f)}
        disabled={busy}
        style={{
          cursor: busy ? 'wait' : 'pointer',
          font: 'inherit',
          fontSize: 11.5,
          marginRight: 8,
          marginBottom: 6,
          padding: '6px 11px',
          border: `1px solid ${C.copper}`,
          background: primary ? C.copper : 'transparent',
          color: C.ivory,
          letterSpacing: '.04em',
          opacity: busy ? 0.6 : 1,
          transition: 'all 0.15s ease',
        }}
        onMouseEnter={(e) => {
          if (!primary) e.currentTarget.style.background = 'rgba(184,112,63,.25)';
        }}
        onMouseLeave={(e) => {
          if (!primary) e.currentTarget.style.background = 'transparent';
        }}
      >
        {busy ? 'Preparing…' : <>↓ {children}</>}
      </button>
    );
  };

  const sets = [
    { id: 'all', label: 'All 16 Templates', count: m.templates.length },
    { id: 'Set A: Market Notes', label: 'Set A: Market Notes', count: m.templates.filter((t) => t.set.startsWith('Set A')).length },
    { id: 'Set B: Strategic Outlook', label: 'Set B: Strategic Outlook', count: m.templates.filter((t) => t.set.startsWith('Set B')).length },
    { id: 'Set C: Workflow & Diagrams', label: 'Set C: Workflow & Diagrams', count: m.templates.filter((t) => t.set.startsWith('Set C')).length },
  ];

  const filteredTemplates = activeSetFilter === 'all'
    ? m.templates
    : m.templates.filter((t) => t.set.startsWith(activeSetFilter.split(':')[0]));

  return (
    <section id="downloads" style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 32px 10px', color: C.ivory }}>
      <div style={{ borderTop: '1px solid #4a5258', paddingTop: 28 }}>
        <div className="t-id">Editable Template Kit</div>
        <h2 className="serif" style={{ fontSize: 40, fontWeight: 400, margin: '10px 0 6px' }}>
          Download the production masters
        </h2>
        <p style={{ opacity: 0.75, fontSize: 13, maxWidth: 760, lineHeight: 1.6 }}>
          The Word (.docx) files are the editable masters with native tables and styles. Open them in Microsoft Word, or upload them to Google Drive and open with Google Docs.
          PDFs are for sharing and printing. You can also customize any template directly on this page with{' '}
          <b style={{ color: C.copperSoft }}>Focus View & Live Edit</b>, then download as an exact A4 PDF or Word docx.
        </p>

        {st && (
          <div
            role="status"
            style={{
              margin: '14px 0',
              padding: '10px 14px',
              fontSize: 12,
              background: st.state === 'error' ? '#5a2d22' : '#2f3a33',
              borderLeft: `2px solid ${C.copper}`,
            }}
          >
            {st.state === 'busy' && <>Preparing <b>{st.name}</b>…</>}
            {st.state === 'done' && (
              <>
                Download started: <b>{st.name}</b>. Nothing happened?{' '}
                {st.url && (
                  <a href={st.url} target="_blank" rel="noopener" download={st.name} style={{ color: C.copperSoft }}>
                    Open the file in a new tab
                  </a>
                )}{' '}
                or open this page in its own browser tab. Some embedded previews block downloads.
              </>
            )}
            {st.state === 'error' && <>Could not prepare the file: {st.msg}</>}
          </div>
        )}

        {/* Master Download Action Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginTop: 20 }}>
          {([
            ['Complete Publication Kit', <><Btn f={m.zip} primary>Complete kit (.zip)</Btn><Btn f={m.guide.pdf}>Guide PDF</Btn><Btn f={m.guide.docx}>Guide .docx</Btn></>],
            ['Master Word Documents', <><Btn f={m.master.blank}>Blank master .docx</Btn><Btn f={m.master.example}>Example .docx</Btn></>],
            ['Master Print & Reference PDFs', <><Btn f={m.master.pdf}>Example PDF</Btn><Btn f={m.master.pdfBlank}>Blank reference PDF</Btn></>],
          ] as [string, ReactNode][]).map(([t, links]) => (
            <div key={t} style={{ background: '#343a3f', padding: 20 }}>
              <div className="t-meta" style={{ color: C.copperSoft, marginBottom: 12 }}>
                {t}
              </div>
              <div>{links}</div>
            </div>
          ))}
        </div>

        {/* Set Filter Tabs */}
        <div style={{ display: 'flex', gap: 10, marginTop: 36, borderBottom: '1px solid #4a5258', paddingBottom: 14, flexWrap: 'wrap' }}>
          {sets.map((s) => {
            const isActive = activeSetFilter === s.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveSetFilter(s.id)}
                style={{
                  cursor: 'pointer',
                  font: 'inherit',
                  fontSize: 12,
                  padding: '7px 14px',
                  background: isActive ? C.copper : '#242C34',
                  color: C.ivory,
                  border: `1px solid ${isActive ? C.copper : '#3E4A56'}`,
                  fontWeight: isActive ? 600 : 400,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  transition: 'all 0.15s ease',
                }}
              >
                <span>{s.label}</span>
                <span
                  style={{
                    fontSize: 10,
                    padding: '1px 6px',
                    borderRadius: 10,
                    background: isActive ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.1)',
                  }}
                >
                  {s.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Template Catalog Table */}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 16, fontSize: 12 }}>
            <thead>
              <tr>
                {['Code', 'Template Name & Type', 'Set Category', 'Live Editor', 'Blank Master', 'Example', 'PDF'].map((h) => (
                  <th
                    key={h}
                    className="t-meta"
                    style={{ textAlign: 'left', color: C.copperSoft, padding: '10px 8px', borderBottom: `1px solid ${C.ivory}` }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredTemplates.map((t) => {
                return (
                  <tr key={t.key} style={{ borderBottom: '1px solid #4a5258' }}>
                    {/* Code Badge */}
                    <td style={{ padding: '12px 8px', verticalAlign: 'middle' }}>
                      <span
                        style={{
                          background: C.copper,
                          color: C.ivory,
                          fontWeight: 700,
                          fontSize: 11,
                          padding: '3px 8px',
                          display: 'inline-block',
                          letterSpacing: '.06em',
                        }}
                      >
                        {t.code}
                      </span>
                    </td>

                    {/* Template Name & Description */}
                    <td style={{ padding: '12px 8px', verticalAlign: 'middle' }}>
                      <div>
                        {onOpenTemplate ? (
                          <button
                            type="button"
                            onClick={() => onOpenTemplate(t.code)}
                            title={`Open live editor for ${t.name}`}
                            style={{
                              background: 'none',
                              border: 'none',
                              padding: 0,
                              cursor: 'pointer',
                              color: C.ivory,
                              fontFamily: 'inherit',
                              fontSize: 16,
                              textAlign: 'left',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: 6,
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = C.copperSoft)}
                            onMouseLeave={(e) => (e.currentTarget.style.color = C.ivory)}
                          >
                            <span className="serif">{t.name}</span>
                            <span style={{ fontSize: 11, color: C.copper, opacity: 0.8 }}>⤢</span>
                          </button>
                        ) : (
                          <span className="serif" style={{ fontSize: 16 }}>{t.name}</span>
                        )}
                        <div style={{ fontSize: 11, color: '#A0B0BC', marginTop: 3 }}>{t.desc}</div>
                      </div>
                    </td>

                    {/* Set Category */}
                    <td style={{ padding: '12px 8px', color: '#B5C4CF', fontSize: 11, verticalAlign: 'middle' }}>
                      {t.set}
                    </td>

                    {/* Live Focus Edit Button */}
                    <td style={{ padding: '12px 8px', verticalAlign: 'middle' }}>
                      {onOpenTemplate && (
                        <button
                          type="button"
                          onClick={() => onOpenTemplate(t.code)}
                          style={{
                            cursor: 'pointer',
                            font: 'inherit',
                            fontSize: 11,
                            padding: '6px 12px',
                            border: `1px solid ${C.copper}`,
                            background: 'rgba(184,112,63,0.18)',
                            color: C.copperSoft,
                            letterSpacing: '.04em',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 5,
                            whiteSpace: 'nowrap',
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.background = C.copper, e.currentTarget.style.color = C.ivory)}
                          onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(184,112,63,0.18)', e.currentTarget.style.color = C.copperSoft)}
                        >
                          <span>⤢</span>
                          <span>Focus Edit</span>
                        </button>
                      )}
                    </td>

                    {/* Word Blank, Example, PDF downloads */}
                    <td style={{ padding: '12px 8px', verticalAlign: 'middle' }}><Btn f={t.blank}>.docx</Btn></td>
                    <td style={{ padding: '12px 8px', verticalAlign: 'middle' }}><Btn f={t.example}>.docx</Btn></td>
                    <td style={{ padding: '12px 8px', verticalAlign: 'middle' }}><Btn f={t.pdf}>.pdf</Btn></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, marginTop: 28, fontSize: 12, lineHeight: 1.7, opacity: 0.8 }}>
          <div>
            <div className="t-meta" style={{ color: C.copperSoft, marginBottom: 6 }}>
              Google Docs Compatibility
            </div>
            Upload any .docx file to Google Drive and choose Open with → Google Docs. All native tables, tab alignments and headings will remain editable.
          </div>
          <div>
            <div className="t-meta" style={{ color: C.copperSoft, marginBottom: 6 }}>
              Production Kit Contents
            </div>
            Includes all 16 template master Word files, reference PDFs, Brand Guidelines v1.0, 36 monoline icon SVGs, high-res architectural photos, and type specimens.
          </div>
        </div>
      </div>
    </section>
  );
}
