import { C, Page, Header, Footer, OweleenLogo } from './system';
import SKY from "./assets/skyline.jpg";
import FAC from "./assets/facade.jpg";

/* =========================================================================
   SET A: MARKET NOTES (A1 — A6)
   CPL vs. CPQL: The Complete Intelligence Report
   ========================================================================= */

/* A1 — COVER (Dark theme with skyline photography and complete intelligence metadata) */
export function MarketCover() {
  return (
    <Page dark>
      {/* Top Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid rgba(201, 207, 211, 0.2)`, paddingBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <OweleenLogo variant="full" color="light" size={0.9} />
          <span style={{ color: C.copper, opacity: 0.6 }}>/</span>
          <span className="t-meta" style={{ color: C.copperSoft, letterSpacing: '.2em' }}>RESEARCH SERIES / SEPTEMBER 2026</span>
        </div>
        <span className="t-meta" style={{ color: C.mist, fontSize: 8 }}>A4 SPECIMEN · 794 × 1123</span>
      </div>

      {/* Title & Scope */}
      <div style={{ marginTop: 54 }}>
        <div className="t-id" style={{ fontSize: 11, color: C.copper, letterSpacing: '.24em' }}>
          UAE REAL ESTATE BROKERAGE INTELLIGENCE
        </div>
        <h1 className="serif" style={{ fontSize: 62, lineHeight: 1.02, color: C.ivory, fontWeight: 400, margin: '16px 0 18px', letterSpacing: '-.02em' }}>
          CPL vs. CPQL
        </h1>
        <p className="t-sup" style={{ fontSize: 18, color: C.copperSoft, maxWidth: 540, margin: 0, lineHeight: 1.45 }}>
          The Complete Intelligence Report: Why UAE brokerages misallocate capital to Cost Per Lead, and how Cost Per Qualified Lead (CPQL) reveals where revenue actually disappears.
        </p>
      </div>

      {/* Central Visual: Dubai Skyline / Financial Centre with Overlay */}
      <div style={{ position: 'relative', marginTop: 36, height: 380, marginLeft: -48, marginRight: -48, overflow: 'hidden' }}>
        <img
          src={SKY}
          alt="Dubai real estate skyline"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 42%', filter: 'saturate(0.85) contrast(1.1)' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(14,34,51,0.7) 0%, rgba(14,34,51,0.1) 40%, rgba(14,34,51,0.88) 100%)' }} />
        <div style={{ position: 'absolute', left: 48, top: 24, borderLeft: `2px solid ${C.copper}`, paddingLeft: 14 }}>
          <div className="t-meta" style={{ color: C.ivory, letterSpacing: '.2em' }}>OWELEEN RESEARCH BRIEFING</div>
          <div style={{ fontSize: 11, color: C.copperSoft, marginTop: 4 }}>UAE Real Estate Brokerage Stack · Cost Architecture & Pipeline Diagnostics</div>
        </div>
        <div style={{ position: 'absolute', left: 48, bottom: 20, right: 48, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="t-meta" style={{ color: C.ivory, fontSize: 10, letterSpacing: '.18em' }}>
            SECTIONS 01–13 · BENCHMARKS · REVENUE LEAK · SCORECARD
          </span>
          <span className="t-note" style={{ color: C.copperSoft }}>
            Validated across mid-tier brokerages averaging 500 leads/mo
          </span>
        </div>
      </div>

      {/* Lower Metadata Grid */}
      <div style={{ marginTop: 'auto', borderTop: `1px solid rgba(201, 207, 211, 0.25)`, paddingTop: 22, display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr auto', gap: 24, alignItems: 'end' }}>
        <div>
          <div className="t-meta" style={{ color: C.copper, fontSize: 8 }}>PREPARED BY</div>
          <div style={{ color: C.ivory, fontSize: 13, fontWeight: 500, marginTop: 4 }}>Oweleen Applied Intelligence</div>
          <div className="t-note" style={{ color: C.mist, marginTop: 3 }}>UAE Real Estate Brokerage Operations Practice</div>
        </div>
        <div>
          <div className="t-meta" style={{ color: C.mist, fontSize: 8 }}>EDITION & DATE</div>
          <div style={{ color: C.ivory, fontSize: 12, marginTop: 4 }}>September 2026</div>
          <div className="t-note" style={{ color: C.mist, marginTop: 3 }}>Research Series · Vol 1.0</div>
        </div>
        <div>
          <div className="t-meta" style={{ color: C.mist, fontSize: 8 }}>SERIES FOCUS</div>
          <div style={{ color: C.copperSoft, fontSize: 12, marginTop: 4 }}>CPL vs. CPQL Economics</div>
          <div className="t-note" style={{ color: C.mist, marginTop: 3 }}>Commercial & Residential Brokerage</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <OweleenLogo variant="symbol" color="light" symbolSize={46} title="Oweleen Brandmark" />
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 18, borderTop: `1px solid rgba(255,255,255,0.08)`, paddingTop: 12 }}>
        <span className="t-note" style={{ color: C.mist }}>Oweleen Research Series. Validated against UAE transaction records and CRM data.</span>
        <span className="t-meta" style={{ color: C.copper, fontWeight: 600 }}>A1 · COVER</span>
      </div>
    </Page>
  );
}

/* A2 — KEY FINDINGS + PULL QUOTE (The Core Argument & Definition Gap) */
export function MarketKeyFindings() {
  return (
    <Page>
      <Header left="CPL VS. CPQL REPORT" right="SECTION 01 — THE CORE ARGUMENT" />

      <div style={{ marginTop: 28 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span className="t-id" style={{ fontSize: 10 }}>EXECUTIVE SUMMARY</span>
          <span className="rule-c" style={{ width: 24 }} />
        </div>
        <h2 className="serif" style={{ fontSize: 34, margin: '10px 0 18px', fontWeight: 400, color: C.midnight, lineHeight: 1.15 }}>
          Every brokerage in the UAE measures Cost Per Lead. It is the wrong number.
        </h2>
      </div>

      {/* Two Column Layout: Left narrative, Right large pull quote */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: 36 }}>
        <div>
          <p className="t-body" style={{ fontSize: 13, lineHeight: 1.65, margin: '0 0 14px', color: C.midnight, fontWeight: 500 }}>
            CPL measures what you paid to make a phone ring. It tells you nothing about whether the person on the other end was ever going to buy.
          </p>
          <p className="t-body" style={{ fontSize: 12, lineHeight: 1.6, margin: '0 0 12px', color: C.slate }}>
            The number that determines your actual marketing ROI is <b>Cost Per Qualified Lead (CPQL)</b> — what you paid, in real AED, to produce one buyer who had confirmed budget, confirmed timeline, confirmed intent, and was ready to view.
          </p>
          <p className="t-body" style={{ fontSize: 12, lineHeight: 1.6, margin: '0 0 12px', color: C.slate }}>
            <b>2.1 Cost Per Lead (CPL):</b> <code>Total Ad Spend ÷ Total Leads Generated</code>. Measures the volume efficiency of a paid channel. For example: AED 40,000 monthly ad spend generating 500 leads yields an AED 80 CPL. This number looks efficient on paper, but it is completely disconnected from revenue.
          </p>
          <p className="t-body" style={{ fontSize: 12, lineHeight: 1.6, margin: 0, color: C.slate }}>
            <b>2.2 Cost Per Qualified Lead (CPQL):</b> <code>Total Ad Spend ÷ Total Qualified Leads</code>. Where a Qualified Lead has passed the structured 5-point BANT filter: Budget, Authority, Need, Timeline (≤6 months), and confirmed Intent (agreed viewing). A lead passing 3 of 5 criteria is merely warm. Enquiries do not pay commissions.
          </p>
        </div>

        {/* Right Column: Pull Quote with Copper Accent */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderLeft: `2px solid ${C.copper}`, paddingLeft: 24 }}>
          <div>
            <span className="serif" style={{ fontSize: 44, color: C.copper, lineHeight: 0.8, display: 'block' }}>“</span>
            <p className="serif" style={{ fontSize: 24, lineHeight: 1.3, color: C.midnight, margin: '6px 0 18px', fontStyle: 'italic' }}>
              The gap between CPL and CPQL is where most brokerage revenue disappears. Not to the market. Not to competitors. To a metric nobody is measuring.
            </p>
            <div className="rule-c" style={{ width: 36, marginBottom: 14 }} />
            <div className="t-meta" style={{ color: C.copper, fontSize: 9.5 }}>OWELEEN RESEARCH SERIES</div>
            <div className="t-note" style={{ color: C.slate, marginTop: 4 }}>UAE Brokerage Lead Economics · September 2026</div>
          </div>

          <div style={{ background: C.paper, padding: '16px 18px', marginTop: 16 }}>
            <div className="t-meta" style={{ color: C.midnight, fontWeight: 600 }}>THE QUALIFICATION MULTIPLIER</div>
            <div className="t-body" style={{ fontSize: 11, color: C.slate, marginTop: 6, lineHeight: 1.5 }}>
              At a 7% qualification rate (1 in 15 leads), an AED 80 Meta lead actually costs <b>AED 1,200 per qualified buyer</b>. Portals with 33% qualification (1 in 3) deliver qualified buyers at <b>AED 750</b> — 38% cheaper where it matters.
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Landscape Photograph */}
      <div style={{ marginTop: 'auto', marginBottom: 14 }}>
        <div style={{ height: 230, width: '100%', overflow: 'hidden', position: 'relative' }}>
          <img
            src={FAC}
            alt="Dubai real estate financial centre"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', filter: 'saturate(0.8)' }}
          />
          <div style={{ position: 'absolute', bottom: 12, left: 16, background: 'rgba(14,34,51,0.85)', padding: '6px 14px', color: C.ivory }}>
            <span className="t-note" style={{ color: C.copperSoft }}>
              Dubai Commercial & Residential Brokerage Operations · 500 leads/mo benchmark cohort
            </span>
          </div>
        </div>
        <div className="t-note" style={{ color: C.mist, marginTop: 8 }}>
          Figure A2.1: UAE Brokerage Dynamics. Volume optimization without qualification tracking systematically hides revenue leaks.
        </div>
      </div>

      <Footer page="2 // CPL VS. CPQL REPORT" />
    </Page>
  );
}

/* A3 — NARRATIVE + INDICATOR RAIL + EXHIBIT (UAE Market CPL Benchmarks & Inflation) */
export function MarketNarrativeRail() {
  const cplChannels = [
    { name: 'Competitive Benchmark (Top Campaigns)', range: 'AED 30–100', median: 65, pct: 22, fill: C.copper },
    { name: 'Meta / Instagram (UAE Real Estate)', range: 'AED 30–300', median: 80, pct: 27, fill: C.midnight },
    { name: 'Off-Plan Agency-Sourced', range: 'AED 30–120', median: 75, pct: 25, fill: C.slate },
    { name: 'Click-to-WhatsApp (CTWA)', range: 'AED 48–240', median: 110, pct: 36, fill: C.mist },
    { name: 'Google Search (High Intent)', range: 'AED 150–900', median: 400, pct: 100, fill: C.stone },
  ];

  return (
    <Page>
      <Header left="CPL VS. CPQL REPORT" right="SECTION 03 — UAE MARKET CPL BENCHMARKS" />

      {/* Top Section: Narrative Column + Indicator Rail */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.45fr 1fr', gap: 32, marginTop: 28 }}>
        <div>
          <div className="t-id" style={{ fontSize: 10 }}>CHANNEL BENCHMARKS & INFLATION</div>
          <h2 className="serif" style={{ fontSize: 24, margin: '8px 0 14px', color: C.midnight, fontWeight: 400, lineHeight: 1.2 }}>
            Every brokerage optimising for CPL is optimising a number that inflates 25–35% annually
          </h2>
          <p className="t-body" style={{ fontSize: 12, lineHeight: 1.6, margin: '0 0 10px', color: C.ink }}>
            Verified UAE market data for 2025–2026 establishes that Meta lead generation costs have inflated 25–35% year-on-year in Dubai. An AED 80 lead in 2024 routinely costs AED 100–108 in 2025.
          </p>
          <p className="t-body" style={{ fontSize: 12, lineHeight: 1.6, margin: '0 0 10px', color: C.slate }}>
            <b>Structural Inflation Trend:</b> Globally, Meta CPA increased 38% between 2025 and 2026, rising from a median of $27.66 to $38.19. Meta’s 2026 Andromeda algorithm shift toward engagement quality means ad volume may drop while media cost continues to climb.
          </p>
          <p className="t-body" style={{ fontSize: 12, lineHeight: 1.6, margin: 0, color: C.slate }}>
            Google Search inflates 5–10% annually in the UAE: while buyer intent is notably higher than paid social, volume is severely constrained. Brokerages optimizing purely for volume are running faster just to stand still.
          </p>
        </div>

        {/* Right Column: Indicator Rail */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {/* Card 1 */}
          <div style={{ background: C.paper, borderTop: `2px solid ${C.copper}`, padding: '14px 16px' }}>
            <div className="t-meta" style={{ color: C.slate, fontSize: 8 }}>META (DUBAI) YOY CPL INFLATION</div>
            <div className="serif" style={{ fontSize: 38, color: C.midnight, lineHeight: 1, marginTop: 6 }}>25–35%</div>
            <div className="t-note" style={{ color: C.copper, fontWeight: 600, marginTop: 4 }}>AED 80 in 2024 → AED 108 in 2025</div>
          </div>

          {/* Card 2 */}
          <div style={{ background: C.paper, borderTop: `2px solid ${C.midnight}`, padding: '14px 16px' }}>
            <div className="t-meta" style={{ color: C.slate, fontSize: 8 }}>GLOBAL META CPA SURGE (2025→2026)</div>
            <div className="serif" style={{ fontSize: 38, color: C.copper, lineHeight: 1, marginTop: 6 }}>+38%</div>
            <div className="t-note" style={{ color: C.slate, marginTop: 4 }}>Global median $38.19 up from $27.66</div>
          </div>

          {/* Card 3 */}
          <div style={{ background: C.paper, borderTop: `2px solid ${C.rule}`, padding: '14px 16px' }}>
            <div className="t-meta" style={{ color: C.slate, fontSize: 8 }}>GOOGLE SEARCH CPL INFLATION</div>
            <div className="serif" style={{ fontSize: 34, color: C.midnight, lineHeight: 1, marginTop: 6 }}>5–10%</div>
            <div className="t-note" style={{ color: C.slate, marginTop: 4 }}>Higher intent, constrained volume</div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="rule" style={{ marginTop: 24, marginBottom: 18 }} />

      {/* Bottom Section: Exhibit 01 Bar Chart */}
      <div style={{ marginTop: 'auto', marginBottom: 10 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 }}>
          <div>
            <span className="t-id" style={{ fontSize: 9.5 }}>EXHIBIT 01</span>
            <span className="serif" style={{ fontSize: 17, color: C.midnight, marginLeft: 10 }}>
              Verified CPL by Channel in the UAE (2025–2026 Benchmarks)
            </span>
          </div>
          <span className="t-meta" style={{ color: C.slate }}>Median Representative CPL (AED)</span>
        </div>

        {/* Bar chart rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
          {cplChannels.map((d) => (
            <div key={d.name} style={{ display: 'grid', gridTemplateColumns: '220px 1fr 100px 70px', alignItems: 'center', gap: 12 }}>
              <span className="t-body" style={{ fontSize: 11, color: C.midnight, fontWeight: 500 }}>
                {d.name}
              </span>
              <div style={{ background: C.paper, height: 16, width: '100%', position: 'relative' }}>
                <div style={{ width: `${d.pct}%`, height: '100%', background: d.fill }} />
              </div>
              <span className="t-note" style={{ fontSize: 10.5, color: C.slate, textAlign: 'right' }}>
                {d.range}
              </span>
              <span className="t-body" style={{ fontSize: 11.5, textAlign: 'right', fontWeight: 600, color: d.median >= 400 ? C.copper : C.midnight }}>
                ~AED {d.median}
              </span>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 14, padding: '10px 14px', background: C.paper, borderLeft: `2px solid ${C.copper}`, fontSize: 11, color: C.slate, lineHeight: 1.45 }}>
          <b>Portal Note (Property Finder / Bayut):</b> Portals do not quote generic CPL because subscriptions represent premium placement. Lead intent is dramatically higher than paid social, resulting in vastly superior qualification velocity.
        </div>
      </div>

      <Footer page="3 // CPL VS. CPQL REPORT" />
    </Page>
  );
}

/* A4 — DISTRIBUTION + SHARE EXHIBITS (CPQL by Channel — The Real Cost Revelation) */
export function MarketDistribution() {
  const cpqlChannels = [
    { source: 'Meta / Instagram', cpl: 'AED 80', rate: '1 in 15 (7%)', mult: '15×', cpql: 'AED 1,200', perception: '"Cheap"', highlight: false },
    { source: 'Google Search', cpl: 'AED 400', rate: '1 in 6 (17%)', mult: '6–8×', cpql: 'AED 2,400–3,200', perception: '"Expensive"', highlight: false },
    { source: 'Property Finder / Bayut', cpl: 'AED 250', rate: '1 in 3 (33%)', mult: '3×', cpql: 'AED 750', perception: '"Mid-range"', highlight: true },
    { source: 'Referral Pipeline', cpl: 'AED 0–400', rate: '1 in 1.5 (67%)', mult: '1.5×', cpql: 'AED 0–267', perception: '"Free"', highlight: true },
    { source: 'Click-to-WhatsApp (CTWA)', cpl: 'AED 48–240', rate: '1 in 4–5 (20–25%)', mult: '4–5×', cpql: 'AED 192–1,200', perception: '"Similar to Meta"', highlight: true },
  ];

  const multipliers = [
    { rate: '1 in 3 (33%)', mult: '3× CPL', label: 'High-intent source (Portals, Verified Enquiries)', bar: 100, color: C.midnight },
    { rate: '1 in 6 (17%)', mult: '6× CPL', label: 'Mid-intent source (Google Search, Branded Campaigns)', bar: 70, color: C.slate },
    { rate: '1 in 10 (10%)', mult: '10× CPL', label: 'Low-intent source (Off-plan general display)', bar: 45, color: C.copper },
    { rate: '1 in 15 (7%)', mult: '15× CPL', label: 'Very low-intent source (Standard Meta lead ads)', bar: 25, color: C.mist },
    { rate: '1 in 20 (5%)', mult: '20× CPL', label: 'Near-zero intent source (Cold/Bought lists)', bar: 15, color: C.stone },
  ];

  return (
    <Page>
      <Header left="CPL VS. CPQL REPORT" right="SECTION 04 — UAE MARKET CPQL BENCHMARKS" />

      <div style={{ marginTop: 26 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span className="t-id" style={{ fontSize: 10 }}>THE CHANNEL COST REVELATION</span>
          <span className="rule-c" style={{ width: 24 }} />
        </div>
        <h2 className="serif" style={{ fontSize: 32, margin: '8px 0 10px', color: C.midnight, fontWeight: 400 }}>
          CPQL by Channel: The "Expensive" Portal is 38% Cheaper Where It Matters
        </h2>
        <p className="t-sup" style={{ fontSize: 13, color: C.slate, margin: '0 0 18px', maxWidth: 680, lineHeight: 1.45 }}>
          The brokerage paying AED 80 per Meta lead believes it has the cheapest lead source in its portfolio. At a 7% qualification rate, that AED 80 lead costs <b>AED 1,200 per qualified buyer</b>. The portal lead at AED 250 costs <b>AED 750</b> per qualified buyer.
        </p>
      </div>

      {/* Top 4 KPI Metrics */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 20 }}>
        <div style={{ background: C.paper, borderTop: `2px solid ${C.midnight}`, padding: '12px 14px' }}>
          <div className="t-meta" style={{ color: C.slate, fontSize: 8 }}>META EFFECTIVE CPQL</div>
          <div className="serif" style={{ fontSize: 26, color: C.midnight, marginTop: 4 }}>AED 1,200</div>
          <div className="t-note" style={{ color: C.mist, marginTop: 2 }}>15× CPL multiplier (7% qual)</div>
        </div>
        <div style={{ background: C.paper, borderTop: `2px solid ${C.copper}`, padding: '12px 14px' }}>
          <div className="t-meta" style={{ color: C.copper, fontSize: 8 }}>PORTAL EFFECTIVE CPQL</div>
          <div className="serif" style={{ fontSize: 26, color: C.copper, marginTop: 4 }}>AED 750</div>
          <div className="t-note" style={{ color: C.slate, marginTop: 2 }}>3× CPL multiplier (33% qual)</div>
        </div>
        <div style={{ background: C.paper, borderTop: `2px solid ${C.midnight}`, padding: '12px 14px' }}>
          <div className="t-meta" style={{ color: C.slate, fontSize: 8 }}>PORTAL ADVANTAGE</div>
          <div className="serif" style={{ fontSize: 26, color: C.midnight, marginTop: 4 }}>-38% Cost</div>
          <div className="t-note" style={{ color: C.copper, fontWeight: 600, marginTop: 2 }}>Cheaper per true buyer</div>
        </div>
        <div style={{ background: C.paper, borderTop: `2px solid ${C.rule}`, padding: '12px 14px' }}>
          <div className="t-meta" style={{ color: C.slate, fontSize: 8 }}>CTWA BEST-CASE CPQL</div>
          <div className="serif" style={{ fontSize: 26, color: C.midnight, marginTop: 4 }}>AED 192</div>
          <div className="t-note" style={{ color: C.mist, marginTop: 2 }}>Instant WhatsApp speed-to-lead</div>
        </div>
      </div>

      {/* Primary Table: Exhibit 02A */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
          <span className="t-id" style={{ fontSize: 9 }}>EXHIBIT 02A · THE REAL CHANNEL COST TABLE</span>
          <span className="t-note" style={{ color: C.slate }}>Formula: CPQL = CPL ÷ Qualification Rate</span>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 11 }}>
          <thead>
            <tr style={{ background: C.midnight, color: C.ivory, textAlign: 'left' }}>
              <th style={{ padding: '8px 10px', fontWeight: 500 }}>Lead Source</th>
              <th style={{ padding: '8px 10px', fontWeight: 500 }}>Stated CPL</th>
              <th style={{ padding: '8px 10px', fontWeight: 500 }}>Qual Rate</th>
              <th style={{ padding: '8px 10px', fontWeight: 500 }}>Multiplier</th>
              <th style={{ padding: '8px 10px', fontWeight: 500 }}>Real CPQL</th>
              <th style={{ padding: '8px 10px', fontWeight: 500 }}>Broker Perception</th>
            </tr>
          </thead>
          <tbody>
            {cpqlChannels.map((c, i) => (
              <tr key={c.source} style={{ borderBottom: `1px solid ${C.rule}`, background: c.highlight ? 'rgba(184,112,63,0.06)' : i % 2 === 0 ? C.paper : 'transparent' }}>
                <td style={{ padding: '7px 10px', fontWeight: 600, color: C.midnight }}>{c.source}</td>
                <td style={{ padding: '7px 10px', color: C.slate }}>{c.cpl}</td>
                <td style={{ padding: '7px 10px', color: C.midnight }}>{c.rate}</td>
                <td style={{ padding: '7px 10px', color: C.slate }}>{c.mult}</td>
                <td style={{ padding: '7px 10px', fontWeight: 700, color: c.highlight ? C.copper : C.midnight }}>{c.cpql}</td>
                <td style={{ padding: '7px 10px', color: C.slate, fontStyle: 'italic' }}>{c.perception}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Secondary Exhibit: The Multiplier Distribution */}
      <div style={{ marginTop: 'auto', background: C.paper, padding: '14px 18px', borderLeft: `3px solid ${C.copper}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <span className="t-meta" style={{ color: C.midnight, fontWeight: 600 }}>THE QUALIFICATION MULTIPLIER SPECTRUM</span>
          <span className="t-note" style={{ color: C.copper }}>The number no lead generation agency shows you</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {multipliers.map((m) => (
            <div key={m.rate} style={{ display: 'grid', gridTemplateColumns: '110px 80px 1fr', alignItems: 'center', gap: 12, fontSize: 10.5 }}>
              <span style={{ fontWeight: 600, color: C.midnight }}>{m.rate}</span>
              <span style={{ color: C.copper, fontWeight: 700 }}>{m.mult}</span>
              <span style={{ color: C.slate }}>{m.label}</span>
            </div>
          ))}
        </div>
      </div>

      <Footer page="4 // CPL VS. CPQL REPORT" />
    </Page>
  );
}

/* A5 — SEGMENT ANALYSIS + BANDED EXHIBIT (The 5 Qualification Failure Points & Scoring Model) */
export function MarketSegmentAnalysis() {
  const failurePoints = [
    { pt: 'Speed to lead >5 minutes', what: 'Buyer has moved to next broker; latency destroys intent', impact: '21× lower qualification rate' },
    { pt: 'Single follow-up attempt', what: '44% of agents stop at touch 1; no follow-up discipline', impact: '70% of closeable leads abandoned' },
    { pt: 'No qualification framework', what: 'Same generic script for every buyer profile and segment', impact: 'BANT deals win at 45% vs 25% unvetted' },
    { pt: 'Wrong channel for segment', what: 'Emailing a WhatsApp-primary buyer in the UAE market', impact: 'Response rate drops from 60% to 8–12%' },
    { pt: 'After-hours coverage gap', what: '40% of UAE enquiries arrive between 8pm and 2am', impact: '0% coverage = 0% conversion' },
  ];

  const scoringTiers = [
    { tier: 'HOT', score: '80–130 pts', action: 'Immediate human broker handoff (<60s)', prob: '45–55%', color: C.copper },
    { tier: 'WARM', score: '50–79 pts', action: 'Automated WhatsApp sequence + scheduled call', prob: '20–30%', color: C.midnight },
    { tier: 'COLD', score: '20–49 pts', action: 'Automated 14-touch multi-channel nurture', prob: '5–15%', color: C.slate },
    { tier: 'LONG-CYCLE', score: '<20 pts', action: 'Monthly market intelligence broadcast', prob: '1–5%', color: C.mist },
  ];

  return (
    <Page>
      <Header left="CPL VS. CPQL REPORT" right="SECTIONS 05 & 08 — QUALIFICATION & SCORING" />

      <div style={{ marginTop: 26 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span className="t-id" style={{ fontSize: 10 }}>OPERATIONAL DIAGNOSTIC</span>
          <span className="rule-c" style={{ width: 24 }} />
        </div>
        <h2 className="serif" style={{ fontSize: 32, margin: '8px 0 10px', color: C.midnight, fontWeight: 400 }}>
          The 5 Failure Points That Kill Lead Qualification
        </h2>
        <p className="t-sup" style={{ fontSize: 13, color: C.slate, margin: '0 0 18px', maxWidth: 680, lineHeight: 1.45 }}>
          The single most powerful lever for reducing CPQL is not changing your ad channel. It is qualifying faster and more consistently on the leads you already have.
        </p>
      </div>

      {/* Failure Points Table */}
      <div style={{ marginBottom: 22 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
          <span className="t-id" style={{ fontSize: 9 }}>EXHIBIT 03A · THE 5 OPERATIONAL BREAKDOWN POINTS</span>
          <span className="t-note" style={{ color: C.copper }}>Audited across UAE CRM pipelines</span>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 11 }}>
          <thead>
            <tr style={{ background: C.midnight, color: C.ivory, textAlign: 'left' }}>
              <th style={{ padding: '8px 10px', fontWeight: 500, width: '28%' }}>Failure Point</th>
              <th style={{ padding: '8px 10px', fontWeight: 500, width: '42%' }}>What Happens</th>
              <th style={{ padding: '8px 10px', fontWeight: 500, width: '30%' }}>Conversion Impact</th>
            </tr>
          </thead>
          <tbody>
            {failurePoints.map((f, i) => (
              <tr key={f.pt} style={{ borderBottom: `1px solid ${C.rule}`, background: i % 2 === 0 ? C.paper : 'transparent' }}>
                <td style={{ padding: '7px 10px', fontWeight: 600, color: C.midnight }}>{f.pt}</td>
                <td style={{ padding: '7px 10px', color: C.slate }}>{f.what}</td>
                <td style={{ padding: '7px 10px', fontWeight: 600, color: C.copper }}>{f.impact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Banded Exhibit: The 0–130 Point Scoring Model */}
      <div style={{ marginTop: 'auto', marginBottom: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
          <div>
            <span className="t-id" style={{ fontSize: 9 }}>EXHIBIT 03B · THE OWELEEN LEAD SCORING MODEL (0–130 POINTS)</span>
            <span className="serif" style={{ fontSize: 17, color: C.midnight, marginLeft: 10 }}>
              Dynamic Qualification Routing Tiers
            </span>
          </div>
          <span className="t-meta" style={{ color: C.slate }}>Target Win Rate: 45–60%+</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
          {scoringTiers.map((t) => (
            <div key={t.tier} style={{ background: C.paper, borderTop: `3px solid ${t.color}`, padding: '12px 14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="t-id" style={{ color: t.color, fontSize: 10 }}>{t.tier}</span>
                <span className="t-note" style={{ fontWeight: 600, color: C.midnight }}>{t.score}</span>
              </div>
              <div style={{ fontSize: 11, color: C.midnight, fontWeight: 500, marginTop: 8, minHeight: 32, lineHeight: 1.4 }}>
                {t.action}
              </div>
              <div style={{ marginTop: 10, borderTop: `1px solid ${C.rule}`, paddingTop: 6, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="t-note" style={{ color: C.mist }}>Win Probability</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: t.color }}>{t.prob}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 12, fontSize: 10.5, color: C.slate, lineHeight: 1.45, background: 'rgba(14,34,51,0.04)', padding: '8px 12px' }}>
          <b>Scoring Signals:</b> Budget confirmed (+25) · Timeline &lt;3 months (+20) · Viewing requested (+20) · WhatsApp replied (+15) · Call answered (+15) · Cash buyer (+15) · Portal/Google source (+10–12) · Decision-maker (+10) · GCC national (+10).
        </div>
      </div>

      <Footer page="5 // CPL VS. CPQL REPORT" />
    </Page>
  );
}

/* A6 — CONTACTS + BASIS (Dead Database Opportunity & Research Methodology) */
export function MarketContactsBasis() {
  const deadDbComparison = [
    { metric: 'Acquisition Cost', newL: 'Full CPL (AED 80–900)', deadDb: 'Near zero (already paid for)' },
    { metric: 'Qualification Cost', newL: 'Full CPQL (AED 750–2,500)', deadDb: '5–10× lower' },
    { metric: 'Conversion Rate', newL: '1–3% (Meta/Google)', deadDb: '3–4× higher than new acquisition' },
    { metric: '% of leads buying within 24 months', newL: '—', deadDb: '40% of internet leads' },
    { metric: 'ROI vs. New Acquisition', newL: '1.0× Baseline', deadDb: '10–20× Return' },
  ];

  return (
    <Page>
      <Header left="CPL VS. CPQL REPORT" right="SECTIONS 09 & METHODOLOGY — RESEARCH BASIS" />

      <div style={{ marginTop: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span className="t-id" style={{ fontSize: 10 }}>THE HIDDEN ASSET</span>
          <span className="rule-c" style={{ width: 24 }} />
        </div>
        <h2 className="serif" style={{ fontSize: 30, margin: '8px 0 10px', color: C.midnight, fontWeight: 400 }}>
          The Dead Database: 40% of Internet Leads Buy Within 24 Months
        </h2>
        <p className="t-sup" style={{ fontSize: 12.5, color: C.slate, margin: '0 0 16px', maxWidth: 680, lineHeight: 1.45 }}>
          Every brokerage has a database of leads it paid for, contacted once, and abandoned. The brokerage that reactivates its dead database quarterly effectively reduces blended CPQL by 15–25% without spending an additional AED on media.
        </p>
      </div>

      {/* Dead DB Comparison Table */}
      <div style={{ marginBottom: 20 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 11 }}>
          <thead>
            <tr style={{ background: C.midnight, color: C.ivory, textAlign: 'left' }}>
              <th style={{ padding: '7px 10px', fontWeight: 500 }}>Metric</th>
              <th style={{ padding: '7px 10px', fontWeight: 500 }}>New Lead Acquisition</th>
              <th style={{ padding: '7px 10px', fontWeight: 500 }}>Dead Database Reactivation</th>
            </tr>
          </thead>
          <tbody>
            {deadDbComparison.map((r, i) => (
              <tr key={r.metric} style={{ borderBottom: `1px solid ${C.rule}`, background: i % 2 === 0 ? C.paper : 'transparent' }}>
                <td style={{ padding: '6px 10px', fontWeight: 600, color: C.midnight }}>{r.metric}</td>
                <td style={{ padding: '6px 10px', color: C.slate }}>{r.newL}</td>
                <td style={{ padding: '6px 10px', fontWeight: 600, color: C.copper }}>{r.deadDb}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 3-Column Advisory & Author Contacts Block */}
      <div style={{ borderTop: `1px solid ${C.rule}`, paddingTop: 16, marginBottom: 16 }}>
        <div className="t-id" style={{ fontSize: 9.5, marginBottom: 12 }}>OWELEEN RESEARCH & ADVISORY DESK</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
          <div style={{ background: C.paper, padding: '12px 14px' }}>
            <div className="serif" style={{ fontSize: 15, color: C.midnight, fontWeight: 500 }}>Lead Research Author</div>
            <div className="t-meta" style={{ color: C.copper, fontSize: 8.5, marginTop: 4 }}>APPLIED INTELLIGENCE PRACTICE</div>
            <div className="t-body" style={{ fontSize: 11, color: C.slate, marginTop: 6, lineHeight: 1.4 }}>
              Specialising in brokerage pipeline math, BANT qualification models, and CPA attribution audits across UAE real estate operations.
            </div>
            <div className="t-note" style={{ color: C.mist, marginTop: 6 }}>research@oweleen.ai</div>
          </div>

          <div style={{ background: C.paper, padding: '12px 14px' }}>
            <div className="serif" style={{ fontSize: 15, color: C.midnight, fontWeight: 500 }}>Brokerage Advisory</div>
            <div className="t-meta" style={{ color: C.copper, fontSize: 8.5, marginTop: 4 }}>STRATEGY & REALLOCATION</div>
            <div className="t-body" style={{ fontSize: 11, color: C.slate, marginTop: 6, lineHeight: 1.4 }}>
              Advising Tier-1 and mid-size UAE brokerages on channel budget rebalancing, CTWA deployments, and speed-to-lead automation.
            </div>
            <div className="t-note" style={{ color: C.mist, marginTop: 6 }}>advisory@oweleen.ai</div>
          </div>

          <div style={{ background: C.paper, padding: '12px 14px' }}>
            <div className="serif" style={{ fontSize: 15, color: C.midnight, fontWeight: 500 }}>Systems Architecture</div>
            <div className="t-meta" style={{ color: C.copper, fontSize: 8.5, marginTop: 4 }}>INTELLIGENCE LAYER (0–130)</div>
            <div className="t-body" style={{ fontSize: 11, color: C.slate, marginTop: 6, lineHeight: 1.4 }}>
              Multi-model AI qualification engine operating under 60-second response latency with native PropSpace & HubSpot sync.
            </div>
            <div className="t-note" style={{ color: C.mist, marginTop: 6 }}>systems@oweleen.ai</div>
          </div>
        </div>
      </div>

      {/* Basis / Methodological Notes */}
      <div style={{ padding: '10px 14px', background: C.paper, borderLeft: `2px solid ${C.copper}`, fontSize: 10.5, color: C.slate, lineHeight: 1.5, marginBottom: 14 }}>
        <b>Methodological Basis:</b> Data synthesized from verified UAE real estate brokerage transactions (2025–2026), Meta Ads Manager benchmark reports, Google Ads keyword auction data, Property Finder / Bayut placement records, and CRM audits representing over 50,000 inbound enquiries.
      </div>

      {/* Bottom Dark Footer Strip */}
      <div style={{ marginTop: 'auto', background: C.midnight, color: C.ivory, padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <OweleenLogo variant="full" color="light" size={0.85} />
          <span style={{ width: 1, height: 16, background: C.slate }} />
          <span className="t-meta" style={{ color: C.copperSoft, fontSize: 8.5 }}>RESEARCH SERIES · UAE BROKERAGE STACK · SEPTEMBER 2026</span>
        </div>
        <span className="t-note" style={{ color: C.mist }}>Template 06 of 16 · Set A</span>
      </div>

      <Footer page="6 // CPL VS. CPQL REPORT" />
    </Page>
  );
}

/* =========================================================================
   SET B: STRATEGIC OUTLOOK (B1 — B7)
   Executive Strategic Briefing: CPL vs. CPQL
   ========================================================================= */

/* B1 — COVER (Vertical corporate executive layout with title, subtitle, metadata) */
export function OutlookCover() {
  return (
    <Page dark>
      {/* Running Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid rgba(255,255,255,0.15)`, paddingBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <OweleenLogo variant="full" color="light" size={0.9} />
          <span style={{ color: C.copper, opacity: 0.6 }}>/</span>
          <span className="t-meta" style={{ color: C.copperSoft }}>STRATEGIC OUTLOOK / EDITION 01</span>
        </div>
        <span className="t-meta" style={{ color: C.mist, fontSize: 8 }}>EXECUTIVE BRIEFING</span>
      </div>

      {/* Main Title Area */}
      <div style={{ marginTop: 110 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span className="t-id" style={{ fontSize: 11, color: C.copper, letterSpacing: '.24em' }}>THE OPERATING MODEL</span>
          <span className="rule-c" style={{ width: 32 }} />
        </div>

        <h1 className="serif" style={{ fontSize: 60, lineHeight: 1.02, color: C.ivory, fontWeight: 400, margin: '22px 0 20px', letterSpacing: '-.02em' }}>
          CPL vs. CPQL
        </h1>

        <p className="t-sup" style={{ fontSize: 19, color: C.copperSoft, maxWidth: 540, margin: 0, lineHeight: 1.45 }}>
          The Complete Intelligence Report: Why UAE Real Estate Brokerages Misallocate AED 455,270/Month to the Wrong Metric — And How CPQL Reallocation Fixes It.
        </p>
      </div>

      {/* Middle Brand Emblem Rule */}
      <div style={{ marginTop: 90, display: 'flex', alignItems: 'center', gap: 18 }}>
        <div style={{ width: 44, height: 1, background: C.copper }} />
        <span className="t-meta" style={{ color: C.mist, letterSpacing: '.25em', fontSize: 8 }}>
          INTELLIGENCE AROUND THE BROKER · UAE REAL ESTATE RESEARCH
        </span>
      </div>

      {/* Bottom Metadata Block */}
      <div style={{ marginTop: 'auto', borderTop: `1px solid rgba(255, 255, 255, 0.18)`, paddingTop: 26, display: 'grid', gridTemplateColumns: '1.4fr 1fr auto', gap: 32, alignItems: 'end' }}>
        <div>
          <div className="t-meta" style={{ color: C.copper, fontSize: 8 }}>PREPARED BY</div>
          <div style={{ color: C.ivory, fontSize: 14, fontWeight: 500, marginTop: 4 }}>Oweleen Strategy & Operations</div>
          <div className="t-note" style={{ color: C.mist, marginTop: 2 }}>Executive Intelligence Briefing · UAE Market</div>
        </div>

        <div>
          <div className="t-meta" style={{ color: C.mist, fontSize: 8 }}>EDITION & DATE</div>
          <div style={{ color: C.ivory, fontSize: 13, marginTop: 4 }}>September 2026</div>
          <div className="t-note" style={{ color: C.copperSoft, marginTop: 2 }}>Vol 1.0 / Complete Intelligence Report</div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <OweleenLogo variant="symbol" color="light" symbolSize={50} title="Oweleen Brandmark" />
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, borderTop: `1px solid rgba(255,255,255,0.08)`, paddingTop: 12 }}>
        <span className="t-note" style={{ color: C.mist }}>Oweleen Research Series. Empirical analysis of 15 operational revenue levers.</span>
        <span className="t-meta" style={{ color: C.copper, fontWeight: 600 }}>B1 · COVER</span>
      </div>
    </Page>
  );
}

/* B2 — TABLE OF CONTENTS & EXECUTIVE BRIEFING */
export function OutlookContents() {
  const sectionsCol1 = [
    { num: '01', title: 'The Core Argument', desc: 'Why CPL is the wrong metric and how CPQL determines actual ROI' },
    { num: '02', title: 'Definitions & The Multiplier', desc: 'CPL, CPQL, the BANT qualification filter, and qualification multipliers' },
    { num: '03', title: 'UAE Market CPL Benchmarks (2025–2026)', desc: 'Verified channel CPL costs and the 25–35% annual Meta inflation trend' },
    { num: '04', title: 'UAE Market CPQL Benchmarks', desc: 'The real channel cost revelation: why portals are 38% cheaper than Meta' },
    { num: '05', title: 'The Conversion Architecture', desc: 'Industry conversion stages, lead source rates, and the 5 failure points' },
    { num: '06', title: 'The CPQL Calculation Framework', desc: 'Step-by-step 5-step operational model: criteria, tracking, CPD, and ROAS' },
    { num: '07', title: 'The Monthly GCI Leak from CPQL Blindness', desc: 'Quantifying the AED 455,270 monthly operational drain across C1–C15 levers' },
  ];

  const sectionsCol2 = [
    { num: '08', title: 'The BANT Qualification Impact on CPQL', desc: 'Structured qualification impact and the 0–130 point dynamic lead scoring model' },
    { num: '09', title: 'The Dead Database Opportunity', desc: 'Why 40% of leads buy within 24 months and deliver 10–20× reactivation ROI' },
    { num: '10', title: 'Channel Strategy Reallocation Model', desc: 'CPL-optimised vs CPQL-optimised budget shift (+41% qualified leads)' },
    { num: '11', title: 'AI Impact on CPQL', desc: 'Speed-to-lead &lt;60s, automated 14-touch cadence, Before vs After Oweleen' },
    { num: '12', title: 'The CPQL Scorecard', desc: '14-point brokerage self-assessment: Blind, Aware, Managed, or Optimised' },
    { num: '13', title: 'The One Page Summary', desc: 'Head-to-head decision matrix and the single executive takeaway rule' },
  ];

  return (
    <Page>
      <Header left="CPL VS. CPQL REPORT" right="TABLE OF CONTENTS & EXECUTIVE BRIEFING" />

      <div style={{ marginTop: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span className="t-id" style={{ fontSize: 10 }}>REPORT STRUCTURE</span>
          <span className="rule-c" style={{ width: 24 }} />
        </div>
        <h2 className="serif" style={{ fontSize: 32, margin: '8px 0 10px', color: C.midnight, fontWeight: 400 }}>
          Executive Agenda: 13-Section Complete Diagnostic
        </h2>
        <p className="t-sup" style={{ fontSize: 13, color: C.slate, margin: '0 0 16px', maxWidth: 680, lineHeight: 1.45 }}>
          An exhaustive operational framework identifying why UAE brokerages overpay for low-intent lead volume while leaking AED 455,270 every month through unvetted pipelines.
        </p>
      </div>

      {/* Two Column Table of Contents Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 8 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {sectionsCol1.map((s) => (
            <div key={s.num} style={{ background: C.paper, padding: '10px 12px', borderLeft: `2px solid ${C.midnight}` }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                <span className="serif" style={{ fontSize: 15, color: C.copper, fontWeight: 600 }}>{s.num}</span>
                <span style={{ fontSize: 12, fontWeight: 600, color: C.midnight }}>{s.title}</span>
              </div>
              <div className="t-note" style={{ color: C.slate, marginTop: 2, fontSize: 10.5, lineHeight: 1.35 }}>
                {s.desc}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {sectionsCol2.map((s) => (
            <div key={s.num} style={{ background: C.paper, padding: '10px 12px', borderLeft: `2px solid ${C.copper}` }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                <span className="serif" style={{ fontSize: 15, color: C.copper, fontWeight: 600 }}>{s.num}</span>
                <span style={{ fontSize: 12, fontWeight: 600, color: C.midnight }}>{s.title}</span>
              </div>
              <div className="t-note" style={{ color: C.slate, marginTop: 2, fontSize: 10.5, lineHeight: 1.35 }}>
                {s.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Executive Callout Box */}
      <div style={{ marginTop: 'auto', background: C.midnight, color: C.ivory, padding: '14px 18px', borderLeft: `3px solid ${C.copper}`, marginBottom: 10 }}>
        <div className="t-meta" style={{ color: C.copperSoft, fontSize: 8.5 }}>EXECUTIVE REVELATION</div>
        <div style={{ fontSize: 12, color: C.ivory, marginTop: 4, lineHeight: 1.45 }}>
          The referral lead converts at <b>30× the rate of a Meta lead</b> and costs 4–5× less to qualify. Yet the average UAE brokerage allocates 80% of its marketing budget to Meta and Google search.
        </div>
      </div>

      <Footer page="2 // STRATEGIC OUTLOOK" />
    </Page>
  );
}

/* B3 — STRATEGIC NARRATIVE (The Arithmetic of Lead Dilution) */
export function OutlookNarrative() {
  return (
    <Page>
      <Header left="CPL VS. CPQL REPORT" right="SECTIONS 01 & 02 — THE ARITHMETIC OF DILUTION" />

      <div style={{ marginTop: 26 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span className="t-id" style={{ fontSize: 10 }}>ECONOMIC FOUNDATIONS</span>
          <span className="rule-c" style={{ width: 24 }} />
        </div>
        <h2 className="serif" style={{ fontSize: 32, margin: '8px 0 14px', color: C.midnight, fontWeight: 400, lineHeight: 1.15 }}>
          The Arithmetic of Lead Dilution: How Revenue Disappears Between CPL and CPQL
        </h2>
        <p className="t-sup" style={{ fontSize: 13, color: C.slate, margin: '0 0 20px', maxWidth: 680, lineHeight: 1.45 }}>
          Every marketing agency and portal salesperson in the UAE justifies their fee with Cost Per Lead. It is time to examine what that number actually buys.
        </p>
      </div>

      {/* Two Column Detailed Essay */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
        <div>
          <div className="t-id" style={{ fontSize: 9.5, color: C.midnight, marginBottom: 6 }}>1. THE ILLUSION OF VOLUME EFFICIENCY</div>
          <p className="t-body" style={{ fontSize: 12, lineHeight: 1.65, margin: '0 0 12px', color: C.ink }}>
            Consider a typical mid-size brokerage generating 500 leads per month on a budget of AED 40,000. The blended CPL calculates to AED 80. The marketing director reports an efficient campaign; the media agency claims victory.
          </p>
          <p className="t-body" style={{ fontSize: 12, lineHeight: 1.65, margin: '0 0 12px', color: C.slate }}>
            However, when those 500 leads hit the sales floor, agents discover that 93% cannot state a clear budget, do not possess sole buying authority, have undefined timelines, or will not commit to a viewing. Only 35 of the 500 leads represent genuine buyers.
          </p>
          <p className="t-body" style={{ fontSize: 12, lineHeight: 1.65, margin: 0, color: C.slate }}>
            The true cost to produce a transacting prospect is therefore <code>AED 40,000 ÷ 35 = AED 1,142</code>. The apparent efficiency of the AED 80 lead was an optical illusion.
          </p>
        </div>

        <div>
          <div className="t-id" style={{ fontSize: 9.5, color: C.copper, marginBottom: 6 }}>2. THE BANT QUALIFICATION FILTER</div>
          <p className="t-body" style={{ fontSize: 12, lineHeight: 1.65, margin: '0 0 12px', color: C.ink }}>
            In the Oweleen framework, a Qualified Lead is strictly defined by the classical BANT standard adapted to UAE real estate:
          </p>
          <ul style={{ margin: '0 0 12px 18px', padding: 0, fontSize: 11.5, color: C.slate, lineHeight: 1.6 }}>
            <li><b>Budget Confirmed:</b> Buyer states verified, transacting capital band.</li>
            <li><b>Authority Confirmed:</b> Buyer is the sole decision-maker, not an intermediary.</li>
            <li><b>Need Confirmed:</b> Buyer specifies precise property parameters (area, type, size).</li>
            <li><b>Timeline Confirmed:</b> Target purchase completion date ≤6 months.</li>
            <li><b>Intent Confirmed:</b> Buyer commits to viewing appointment or advisory call.</li>
          </ul>
          <p className="t-body" style={{ fontSize: 12, lineHeight: 1.65, margin: 0, color: C.slate }}>
            A lead satisfying 3 of 5 criteria is merely a warm enquiry. Enquiries do not close deals; only qualified leads pay commissions.
          </p>
        </div>
      </div>

      {/* Key Takeaway Card */}
      <div style={{ marginTop: 'auto', background: C.paper, padding: '16px 20px', borderLeft: `3px solid ${C.copper}`, marginBottom: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="t-meta" style={{ color: C.midnight, fontWeight: 600 }}>CORE OPERATIONAL PRINCIPLE</span>
          <span className="t-note" style={{ color: C.copper }}>CPQL = CPL ÷ Qualification Rate</span>
        </div>
        <div style={{ fontSize: 12, color: C.midnight, marginTop: 6, lineHeight: 1.5 }}>
          When brokerages manage by CPL, they incentivize marketing teams to buy cheap, low-intent clicks. When brokerages manage by CPQL, capital automatically flows to high-conversion channels like Portals, Click-to-WhatsApp, and Database Reactivation.
        </div>
      </div>

      <Footer page="3 // STRATEGIC OUTLOOK" />
    </Page>
  );
}

/* B4 — SECTION OPENER (Dark full-bleed breaker page for Revenue Leak) */
export function OutlookSectionOpener() {
  return (
    <Page dark>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        <OweleenLogo variant="full" color="light" size={0.85} />
        <span style={{ color: C.copper, opacity: 0.6 }}>/</span>
        <span className="t-meta" style={{ color: C.copperSoft }}>STRATEGIC OUTLOOK</span>
        <div className="rule" style={{ flex: 1, background: 'rgba(255,255,255,0.2)' }} />
        <span className="t-meta" style={{ color: C.copper, fontWeight: 600 }}>SECTION 02</span>
      </div>

      <div style={{ marginTop: 110 }}>
        <div className="serif" style={{ fontSize: 110, color: C.copper, fontWeight: 300, lineHeight: 0.8 }}>
          02
        </div>
        <div className="t-id" style={{ color: C.ivory, fontSize: 12, letterSpacing: '.28em', marginTop: 24 }}>
          SECTION
        </div>

        <h1 className="serif" style={{ fontSize: 52, color: C.ivory, fontWeight: 400, margin: '14px 0 18px', letterSpacing: '-.02em', lineHeight: 1.08 }}>
          The Conversion Architecture & Revenue Leak
        </h1>

        <p className="t-sup" style={{ fontSize: 19, color: C.copperSoft, maxWidth: 540, lineHeight: 1.45, margin: 0 }}>
          Tracking the 15 operational failure points that drain AED 455,270 per month from mid-size UAE brokerages — and the AI qualification mechanisms that recapture it.
        </p>
      </div>

      <div style={{ marginTop: 'auto', borderTop: `1px solid rgba(255,255,255,0.15)`, paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <span className="t-meta" style={{ color: C.mist }}>
          SECTIONS 05, 07 & 10 · 15 REVENUE LEVERS · CHANNEL REALLOCATION
        </span>
        <span className="t-note" style={{ color: C.copperSoft }}>
          Monthly GCI Leak from CPQL Blindness Alone: AED 42,400
        </span>
      </div>

      <Footer page="4 // STRATEGIC OUTLOOK" light />
    </Page>
  );
}

/* B5 — BODY & KEY EMPHASIS (The Monthly AED 455,270 Revenue Leak Breakdown) */
export function OutlookBodyEmphasis() {
  const levers = [
    { code: 'C1', lever: 'Speed-to-lead failure (917 min avg vs. <5 min target)', leak: 'AED 80,560' },
    { code: 'C2', lever: 'Follow-up cadence (1.3 touches vs. 14 required)', leak: 'AED 53,000' },
    { code: 'C3', lever: 'No WhatsApp Business API (45–60% response rate gap)', leak: 'AED 38,160' },
    { code: 'C4', lever: 'No lead scoring system (unprioritized sales queue)', leak: 'AED 42,400' },
    { code: 'C5', lever: 'No bot-human hybrid (response gap during field viewings)', leak: 'AED 31,800' },
    { code: 'C6', lever: 'Dead database abandoned (quarterly neglect)', leak: 'AED 7,950' },
    { code: 'C7', lever: 'No CPQL tracking — wrong channel optimisation', leak: 'AED 42,400' },
    { code: 'C8', lever: 'No BANT qualification framework applied', leak: 'AED 31,800' },
    { code: 'C9', lever: 'After-hours coverage gap (40% arrive 8pm–2am)', leak: 'AED 25,440' },
    { code: 'C10', lever: 'CRM hygiene failure & unrecorded buyer stages', leak: 'AED 21,200' },
    { code: 'C11', lever: 'Attribution failure across multi-touch channels', leak: 'AED 16,960' },
    { code: 'C12', lever: 'No agent performance dashboard or SLA visibility', leak: 'AED 21,200' },
    { code: 'C13', lever: 'No referral generation system post-transaction', leak: 'AED 21,200' },
    { code: 'C14', lever: 'No viewing conversion scripts or structured objections', leak: 'AED 10,600' },
    { code: 'C15', lever: 'No offer gate process (unqualified buyer paperwork)', leak: 'AED 10,600' },
  ];

  return (
    <Page>
      <Header left="CPL VS. CPQL REPORT" right="SECTION 07 — THE MONTHLY GCI REVENUE LEAK" />

      <div style={{ marginTop: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span className="t-id" style={{ fontSize: 10 }}>FINANCIAL QUANTIFICATION</span>
          <span className="rule-c" style={{ width: 24 }} />
        </div>
        <h2 className="serif" style={{ fontSize: 30, margin: '6px 0 8px', color: C.midnight, fontWeight: 400 }}>
          The Monthly GCI Leak: Quantifying 15 Operational Levers (C1–C15)
        </h2>
        <p className="t-sup" style={{ fontSize: 12.5, color: C.slate, margin: '0 0 16px', maxWidth: 680, lineHeight: 1.45 }}>
          When a brokerage optimises for CPL instead of CPQL, it systematically misallocates budget. For a mid-size brokerage (500 leads/mo, AED 75,000 ad spend), the combined operational revenue leak reaches <b>AED 455,270 per month</b> (AED 5,463,240 annually).
        </p>
      </div>

      {/* Main Layout: Left Highlight Card, Right Table */}
      <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: 20, marginBottom: 14 }}>
        {/* Left Column: Big Leak Summary */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ background: C.midnight, color: C.ivory, padding: '16px 18px', borderTop: `3px solid ${C.copper}` }}>
            <div className="t-meta" style={{ color: C.copperSoft, fontSize: 8 }}>TOTAL MONTHLY GCI LEAK</div>
            <div className="serif" style={{ fontSize: 34, color: C.ivory, marginTop: 4 }}>AED 455,270</div>
            <div className="t-note" style={{ color: C.mist, marginTop: 4 }}>AED 5,463,240 per annum</div>
          </div>

          <div style={{ background: C.paper, padding: '14px 16px', borderLeft: `2px solid ${C.copper}` }}>
            <div className="t-meta" style={{ color: C.midnight, fontSize: 8 }}>CPQL BLINDNESS ALONE</div>
            <div className="serif" style={{ fontSize: 24, color: C.copper, marginTop: 4 }}>AED 42,400</div>
            <div className="t-note" style={{ color: C.slate, marginTop: 4 }}>
              AED 21,200 from Meta over-investment + AED 21,200 from zero referral system.
            </div>
          </div>

          <div style={{ background: C.paper, padding: '14px 16px', borderLeft: `2px solid ${C.midnight}` }}>
            <div className="t-meta" style={{ color: C.midnight, fontSize: 8 }}>SPEED-TO-LEAD PENALTY</div>
            <div className="serif" style={{ fontSize: 24, color: C.midnight, marginTop: 4 }}>AED 80,560</div>
            <div className="t-note" style={{ color: C.slate, marginTop: 4 }}>
              Average response latency: 917 mins vs &lt;5 mins benchmark.
            </div>
          </div>
        </div>

        {/* Right Column: Complete 15 Lever Table */}
        <div style={{ maxHeight: 560, overflowY: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 10.5 }}>
            <thead>
              <tr style={{ background: C.midnight, color: C.ivory, textAlign: 'left' }}>
                <th style={{ padding: '6px 8px', fontWeight: 500, width: '12%' }}>#</th>
                <th style={{ padding: '6px 8px', fontWeight: 500, width: '64%' }}>Operational Lever</th>
                <th style={{ padding: '6px 8px', fontWeight: 500, width: '24%', textAlign: 'right' }}>Monthly Leak</th>
              </tr>
            </thead>
            <tbody>
              {levers.map((l, i) => (
                <tr key={l.code} style={{ borderBottom: `1px solid ${C.rule}`, background: i % 2 === 0 ? C.paper : 'transparent' }}>
                  <td style={{ padding: '5px 8px', fontWeight: 700, color: C.copper }}>{l.code}</td>
                  <td style={{ padding: '5px 8px', color: C.midnight }}>{l.lever}</td>
                  <td style={{ padding: '5px 8px', fontWeight: 700, textAlign: 'right', color: C.midnight }}>{l.leak}</td>
                </tr>
              ))}
              <tr style={{ background: C.midnight, color: C.ivory }}>
                <td style={{ padding: '6px 8px', fontWeight: 700 }}>TOTAL</td>
                <td style={{ padding: '6px 8px', fontWeight: 600 }}>Combined Operational GCI Leak Across All 15 Levers</td>
                <td style={{ padding: '6px 8px', fontWeight: 700, textAlign: 'right', color: C.copperSoft }}>AED 455,270</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Footer page="5 // STRATEGIC OUTLOOK" />
    </Page>
  );
}

/* B6 — ASSESSMENT MATRIX (Channel Strategy Reallocation & AI Transformation Impact) */
export function OutlookAssessmentMatrix() {
  const currentChannels = [
    { channel: 'Meta / Instagram', alloc: '40%', spend: '30,000', leads: 25, cpql: '1,200' },
    { channel: 'Google Search', alloc: '33%', spend: '25,000', leads: 10, cpql: '2,500' },
    { channel: 'Portals (PF / Bayut)', alloc: '20%', spend: '15,000', leads: 20, cpql: '750' },
    { channel: 'Referral System', alloc: '0%', spend: '0', leads: 10, cpql: '0' },
    { channel: 'CTWA (WhatsApp)', alloc: '7%', spend: '5,000', leads: 8, cpql: '625' },
  ];

  const optimisedChannels = [
    { channel: 'Meta / Instagram', alloc: '25%', spend: '18,750', leads: 16, cpql: '1,172' },
    { channel: 'Google Search', alloc: '20%', spend: '15,000', leads: 6, cpql: '2,500' },
    { channel: 'Portals (PF / Bayut)', alloc: '30%', spend: '22,500', leads: 30, cpql: '750' },
    { channel: 'Referral System', alloc: '10%', spend: '7,500', leads: 28, cpql: '268' },
    { channel: 'CTWA (WhatsApp)', alloc: '15%', spend: '11,250', leads: 23, cpql: '489' },
  ];

  const aiImpact = [
    { metric: 'Lead response time', before: '917 minutes', after: '60 seconds' },
    { metric: 'Follow-up touches', before: '1.3 touches (avg)', after: '14 automated touches' },
    { metric: 'MQL → SQL rate', before: '13% (industry avg)', after: '32%+' },
    { metric: 'CPQL (Meta)', before: 'AED 1,200', after: 'AED 400–500' },
    { metric: 'CPQL (Google)', before: 'AED 2,400', after: 'AED 800–1,000' },
    { metric: 'CPQL (Portals)', before: 'AED 750', after: 'AED 267–350' },
    { metric: 'Blended CPQL', before: 'AED 1,027', after: 'AED 350–450 (56–66% lower)' },
  ];

  return (
    <Page>
      <Header left="CPL VS. CPQL REPORT" right="SECTIONS 10 & 11 — REALLOCATION & AI IMPACT" />

      <div style={{ marginTop: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span className="t-id" style={{ fontSize: 10 }}>CAPITAL REALLOCATION</span>
          <span className="rule-c" style={{ width: 24 }} />
        </div>
        <h2 className="serif" style={{ fontSize: 28, margin: '6px 0 8px', color: C.midnight, fontWeight: 400 }}>
          The Budget Shift: +41% Qualified Leads with Identical Ad Spend
        </h2>
        <p className="t-sup" style={{ fontSize: 12, color: C.slate, margin: '0 0 14px', maxWidth: 680, lineHeight: 1.4 }}>
          Reallocating an AED 75,000 monthly marketing budget from CPL volume to CPQL efficiency increases qualified leads from <b>73 to 103</b> while dropping blended CPQL from <b>AED 1,027 to AED 728</b>.
        </p>
      </div>

      {/* Two Comparative Tables: Current vs Optimised */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 14 }}>
        {/* Table 1: Current State */}
        <div>
          <div style={{ background: C.midnight, color: C.ivory, padding: '6px 10px', fontSize: 10.5, fontWeight: 600 }}>
            CURRENT STATE (CPL-OPTIMISED) · BLENDED: AED 1,027
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 10 }}>
            <thead>
              <tr style={{ background: C.paper, color: C.midnight, textAlign: 'left' }}>
                <th style={{ padding: '5px 6px' }}>Channel</th>
                <th style={{ padding: '5px 6px' }}>Alloc</th>
                <th style={{ padding: '5px 6px' }}>Spend</th>
                <th style={{ padding: '5px 6px' }}>Qual</th>
                <th style={{ padding: '5px 6px' }}>CPQL</th>
              </tr>
            </thead>
            <tbody>
              {currentChannels.map((c) => (
                <tr key={c.channel} style={{ borderBottom: `1px solid ${C.rule}` }}>
                  <td style={{ padding: '4px 6px', fontWeight: 600 }}>{c.channel}</td>
                  <td style={{ padding: '4px 6px' }}>{c.alloc}</td>
                  <td style={{ padding: '4px 6px' }}>AED {c.spend}</td>
                  <td style={{ padding: '4px 6px', fontWeight: 600 }}>{c.leads}</td>
                  <td style={{ padding: '4px 6px' }}>AED {c.cpql}</td>
                </tr>
              ))}
              <tr style={{ background: 'rgba(14,34,51,0.06)', fontWeight: 700 }}>
                <td style={{ padding: '5px 6px' }}>TOTAL</td>
                <td style={{ padding: '5px 6px' }}>100%</td>
                <td style={{ padding: '5px 6px' }}>AED 75,000</td>
                <td style={{ padding: '5px 6px', color: C.midnight }}>73 leads</td>
                <td style={{ padding: '5px 6px' }}>AED 1,027</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Table 2: Optimised State */}
        <div>
          <div style={{ background: C.copper, color: C.ivory, padding: '6px 10px', fontSize: 10.5, fontWeight: 600 }}>
            OPTIMISED STATE (CPQL-OPTIMISED) · BLENDED: AED 728
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 10 }}>
            <thead>
              <tr style={{ background: C.paper, color: C.midnight, textAlign: 'left' }}>
                <th style={{ padding: '5px 6px' }}>Channel</th>
                <th style={{ padding: '5px 6px' }}>Alloc</th>
                <th style={{ padding: '5px 6px' }}>Spend</th>
                <th style={{ padding: '5px 6px' }}>Qual</th>
                <th style={{ padding: '5px 6px' }}>CPQL</th>
              </tr>
            </thead>
            <tbody>
              {optimisedChannels.map((c) => (
                <tr key={c.channel} style={{ borderBottom: `1px solid ${C.rule}`, background: 'rgba(184,112,63,0.04)' }}>
                  <td style={{ padding: '4px 6px', fontWeight: 600 }}>{c.channel}</td>
                  <td style={{ padding: '4px 6px' }}>{c.alloc}</td>
                  <td style={{ padding: '4px 6px' }}>AED {c.spend}</td>
                  <td style={{ padding: '4px 6px', fontWeight: 700, color: C.copper }}>{c.leads}</td>
                  <td style={{ padding: '4px 6px', fontWeight: 600 }}>AED {c.cpql}</td>
                </tr>
              ))}
              <tr style={{ background: 'rgba(184,112,63,0.12)', fontWeight: 700 }}>
                <td style={{ padding: '5px 6px' }}>TOTAL</td>
                <td style={{ padding: '5px 6px' }}>100%</td>
                <td style={{ padding: '5px 6px' }}>AED 75,000</td>
                <td style={{ padding: '5px 6px', color: C.copper }}>103 (+41%)</td>
                <td style={{ padding: '5px 6px', color: C.copper }}>AED 728 (-29%)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* AI Transformation Impact Matrix */}
      <div style={{ marginTop: 'auto', marginBottom: 10 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
          <span className="t-id" style={{ fontSize: 9 }}>WHAT THE OWELEEN AI QUALIFICATION LAYER DOES TO CPQL</span>
          <span className="t-note" style={{ color: C.copper }}>Speed-to-lead &lt;60s · 14-touch cadence · BANT at scale</span>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 10 }}>
          <thead>
            <tr style={{ background: C.midnight, color: C.ivory, textAlign: 'left' }}>
              <th style={{ padding: '6px 8px', fontWeight: 500, width: '40%' }}>Transformation Metric</th>
              <th style={{ padding: '6px 8px', fontWeight: 500, width: '30%' }}>Before Oweleen</th>
              <th style={{ padding: '6px 8px', fontWeight: 500, width: '30%' }}>After Oweleen AI</th>
            </tr>
          </thead>
          <tbody>
            {aiImpact.map((a, i) => (
              <tr key={a.metric} style={{ borderBottom: `1px solid ${C.rule}`, background: i % 2 === 0 ? C.paper : 'transparent' }}>
                <td style={{ padding: '5px 8px', fontWeight: 600, color: C.midnight }}>{a.metric}</td>
                <td style={{ padding: '5px 8px', color: C.slate }}>{a.before}</td>
                <td style={{ padding: '5px 8px', fontWeight: 700, color: C.copper }}>{a.after}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Footer page="6 // STRATEGIC OUTLOOK" />
    </Page>
  );
}

/* B7 — GOVERNANCE & ACTION SCORECARD (The 14-Point CPQL Scorecard & Decision Summary) */
export function OutlookContactsGovernance() {
  const scorecardQuestions = [
    { q: '1. Do you track qualified leads separately from total leads?', pts: 'Never (0) · Sometimes (1) · Always (2)' },
    { q: '2. Do you calculate CPQL per channel monthly?', pts: 'Never (0) · Sometimes (1) · Always (2)' },
    { q: '3. Do you have a written, formal definition of "qualified lead" (BANT)?', pts: 'No (0) · Informal (1) · Formal BANT (2)' },
    { q: '4. Do you respond to inbound leads within 5 minutes (speed-to-lead)?', pts: 'Never (0) · Sometimes (1) · Always (2)' },
    { q: '5. Do you follow up more than 5 times per lead (cadence discipline)?', pts: 'Never (0) · Sometimes (1) · Always (2)' },
    { q: '6. Do you reallocate marketing budget based on CPQL data?', pts: 'Never (0) · Sometimes (1) · Always (2)' },
    { q: '7. Do you maintain an automated dead database reactivation process?', pts: 'No (0) · Quarterly manual (1) · Automated AI (2)' },
  ];

  return (
    <Page>
      <Header left="CPL VS. CPQL REPORT" right="SECTIONS 12 & 13 — SCORECARD & SUMMARY" />

      <div style={{ marginTop: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span className="t-id" style={{ fontSize: 10 }}>ORGANISATIONAL AUDIT</span>
          <span className="rule-c" style={{ width: 24 }} />
        </div>
        <h2 className="serif" style={{ fontSize: 28, margin: '6px 0 8px', color: C.midnight, fontWeight: 400 }}>
          The CPQL Scorecard: Establishing Your Maturity Position
        </h2>
        <p className="t-sup" style={{ fontSize: 12.5, color: C.slate, margin: '0 0 14px', maxWidth: 680, lineHeight: 1.45 }}>
          Use this 14-point audit to establish your brokerage's current position on the CPQL maturity curve: Blind (0–3), Aware (4–7), Managed (8–11), or Optimised (12–14).
        </p>
      </div>

      {/* Scorecard Questions Grid */}
      <div style={{ marginBottom: 16 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 10.5 }}>
          <thead>
            <tr style={{ background: C.midnight, color: C.ivory, textAlign: 'left' }}>
              <th style={{ padding: '6px 8px', fontWeight: 500, width: '68%' }}>Self-Assessment Audit Question</th>
              <th style={{ padding: '6px 8px', fontWeight: 500, width: '32%', textAlign: 'right' }}>Scoring Options</th>
            </tr>
          </thead>
          <tbody>
            {scorecardQuestions.map((s, i) => (
              <tr key={s.q} style={{ borderBottom: `1px solid ${C.rule}`, background: i % 2 === 0 ? C.paper : 'transparent' }}>
                <td style={{ padding: '5px 8px', fontWeight: 500, color: C.midnight }}>{s.q}</td>
                <td style={{ padding: '5px 8px', color: C.slate, textAlign: 'right' }}>{s.pts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Score Interpretation Tiers */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, marginBottom: 16 }}>
        <div style={{ background: C.paper, borderTop: `2px solid #D9534F`, padding: '10px 12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: '#D9534F' }}>0–3 PTS</span>
            <span className="t-meta" style={{ fontSize: 8 }}>STATUS</span>
          </div>
          <div style={{ fontSize: 13, fontWeight: 600, color: C.midnight, marginTop: 4 }}>CPQL Blind</div>
          <div className="t-note" style={{ color: C.slate, marginTop: 2 }}>Est. CPQL: AED 1,000–3,000+</div>
        </div>

        <div style={{ background: C.paper, borderTop: `2px solid #F0AD4E`, padding: '10px 12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: '#F0AD4E' }}>4–7 PTS</span>
            <span className="t-meta" style={{ fontSize: 8 }}>STATUS</span>
          </div>
          <div style={{ fontSize: 13, fontWeight: 600, color: C.midnight, marginTop: 4 }}>CPQL Aware</div>
          <div className="t-note" style={{ color: C.slate, marginTop: 2 }}>Est. CPQL: AED 700–1,000</div>
        </div>

        <div style={{ background: C.paper, borderTop: `2px solid ${C.midnight}`, padding: '10px 12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: C.midnight }}>8–11 PTS</span>
            <span className="t-meta" style={{ fontSize: 8 }}>STATUS</span>
          </div>
          <div style={{ fontSize: 13, fontWeight: 600, color: C.midnight, marginTop: 4 }}>CPQL Managed</div>
          <div className="t-note" style={{ color: C.slate, marginTop: 2 }}>Est. CPQL: AED 400–700</div>
        </div>

        <div style={{ background: C.paper, borderTop: `2px solid ${C.copper}`, padding: '10px 12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: C.copper }}>12–14 PTS</span>
            <span className="t-meta" style={{ fontSize: 8 }}>STATUS</span>
          </div>
          <div style={{ fontSize: 13, fontWeight: 600, color: C.midnight, marginTop: 4 }}>CPQL Optimised</div>
          <div className="t-note" style={{ color: C.copper, fontWeight: 600, marginTop: 2 }}>Est. CPQL: AED 200–400</div>
        </div>
      </div>

      {/* The One Line Takeaway Banner */}
      <div style={{ background: C.paper, padding: '14px 18px', borderLeft: `3px solid ${C.copper}`, marginBottom: 14 }}>
        <div className="t-meta" style={{ color: C.copper, fontSize: 8.5 }}>THE CORE EXECUTIVE RULE</div>
        <div className="serif" style={{ fontSize: 18, color: C.midnight, marginTop: 4, fontStyle: 'italic', lineHeight: 1.35 }}>
          “You have been optimising the cost of filling the pipe. Oweleen optimises the cost of what comes out of it.”
        </div>
      </div>

      {/* Footer Band with Approval Checkpoints */}
      <div style={{ marginTop: 'auto', background: C.midnight, color: C.ivory, padding: '16px 20px', marginBottom: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid rgba(255,255,255,0.15)`, paddingBottom: 10, marginBottom: 10 }}>
          <OweleenLogo variant="full" color="light" size={0.85} />
          <span className="t-meta" style={{ color: C.copperSoft }}>STRATEGIC OUTLOOK · COMPLETE INTELLIGENCE REPORT</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, fontSize: 9.5 }}>
          <div style={{ color: C.mist }}>EDITION: VOL 1.0 / RESEARCH COMPLETE</div>
          <div style={{ color: C.copperSoft }}>VALIDATED BY APPLIED INTELLIGENCE LEAD</div>
          <div style={{ color: C.ivory, textAlign: 'right' }}>STATUS: APPROVED FOR DISTRIBUTION</div>
        </div>
      </div>

      <Footer page="7 // STRATEGIC OUTLOOK" />
    </Page>
  );
}

/* =========================================================================
   SET C: WORKFLOW & DIAGRAMS (C1 — C3)
   Systems and Operational Process Flows
   ========================================================================= */

/* C1 — WORKFLOW OPERATING MAP (BANT Qualification & Routing Pipeline) */
export function WorkflowOperatingMap() {
  const stages = [
    { num: '01', title: 'Inbound Ingestion', role: 'Multi-Channel Acquisition', task: 'Meta ads, Google PPC, Property Finder, Bayut, and Webhooks captured instantaneously.' },
    { num: '02', title: '<60s AI Response', role: 'Velocity Gating', task: 'Instant WhatsApp API outreach before buyer moves to competing broker. 21× higher qualification.' },
    { num: '03', title: 'BANT Scoring (0–130)', role: 'Multi-Model Qualification', task: 'Budget, Authority, Need, Timeline & Intent evaluated using structured UAE real estate playbooks.' },
    { num: '04', title: 'Dynamic Tier Routing', role: 'Pipeline Optimization', task: 'HOT (80–130) → Instant broker phone call. WARM (50–79) → Automated nurture. COLD → 14-touch drip.' },
    { num: '05', title: 'Viewing & Deal Close', role: 'Human Broker Authority', task: 'Viewing scheduled with pre-qualified buyer. Lead-to-deal conversion increases from 1.5% to 10%.' },
  ];

  return (
    <Page>
      <Header left="WORKFLOW & DIAGRAMS" right="THE CONVERSION PIPELINE — BANT QUALIFICATION" />

      <div style={{ marginTop: 26 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span className="t-id" style={{ fontSize: 10 }}>OPERATING PIPELINE</span>
          <span className="rule-c" style={{ width: 24 }} />
        </div>
        <h2 className="serif" style={{ fontSize: 32, margin: '8px 0 10px', color: C.midnight, fontWeight: 400 }}>
          Lead Qualification & BANT Routing Architecture
        </h2>
        <p className="t-sup" style={{ fontSize: 13, color: C.slate, margin: '0 0 20px', maxWidth: 680, lineHeight: 1.45 }}>
          End-to-end conversion architecture transitioning inbound enquiries from raw acquisition to verified buyer appointments via multi-channel AI gating.
        </p>
      </div>

      {/* 5-Stage Process Flow Diagram */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 6 }}>
        {stages.map((s, idx) => (
          <div
            key={s.num}
            style={{
              background: C.paper,
              borderLeft: `3px solid ${idx === 2 ? C.copper : C.midnight}`,
              padding: '12px 16px',
              display: 'grid',
              gridTemplateColumns: '50px 180px 1fr auto',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <div className="serif" style={{ fontSize: 24, color: idx === 2 ? C.copper : C.midnight, fontWeight: 400 }}>
              {s.num}
            </div>
            <div>
              <div style={{ fontSize: 12.5, fontWeight: 600, color: C.midnight }}>{s.title}</div>
              <div className="t-meta" style={{ color: idx === 2 ? C.copper : C.slate, fontSize: 8 }}>{s.role}</div>
            </div>
            <div className="t-body" style={{ fontSize: 11, color: C.slate, lineHeight: 1.4 }}>
              {s.task}
            </div>
            <div style={{ fontSize: 14, color: idx === 2 ? C.copper : C.mist }}>
              {idx < 4 ? '↓' : '✓'}
            </div>
          </div>
        ))}
      </div>

      {/* Summary Band */}
      <div style={{ marginTop: 'auto', background: C.midnight, color: C.ivory, padding: '16px 20px', borderLeft: `3px solid ${C.copper}`, marginBottom: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div className="t-meta" style={{ color: C.copperSoft, fontSize: 8.5 }}>PIPELINE TRANSFORMATION</div>
            <div style={{ fontSize: 12, marginTop: 4 }}>
              Eliminating the 917-minute response delay lifts SQL-to-viewing conversion from <b>30% to 65%</b>.
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span className="serif" style={{ fontSize: 22, color: C.copperSoft }}>10%</span>
            <div className="t-note" style={{ color: C.mist }}>Top Performer Lead→Deal Rate</div>
          </div>
        </div>
      </div>

      <Footer page="1 // WORKFLOW & DIAGRAMS" />
    </Page>
  );
}

/* C2 — WORKFLOW TRANSFORMATION MAP (Channel Strategy Capital Reallocation) */
export function WorkflowTransformationMap() {
  return (
    <Page>
      <Header left="WORKFLOW & DIAGRAMS" right="BUDGET REALLOCATION — FROM CPL TO CPQL" />

      <div style={{ marginTop: 26 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span className="t-id" style={{ fontSize: 10 }}>CAPITAL ALLOCATION SHIFT</span>
          <span className="rule-c" style={{ width: 24 }} />
        </div>
        <h2 className="serif" style={{ fontSize: 32, margin: '8px 0 10px', color: C.midnight, fontWeight: 400 }}>
          Channel Capital Reallocation: From CPL Waste to CPQL Value
        </h2>
        <p className="t-sup" style={{ fontSize: 13, color: C.slate, margin: '0 0 20px', maxWidth: 680, lineHeight: 1.45 }}>
          Visualizing the structural capital transfer from inflated, low-conversion channels into high-velocity pipelines (Portals, CTWA, and Database Reactivation).
        </p>
      </div>

      {/* Reallocation Architecture Diagram */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 60px 1fr', gap: 14, alignItems: 'center', marginBottom: 20 }}>
        {/* Legacy Model Card */}
        <div style={{ background: C.paper, borderTop: `3px solid ${C.midnight}`, padding: '16px 18px' }}>
          <div className="t-meta" style={{ color: C.slate, fontSize: 8 }}>LEGACY CPL ALLOCATION (AED 75,000)</div>
          <div className="serif" style={{ fontSize: 20, color: C.midnight, margin: '6px 0 12px' }}>Volume-Centric Stack</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 11 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Meta / Instagram (40%)</span>
              <b>AED 30,000</b>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Google Search (33%)</span>
              <b>AED 25,000</b>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Portals (20%)</span>
              <b>AED 15,000</b>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>CTWA (7%)</span>
              <b>AED 5,000</b>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Referral Generation (0%)</span>
              <b>AED 0</b>
            </div>
          </div>
          <div style={{ marginTop: 14, borderTop: `1px solid ${C.rule}`, paddingTop: 10, display: 'flex', justifyContent: 'space-between' }}>
            <span className="t-note">Yield: 73 Qualified Leads</span>
            <span style={{ fontWeight: 700, color: C.midnight }}>CPQL: AED 1,027</span>
          </div>
        </div>

        {/* Transition Arrow */}
        <div style={{ textAlign: 'center' }}>
          <div className="serif" style={{ fontSize: 28, color: C.copper }}>➔</div>
          <div className="t-meta" style={{ fontSize: 7.5, color: C.copper, marginTop: 4 }}>OWELEEN ENGINE</div>
        </div>

        {/* Optimised Model Card */}
        <div style={{ background: C.paper, borderTop: `3px solid ${C.copper}`, padding: '16px 18px' }}>
          <div className="t-meta" style={{ color: C.copper, fontSize: 8 }}>OPTIMISED CPQL ALLOCATION (AED 75,000)</div>
          <div className="serif" style={{ fontSize: 20, color: C.midnight, margin: '6px 0 12px' }}>Revenue-Centric Stack</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 11 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Portals (PF / Bayut) (30%)</span>
              <b style={{ color: C.copper }}>AED 22,500</b>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Meta / Instagram (25%)</span>
              <b>AED 18,750</b>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Google Search (20%)</span>
              <b>AED 15,000</b>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>CTWA (WhatsApp) (15%)</span>
              <b style={{ color: C.copper }}>AED 11,250</b>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Referral & Dead DB (10%)</span>
              <b style={{ color: C.copper }}>AED 7,500</b>
            </div>
          </div>
          <div style={{ marginTop: 14, borderTop: `1px solid ${C.rule}`, paddingTop: 10, display: 'flex', justifyContent: 'space-between' }}>
            <span className="t-note" style={{ color: C.copper, fontWeight: 600 }}>Yield: 103 (+41% More)</span>
            <span style={{ fontWeight: 700, color: C.copper }}>CPQL: AED 728</span>
          </div>
        </div>
      </div>

      {/* Strategic Outcome Note */}
      <div style={{ marginTop: 'auto', background: C.midnight, color: C.ivory, padding: '16px 20px', borderLeft: `3px solid ${C.copper}`, marginBottom: 12 }}>
        <div className="t-meta" style={{ color: C.copperSoft, fontSize: 8.5 }}>CAPITAL EFFICIENCY PRINCIPLE</div>
        <div style={{ fontSize: 12, marginTop: 4, lineHeight: 1.5 }}>
          The total ad spend is identical (AED 75,000). By reallocating budget toward channels with higher qualification multipliers and lower CPQL, the brokerage produces <b>30 additional qualified buyers every single month</b>.
        </div>
      </div>

      <Footer page="2 // WORKFLOW & DIAGRAMS" />
    </Page>
  );
}

/* C3 — INTELLIGENCE ARCHITECTURE (Multi-Model AI Qualification & Decision Flow) */
export function WorkflowIntelligenceArchitecture() {
  return (
    <Page dark>
      <Header left="CPL VS. CPQL REPORT" right="SECTION 11 — SYSTEMS ARCHITECTURE" />

      <div style={{ marginTop: 26 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span className="t-id" style={{ fontSize: 10, color: C.copper, letterSpacing: '.24em' }}>
            SYSTEMS ARCHITECTURE
          </span>
          <span className="rule-c" style={{ width: 24 }} />
        </div>
        <h2 className="serif" style={{ fontSize: 32, margin: '8px 0 10px', color: C.ivory, fontWeight: 400 }}>
          Multi-Model AI Qualification Architecture
        </h2>
        <p className="t-sup" style={{ fontSize: 13, color: C.copperSoft, margin: '0 0 24px', maxWidth: 680, lineHeight: 1.45 }}>
          Technical architecture connecting omnichannel lead webhooks, multi-model conversational LLMs, dynamic 0–130 scoring, and human broker authority termination.
        </p>
      </div>

      {/* 3-Column Dark Architecture Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 20 }}>
        {/* Layer 1 */}
        <div style={{ background: '#131D26', border: `1px solid rgba(255,255,255,0.12)`, padding: '18px 16px' }}>
          <div className="t-meta" style={{ color: C.copper, fontSize: 8.5 }}>LAYER 01 · INGESTION & SPEED</div>
          <div className="serif" style={{ fontSize: 18, color: C.ivory, margin: '6px 0 10px' }}>
            Omnichannel Webhooks
          </div>
          <ul style={{ margin: '0 0 10px 16px', padding: 0, fontSize: 11, color: C.mist, lineHeight: 1.6 }}>
            <li>Meta Ads Instant Forms & Lead Ads</li>
            <li>Property Finder & Bayut Webhooks</li>
            <li>Google Ads & High-Intent Landing Pages</li>
            <li>Click-to-WhatsApp API Direct Session</li>
            <li><b>&lt;60s Speed-to-Lead Gateway</b></li>
            <li><b>24/7 Coverage (Captures 8pm–2am gap)</b></li>
          </ul>
        </div>

        {/* Layer 2 */}
        <div style={{ background: '#131D26', border: `1px solid ${C.copper}`, padding: '18px 16px' }}>
          <div className="t-meta" style={{ color: C.copperSoft, fontSize: 8.5 }}>LAYER 02 · EVALUATION CORE</div>
          <div className="serif" style={{ fontSize: 18, color: C.ivory, margin: '6px 0 10px' }}>
            Multi-Model AI Scoring
          </div>
          <ul style={{ margin: '0 0 10px 16px', padding: 0, fontSize: 11, color: C.mist, lineHeight: 1.6 }}>
            <li>Conversational BANT Qualification</li>
            <li>6 Regional Nationality Playbooks</li>
            <li>Dynamic 0–130 Scoring Engine</li>
            <li>HOT / WARM / COLD Tier Segmentation</li>
            <li>Automated 14-Touch Cadence Engine</li>
            <li>Dead Database Quarterly Reactivation</li>
          </ul>
        </div>

        {/* Layer 3 */}
        <div style={{ background: '#131D26', border: `1px solid rgba(255,255,255,0.12)`, padding: '18px 16px' }}>
          <div className="t-meta" style={{ color: C.copper, fontSize: 8.5 }}>LAYER 03 · EXECUTION & HANDOFF</div>
          <div className="serif" style={{ fontSize: 18, color: C.ivory, margin: '6px 0 10px' }}>
            Human Broker Authority
          </div>
          <ul style={{ margin: '0 0 10px 16px', padding: 0, fontSize: 11, color: C.mist, lineHeight: 1.6 }}>
            <li>Calendar Integration & Auto-Booking</li>
            <li>PropSpace / HubSpot CRM Sync</li>
            <li>Real-Time WhatsApp Broker Alert</li>
            <li>Pre-Viewing Qualification Dossier</li>
            <li>Offer Gate & Compliance Verification</li>
            <li><b>Authority Terminates with Human Broker</b></li>
          </ul>
        </div>
      </div>

      {/* Bottom Process Flow Strip */}
      <div style={{ marginTop: 'auto', background: 'rgba(0,0,0,0.4)', borderTop: `1px solid rgba(255,255,255,0.1)`, padding: '14px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <span className="t-meta" style={{ color: C.copperSoft, fontSize: 8.5 }}>
          WORK MOVES: FROM INBOUND LEAD → TO AI QUALIFICATION (&lt;60S) → TO HUMAN BROKER DECISION
        </span>
        <span className="t-note" style={{ color: C.mist }}>Final advisory and negotiation authority remains with the broker</span>
      </div>

      <Footer page="3 // CPL VS. CPQL REPORT" light />
    </Page>
  );
}
