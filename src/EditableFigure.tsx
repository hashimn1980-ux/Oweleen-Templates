import { useRef, useState, type ReactNode } from 'react';
import { C } from './system';

const btn = (active = false): React.CSSProperties => ({
  cursor: 'pointer', font: 'inherit', fontSize: 11, padding: '6px 11px', letterSpacing: '.05em',
  border: `1px solid ${C.copper}`, background: active ? C.copper : 'transparent', color: C.ivory,
});

export default function EditableFigure({ n, title, desc, children }: { n: string; title: string; desc: string; children: ReactNode }) {
  const [editing, setEditing] = useState(false);
  const [ver, setVer] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const toggle = () => {
    const el = ref.current; if (!el) return;
    const next = !editing;
    // Make every text-bearing element editable, but keep layout wrappers untouched.
    el.querySelectorAll<HTMLElement>('h1,h2,p,span,div,td,th,figcaption').forEach(node => {
      const hasOwnText = Array.from(node.childNodes).some(c => c.nodeType === 3 && c.textContent!.trim());
      if (hasOwnText) { node.contentEditable = next ? 'true' : 'false'; node.spellcheck = next; }
    });
    setEditing(next);
  };

  const printPage = () => {
    const el = ref.current; if (!el) return;
    el.closest('figure')?.classList.add('print-target');
    document.body.classList.add('printing-one');
    const done = () => { document.body.classList.remove('printing-one'); el.closest('figure')?.classList.remove('print-target'); window.removeEventListener('afterprint', done); };
    window.addEventListener('afterprint', done);
    window.print();
    setTimeout(done, 1500);
  };

  const reset = () => { setEditing(false); setVer(v => v + 1); };

  return (
    <figure style={{ margin: 0, width: 794 }}>
      <figcaption className="no-print" style={{ display: 'flex', gap: 16, alignItems: 'baseline', color: C.ivory, marginBottom: 10 }}>
        <span className="t-id">Template {n}</span>
        <span className="serif" style={{ fontSize: 22 }}>{title}</span>
        <span style={{ fontSize: 11, opacity: .55, marginLeft: 'auto', maxWidth: 360, textAlign: 'right' }}>{desc}</span>
      </figcaption>
      <div className="no-print" style={{ display: 'flex', gap: 8, marginBottom: 12, alignItems: 'center' }}>
        <button type="button" style={btn(editing)} onClick={toggle}>{editing ? '✓ Done editing' : '✎ Edit text'}</button>
        <button type="button" style={btn()} onClick={printPage}>⎙ Save as PDF</button>
        <button type="button" style={btn()} onClick={reset}>↺ Reset</button>
        {editing && <span style={{ fontSize: 11, color: C.copperSoft, marginLeft: 8 }}>Click any text on the page to type over it.</span>}
      </div>
      <div ref={ref} key={ver} className={editing ? 'editing' : ''}>{children}</div>
    </figure>
  );
}
