// Single source of truth for all 11 Oweleen templates.
// mode = 'blank' → placeholders + instructions; 'example' → completed sample.
export const B = {
  logo: () => ({ type: 'logo' }),
  id: t => ({ type: 'id', t }), display: t => ({ type: 'display', t }), h1: t => ({ type: 'h1', t }),
  sup: t => ({ type: 'sup', t }), h2: t => ({ type: 'h2', t }), p: t => ({ type: 'p', t }),
  bullets: items => ({ type: 'bullets', items }), note: t => ({ type: 'note', t }), quote: t => ({ type: 'quote', t }),
  label: t => ({ type: 'label', t }), num: t => ({ type: 'num', t }), kpi: t => ({ type: 'kpi', t }), hero: t => ({ type: 'hero', t }),
  instr: t => ({ type: 'instr', t }), space: pt => ({ type: 'space', pt }), rule: () => ({ type: 'rule' }),
  image: (file, ratio, caption) => ({ type: 'image', file, ratio, caption }),
  table: o => ({ type: 'table', ...o }),
  panel: (children, o = {}) => ({ type: 'panel', children, ...o }),
  cols: (widths, cols, vrule = true) => ({ type: 'table', style: 'plain', widths, rows: [cols], vrule }),
};
const { id, display, h1, sup, h2, p, bullets, note, quote, label, num, kpi, hero, instr, space, rule, image, table, panel, cols, logo } = B;

export function templates(mode) {
  const X = mode === 'example';
  const v = (ph, ex) => (X ? ex : ph);
  const I = t => (X ? null : instr(t));
  const img = (ex) => (X ? ex : 'placeholder.png');
  const titleBlock = (n, title, subtitle, intro) => cols([1.25, 1], [
    [id(n), h1(title), sup(subtitle)],
    intro ? [space(18), p(intro)] : [p('')],
  ]);
  const clean = arr => arr.filter(Boolean);

  return [
    /* 01 COVER */
    { key: 'T01_Cover', name: 'Cover / Title Page', cover: true, blocks: clean([
      I('Replace every [BRACKETED] field. To swap the logo, delete the OWELEEN wordmark line and use Insert → Picture (max width 45 mm). To swap the image: right-click → Change Picture (Word) or Replace image (Google Docs).'),
      logo(), space(70),
      id(v('[PUBLICATION / SERIES NAME]', 'Strategic Outlook')),
      display(v('[DOCUMENT TITLE — 2 to 6 words]', 'The Future of Brokerage Work')),
      sup(v('[SUBTITLE — one sentence, max. 2 lines]', 'How intelligence changes where the work happens — and returns attention to the broker.')),
      space(20),
      image(img('facade.jpg'), 0.42, v('[IMAGE CAPTION OR CREDIT — optional]', 'Architectural study, DIFC. Illustrative image.')),
      space(8),
      table({ style: 'rules', widths: [1, 1, 1, 1], rows: [[
        [label('Prepared by'), p(v('[AUTHOR / TEAM]', 'Oweleen Strategy Office'))],
        [label('Date'), p(v('[MONTH YEAR]', 'March 2026'))],
        [label('Edition'), p(v('[EDITION / VERSION]', 'Vol 1.0 — Illustrative'))],
        [label('Classification'), p(v('[DISTRIBUTION]', 'Executive Distribution'))],
      ]] }),
    ]) },

    /* 02 CONTENTS */
    { key: 'T02_Contents', name: 'Table of Contents', header: v('[CONTENTS]', 'Contents'), blocks: clean([
      I('One row per section. Add a row: click in the last row → right-click → Insert row below. Delete a row: select it → right-click → Delete row. Update page numbers after final edits.'),
      titleBlock(v('[INDEX]', 'Index'), 'Contents', v('[ONE-LINE DESCRIPTION OF THE PUBLICATION]', 'A publication map of the Strategic Outlook.'),
        v('[OPTIONAL INTRO — how the document should be read, 1–3 lines]', 'Eight sections, read in sequence, move from the problem to the operating model and the evidence behind it.')),
      space(16),
      table({ style: 'rules', widths: [0.12, 0.76, 0.12], rows: (X ? [
        ['01', 'Executive Summary', 'What matters, and why it matters now.', '03'], ['02', 'The Business Problem', 'Attention as the scarce resource.', '05'],
        ['03', 'The Operating Model', 'Five stages from inquiry to close.', '07'], ['04', 'Transformation', 'From tasks to capacity.', '11'],
        ['05', 'Architecture', 'Oweleen Core and specialised agents.', '15'], ['06', 'Evidence', 'Performance indicators and outcomes.', '19'],
        ['07', 'Roadmap', 'Phased adoption across 2026–2027.', '23'], ['08', 'Next Steps', 'Engagement and contact.', '27'],
      ] : [['01', '[SECTION TITLE]', '[One-line section description]', '00'], ['02', '[SECTION TITLE]', '[One-line section description]', '00'], ['03', '[SECTION TITLE]', '[One-line section description]', '00']])
        .map(([n, t, d, pg]) => [[num(n)], [h1s(t), p(d)], [label('Page'), p(pg)]]) }),
    ]) },

    /* 03 EXECUTIVE SUMMARY */
    { key: 'T03_Executive-Summary', name: 'Executive Summary', header: v('[SECTION 01 / EXECUTIVE SUMMARY]', 'Section 01 / Executive Summary'), blocks: clean([
      I('Left column = WHAT MATTERS (one thesis sentence, max. 30 words). Right column = WHY IT MATTERS (2–3 short paragraphs). Keep 3–4 highlights; delete or duplicate rows as needed.'),
      id(v('[01]', '01')), h1(v('[PAGE HEADLINE]', 'Executive Summary')), sup(v('[SUPPORTING STATEMENT]', 'The work stays. Human attention moves.')),
      space(10),
      cols([1.25, 1], [
        [label('The thesis — what matters'), quote(v('[EXECUTIVE THESIS — one decisive sentence]', 'Brokerages will not compete on who works harder, but on who directs human attention to where value is created.'))],
        [label('Why it matters'), p(v('[BODY TEXT — the rationale behind the thesis]', 'Client expectations are rising faster than headcount. The operating model behind the broker is fragmented across people, systems and manual tasks.')), p(v('[BODY TEXT — optional second paragraph]', 'Oweleen coordinates that work so the broker can focus on judgement.'))],
      ]),
      h2(v('[KEY POINTS]', 'Key highlights')),
      table({ style: 'rules', widths: [0.08, 0.64, 0.28], rows: (X ? [
        ['Attention is the constraint', 'Brokers spend most of their week on operational work clients never see.', '62%', 'of time on non-client work'],
        ['Work can be redistributed', 'Research, documentation and coordination are structured and delegable.', '8', 'task families identified'],
        ['Capacity is recoverable', 'Specialised agents return hours to judgement and relationships.', '+14h', 'per broker, per week'],
        ['Control is retained', 'Every agent action is reviewable, auditable and bounded by human approval.', '100%', 'human sign-off on decisions'],
      ] : [1, 2, 3].map(() => ['[HIGHLIGHT TITLE]', '[One or two sentences of supporting detail.]', '[00%]', '[METRIC LABEL]']))
        .map(([t, d, n, l], i) => [[label('0' + (i + 1))], [h2t(t), p(d)], [kpi(n), label(l)]]) }),
      note(v('[SOURCE NOTE — cite data sources here]', 'Source: illustrative figures for template demonstration. Replace with verified data before distribution.')),
    ]) },

    /* 04 PROCESS */
    { key: 'T04_Process', name: 'Process / Workflow', header: v('[SECTION 03 / SECTION NAME]', 'Section 03 / Operating Model'), blocks: clean([
      I('Each column is one stage (number → title → explanation). Keep 3–6 stages. Add a stage: click in a column → Insert column right. Mark control points in the bottom row; leave blank if none.'),
      titleBlock(v('[03]', '03'), v('[PROCESS HEADLINE]', 'The Transaction Workflow'), v('[SUPPORTING STATEMENT]', 'Five stages. One coordinated line of work.'),
        v('[INTRO — what the process achieves, 1–3 lines]', 'Every transaction moves through five stages. Oweleen prepares each stage in advance; the broker retains every point of decision.')),
      space(12),
      (() => {
        const st = X ? [['Inquiry', 'Client need captured and qualified.', ''], ['Research', 'Market and property intelligence assembled.', '◆ Broker review'], ['Matching', 'Listings shortlisted against criteria.', ''], ['Documentation', 'KYC, contracts and NOCs prepared.', '◆ Broker review'], ['Close', 'Negotiation, approval and handover.', '']]
          : [1, 2, 3, 4, 5].map(() => ['[STAGE TITLE]', '[Short explanation, max. 12 words.]', '[CONTROL POINT — optional]']);
        return table({ style: 'process', widths: st.map(() => 1), rows: [
          st.map((s, i) => [num('0' + (i + 1) + (i < st.length - 1 ? '  →' : ''))]),
          st.map(s => [h2t(s[0]), p(s[1])]),
          st.map(s => [label(s[2] || ' ')]),
        ] });
      })(),
      space(10),
      cols([1, 1, 1], [
        [label(v('[GROUP LABEL]', 'Prepared by Oweleen')), h2t(v('[GROUP TITLE]', 'Stages 01 — 04')), p(v('[BODY TEXT]', 'Research, matching and documentation are assembled before the broker engages.'))],
        [label(v('[GROUP LABEL]', 'Control points')), h2t(v('[GROUP TITLE]', 'Decision gates')), p(v('[BODY TEXT]', 'Two mandatory review gates: nothing moves forward without human approval.'))],
        [label(v('[GROUP LABEL]', 'Owned by the broker')), h2t(v('[GROUP TITLE]', 'Stage 05')), p(v('[BODY TEXT]', 'Negotiation and closing remain entirely human — where judgement creates value.'))],
      ]),
      space(10),
      image(img('skyline.jpg'), 0.26, v('[CAPTION — optional closing line]', 'One workflow. Prepared in advance. Decided by people.')),
    ]) },

    /* 05 TIMELINE */
    { key: 'T05_Timeline', name: 'Vertical Timeline', header: v('[SECTION 07 / SECTION NAME]', 'Section 07 / Roadmap'), blocks: clean([
      I('One row per milestone. The copper line is the left border of the middle column and extends automatically. Status options: Complete / In progress / Planned. Long descriptions wrap and push the page down.'),
      titleBlock(v('[07]', '07'), v('[TIMELINE HEADLINE]', 'Roadmap'), v('[SUPPORTING STATEMENT]', 'A phased, controlled adoption.'), v('[INTRO — 1–3 lines]', 'Each phase is gated by measured results. Scale follows evidence, not ambition.')),
      space(12),
      table({ style: 'timeline', widths: [0.2, 0.62, 0.18], rows: (X ? [
        ['Q1 2026', 'Discovery & Baseline', 'Map current workflows; measure time allocation across broker teams.', '● Complete'],
        ['Q2 2026', 'Core Deployment', 'Oweleen Core connected to CRM, listings and document repositories.', '● Complete'],
        ['Q3 2026', 'Agent Pilot', 'Market, Document and Workflow agents piloted with 40 brokers.', '◐ In progress'],
        ['Q4 2026', 'Controlled Scale', 'Expansion to all teams with governance and audit reporting.', '○ Planned'],
        ['H1 2027', 'Full Operating Model', 'Lifecycle and Distribution agents; capacity reinvested in clients.', '○ Planned'],
      ] : [1, 2, 3].map(() => ['[DATE / PHASE]', '[MILESTONE TITLE]', '[Short description of the milestone.]', '[STATUS]']))
        .map(([d, t, desc, s], i) => [[label('Phase 0' + (i + 1)), kpiS(d)], [h2t(t), p(desc)], [label(s)]]) }),
      panel([cols([1.2, 1, 1, 1], [
        [quote(v('[SUMMARY STATEMENT]', 'Eighteen months to a new operating model.'))],
        [kpi(v('[00]', '05')), label(v('[LABEL]', 'phases'))], [kpi(v('[00]', '03')), label(v('[LABEL]', 'review gates'))], [kpi(v('[00]', '240')), label(v('[LABEL]', 'brokers at scale'))],
      ])]),
    ]) },

    /* 06 STRUCTURE */
    { key: 'T06_Structure', name: 'Org / Structure Diagram', header: v('[SECTION 05 / SECTION NAME]', 'Section 05 / Architecture'), blocks: clean([
      I('Top box = central element (e.g. OWELEEN CORE, CEO, platform). Grid below = components; add or remove cells as needed. Layers table explains hierarchy. Icons: insert from the /icons folder (Word: SVG; Google Docs: PNG version).'),
      titleBlock(v('[05]', '05'), v('[STRUCTURE HEADLINE]', 'Platform Architecture'), v('[SUPPORTING STATEMENT]', 'One intelligence layer. Six specialised agents.'),
        v('[INTRO — what the structure shows]', 'Oweleen Core orchestrates context, memory and governance. Agents execute bounded tasks and return results to the broker.')),
      space(12),
      panel([label(v('[CENTRAL LAYER LABEL]', 'Central intelligence layer')), h1s(v('[CENTRAL ELEMENT NAME]', 'OWELEEN CORE')), p(v('[What the central element does]', 'Context · Memory · Governance · Orchestration'))], { border: true, center: true }),
      space(6),
      table({ style: 'grid', widths: [1, 1, 1], rows: chunk((X ? [['Market Agent', 'Trends, pricing & competition'], ['Document Agent', 'Verification & compliance'], ['Property Agent', 'Listings & matching'], ['Workflow Agent', 'Appointments & coordination'], ['Lifecycle Agent', 'Follow-ups & client updates'], ['Distribution Agent', 'Multi-channel publishing']]
        : [1, 2, 3, 4, 5, 6].map(() => ['[COMPONENT NAME]', '[Role in one line]'])).map(([t, d], i) => [label('0' + (i + 1)), h2t(t), p(d)]), 3) }),
      space(6),
      table({ style: 'rules', widths: [1, 1, 1], vrule: true, rows: [
        [[label(v('[LAYER 01]', 'Layer 01')), h2t(v('[LAYER NAME]', 'Broker')), p(v('[Responsibility]', 'Judgement, approval and relationships.'))],
         [label(v('[LAYER 02]', 'Layer 02')), h2t(v('[LAYER NAME]', 'Oweleen Core')), p(v('[Responsibility]', 'Orchestration and governance.'))],
         [label(v('[LAYER 03]', 'Layer 03')), h2t(v('[LAYER NAME]', 'Agents')), p(v('[Responsibility]', 'Bounded, auditable execution.'))]],
      ] }),
    ]) },

    /* 07 DATA */
    { key: 'T07_Data-Evidence', name: 'Data / Evidence', header: v('[SECTION 06 / SECTION NAME]', 'Section 06 / Evidence'), blocks: clean([
      I('One hero metric only. Secondary metrics: 2–4. The comparison table is fully editable; for a visual chart use Insert → Chart (Word) or Insert → Chart → From Sheets (Google Docs), then apply colours Midnight #0E2233 and Copper #B8703F.'),
      titleBlock(v('[06]', '06'), v('[EVIDENCE HEADLINE]', 'The Evidence'), v('[SAMPLE / SCOPE STATEMENT]', 'Measured across a 12-week pilot, 40 brokers.'), v('[INTRO — the key finding in plain words]', 'Capacity recovered from operational work was reinvested almost entirely in client-facing activity.')),
      space(10),
      table({ style: 'rules', widths: [1.3, 1], vrule: true, rows: [[
        [label(v('[PRIMARY INDICATOR]', 'Primary indicator')), hero(v('[+00%]', '+53%')), sup(v('[What the hero number means]', 'increase in time spent directly with clients.'))],
        [kpi(v('[00]', '−41%')), label(v('[METRIC LABEL]', 'Time to prepare a transaction file')), space(6), kpi(v('[00]', '2.3×')), label(v('[METRIC LABEL]', 'Faster first client response')), space(6), kpi(v('[00]', '−68%')), label(v('[METRIC LABEL]', 'Manual data re-entry'))],
      ]] }),
      h2(v('[TABLE TITLE]', 'Weekly time allocation (% of broker hours)')),
      table({ style: 'data', widths: [0.4, 0.2, 0.2, 0.2], head: [v('[CATEGORY]', 'Activity'), v('[BEFORE]', 'Before'), v('[AFTER]', 'With Oweleen'), v('[CHANGE]', 'Change')],
        rows: (X ? [['Research', '22', '6', '−16'], ['Documentation', '18', '5', '−13'], ['System updates', '12', '2', '−10'], ['Coordination', '10', '4', '−6'], ['Client time', '38', '58', '+20']]
          : [1, 2, 3].map(() => ['[Row label]', '[00]', '[00]', '[±00]'])).map(r => r.map(c => [p(c)])) }),
      note(v('[SOURCE — dataset, sample size, period]', 'Source: Oweleen pilot programme, illustrative data. n = 40 brokers, 12 weeks. Figures rounded.')),
    ]) },

    /* 08 COMPARISON */
    { key: 'T08_Comparison', name: 'Comparison (Before / After)', header: v('[SECTION 04 / SECTION NAME]', 'Section 04 / Transformation'), blocks: clean([
      I('Rename the column headers for any comparison (e.g. Option A / Option B, Current / Future). One row per aspect; duplicate rows freely.'),
      titleBlock(v('[04]', '04'), v('[COMPARISON HEADLINE]', 'What Changes'), v('[SUPPORTING STATEMENT]', 'The work stays. Human attention moves.'),
        v('[INTRO — 1–3 lines]', 'Routine work moves to specialised agents while the broker focuses on clients, decisions and relationships.')),
      space(12),
      table({ style: 'data', widths: [0.24, 0.36, 0.4], head: [v('[ASPECT]', 'Aspect'), v('[STATE A]', 'Today'), v('[STATE B]', 'With Oweleen')],
        rows: (X ? [['Research', 'Manual, across portals', 'Prepared by Market Agent'], ['Documents', 'Collected by email', 'Verified by Document Agent'], ['Scheduling', 'Phone and messages', 'Coordinated by Workflow Agent'], ['Follow-ups', 'Memory-dependent', 'Systematic, via Lifecycle Agent'], ['Broker focus', 'Divided', 'Judgement & relationships']]
          : [1, 2, 3, 4].map(() => ['[ASPECT]', '[Current state]', '[Future state]'])).map(([a, b, c]) => [[h2t(a)], [p(b)], [p('✓  ' + c)]]) }),
      space(14),
      panel([cols([1, 1.4], [
        [label(v('[RESULT LABEL]', 'The result')), quote(v('[RESULT STATEMENT]', 'More capacity for higher-value work.'))],
        [bullets(X ? ['Clients — faster response, better preparation', 'Judgement — more time for complex decisions', 'Relationships — deeper, longer engagement', 'Closing — smoother, more consistent execution'] : ['[KEY POINT]', '[KEY POINT]', '[KEY POINT]'])],
      ])]),
    ]) },

    /* 09 FEATURE */
    { key: 'T09_Editorial-Feature', name: 'Editorial Feature', header: v('[SECTION 02 / SECTION NAME]', 'Section 02 / The Business Problem'), blocks: clean([
      I('Narrative page for arguments and context. Body text flows to additional pages automatically. Keep the pull quote under 25 words.'),
      cols([1.05, 1], [
        [id(v('[02]', '02')), h1(v('[FEATURE HEADLINE]', 'The Business Problem')), sup(v('[SUPPORTING STATEMENT]', 'Competition is raising the expectation placed on every broker.')),
          p(v('[BODY TEXT — opening paragraph]', 'A client does not see the CRM entry, the research, the document preparation or the coordination behind a transaction. They see the outcome.'))],
        [image(img('skyline.jpg'), 1.0, v('[CAPTION]', 'Clients don’t see the work. They see the outcome.'))],
      ]),
      space(8), rule(),
      cols([1.2, 1], [
        [quote(v('[PULL QUOTE]', 'That experience increasingly becomes the basis on which brokerages compete.'))],
        [p(v('[BODY TEXT]', 'Yet the operating model behind it is fragmented across people, systems and manual tasks. The issue is not that these tasks are difficult.')), p(v('[BODY TEXT]', 'It is that they compete for the same scarce resource: the broker’s attention.'))],
      ]),
      space(10),
      panel([cols([0.35, 1], [[label(v('[LABEL]', 'The problem in one line'))], [quote(v('[ONE-LINE SUMMARY]', 'The market demands a higher standard of service, while too much attention is consumed by the work required to deliver it.'))]])], { dark: true }),
    ]) },

    /* 10 DIVIDER */
    { key: 'T10_Section-Divider', name: 'Section Divider', header: v('[SECTION 04]', 'Section 04'), blocks: clean([
      I('Duplicate this page for each new section. Change the number, title and statement only. The dark panel grows with its content.'),
      panel([space(120), hero(v('[04]', '04')), space(20), display(v('[SECTION TITLE]', 'Transformation')), sup(v('[SECTION STATEMENT — one line]', 'From tasks to capacity — how the operating model changes.')), space(150)], { dark: true, minH: 600 }),
    ]) },

    /* 11 CLOSING */
    { key: 'T11_Closing-Contact', name: 'Closing / Contact', header: v('[SECTION 08 / NEXT STEPS]', 'Section 08 / Next Steps'), blocks: clean([
      I('Up to three next steps. Replace contact details in the dark panel. Keep the disclaimer unless Legal approves changes.'),
      id(v('[08]', '08')), h1(v('[CLOSING HEADLINE]', 'The Right Work. The Right Person.')), sup(v('[SUPPORTING STATEMENT]', 'Next steps toward a new operating model.')),
      space(12),
      table({ style: 'rules', widths: [1, 1, 1], vrule: true, rows: [(X ? [['Discovery Session', 'A 90-minute working session to map your current workflow.'], ['Baseline Study', 'Two weeks measuring time allocation across a broker team.'], ['Pilot Proposal', 'A scoped, gated pilot with defined success measures.']]
        : [1, 2, 3].map(() => ['[NEXT STEP]', '[One-sentence description.]'])).map(([t, d], i) => [num('0' + (i + 1)), h2t(t), p(d)])] }),
      space(14),
      panel([cols([1, 1], [
        [logo(), space(10), quote(v('[CALL TO ACTION]', 'Intelligence around the broker. Let’s talk.'))],
        [label('Contact'), p(v('[CONTACT DETAILS — email]', 'strategy@oweleen.com')), p(v('[CONTACT DETAILS — website]', 'oweleen.com')), p(v('[CONTACT DETAILS — address]', 'Dubai International Financial Centre'))],
      ])], { dark: true }),
      space(12),
      label('Notes & disclaimer'),
      note(v('[DISCLAIMER — legal text]', 'All figures in this edition are illustrative and provided for template demonstration. This document does not constitute an offer. © 2026 Oweleen. All rights reserved.')),
    ]) },
  ];
}

// small helpers (subheads inside tables)
function h1s(t) { return { type: 'h1s', t }; }
function h2t(t) { return { type: 'h2t', t }; }
function kpiS(t) { return { type: 'kpiS', t }; }
function chunk(a, n) { const r = []; for (let i = 0; i < a.length; i += n) r.push(a.slice(i, i + n)); return r; }
