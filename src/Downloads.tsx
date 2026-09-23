import { useState, type ReactNode } from 'react';
import m from './manifest.json';
import { C } from './system';
import { saveFile } from './download';

type Status = { name: string; state: 'busy' | 'done' | 'error'; url?: string; msg?: string } | null;

export default function Downloads() {
  const [st, setSt] = useState<Status>(null);

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
      <button type="button" onClick={() => go(f)} disabled={busy}
        style={{
          cursor: busy ? 'wait' : 'pointer', font: 'inherit', fontSize: 12, marginRight: 10, marginBottom: 8,
          padding: '7px 12px', border: `1px solid ${C.copper}`, background: primary ? C.copper : 'transparent',
          color: C.ivory, letterSpacing: '.04em', opacity: busy ? .6 : 1,
        }}
        onMouseEnter={e => { if (!primary) e.currentTarget.style.background = 'rgba(184,112,63,.25)'; }}
        onMouseLeave={e => { if (!primary) e.currentTarget.style.background = 'transparent'; }}>
        {busy ? 'Preparing…' : <>↓ {children}</>}
      </button>
    );
  };

  return (
    <section id="downloads" style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 32px 10px', color: C.ivory }}>
      <div style={{ borderTop: '1px solid #4a5258', paddingTop: 28 }}>
        <div className="t-id">Editable Template Kit</div>
        <h2 className="serif" style={{ fontSize: 40, fontWeight: 400, margin: '10px 0 6px' }}>Download the masters</h2>
        <p style={{ opacity: .75, fontSize: 13, maxWidth: 760, lineHeight: 1.6 }}>
          The Word (.docx) files are the editable masters. Open them in Microsoft Word, or upload them to Google Drive and open with Google Docs.
          PDFs are for sharing and printing. You can also edit any template directly on this page with <b>Edit text</b> (below), then save it as a PDF.
        </p>

        {st && (
          <div role="status" style={{ margin: '14px 0', padding: '10px 14px', fontSize: 12, background: st.state === 'error' ? '#5a2d22' : '#2f3a33', borderLeft: `2px solid ${C.copper}` }}>
            {st.state === 'busy' && <>Preparing <b>{st.name}</b>…</>}
            {st.state === 'done' && <>Download started: <b>{st.name}</b>. Nothing happened?{' '}
              {st.url && <a href={st.url} target="_blank" rel="noopener" download={st.name} style={{ color: C.copperSoft }}>Open the file in a new tab</a>}
              {' '}or open this page in its own browser tab. Some embedded previews block downloads.</>}
            {st.state === 'error' && <>Could not prepare the file: {st.msg}</>}
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginTop: 20 }}>
          {([
            ['Start here', <><Btn f={m.zip} primary>Complete kit (.zip)</Btn><Btn f={m.guide.pdf}>Guide PDF</Btn><Btn f={m.guide.docx}>Guide .docx</Btn></>],
            ['All 11 templates in one file', <><Btn f={m.master.blank}>Blank master .docx</Btn><Btn f={m.master.example}>Example .docx</Btn></>],
            ['Print / share exports', <><Btn f={m.master.pdf}>Example PDF</Btn><Btn f={m.master.pdfBlank}>Blank reference PDF</Btn></>],
          ] as [string, ReactNode][]).map(([t, links]) => (
            <div key={t} style={{ background: '#343a3f', padding: 20 }}>
              <div className="t-meta" style={{ color: C.copperSoft, marginBottom: 12 }}>{t}</div>
              <div>{links}</div>
            </div>
          ))}
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 28, fontSize: 12 }}>
          <thead><tr>{['#', 'Template', 'Blank master', 'Example', 'PDF'].map(h => <th key={h} className="t-meta" style={{ textAlign: 'left', color: C.copperSoft, padding: '8px 0', borderBottom: `1px solid ${C.ivory}` }}>{h}</th>)}</tr></thead>
          <tbody>
            {m.templates.map((t, i) => (
              <tr key={t.key} style={{ borderBottom: '1px solid #4a5258' }}>
                <td style={{ padding: '10px 0', color: C.copper }}>{String(i + 1).padStart(2, '0')}</td>
                <td className="serif" style={{ fontSize: 16 }}>{t.name}</td>
                <td style={{ paddingTop: 8 }}><Btn f={t.blank}>.docx</Btn></td>
                <td style={{ paddingTop: 8 }}><Btn f={t.example}>.docx</Btn></td>
                <td style={{ paddingTop: 8 }}><Btn f={t.pdf}>.pdf</Btn></td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, marginTop: 28, fontSize: 12, lineHeight: 1.7, opacity: .8 }}>
          <div>
            <div className="t-meta" style={{ color: C.copperSoft, marginBottom: 6 }}>Google Docs</div>
            Upload the .docx to Google Drive, then choose Open with → Google Docs. If text shows up in Arial, go to Font → More fonts and add Figtree and Newsreader.
          </div>
          <div>
            <div className="t-meta" style={{ color: C.copperSoft, marginBottom: 6 }}>In the zip</div>
            All the .docx and PDF files, the guide, 36 icon SVGs (midnight and copper), the photographs and the font files.
          </div>
        </div>
      </div>
    </section>
  );
}
