import { C, Page, Header, Footer, TitleBlock, Logo, Icon, IconRing, Kicker, Panel, ImageBand, SectionMark } from './system';

import SKY from "./assets/skyline.jpg";
import FAC from "./assets/facade.jpg";

/* 01 — COVER */
export function Cover() {
  return (
    <Page>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Logo />
        <span className="t-meta">Illustrative Edition / Vol 1.0</span>
      </div>
      <div style={{ marginTop: 150 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}><span className="t-id">Strategic Outlook</span><span className="rule-c" /></div>
        <h1 className="t-h1" style={{ fontSize: 96, margin: '22px 0 26px', lineHeight: .92 }}>The Future<br />of Brokerage<br />Work</h1>
        <p className="t-sup" style={{ fontSize: 20, maxWidth: 440, margin: 0 }}>How intelligence changes where the work happens — and returns attention to the broker.</p>
      </div>
      <div style={{ position: 'relative', marginTop: 'auto', height: 300, marginLeft: -48, marginRight: -48 }}>
        <img src={FAC} style={{ position: 'absolute', right: 0, top: 0, width: '58%', height: '100%', objectFit: 'cover', clipPath: 'polygon(22% 0,100% 0,100% 100%,0 100%)', filter: 'saturate(.7)' }} />
        <svg style={{ position: 'absolute', left: '42%', top: 0 }} width="100" height="300"><line x1="100" y1="0" x2="0" y2="300" stroke={C.copper} strokeWidth="1.2" /></svg>
        <div style={{ position: 'absolute', left: 48, bottom: 40, display: 'grid', gridTemplateColumns: 'auto auto', gap: '18px 40px' }}>
          {[['Prepared by', 'Oweleen Strategy Office'], ['Date', 'March 2026'], ['Edition', 'Vol 1.0 — Illustrative'], ['Classification', 'Executive Distribution']].map(([k, v]) => (
            <div key={k}><div className="t-meta" style={{ fontSize: 8 }}>{k}</div><div className="t-body" style={{ fontSize: 12, marginTop: 3 }}>{v}</div></div>
          ))}
        </div>
      </div>
      <div style={{ height: 24 }} />
      <Footer page="01" />
    </Page>
  );
}

/* 02 — CONTENTS */
export function Contents() {
  const rows = [
    ['01', 'Executive Summary', 'What matters, and why it matters now.', '03', 'target'],
    ['02', 'The Business Problem', 'Attention as the scarce resource.', '05', 'compass'],
    ['03', 'The Operating Model', 'Five stages from inquiry to close.', '07', 'cycle'],
    ['04', 'Transformation', 'From tasks to capacity.', '11', 'signal'],
    ['05', 'Architecture', 'Oweleen Core and specialised agents.', '15', 'node'],
    ['06', 'Evidence', 'Performance indicators and outcomes.', '19', 'chart'],
    ['07', 'Roadmap', 'Phased adoption across 2026–2027.', '23', 'flag'],
    ['08', 'Next Steps', 'Engagement and contact.', '27', 'mail'],
  ];
  return (
    <Page>
      <Header right="Contents" />
      <TitleBlock id="Index" title="Contents" sub="A publication map of the Strategic Outlook." intro={<>Eight sections, read in sequence, move from the problem to the operating model and the evidence behind it.<br /><br /><span className="t-meta" style={{ color: C.copper }}>Illustrative Edition / Vol 1.0</span></>} />
      <div className="rule" style={{ marginTop: 44 }} />
      <div style={{ marginTop: 8 }}>
        {rows.map(([n, t, d, p, ic]) => (
          <div key={n} style={{ display: 'grid', gridTemplateColumns: '70px 36px 1fr auto', alignItems: 'center', padding: '19px 0', borderBottom: `1px solid ${C.rule}` }}>
            <span className="serif" style={{ fontSize: 30, color: C.copper, fontWeight: 300 }}>{n}</span>
            <Icon name={ic} size={18} color={C.slate} />
            <div>
              <div className="serif" style={{ fontSize: 24, letterSpacing: '-.01em' }}>{t}</div>
              <div className="t-body" style={{ color: C.slate, fontSize: 11.5 }}>{d}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ width: 60, borderTop: `1px dotted ${C.mist}` }} />
              <span className="t-meta" style={{ color: C.midnight, fontSize: 11 }}>{p}</span>
            </div>
          </div>
        ))}
      </div>
      <Footer page="02" />
    </Page>
  );
}

/* 03 — EXECUTIVE SUMMARY */
export function Executive() {
  const hl = [
    ['user', 'Attention is the constraint', 'Brokers spend the majority of their week on operational work clients never see.', '62%', 'of time on non-client work'],
    ['layers', 'Work can be redistributed', 'Research, documentation and coordination are structured, repeatable and delegable.', '8', 'task families identified'],
    ['signal', 'Capacity is recoverable', 'Specialised agents return hours to judgement, negotiation and relationships.', '+14h', 'per broker, per week'],
    ['shield', 'Control is retained', 'Every agent action is reviewable, auditable and bounded by human approval.', '100%', 'human sign-off on decisions'],
  ];
  return (
    <Page>
      <Header right="Section 01 / Executive Summary" />
      <TitleBlock id="01" title={<>Executive<br />Summary</>} sub="The work stays. Human attention moves." />
      <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 1px 1fr', gap: 36, marginTop: 40 }}>
        <div>
          <div className="t-id" style={{ fontSize: 10 }}>The Thesis — What Matters</div>
          <p className="t-quote" style={{ fontSize: 30, margin: '14px 0 0' }}>Brokerages will not compete on who works harder, but on who directs human attention to where value is created.</p>
        </div>
        <div className="vrule" />
        <div>
          <div className="t-id" style={{ fontSize: 10 }}>Why It Matters</div>
          <p className="t-body" style={{ marginTop: 14 }}>Client expectations are rising faster than headcount. The operating model behind the broker is fragmented across people, systems and manual tasks.</p>
          <p className="t-body">Oweleen coordinates that work so the broker can focus on judgement.</p>
        </div>
      </div>
      <div className="rule" style={{ marginTop: 40 }} />
      <div>
        {hl.map(([ic, t, d, n, l], i) => (
          <div key={t} style={{ display: 'grid', gridTemplateColumns: '40px 56px 1fr 170px', alignItems: 'center', gap: 8, padding: '20px 0', borderBottom: `1px solid ${C.rule}` }}>
            <span className="t-id" style={{ fontSize: 11 }}>0{i + 1}</span>
            <IconRing name={ic} size={42} />
            <div style={{ paddingRight: 30 }}>
              <div className="t-h4">{t}</div>
              <div className="t-body" style={{ color: C.slate, fontSize: 11.5, marginTop: 4 }}>{d}</div>
            </div>
            <div style={{ borderLeft: `1px solid ${C.rule}`, paddingLeft: 20 }}>
              <div className="serif" style={{ fontSize: 34, lineHeight: 1 }}>{n}</div>
              <div className="t-meta" style={{ fontSize: 8, marginTop: 6 }}>{l}</div>
            </div>
          </div>
        ))}
      </div>
      <p className="t-note" style={{ marginTop: 14 }}>Source: Illustrative figures for template demonstration. Replace with verified data before distribution.</p>
      <Footer page="03" />
    </Page>
  );
}

/* 04 — PROCESS */
export function Process() {
  const s = [
    ['search', 'Inquiry', 'Client need captured and qualified.'],
    ['chart', 'Research', 'Market and property intelligence assembled.'],
    ['home', 'Matching', 'Listings shortlisted against criteria.'],
    ['doc', 'Documentation', 'KYC, contracts and NOCs prepared.'],
    ['key', 'Close', 'Negotiation, approval and handover.'],
  ];
  return (
    <Page>
      <Header right="Section 03 / Operating Model" />
      <TitleBlock id="03" title={<>The Transaction<br />Workflow</>} sub="Five stages. One coordinated line of work." intro="Every transaction moves through the same five stages. Oweleen prepares each stage in advance, while the broker retains every point of decision." />
      <div style={{ marginTop: 70, position: 'relative' }}>
        <div style={{ position: 'absolute', top: 92, left: 40, right: 40, height: 1, background: C.copper }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', position: 'relative' }}>
          {s.map(([ic, t, d], i) => (
            <div key={t} style={{ textAlign: 'center', padding: '0 10px' }}>
              <div className="serif" style={{ fontSize: 40, color: C.copper, fontWeight: 300, lineHeight: 1 }}>0{i + 1}</div>
              <div className="t-h4" style={{ marginTop: 10, marginBottom: 14 }}>{t}</div>
              <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                <div style={{ background: C.ivory, padding: '0 8px' }}><IconRing name={ic} size={56} dark={i === 4} /></div>
                {i < 4 && <svg style={{ position: 'absolute', right: -14, top: 23 }} width="10" height="10"><path d="M1 1l5 4-5 4" stroke={C.copper} fill="none" strokeWidth="1.3" /></svg>}
              </div>
              <div className="t-body" style={{ fontSize: 11.5, color: C.slate, marginTop: 18 }}>{d}</div>
              {(i === 1 || i === 3) && (
                <div style={{ marginTop: 18, display: 'inline-flex', alignItems: 'center', gap: 6, border: `1px solid ${C.copper}`, padding: '4px 8px' }}>
                  <svg width="8" height="8"><rect x="1" y="1" width="6" height="6" transform="rotate(45 4 4)" fill="none" stroke={C.copper} /></svg>
                  <span className="t-meta" style={{ fontSize: 7.5, color: C.copper }}>Broker review</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="rule" style={{ marginTop: 56 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 36, marginTop: 28 }}>
        <Kicker top="Prepared by Oweleen" title="Stages 01 — 04">Research, matching and documentation are assembled before the broker engages.</Kicker>
        <Kicker top="Control Points" title="Decision Gates">Two mandatory review gates ensure nothing moves forward without human approval.</Kicker>
        <Kicker top="Owned by the Broker" title="Stage 05">Negotiation and closing remain entirely human — where judgement creates value.</Kicker>
      </div>
      <div style={{ marginTop: 'auto', marginBottom: 28 }}><ImageBand src={SKY} lines={['One workflow.', 'Prepared in advance.', 'Decided by people.']} h={140} /></div>
      <Footer page="04" />
    </Page>
  );
}

/* 05 — TIMELINE */
export function Timeline() {
  const m = [
    ['Q1 2026', 'Discovery & Baseline', 'Map current workflows, measure time allocation across broker teams.', 'done', 'compass'],
    ['Q2 2026', 'Core Deployment', 'Oweleen Core connected to CRM, listings and document repositories.', 'done', 'node'],
    ['Q3 2026', 'Agent Pilot', 'Market, Document and Workflow agents piloted with 40 brokers.', 'active', 'users'],
    ['Q4 2026', 'Controlled Scale', 'Expansion to all teams with governance and audit reporting.', 'next', 'shield'],
    ['H1 2027', 'Full Operating Model', 'Lifecycle and Distribution agents; capacity reinvested in clients.', 'next', 'flag'],
  ];
  const status: Record<string, string> = { done: 'Complete', active: 'In progress', next: 'Planned' };
  return (
    <Page>
      <Header right="Section 07 / Roadmap" />
      <TitleBlock id="07" title="Roadmap" sub="A phased, controlled adoption." intro="Each phase is gated by measured results. Scale follows evidence, not ambition." />
      <div style={{ marginTop: 50, position: 'relative', paddingLeft: 0 }}>
        <div style={{ position: 'absolute', left: 139, top: 10, bottom: 10, width: 1, background: C.copper }} />
        {m.map(([d, t, desc, st, ic], i) => (
          <div key={t} style={{ display: 'grid', gridTemplateColumns: '120px 40px 1fr 110px', alignItems: 'start', gap: 0, paddingBottom: 38 }}>
            <div style={{ textAlign: 'right', paddingRight: 20, paddingTop: 2 }}>
              <div className="t-id" style={{ fontSize: 10 }}>Phase 0{i + 1}</div>
              <div className="serif" style={{ fontSize: 22, marginTop: 2 }}>{d}</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 6 }}>
              <div style={{ width: 16, height: 16, borderRadius: '50%', border: `1px solid ${C.copper}`, background: st === 'done' ? C.copper : st === 'active' ? C.midnight : C.ivory, boxShadow: st === 'active' ? `0 0 0 5px ${C.ivory}, 0 0 0 6px ${C.copper}` : `0 0 0 4px ${C.ivory}` }} />
            </div>
            <div style={{ paddingLeft: 24, display: 'flex', gap: 18 }}>
              <IconRing name={ic} size={40} />
              <div>
                <div className="t-h4">{t}</div>
                <div className="t-body" style={{ color: C.slate, fontSize: 11.5, marginTop: 4, maxWidth: 330 }}>{desc}</div>
              </div>
            </div>
            <div style={{ paddingTop: 4, textAlign: 'right' }}>
              <span className="t-meta" style={{ fontSize: 8, color: st === 'next' ? C.mist : st === 'active' ? C.midnight : C.copper, fontWeight: 600 }}>{status[st]}</span>
            </div>
          </div>
        ))}
      </div>
      <Panel style={{ display: 'grid', gridTemplateColumns: '1fr 1px 1fr 1fr 1fr', gap: 28, alignItems: 'center', marginBottom: 28 }}>
        <div className="t-quote" style={{ fontSize: 22 }}>Eighteen months to a new operating model.</div>
        <div className="vrule" style={{ height: 60 }} />
        {[['05', 'phases'], ['03', 'review gates'], ['240', 'brokers at scale']].map(([n, l]) => (
          <div key={l}><div className="serif" style={{ fontSize: 30 }}>{n}</div><div className="t-meta" style={{ fontSize: 8 }}>{l}</div></div>
        ))}
      </Panel>
      <Footer page="05" />
    </Page>
  );
}

/* 06 — STRUCTURE / ARCHITECTURE */
export function Structure() {
  const agents = [
    ['chart', 'Market', 'Trends & pricing'], ['doc', 'Document', 'Verification'], ['home', 'Property', 'Listings & matching'],
    ['calendar', 'Workflow', 'Coordination'], ['cycle', 'Lifecycle', 'Follow-ups'], ['chat', 'Distribution', 'Publishing'],
  ];
  const R = 205, cx = 349, cy = 250;
  return (
    <Page>
      <Header right="Section 05 / Architecture" />
      <TitleBlock id="05" title={<>Platform<br />Architecture</>} sub="One intelligence layer. Six specialised agents." intro="Oweleen Core orchestrates context, memory and governance. Agents execute bounded tasks and return results to the broker for decision." />
      <div style={{ position: 'relative', height: 500, marginTop: 30 }}>
        <svg width="698" height="500" style={{ position: 'absolute', inset: 0 }}>
          <circle cx={cx} cy={cy} r={R} fill="none" stroke={C.rule} strokeDasharray="2 4" />
          <circle cx={cx} cy={cy} r={120} fill="none" stroke={C.rule} />
          {agents.map((_, i) => {
            const a = (i / 6) * Math.PI * 2 - Math.PI / 2;
            return <line key={i} x1={cx + Math.cos(a) * 78} y1={cy + Math.sin(a) * 78} x2={cx + Math.cos(a) * (R - 28)} y2={cy + Math.sin(a) * (R - 28)} stroke={C.copper} strokeWidth="1" />;
          })}
        </svg>
        <div style={{ position: 'absolute', left: cx - 78, top: cy - 78, width: 156, height: 156, borderRadius: '50%', border: `1.5px solid ${C.copper}`, background: C.ivory, display: 'grid', placeItems: 'center', textAlign: 'center', boxShadow: `0 0 0 6px ${C.ivory}, 0 0 0 7px ${C.copperSoft}` }}>
          <div>
            <div className="t-h4" style={{ fontSize: 13, letterSpacing: '.28em' }}>Oweleen<br />Core</div>
            <div className="rule-c" style={{ margin: '10px auto', width: 50 }} />
            <div className="t-body" style={{ fontSize: 10, color: C.slate, lineHeight: 1.4 }}>Context · Memory<br />Governance</div>
          </div>
        </div>
        {agents.map(([ic, t, d], i) => {
          const a = (i / 6) * Math.PI * 2 - Math.PI / 2;
          const x = cx + Math.cos(a) * R, y = cy + Math.sin(a) * R;
          return (
            <div key={t} style={{ position: 'absolute', left: x - 60, top: y - 24, width: 120, textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center' }}><IconRing name={ic} size={48} dark /></div>
              <div className="t-h4" style={{ fontSize: 9, marginTop: 8 }}>{t} Agent</div>
              <div className="t-body" style={{ fontSize: 10, color: C.slate, lineHeight: 1.3 }}>{d}</div>
            </div>
          );
        })}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', borderTop: `1px solid ${C.rule}`, borderBottom: `1px solid ${C.rule}`, marginBottom: 28, marginTop: 14 }}>
        {[['Layer 01', 'Broker', 'Judgement, approval and relationships.'], ['Layer 02', 'Oweleen Core', 'Orchestration and governance.'], ['Layer 03', 'Agents', 'Bounded, auditable execution.']].map(([l, t, d], i) => (
          <div key={l} style={{ padding: '20px 22px', borderLeft: i ? `1px solid ${C.rule}` : 'none' }}>
            <div className="t-id" style={{ fontSize: 9 }}>{l}</div>
            <div className="t-h4" style={{ marginTop: 6 }}>{t}</div>
            <div className="t-body" style={{ fontSize: 11, color: C.slate, marginTop: 4 }}>{d}</div>
          </div>
        ))}
      </div>
      <Footer page="06" />
    </Page>
  );
}

/* 07 — DATA / EVIDENCE */
export function Data() {
  const bars = [['Research', 22, 6], ['Documentation', 18, 5], ['System updates', 12, 2], ['Coordination', 10, 4], ['Client time', 38, 58]];
  return (
    <Page>
      <Header right="Section 06 / Evidence" />
      <TitleBlock id="06" title={<>The Evidence</>} sub="Measured across a 12-week pilot, 40 brokers." intro="Capacity recovered from operational work was reinvested almost entirely in client-facing activity." />
      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 0, marginTop: 44, borderTop: `1px solid ${C.rule}`, borderBottom: `1px solid ${C.rule}` }}>
        <div style={{ padding: '30px 36px 30px 0' }}>
          <div className="t-id" style={{ fontSize: 10 }}>Primary Indicator</div>
          <div className="serif" style={{ fontSize: 150, lineHeight: .9, letterSpacing: '-.04em', marginTop: 10 }}>+53<span style={{ color: C.copper, fontSize: 80 }}>%</span></div>
          <div className="t-sup" style={{ marginTop: 10, fontSize: 16 }}>increase in time spent directly with clients.</div>
        </div>
        <div style={{ borderLeft: `1px solid ${C.rule}` }}>
          {[['−41%', 'Time to prepare a transaction file'], ['2.3×', 'Faster first client response'], ['−68%', 'Manual data re-entry']].map(([n, l], i) => (
            <div key={l} style={{ padding: '22px 0 22px 30px', borderTop: i ? `1px solid ${C.rule}` : 'none' }}>
              <div className="serif" style={{ fontSize: 38, lineHeight: 1 }}>{n}</div>
              <div className="t-meta" style={{ fontSize: 8.5, marginTop: 6 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: 36 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
          <div><div className="t-h4">Weekly Time Allocation</div><div className="t-body" style={{ fontSize: 11, color: C.slate }}>Share of broker working hours, %</div></div>
          <div style={{ display: 'flex', gap: 20 }}>
            <span className="t-meta" style={{ display: 'flex', alignItems: 'center', gap: 6 }}><i style={{ width: 14, height: 6, background: C.rule }} />Before</span>
            <span className="t-meta" style={{ display: 'flex', alignItems: 'center', gap: 6 }}><i style={{ width: 14, height: 6, background: C.midnight }} />With Oweleen</span>
          </div>
        </div>
        <div style={{ marginTop: 22 }}>
          {bars.map(([l, a, b]) => {
            const hi = l === 'Client time';
            return (
              <div key={l as string} style={{ display: 'grid', gridTemplateColumns: '130px 1fr', alignItems: 'center', padding: '10px 0', borderBottom: `1px solid ${C.stone}` }}>
                <span className="t-body" style={{ fontSize: 11.5, fontWeight: hi ? 600 : 400 }}>{l}</span>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><div style={{ height: 6, width: `${(a as number) * 1.4}%`, background: C.rule }} /><span className="t-note">{a}</span></div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}><div style={{ height: 6, width: `${(b as number) * 1.4}%`, background: hi ? C.copper : C.midnight }} /><span className="t-note" style={{ color: hi ? C.copper : C.ink, fontWeight: 600 }}>{b}</span></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <p className="t-note" style={{ marginTop: 16, marginBottom: 20 }}>Source: Oweleen pilot programme, illustrative data. n = 40 brokers, 12 weeks. Figures rounded.</p>
      <Footer page="07" />
    </Page>
  );
}

/* 08 — COMPARISON */
export function Comparison() {
  const rows = [['Research', 'Manual, across portals', 'Prepared by Market Agent'], ['Documents', 'Collected by email', 'Verified by Document Agent'], ['Scheduling', 'Phone and messages', 'Coordinated by Workflow Agent'], ['Follow-ups', 'Memory-dependent', 'Systematic, Lifecycle Agent'], ['Broker focus', 'Divided', 'Judgement & relationships']];
  return (
    <Page>
      <Header right="Section 04 / Transformation" />
      <TitleBlock id="04" title="What Changes" sub="The work stays. Human attention moves." intro="The workflow does not disappear. Routine work moves to specialised agents while the broker focuses on clients, decisions and relationships." />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 90px 1fr', marginTop: 50 }}>
        <Kicker top="Today" title="Broker carries the work">Manual, fragmented, time-consuming.</Kicker>
        <div style={{ textAlign: 'center' }}>
          <div className="t-id" style={{ fontSize: 9 }}>Shift</div>
          <svg width="40" height="20" style={{ marginTop: 10 }}><path d="M4 3l8 7-8 7M16 3l8 7-8 7M28 3l8 7-8 7" stroke={C.copper} fill="none" strokeWidth="1.3" /></svg>
        </div>
        <Kicker top="With Oweleen" title="Intelligence around the broker">Prepared, coordinated, reviewable.</Kicker>
      </div>
      <div style={{ marginTop: 30, borderTop: `1px solid ${C.midnight}` }}>
        {rows.map(([k, a, b], i) => (
          <div key={k} style={{ display: 'grid', gridTemplateColumns: '1fr 90px 1fr', alignItems: 'center', borderBottom: `1px solid ${C.rule}`, padding: '17px 0' }}>
            <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
              <span className="t-meta" style={{ width: 90, color: C.midnight, fontWeight: 600 }}>{k}</span>
              <span className="t-body" style={{ color: C.slate }}>{a}</span>
            </div>
            <div style={{ textAlign: 'center' }}><span style={{ display: 'inline-block', width: 30, height: 1, background: C.copper, verticalAlign: 'middle' }} /></div>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              <Icon name="check" size={14} color={C.copper} />
              <span className="t-body" style={{ fontWeight: i === 4 ? 600 : 400 }}>{b}</span>
            </div>
          </div>
        ))}
      </div>
      <Panel style={{ marginTop: 40, display: 'grid', gridTemplateColumns: '1.1fr 1px repeat(4,1fr)', gap: 22, alignItems: 'center', marginBottom: 28 }}>
        <div><div className="t-id" style={{ fontSize: 9 }}>The Result</div><div className="t-quote" style={{ fontSize: 24, marginTop: 8 }}>More capacity for higher-value work.</div></div>
        <div className="vrule" style={{ height: 80 }} />
        {[['user', 'Clients'], ['target', 'Judgement'], ['users', 'Relationships'], ['key', 'Closing']].map(([ic, l]) => (
          <div key={l} style={{ textAlign: 'center' }}><div style={{ display: 'flex', justifyContent: 'center' }}><IconRing name={ic} size={42} /></div><div className="t-meta" style={{ marginTop: 10, color: C.midnight, fontSize: 8 }}>{l}</div></div>
        ))}
      </Panel>
      <Footer page="08" />
    </Page>
  );
}

/* 09 — EDITORIAL FEATURE */
export function Feature() {
  return (
    <Page>
      <Header right="Section 02 / The Business Problem" />
      <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 1px 1fr', gap: 30, marginTop: 36 }}>
        <div>
          <SectionMark id="02" />
          <h1 className="t-h1" style={{ margin: '14px 0' }}>The Business<br />Problem</h1>
          <p className="t-sup">Competition is raising the expectation placed on every broker.</p>
          <p className="t-body" style={{ marginTop: 20 }}>A client does not see the CRM entry, the research, the document preparation or the coordination behind a transaction. They see the outcome.</p>
          <div className="rule-c" style={{ marginTop: 20 }} />
        </div>
        <div className="vrule" />
        <div style={{ position: 'relative', height: 400 }}>
          <img src={SKY} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '40% 50%', filter: 'saturate(.75)' }} />
          <div style={{ position: 'absolute', top: 22, right: 22, textAlign: 'left' }}>
            <div className="t-meta" style={{ color: C.ivory, lineHeight: 2 }}>Clients don't see<br />the work.</div>
            <div className="rule-c" style={{ marginTop: 10 }} />
          </div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1px 1fr', gap: 30, marginTop: 40 }}>
        <p className="t-quote" style={{ margin: 0 }}>That experience increasingly becomes the basis on which brokerages compete.</p>
        <div className="vrule" />
        <div style={{ columnCount: 1 }}>
          <p className="t-body" style={{ marginTop: 0 }}>Yet the operating model behind it is fragmented across people, systems and manual tasks. The issue is not that these tasks are difficult.</p>
          <p className="t-body">It is that they compete for the same scarce resource: <strong style={{ fontWeight: 600 }}>the broker's attention.</strong></p>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr 220px', gap: 28, marginTop: 'auto', marginBottom: 28, alignItems: 'stretch', height: 118 }}>
        <div style={{ background: C.midnight, padding: 24, clipPath: 'polygon(0 0,100% 0,82% 100%,0 100%)' }}>
          <div className="t-meta" style={{ color: C.ivory, lineHeight: 1.9 }}>The problem<br />in one line</div>
          <div className="rule-c" style={{ marginTop: 12 }} />
        </div>
        <div style={{ borderLeft: `1px solid ${C.copper}`, paddingLeft: 22, display: 'flex', alignItems: 'center' }}>
          <p className="serif" style={{ fontStyle: 'italic', fontSize: 16, lineHeight: 1.4, margin: 0, color: C.ink }}>The market demands a higher standard of service, while too much attention is consumed by the work required to deliver it.</p>
        </div>
        <img src={FAC} style={{ width: '100%', height: '100%', objectFit: 'cover', clipPath: 'polygon(18% 0,100% 0,100% 100%,0 100%)', filter: 'saturate(.6)' }} />
      </div>
      <Footer page="09" />
    </Page>
  );
}

/* 10 — SECTION DIVIDER */
export function Divider() {
  return (
    <Page dark>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <span className="t-meta" style={{ color: C.ivory }}>Strategic Outlook</span>
        <div className="rule" style={{ flex: 1, background: C.ivory, opacity: .25 }} />
        <span className="t-meta" style={{ color: C.ivory }}>Section 04</span>
      </div>
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 470 }}>
        <img src={SKY} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: .55, filter: 'saturate(.5)' }} />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(${C.midnight}, transparent 45%)` }} />
      </div>
      <div style={{ marginTop: 170, position: 'relative' }}>
        <div className="serif" style={{ fontSize: 150, color: C.copper, fontWeight: 300, lineHeight: .8 }}>04</div>
        <div style={{ width: 60, height: 1, background: C.copper, margin: '34px 0' }} />
        <h1 className="t-h1" style={{ color: C.ivory, fontSize: 76 }}>Transformation</h1>
        <p className="t-sup" style={{ color: C.copperSoft, marginTop: 18, maxWidth: 420 }}>From tasks to capacity — how the operating model changes.</p>
      </div>
      <div style={{ position: 'relative', marginTop: 'auto' }}><Footer page="10" light /></div>
    </Page>
  );
}

/* 11 — CLOSING / CONTACT */
export function Closing() {
  return (
    <Page>
      <Header right="Section 08 / Next Steps" />
      <TitleBlock id="08" title={<>The Right Work.<br />The Right Person.</>} sub="Next steps toward a new operating model." size={56} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 0, marginTop: 50, borderTop: `1px solid ${C.rule}` }}>
        {[['01', 'compass', 'Discovery Session', 'A 90-minute working session to map your current workflow.'], ['02', 'chart', 'Baseline Study', 'Two weeks measuring time allocation across a broker team.'], ['03', 'flag', 'Pilot Proposal', 'A scoped, gated pilot with defined success measures.']].map(([n, ic, t, d], i) => (
          <div key={n} style={{ padding: '28px 24px 28px', paddingLeft: i ? 24 : 0, borderLeft: i ? `1px solid ${C.rule}` : 'none' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="serif" style={{ fontSize: 34, color: C.copper, fontWeight: 300 }}>{n}</span>
              <Icon name={ic} size={22} color={C.slate} />
            </div>
            <div className="t-h4" style={{ marginTop: 18 }}>{t}</div>
            <div className="t-body" style={{ fontSize: 11.5, color: C.slate, marginTop: 6 }}>{d}</div>
          </div>
        ))}
      </div>
      <div style={{ background: C.midnight, color: C.ivory, marginTop: 40, padding: '40px 40px', display: 'grid', gridTemplateColumns: '1.1fr 1px 1fr', gap: 36, marginLeft: -48, marginRight: -48, paddingLeft: 48, paddingRight: 48 }}>
        <div>
          <Logo light />
          <p className="serif" style={{ fontSize: 28, lineHeight: 1.15, marginTop: 30, marginBottom: 0 }}>Intelligence around the broker.</p>
        </div>
        <div style={{ background: C.copper, width: 1 }} />
        <div style={{ display: 'grid', gap: 16 }}>
          {[['mail', 'strategy@oweleen.com'], ['globe', 'oweleen.com'], ['building', 'Dubai International Financial Centre']].map(([ic, t]) => (
            <div key={t} style={{ display: 'flex', gap: 14, alignItems: 'center' }}><Icon name={ic} size={18} color={C.copperSoft} /><span style={{ fontSize: 12.5 }}>{t}</span></div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: 32 }}>
        <div className="t-meta" style={{ marginBottom: 8 }}>Notes & Disclaimer</div>
        <p className="t-note" style={{ maxWidth: 560 }}>All figures in this edition are illustrative and provided for template demonstration. This document is intended for executive distribution and does not constitute an offer. © 2026 Oweleen. All rights reserved.</p>
      </div>
      <Footer page="11" />
    </Page>
  );
}
