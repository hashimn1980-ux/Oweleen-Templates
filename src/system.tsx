import type { ReactNode, CSSProperties } from 'react';

export const C = {
  ivory: '#F4F1EB', paper: '#EDE9E1', stone: '#E6E1D7', midnight: '#0E2233', ink: '#1C3244',
  slate: '#5A7385', mist: '#8C9BA6', rule: '#C9CFD3', copper: '#B8703F', copperSoft: '#D9A882',
};

/* ---------- ICON SYSTEM: 24px grid, 1.4 stroke, round caps, monoline ---------- */
const paths: Record<string, ReactNode> = {
  search: <><circle cx="10.5" cy="10.5" r="6" /><path d="M15 15l5 5" /></>,
  doc: <><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v4h4M9 12h6M9 15h6M9 18h4" /></>,
  home: <><path d="M4 11l8-7 8 7" /><path d="M6 10v10h12V10M10 20v-5h4v5" /></>,
  shield: <><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" /><path d="M9 12l2 2 4-4" /></>,
  calendar: <><rect x="4" y="5" width="16" height="15" /><path d="M4 9h16M8 3v4M16 3v4" /></>,
  gear: <><circle cx="12" cy="12" r="3" /><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" /></>,
  chat: <><path d="M4 5h16v11H9l-5 4z" /><path d="M8 9h8M8 12h5" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21c1-4.5 4.5-7 8-7s7 2.5 8 7" /></>,
  users: <><circle cx="9" cy="8" r="3.2" /><circle cx="17" cy="9" r="2.5" /><path d="M3 20c.6-3.8 3-6 6-6s5.4 2.2 6 6M15 14.5c2.8 0 5 1.8 5.6 5" /></>,
  chart: <><path d="M4 20h16" /><path d="M7 17v-4M11 17V9M15 17v-6M19 17V5" /></>,
  target: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r=".6" /></>,
  layers: <><path d="M12 3l9 5-9 5-9-5z" /><path d="M3 12l9 5 9-5M3 16l9 5 9-5" /></>,
  cycle: <><path d="M20 12a8 8 0 0 1-14 5.3M4 12a8 8 0 0 1 14-5.3" /><path d="M18 3v4h-4M6 21v-4h4" /></>,
  signal: <><path d="M4 18l5-5 4 3 7-8" /><path d="M15 8h5v5" /></>,
  key: <><circle cx="8" cy="15" r="4" /><path d="M11 12l9-9M16 7l3 3M14 9l2 2" /></>,
  compass: <><circle cx="12" cy="12" r="9" /><path d="M15.5 8.5l-2 5-5 2 2-5z" /></>,
  node: <><circle cx="12" cy="12" r="3" /><circle cx="4" cy="5" r="1.6" /><circle cx="20" cy="5" r="1.6" /><circle cx="4" cy="19" r="1.6" /><circle cx="20" cy="19" r="1.6" /><path d="M5.3 6.2l4.4 3.8M18.7 6.2l-4.4 3.8M5.3 17.8l4.4-3.8M18.7 17.8l-4.4-3.8" /></>,
  flag: <><path d="M5 21V4M5 4h12l-2 4 2 4H5" /></>,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  mail: <><rect x="3" y="5" width="18" height="14" /><path d="M3 6l9 7 9-7" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18" /></>,
  building: <><path d="M5 21V4h9v17M14 9h5v12M3 21h18" /><path d="M8 7h3M8 11h3M8 15h3M16 13h1M16 17h1" /></>,
};

export function Icon({ name, size = 20, color = C.midnight, sw = 1.4 }: { name: string; size?: number; color?: string; sw?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
}
export const iconNames = Object.keys(paths);

/* Icon in a hairline circle — the standard Oweleen icon container */
export function IconRing({ name, size = 44, dark = false }: { name: string; size?: number; dark?: boolean }) {
  return (
    <div style={{ width: size, height: size, borderRadius: '50%', border: `1px solid ${dark ? C.midnight : C.rule}`, background: dark ? C.midnight : 'transparent', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
      <Icon name={name} size={size * 0.45} color={dark ? C.ivory : C.midnight} />
    </div>
  );
}

/* ---------- LOGO & BRAND ASSETS ---------- */
export { default as OweleenLogo, OweleenSymbol, OweleenWordmark } from './OweleenLogo';
import OweleenLogo, { OweleenSymbol } from './OweleenLogo';

export function Logo({ light = false, size = 1 }: { light?: boolean; size?: number }) {
  return <OweleenLogo variant="full" color={light ? 'light' : 'dark'} size={size} />;
}

/* ---------- RUNNING HEADER / FOOTER ---------- */
export function Header({ left = 'Strategic Outlook', right }: { left?: string; right: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
      <span className="t-meta" style={{ color: C.ink }}>{left}</span>
      <div className="rule" style={{ flex: 1, background: C.slate, opacity: .5 }} />
      <span className="t-meta" style={{ color: C.ink }}>{right}</span>
    </div>
  );
}
export function Footer({ page, light = false }: { page: string; light?: boolean }) {
  const col = light ? C.ivory : C.ink;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 'auto' }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}>
        <OweleenSymbol size={12} color={col} />
        <span
          style={{
            letterSpacing: '0.35em',
            fontWeight: 500,
            textTransform: 'uppercase',
            color: col,
            fontSize: 9.5,
            fontFamily: 'Figtree, -apple-system, sans-serif',
          }}
        >
          OWELEEN
        </span>
      </div>
      <div className="rule" style={{ flex: 1, background: light ? C.ivory : C.slate, opacity: .4 }} />
      <span className="t-meta" style={{ color: light ? C.ivory : C.slate, fontSize: 8 }}>Illustrative Edition / Vol 1.0</span>
      <span className="t-meta" style={{ color: col, fontWeight: 600, marginLeft: 16 }}>{page}</span>
    </div>
  );
}

/* ---------- TITLE BLOCK: identifier → headline → supporting | copper vrule | intro ---------- */
export function TitleBlock({ id, title, sub, intro, size = 60 }: { id: string; title: ReactNode; sub?: string; intro?: ReactNode; size?: number }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: intro ? '1.25fr 1px 1fr' : '1fr', gap: 36, marginTop: 36 }}>
      <div>
        <SectionMark id={id} />
        <h1 className="t-h1" style={{ fontSize: size, margin: '14px 0 14px' }}>{title}</h1>
        {sub && <p className="t-sup" style={{ margin: 0 }}>{sub}</p>}
      </div>
      {intro && <div className="vrule" />}
      {intro && <div className="t-body" style={{ fontSize: 13.5, alignSelf: 'center', color: C.ink }}>{intro}</div>}
    </div>
  );
}
export function SectionMark({ id }: { id: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <span className="t-id" style={{ fontSize: 12 }}>{id}</span>
      <span className="rule-c" />
    </div>
  );
}

export function Kicker({ top, title, children }: { top: string; title?: string; children?: ReactNode }) {
  return (
    <div>
      <div className="rule-c" style={{ marginBottom: 10 }} />
      <div className="t-id" style={{ fontSize: 10 }}>{top}</div>
      {title && <div className="t-h4" style={{ marginTop: 6 }}>{title}</div>}
      {children && <div className="t-body" style={{ marginTop: 6, color: C.slate, fontSize: 11.5 }}>{children}</div>}
    </div>
  );
}

export function Panel({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return <div style={{ background: C.paper, padding: '26px 28px', ...style }}>{children}</div>;
}

/* Photo band with slanted midnight panel — signature reference element */
export function ImageBand({ src, lines, h = 150 }: { src: string; lines: string[]; h?: number }) {
  return (
    <div style={{ position: 'relative', height: h, background: C.midnight, overflow: 'hidden' }}>
      <img src={src} style={{ position: 'absolute', inset: 0, width: '62%', height: '100%', objectFit: 'cover', filter: 'saturate(.7)' }} />
      <svg style={{ position: 'absolute', left: '52%', top: 0, height: '100%' }} width="90" viewBox="0 0 90 100" preserveAspectRatio="none">
        <polygon points="90,0 90,100 0,100 60,0" fill={C.midnight} />
        <line x1="60" y1="0" x2="0" y2="100" stroke={C.copper} strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
      </svg>
      <div style={{ position: 'absolute', left: '66%', top: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className="rule-c" style={{ width: 40, marginBottom: 14 }} />
        {lines.map(l => <div key={l} className="t-meta" style={{ color: C.ivory, fontSize: 9.5, lineHeight: 2.1 }}>{l}</div>)}
      </div>
    </div>
  );
}

export function Page({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return <div className="page" style={dark ? { background: C.midnight, color: C.ivory } : undefined}>{children}</div>;
}
