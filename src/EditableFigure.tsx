import { useRef, useState, type ReactNode } from 'react';
import { C } from './system';

const btn = (active = false, primary = false): React.CSSProperties => ({
  cursor: 'pointer',
  font: 'inherit',
  fontSize: 11,
  padding: '6px 11px',
  letterSpacing: '.05em',
  border: `1px solid ${C.copper}`,
  background: primary ? C.copper : active ? C.copper : 'transparent',
  color: C.ivory,
  display: 'inline-flex',
  alignItems: 'center',
  gap: 5,
  transition: 'all 0.15s ease',
});

interface EditableFigureProps {
  code: string;
  set?: string;
  num?: string;
  title: string;
  desc: string;
  children: ReactNode;
  onOpenEditor?: (code: string) => void;
}

export default function EditableFigure({
  code,
  set,
  title,
  desc,
  children,
  onOpenEditor,
}: EditableFigureProps) {
  const [editing, setEditing] = useState(false);
  const [ver, setVer] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const toggle = () => {
    const el = ref.current;
    if (!el) return;
    const next = !editing;
    // Make every text-bearing element editable
    el.querySelectorAll<HTMLElement>('h1,h2,h3,h4,p,span,div,td,th,figcaption,b,strong,i,em,a,li').forEach((node) => {
      if (node.tagName.toLowerCase() === 'svg' || node.closest('svg')) return;
      const hasOwnText = Array.from(node.childNodes).some((c) => c.nodeType === 3 && c.textContent!.trim());
      if (hasOwnText) {
        node.contentEditable = next ? 'true' : 'false';
        node.spellcheck = false;
      }
    });
    setEditing(next);
  };

  const printPage = () => {
    const el = ref.current;
    if (!el) return;
    el.closest('figure')?.classList.add('print-target');
    document.body.classList.add('printing-one');
    const done = () => {
      document.body.classList.remove('printing-one');
      el.closest('figure')?.classList.remove('print-target');
      window.removeEventListener('afterprint', done);
    };
    window.addEventListener('afterprint', done);
    window.print();
    setTimeout(done, 1500);
  };

  const reset = () => {
    setEditing(false);
    setVer((v) => v + 1);
  };

  return (
    <figure style={{ margin: 0, width: 794 }}>
      <figcaption
        className="no-print"
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', color: C.ivory, marginBottom: 12 }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span
              style={{
                background: C.copper,
                color: C.ivory,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '.08em',
                padding: '2px 8px',
              }}
            >
              {code}
            </span>
            {set && (
              <span className="t-meta" style={{ color: C.mist, fontSize: 9 }}>
                {set}
              </span>
            )}
          </div>

          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginTop: 2 }}>
            {onOpenEditor ? (
              <button
                type="button"
                onClick={() => onOpenEditor(code)}
                title="Click to open interactive full-screen live editor"
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  color: 'inherit',
                  textAlign: 'left',
                  display: 'inline-flex',
                  alignItems: 'baseline',
                  gap: 8,
                }}
              >
                <span
                  className="serif"
                  style={{
                    fontSize: 22,
                    fontWeight: 400,
                    letterSpacing: '-.01em',
                    transition: 'color 0.15s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = C.copperSoft)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = C.ivory)}
                >
                  {title}
                </span>
                <span
                  style={{
                    fontSize: 10,
                    letterSpacing: '.08em',
                    textTransform: 'uppercase',
                    color: C.copperSoft,
                    background: 'rgba(184,112,63,0.18)',
                    padding: '2px 6px',
                    border: `1px solid rgba(184,112,63,0.35)`,
                  }}
                >
                  Focus Edit ⤢
                </span>
              </button>
            ) : (
              <span className="serif" style={{ fontSize: 22, fontWeight: 400, letterSpacing: '-.01em' }}>
                {title}
              </span>
            )}
          </div>

          <div style={{ fontSize: 11.5, opacity: 0.7, maxWidth: 500, lineHeight: 1.4 }}>
            {desc}
          </div>
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          {onOpenEditor && (
            <button
              type="button"
              onClick={() => onOpenEditor(code)}
              style={btn(false, true)}
              title="Expand template into full-screen editor with fit zoom and A4 print export"
            >
              <span>⤢</span>
              <b>Focus View</b>
            </button>
          )}

          <button
            type="button"
            onClick={toggle}
            style={btn(editing)}
            title="Edit headings, copy and numbers directly on this page"
          >
            <span>✎</span>
            <span>{editing ? 'Done Editing' : 'In-Page Edit'}</span>
          </button>

          <button
            type="button"
            onClick={printPage}
            style={btn()}
            title="Save this single template page as PDF"
          >
            <span>⎙</span>
            <span>Print PDF</span>
          </button>

          {editing && (
            <button
              type="button"
              onClick={reset}
              style={{ ...btn(), borderColor: '#555', color: '#bbb' }}
              title="Reset text to default"
            >
              ↺ Reset
            </button>
          )}
        </div>
      </figcaption>

      {editing && (
        <div
          className="no-print"
          style={{
            background: 'rgba(184,112,63,.15)',
            borderLeft: `2px solid ${C.copper}`,
            color: C.copperSoft,
            fontSize: 11,
            padding: '7px 12px',
            marginBottom: 8,
          }}
        >
          ● <b>Live editing active:</b> Click on any text, headline or table below to type over it. Changes persist until refresh.
        </div>
      )}

      <div
        ref={ref}
        key={ver}
        className="figure-canvas"
        style={{
          boxShadow: '0 20px 50px -10px rgba(0,0,0,.65)',
        }}
      >
        {children}
      </div>
    </figure>
  );
}
