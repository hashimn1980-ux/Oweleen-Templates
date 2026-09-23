import { Cover, Contents, Executive, Process, Timeline, Structure, Data, Comparison, Feature, Divider, Closing } from './pages';
import { C, Icon, iconNames, Logo } from './system';
import Downloads from './Downloads';
import EditableFigure from './EditableFigure';

const templates = [
  ['01', 'Cover / Title', 'Title dominates. Strong negative space. Diagonal copper rule as accent shape.', Cover],
  ['02', 'Table of Contents', 'Publication index — typography, rules and alignment only.', Contents],
  ['03', 'Executive Summary', 'Thesis (what matters) vs. rationale (why) · indexed highlights with evidence.', Executive],
  ['04', 'Process / Workflow', 'number → title → icon → explanation → arrow, with review gates.', Process],
  ['05', 'Vertical Timeline', 'Copper spine, status-coded nodes, date column right-aligned to spine.', Timeline],
  ['06', 'Structure / Architecture', 'Oweleen Core as central layer; hierarchy via position & line weight.', Structure],
  ['07', 'Data / Evidence', 'One hero KPI, three secondary, one comparative chart. Copper = key signal.', Data],
  ['08', 'Comparison', 'Today vs. With Oweleen, row-aligned with a result panel.', Comparison],
  ['09', 'Editorial Feature', 'Narrative page — image, pull quote and signature one-line band.', Feature],
  ['10', 'Section Divider', 'Midnight inversion. Large copper numeral. Atmospheric image.', Divider],
  ['11', 'Closing / Contact', 'Next steps, contact block, disclaimer.', Closing],
] as const;

const swatches = [['Ivory', C.ivory, 'Page ground'], ['Paper', C.paper, 'Panels'], ['Midnight', C.midnight, 'Type / fills'], ['Slate', C.slate, 'Supporting'], ['Rule', C.rule, 'Hairlines'], ['Copper', C.copper, 'Signal only']];

function Spec() {
  return (
    <section style={{ maxWidth: 1100, margin: '0 auto', padding: '70px 32px 30px', color: C.ivory }}>
      <Logo light size={1.2} />
      <h1 className="serif" style={{ fontSize: 64, fontWeight: 400, margin: '36px 0 10px', letterSpacing: '-.02em' }}>Visual Reference Template System</h1>
      <p style={{ color: C.copperSoft, fontSize: 18, fontWeight: 300, margin: 0 }}>One editorial language, expressed through 11 A4 page types.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 28, marginTop: 50, borderTop: '1px solid #4a5258', paddingTop: 28 }}>
        <div>
          <div className="t-id">Colour</div>
          <div style={{ marginTop: 14, display: 'grid', gap: 8 }}>
            {swatches.map(([n, c, u]) => (
              <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 11 }}>
                <i style={{ width: 22, height: 22, background: c, border: '1px solid #555' }} /><b style={{ fontWeight: 500, width: 62 }}>{n}</b><span style={{ opacity: .6 }}>{c} · {u}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="t-id">Typography</div>
          <div style={{ marginTop: 14, fontSize: 11, lineHeight: 1.9, opacity: .85 }}>
            <div><span className="serif" style={{ fontSize: 20 }}>Newsreader</span> — display, quotes, numerals</div>
            <div style={{ fontSize: 14 }}>Figtree — body, labels, UI</div>
            <div style={{ opacity: .7, marginTop: 6 }}>L01 ID 11/caps +.22em copper<br />L02 Headline 60/0.98 serif<br />L03 Support 18/1.35 light slate<br />L04 Subhead 10.5 caps +.2em 600<br />L05 Body 12.5/1.6<br />L06 Meta 9 caps +.2em<br />L07 Note 8.5/1.5 mist</div>
          </div>
        </div>
        <div>
          <div className="t-id">Grid</div>
          <div style={{ marginTop: 14, fontSize: 11, lineHeight: 1.9, opacity: .75 }}>A4 · 794 × 1123 px (96 dpi)<br />Base unit 4 px<br />Margins 40 top · 48 side · 36 bottom<br />Content width 698 px<br />12 col · 20 px gutter<br />Title split 1.25 : rule : 1<br />Section spacing 40–56 px<br />Footer anchored to baseline</div>
        </div>
        <div>
          <div className="t-id">Iconography</div>
          <div style={{ marginTop: 14, display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 12 }}>
            {iconNames.map(n => <div key={n} title={n}><Icon name={n} size={20} color={C.ivory} /></div>)}
          </div>
          <div style={{ fontSize: 11, opacity: .6, marginTop: 12 }}>24 grid · 1.4 stroke · round caps · hairline ring container</div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <main style={{ paddingBottom: 100 }}>
      <Spec />
      <Downloads />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '70px 50px', marginTop: 50, padding: '0 24px' }}>
        {templates.map(([n, t, d, P]) => (
          <EditableFigure key={n} n={n} title={t} desc={d}><P /></EditableFigure>
        ))}
      </div>
    </main>
  );
}
