import type { CSSProperties } from 'react';
import { C } from './system';

export type LogoVariant = 'full' | 'symbol' | 'wordmark' | 'stacked';
export type LogoColor = 'light' | 'dark' | 'copper' | string;

export interface OweleenLogoProps {
  variant?: LogoVariant;
  color?: LogoColor;
  size?: number;
  symbolSize?: number;
  className?: string;
  style?: CSSProperties;
  title?: string;
}

export function resolveLogoColor(color: LogoColor = 'dark'): string {
  if (color === 'light') return C.ivory;
  if (color === 'dark') return C.midnight;
  if (color === 'copper') return C.copper;
  return color;
}

/**
 * Authentic Oweleen Brandmark Symbol: Facing Twin Crescents ( )
 */
export function OweleenSymbol({
  size = 24,
  color = 'dark',
  className = '',
  style = {},
  title = 'Oweleen Brandmark',
}: {
  size?: number;
  color?: LogoColor;
  className?: string;
  style?: CSSProperties;
  title?: string;
}) {
  const fillColor = resolveLogoColor(color);
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill={fillColor}
      className={`oweleen-brand-symbol ${className}`.trim()}
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0, ...style }}
      aria-label={title}
      role="img"
    >
      <title>{title}</title>
      <g className="crescent-pair">
        {/* Left Crescent */}
        <path d="M 44 9 C 23.5 10, 11 27.5, 11 50 C 11 72.5, 23.5 90, 44 91 C 32.5 76, 27.5 64, 27.5 50 C 27.5 36, 32.5 24, 44 9 Z" />
        {/* Right Crescent */}
        <path d="M 56 9 C 76.5 10, 89 27.5, 89 50 C 89 72.5, 76.5 90, 56 91 C 67.5 76, 72.5 64, 72.5 50 C 72.5 36, 67.5 24, 56 9 Z" />
      </g>
    </svg>
  );
}

/**
 * Authentic Oweleen Wordmark: Wide-Spaced Geometric Sans-Serif
 */
export function OweleenWordmark({
  size = 14,
  color = 'dark',
  className = '',
  style = {},
}: {
  size?: number;
  color?: LogoColor;
  className?: string;
  style?: CSSProperties;
}) {
  const textColor = resolveLogoColor(color);
  return (
    <span
      className={`oweleen-brand-wordmark ${className}`.trim()}
      style={{
        display: 'inline-block',
        fontFamily: 'Figtree, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontSize: size,
        fontWeight: 500,
        letterSpacing: '0.35em',
        textTransform: 'uppercase',
        color: textColor,
        lineHeight: 1,
        userSelect: 'none',
        ...style,
      }}
    >
      OWELEEN
    </span>
  );
}

/**
 * Unified Oweleen Brand Component
 * Variants:
 *  - 'full': Horizontal lockup of twin crescent symbol + wide-spaced OWELEEN wordmark
 *  - 'symbol': Standalone twin crescent symbol ( )
 *  - 'wordmark': Standalone wide-spaced OWELEEN wordmark
 *  - 'stacked': Twin crescent symbol centered above the wordmark
 */
export default function OweleenLogo({
  variant = 'full',
  color = 'dark',
  size = 1,
  symbolSize,
  className = '',
  style = {},
  title,
}: OweleenLogoProps) {
  const resolvedColor = resolveLogoColor(color);

  if (variant === 'symbol') {
    const symDim = symbolSize ?? 26 * size;
    return (
      <OweleenSymbol
        size={symDim}
        color={resolvedColor}
        className={className}
        style={style}
        title={title || 'Oweleen Symbol'}
      />
    );
  }

  if (variant === 'wordmark') {
    return (
      <OweleenWordmark
        size={13 * size}
        color={resolvedColor}
        className={className}
        style={style}
      />
    );
  }

  if (variant === 'stacked') {
    const symDim = symbolSize ?? 42 * size;
    return (
      <div
        className={`oweleen-logo-stacked flex flex-col items-center gap-2 ${className}`.trim()}
        style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 10 * size, ...style }}
      >
        <OweleenSymbol size={symDim} color={resolvedColor} title={title || 'Oweleen'} />
        <OweleenWordmark size={12 * size} color={resolvedColor} />
      </div>
    );
  }

  // Default: variant === 'full' (horizontal lockup)
  const symDim = symbolSize ?? 22 * size;
  return (
    <div
      className={`oweleen-logo-lockup flex items-center ${className}`.trim()}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 12 * size,
        ...style,
      }}
      title={title || 'Oweleen'}
    >
      <OweleenSymbol size={symDim} color={resolvedColor} />
      <OweleenWordmark size={13 * size} color={resolvedColor} />
    </div>
  );
}
