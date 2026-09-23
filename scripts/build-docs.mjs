import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';
import {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, BorderStyle, ShadingType,
  ImageRun, Header, Footer, PageNumber, TabStopType, AlignmentType, TableLayoutType, HeightRule, VerticalAlign, Tab, CharacterSet,
} from 'docx';
import PDFDocument from 'pdfkit';
import { templates, B } from './content.mjs';
import { guide } from './guide.mjs';

const __dir = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dir, '..');
const OUT = path.join(ROOT, 'public/downloads');
const IMG = path.join(ROOT, 'public/images');
const FONTS = path.join(__dir, 'fonts');
fs.rmSync(OUT, { recursive: true, force: true }); fs.mkdirSync(OUT, { recursive: true });

/* ---------- Brand tokens ---------- */
const K = { ivory: 'F4F1EB', paper: 'EDE9E1', midnight: '0E2233', ink: '1C3244', slate: '5A7385', mist: '6F7F8A', rule: 'C9CFD3', copper: 'B8703F', copperSoft: 'D9A882', instr: 'EEF1F3', ph: 'F2E6D8' };
const SANS = 'Figtree', SERIF = 'Newsreader';

/* ---------- Placeholder image (solid stone PNG) ---------- */
function png(w, h, [r, g, b]) {
  const row = Buffer.alloc(1 + w * 3); for (let x = 0; x < w; x++) row.set([r, g, b], 1 + x * 3);
  const raw = Buffer.concat(Array(h).fill(row));
  const chunk = (t, d) => { const l = Buffer.alloc(4); l.writeUInt32BE(d.length); const td = Buffer.concat([Buffer.from(t), d]); const c = Buffer.alloc(4); c.writeUInt32BE(zlib.crc32(td) >>> 0); return Buffer.concat([l, td, c]); };
  const ih = Buffer.alloc(13); ih.writeUInt32BE(w, 0); ih.writeUInt32BE(h, 4); ih[8] = 8; ih[9] = 2;
  return Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk('IHDR', ih), chunk('IDAT', zlib.deflateSync(raw)), chunk('IEND', Buffer.alloc(0))]);
}
fs.writeFileSync(path.join(IMG, 'placeholder.png'), png(400, 300, [0xE0, 0xDB, 0xD1]));
const DOCIMG = { 'skyline.jpg': path.join(__dir, 'skyline-doc.jpg'), 'facade.jpg': path.join(__dir, 'facade-doc.jpg') };
const imgPath = f => DOCIMG[f] || path.join(IMG, f);
const imgBuf = f => fs.readFileSync(imgPath(f));

/* =====================================================================
   DOCX RENDERER
   ===================================================================== */
const PAGE = { w: 11906, h: 16838, side: 900, top: 1100, bottom: 1000 };
const CW = PAGE.w - PAGE.side * 2; // content width (twips)
const none = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' };
const line = (color = K.rule, size = 4) => ({ style: BorderStyle.SINGLE, size, color });

const pStyle = (id, name, run, paragraph = {}, basedOn = 'Normal') => ({ id, name, basedOn, next: 'Normal', quickFormat: true, run, paragraph });
const styles = {
  default: { document: { run: { font: SANS, size: 20, color: K.ink }, paragraph: { spacing: { after: 120, line: 336 } } } },
  characterStyles: [{ id: 'OWPlaceholder', name: 'OW Placeholder (replace me)', run: { shading: { type: ShadingType.CLEAR, fill: K.ph, color: 'auto' }, color: K.midnight } }],
  paragraphStyles: [
    pStyle('Title', 'Title', { font: SERIF, size: 104, color: K.midnight }, { spacing: { after: 240, line: 230 } }),
    pStyle('Heading1', 'Heading 1', { font: SERIF, size: 72, color: K.midnight }, { spacing: { before: 0, after: 160, line: 250 }, keepNext: true, outlineLevel: 0 }),
    pStyle('Heading2', 'Heading 2', { font: SANS, size: 17, bold: true, allCaps: true, characterSpacing: 36, color: K.midnight }, { spacing: { before: 280, after: 100 }, keepNext: true, outlineLevel: 1 }),
    pStyle('Subtitle', 'Subtitle', { font: SANS, size: 27, color: K.slate }, { spacing: { after: 200, line: 320 } }),
    pStyle('OWIdentifier', 'OW Section Identifier', { font: SANS, size: 18, allCaps: true, characterSpacing: 40, color: K.copper }, { spacing: { after: 100 }, keepNext: true }),
    pStyle('OWTitleSmall', 'OW Title Small', { font: SERIF, size: 34, color: K.midnight }, { spacing: { after: 40, line: 260 }, keepNext: true }),
    pStyle('OWSubhead', 'OW Subhead', { font: SANS, size: 16, bold: true, allCaps: true, characterSpacing: 30, color: K.midnight }, { spacing: { after: 60 }, keepNext: true }),
    pStyle('OWQuote', 'OW Pull Quote', { font: SERIF, size: 38, color: K.midnight }, { spacing: { after: 160, line: 276 } }),
    pStyle('OWLabel', 'OW Label', { font: SANS, size: 14, allCaps: true, characterSpacing: 30, color: K.slate }, { spacing: { after: 40 } }),
    pStyle('OWNote', 'OW Source Note', { font: SANS, size: 14, color: K.mist }, { spacing: { before: 120, after: 60 } }),
    pStyle('OWNumber', 'OW Stage Number', { font: SERIF, size: 48, color: K.copper }, { spacing: { after: 60 }, keepNext: true }),
    pStyle('OWKPI', 'OW KPI Number', { font: SERIF, size: 48, color: K.midnight }, { spacing: { after: 0, line: 240 } }),
    pStyle('OWKPISmall', 'OW KPI Small', { font: SERIF, size: 30, color: K.midnight }, { spacing: { after: 0 } }),
    pStyle('OWHero', 'OW Hero Number', { font: SERIF, size: 150, color: K.midnight }, { spacing: { after: 60, line: 240 } }),
    pStyle('OWLogo', 'OW Logo Wordmark', { font: SANS, size: 24, bold: false, characterSpacing: 120, color: K.midnight }, { spacing: { after: 120 } }),
    pStyle('OWRunning', 'OW Running Header-Footer', { font: SANS, size: 13, allCaps: true, characterSpacing: 36, color: K.ink }, { spacing: { after: 0 } }),
    pStyle('OWInstruction', 'OW Instruction (delete before publishing)', { font: SANS, size: 16, italics: true, color: K.slate },
      { spacing: { before: 0, after: 240 }, shading: { type: ShadingType.CLEAR, fill: K.instr, color: 'auto' }, border: { top: { style: BorderStyle.DASHED, size: 6, color: K.mist, space: 4 }, bottom: { style: BorderStyle.DASHED, size: 6, color: K.mist, space: 4 }, left: { style: BorderStyle.DASHED, size: 6, color: K.mist, space: 4 }, right: { style: BorderStyle.DASHED, size: 6, color: K.mist, space: 4 } } }),
    pStyle('OWBullet', 'OW Bullet', { font: SANS, size: 20 }, { spacing: { after: 80 } }),
  ],
};
const styleOf = { id: 'OWIdentifier', display: 'Title', h1: 'Heading1', h2: 'Heading2', sup: 'Subtitle', p: undefined, note: 'OWNote', quote: 'OWQuote', label: 'OWLabel', num: 'OWNumber', kpi: 'OWKPI', kpiS: 'OWKPISmall', hero: 'OWHero', h1s: 'OWTitleSmall', h2t: 'OWSubhead', logo: 'OWLogo' };
const darkColor = { id: K.copperSoft, label: K.copperSoft, sup: K.copperSoft, num: K.copper, note: K.rule };

function runs(text, ctx, type) {
  const color = ctx.dark ? (darkColor[type] || K.ivory) : undefined;
  const out = [];
  String(text).split('\n').forEach((ln, li) => {
    ln.split(/(\[[^\]]+\])/g).filter(s => s !== '').forEach((s, si) => {
      const isPh = /^\[.*\]$/.test(s);
      out.push(new TextRun({ text: s, style: isPh ? 'OWPlaceholder' : undefined, color, break: li > 0 && si === 0 ? 1 : undefined }));
    });
  });
  return out.length ? out : [new TextRun('')];
}

function dBlocks(blocks, ctx) { return blocks.flatMap(b => dBlock(b, ctx)); }
function dBlock(b, ctx) {
  const center = ctx.center ? AlignmentType.CENTER : undefined;
  switch (b.type) {
    case 'space': return [new Paragraph({ spacing: { before: 0, after: 0, line: Math.max(20, b.pt * 20), lineRule: 'exact' }, children: [] })];
    case 'rule': return [new Paragraph({ border: { bottom: line() }, spacing: { after: 200 }, children: [] })];
    case 'logo': return [new Paragraph({ style: 'OWLogo', children: [new TextRun({ text: '◎  ', color: K.copper }), new TextRun({ text: 'OWELEEN', color: ctx.dark ? K.ivory : undefined })] })];
    case 'instr': return [new Paragraph({ style: 'OWInstruction', children: [new TextRun({ text: 'INSTRUCTION — DELETE BEFORE PUBLISHING:  ', bold: true, italics: false }), new TextRun(b.t)] })];
    case 'bullets': return b.items.map(t => new Paragraph({ style: 'OWBullet', bullet: { level: 0 }, children: runs(t, ctx, 'p') }));
    case 'image': {
      const w = Math.round(ctx.width / 15), h = Math.round(w * b.ratio); // twips → px @96dpi
      const out = [new Paragraph({ spacing: { after: 60 }, children: [new ImageRun({ type: b.file.endsWith('.png') ? 'png' : 'jpg', data: imgBuf(b.file), transformation: { width: w, height: h }, altText: { title: 'Replaceable image', description: 'Right-click → Change Picture to replace', name: 'OW Image' } })] })];
      if (b.caption) out.push(new Paragraph({ style: 'OWNote', spacing: { before: 0, after: 120 }, children: runs(b.caption, ctx, 'note') }));
      return out;
    }
    case 'panel': {
      const pad = 360;
      return [new Table({
        width: { size: ctx.width, type: WidthType.DXA }, columnWidths: [ctx.width], layout: TableLayoutType.FIXED,
        borders: { top: none, bottom: none, left: none, right: none, insideHorizontal: none, insideVertical: none },
        rows: [new TableRow({ height: b.minH ? { value: b.minH * 20, rule: HeightRule.ATLEAST } : undefined, children: [new TableCell({
          shading: { type: ShadingType.CLEAR, fill: b.dark ? K.midnight : K.paper, color: 'auto' },
          borders: b.border ? { top: line(K.copper, 8), bottom: line(K.copper, 8), left: line(K.copper, 8), right: line(K.copper, 8) } : { top: none, bottom: none, left: none, right: none },
          margins: { top: pad, bottom: pad, left: pad, right: pad }, verticalAlign: VerticalAlign.CENTER,
          children: dBlocks(b.children, { ...ctx, dark: !!b.dark, center: !!b.center, width: ctx.width - pad * 2 }),
        })] })],
      }), new Paragraph({ spacing: { after: 120 }, children: [] })];
    }
    case 'table': return [dTable(b, ctx), new Paragraph({ spacing: { after: 80 }, children: [] })];
    default: {
      const style = styleOf[b.type];
      return [new Paragraph({ style, alignment: center, children: runs(b.t, ctx, b.type) })];
    }
  }
}

function dTable(b, ctx) {
  const sum = b.widths.reduce((a, c) => a + c, 0);
  const tw = b.widths.map(f => Math.round(ctx.width * f / sum));
  const st = b.style || 'rules';
  const rows = [];
  const mk = (cells, ri, isHead) => new TableRow({
    cantSplit: true, tableHeader: isHead,
    children: cells.map((cell, ci) => {
      const first = ci === 0;
      const padL = first && st !== 'grid' ? 0 : 220, padR = 220;
      const vr = (b.vrule && ci > 0) || (st === 'timeline' && ci === 1);
      const top = isHead ? line(K.midnight, 8) : st === 'process' && ri === 0 ? line(K.copper, 8) : st === 'grid' ? line(K.rule) : st === 'rules' && ri === 0 ? line(K.rule) : none;
      const bottom = isHead ? line(K.midnight, 4) : (st === 'rules' || st === 'data' || st === 'grid') ? line(K.rule) : none;
      const blocks = isHead ? [B.label(cell)] : cell;
      return new TableCell({
        width: { size: tw[ci], type: WidthType.DXA },
        borders: { top, bottom, left: vr ? line(K.copper, 6) : st === 'grid' && !first ? line(K.rule) : none, right: none },
        margins: { top: st === 'process' ? 200 : 160, bottom: 140, left: vr ? 300 : padL, right: padR },
        children: dBlocks(blocks, { ...ctx, width: tw[ci] - padL - padR - (vr ? 300 : 0) }),
      });
    }),
  });
  if (b.head) rows.push(mk(b.head, -1, true));
  b.rows.forEach((r, ri) => rows.push(mk(r, ri, false)));
  return new Table({ width: { size: ctx.width, type: WidthType.DXA }, columnWidths: tw, layout: TableLayoutType.FIXED, borders: { top: none, bottom: none, left: none, right: none, insideHorizontal: none, insideVertical: none }, rows });
}

function runningHeader(left, right) {
  return new Header({ children: [new Paragraph({ style: 'OWRunning', tabStops: [{ type: TabStopType.RIGHT, position: CW }], border: { bottom: line(K.slate, 4) }, children: [...runs(left, {}, 'p'), new TextRun({ children: [new Tab()] }), ...runs(right, {}, 'p')] })] });
}
function runningFooter(edition) {
  return new Footer({ children: [new Paragraph({ style: 'OWRunning', tabStops: [{ type: TabStopType.RIGHT, position: CW }], border: { top: line(K.slate, 4) }, spacing: { before: 0 }, children: [new TextRun('Oweleen'), new TextRun({ children: [new Tab()] }), ...runs(edition + '     ', {}, 'p'), new TextRun({ children: [PageNumber.CURRENT], bold: true })] })] });
}

function sectionFor(t, mode) {
  const X = mode === 'example';
  const pub = X ? 'Strategic Outlook' : '[PUBLICATION NAME]';
  const ed = X ? 'Illustrative Edition / Vol 1.0' : '[EDITION / VOL]';
  return {
    properties: { page: { size: { width: PAGE.w, height: PAGE.h }, margin: { top: PAGE.top, bottom: PAGE.bottom, left: PAGE.side, right: PAGE.side, header: 560, footer: 500 } } },
    headers: { default: t.cover ? new Header({ children: [new Paragraph('')] }) : runningHeader(pub, t.header) },
    footers: { default: t.cover ? new Footer({ children: [new Paragraph('')] }) : runningFooter(ed) },
    children: dBlocks(t.blocks, { width: CW }),
  };
}

const fontsEmbed = [
  { name: SANS, data: fs.readFileSync(path.join(FONTS, 'figtree-400-normal.ttf')), characterSet: CharacterSet.ANSI },
  { name: SERIF, data: fs.readFileSync(path.join(FONTS, 'newsreader-400-normal.ttf')), characterSet: CharacterSet.ANSI },
];
async function writeDocx(file, title, sections) {
  const doc = new Document({ title, creator: 'Oweleen', description: 'Oweleen editable master template', styles, features: { updateFields: false }, sections });
  fs.writeFileSync(path.join(OUT, file), await Packer.toBuffer(doc));
  return file;
}

/* =====================================================================
   PDF RENDERER (selectable text, embedded fonts)
   ===================================================================== */
const PT = { w: 595.28, h: 841.89, side: 45, top: 58, bottom: 52 };
const PCW = PT.w - PT.side * 2;
const hex = h => '#' + h;
const PS = {
  id: { f: 'sans', s: 9, c: K.copper, caps: 1, cs: 1.8, a: 5 }, display: { f: 'serif', s: 50, c: K.midnight, lg: -8, a: 12 },
  h1: { f: 'serif', s: 34, c: K.midnight, lg: -4, a: 8 }, sup: { f: 'light', s: 13, c: K.slate, lg: 2, a: 10 },
  h2: { f: 'semi', s: 8.5, c: K.midnight, caps: 1, cs: 1.6, a: 5, b: 12 }, p: { f: 'sans', s: 9.5, c: K.ink, lg: 3.5, a: 6 },
  note: { f: 'sans', s: 7, c: K.mist, lg: 1.5, a: 3, b: 6 }, quote: { f: 'serif', s: 18, c: K.midnight, lg: 1, a: 8 },
  label: { f: 'sans', s: 7, c: K.slate, caps: 1, cs: 1.4, a: 3 }, num: { f: 'serif', s: 24, c: K.copper, a: 3 },
  kpi: { f: 'serif', s: 24, c: K.midnight, a: 1 }, kpiS: { f: 'serif', s: 15, c: K.midnight, a: 1 }, hero: { f: 'serif', s: 72, c: K.midnight, lg: -10, a: 4 },
  h1s: { f: 'serif', s: 17, c: K.midnight, a: 2 }, h2t: { f: 'semi', s: 8, c: K.midnight, caps: 1, cs: 1.4, a: 3 },
  logo: { f: 'sans', s: 12, c: K.midnight, cs: 6, a: 6 }, bullet: { f: 'sans', s: 9.5, c: K.ink, lg: 3, a: 4 },
  instr: { f: 'sans', s: 8, c: K.slate, lg: 2, a: 0 },
};
function createPdf() {
  const doc = new PDFDocument({ size: 'A4', margin: 0, autoFirstPage: false, info: { Title: 'Oweleen', Author: 'Oweleen' } });
  doc.registerFont('sans', path.join(FONTS, 'figtree-400-normal.ttf'));
  doc.registerFont('light', path.join(FONTS, 'figtree-300-normal.ttf'));
  doc.registerFont('semi', path.join(FONTS, 'figtree-600-normal.ttf'));
  doc.registerFont('serif', path.join(FONTS, 'newsreader-400-normal.ttf'));
  return doc;
}
function textOf(b) { let t = b.type === 'logo' ? '◎  OWELEEN' : String(b.t); return PS[b.type]?.caps ? t.toUpperCase() : t; }
function pText(doc, b, x, y, w, ctx, dry) {
  const s = PS[b.type]; const t = b.type === 'logo' ? 'OWELEEN' : textOf(b);
  const opt = { width: w, lineGap: s.lg || 0, characterSpacing: s.cs || 0, align: ctx.center ? 'center' : 'left' };
  doc.font(s.f).fontSize(s.s);
  const h = doc.heightOfString(t || ' ', opt);
  if (!dry) {
    const col = ctx.dark ? (darkColor[b.type] || K.ivory) : s.c;
    doc.fillColor(hex(col)).text(t, x, y + (s.b || 0), opt);
  }
  return (s.b || 0) + h + s.a;
}
function pBlocks(doc, blocks, x, y, w, ctx, dry) { let h = 0; for (const b of blocks) h += pBlock(doc, b, x, y + h, w, ctx, dry); return h; }
function pBlock(doc, b, x, y, w, ctx, dry) {
  switch (b.type) {
    case 'space': return b.pt * 0.8;
    case 'rule': if (!dry) doc.moveTo(x, y + 4).lineTo(x + w, y + 4).lineWidth(0.5).strokeColor(hex(K.rule)).stroke(); return 14;
    case 'instr': {
      const t = 'INSTRUCTION — DELETE BEFORE PUBLISHING:  ' + b.t; doc.font('sans').fontSize(8);
      const h = doc.heightOfString(t, { width: w - 16, lineGap: 2 }) + 12;
      if (!dry) { doc.rect(x, y, w, h).fillColor(hex(K.instr)).fill(); doc.rect(x, y, w, h).dash(2, { space: 2 }).lineWidth(0.5).strokeColor(hex(K.mist)).stroke().undash(); doc.fillColor(hex(K.slate)).text(t, x + 8, y + 6, { width: w - 16, lineGap: 2 }); }
      return h + 12;
    }
    case 'bullets': { let h = 0; for (const it of b.items) { doc.font('sans').fontSize(9.5); const hh = doc.heightOfString(it, { width: w - 14, lineGap: 3 }); if (!dry) { doc.fillColor(hex(ctx.dark ? K.copperSoft : K.copper)).text('—', x, y + h); doc.fillColor(hex(ctx.dark ? K.ivory : K.ink)).text(it, x + 14, y + h, { width: w - 14, lineGap: 3 }); } h += hh + 4; } return h + 4; }
    case 'image': {
      const hh = w * b.ratio;
      if (!dry) { doc.save(); doc.rect(x, y, w, hh).clip(); doc.image(imgPath(b.file), x, y, { cover: [w, hh], align: 'center', valign: 'center' }); doc.restore(); }
      let h = hh + 4; if (b.caption) h += pText(doc, { type: 'note', t: b.caption }, x, y + h - 6, w, ctx, dry);
      return h + 4;
    }
    case 'logo': {
      doc.font('sans').fontSize(12);
      if (!dry) { doc.circle(x + 7, y + 7, 7).lineWidth(0.8).strokeColor(hex(ctx.dark ? K.ivory : K.midnight)).stroke(); doc.circle(x + 7, y + 7, 3).strokeColor(hex(K.copper)).stroke(); doc.fillColor(hex(ctx.dark ? K.ivory : K.midnight)).text('OWELEEN', x + 22, y + 1.5, { characterSpacing: 4 }); }
      return 24;
    }
    case 'panel': {
      const pad = 18; const inner = { ...ctx, dark: !!b.dark, center: !!b.center };
      const ch = pBlocks(doc, b.children, 0, 0, w - pad * 2, inner, true);
      const h = Math.max(ch + pad * 2, (b.minH || 0) * 0.8);
      if (!dry) {
        doc.rect(x, y, w, h).fillColor(hex(b.dark ? K.midnight : K.paper)).fill();
        if (b.border) doc.rect(x, y, w, h).lineWidth(0.8).strokeColor(hex(K.copper)).stroke();
        pBlocks(doc, b.children, x + pad, y + (h - ch) / 2, w - pad * 2, inner, false);
      }
      return h + 8;
    }
    case 'table': return pTable(doc, b, x, y, w, ctx, dry);
    default: return pText(doc, b, x, y, w, ctx, dry);
  }
}
function tableGeom(b, w) { const sum = b.widths.reduce((a, c) => a + c, 0); return b.widths.map(f => w * f / sum); }
function pRow(doc, b, cells, ri, isHead, x, y, w, ctx, dry) {
  const tw = tableGeom(b, w); const st = b.style || 'rules';
  const padT = 8, padB = 7;
  const geo = cells.map((c, ci) => { const vr = (b.vrule && ci > 0) || (st === 'timeline' && ci === 1); const pl = vr ? 14 : ci === 0 && st !== 'grid' ? 0 : 10; return { vr, pl, w: tw[ci] - pl - 10, blocks: isHead ? [B.label(c)] : c }; });
  const h = Math.max(...geo.map(g => pBlocks(doc, g.blocks, 0, 0, g.w, ctx, true))) + padT + padB;
  if (!dry) {
    let cx = x;
    geo.forEach((g, ci) => {
      pBlocks(doc, g.blocks, cx + g.pl, y + padT, g.w, ctx, false);
      if (g.vr) doc.moveTo(cx, y).lineTo(cx, y + h).lineWidth(0.6).strokeColor(hex(K.copper)).stroke();
      if (st === 'grid' && ci > 0) doc.moveTo(cx, y).lineTo(cx, y + h).lineWidth(0.5).strokeColor(hex(K.rule)).stroke();
      cx += tw[ci];
    });
    const hl = (yy, c, lw) => doc.moveTo(x, yy).lineTo(x + w, yy).lineWidth(lw).strokeColor(hex(c)).stroke();
    if (isHead) { hl(y, K.midnight, 0.9); hl(y + h, K.midnight, 0.5); }
    else {
      if (st === 'process' && ri === 0) hl(y, K.copper, 0.8);
      if ((st === 'rules' && ri === 0) || st === 'grid') hl(y, K.rule, 0.5);
      if (['rules', 'data', 'grid'].includes(st)) hl(y + h, K.rule, 0.5);
    }
  }
  return h;
}
function pTable(doc, b, x, y, w, ctx, dry) {
  let h = 0;
  if (b.head) h += pRow(doc, b, b.head, -1, true, x, y + h, w, ctx, dry);
  b.rows.forEach((r, ri) => { h += pRow(doc, b, r, ri, false, x, y + h, w, ctx, dry); });
  return h + 8;
}

function pdfDocument(file, list, mode, extraTitle) {
  const doc = createPdf(); doc.info.Title = extraTitle;
  const stream = fs.createWriteStream(path.join(OUT, file)); doc.pipe(stream);
  const X = mode !== 'blank';
  let pageNo = 0, cur;
  const newPage = () => {
    doc.addPage(); pageNo++;
    doc.rect(0, 0, PT.w, PT.h).fillColor(hex(K.ivory)).fill();
    if (cur.cover) return;
    const run = (t, xx, yy, o = {}) => doc.font('sans').fontSize(6.5).fillColor(hex(K.ink)).text(t.toUpperCase(), xx, yy, { characterSpacing: 1.6, lineBreak: false, ...o });
    run(X ? 'Strategic Outlook' : '[PUBLICATION NAME]', PT.side, 30);
    run(cur.header || '', PT.side, 30, { width: PCW, align: 'right' });
    doc.moveTo(PT.side, 41).lineTo(PT.w - PT.side, 41).lineWidth(0.4).strokeColor(hex(K.slate)).stroke();
    doc.moveTo(PT.side, PT.h - 36).lineTo(PT.w - PT.side, PT.h - 36).stroke();
    run('Oweleen', PT.side, PT.h - 30);
    run((X ? 'Illustrative Edition / Vol 1.0' : '[EDITION / VOL]') + '     ' + String(pageNo).padStart(2, '0'), PT.side, PT.h - 30, { width: PCW, align: 'right' });
  };
  for (const t of list) {
    cur = t; newPage(); let y = PT.top;
    const bottom = PT.h - PT.bottom;
    for (const b of t.blocks) {
      if (b.type === 'table' && b.style !== 'plain') {
        if (b.head) { const hh = pRow(doc, b, b.head, -1, true, 0, 0, PCW, {}, true); if (y + hh > bottom) { newPage(); y = PT.top; } y += pRow(doc, b, b.head, -1, true, PT.side, y, PCW, {}, false); }
        b.rows.forEach((r, ri) => { const hh = pRow(doc, b, r, ri, false, 0, 0, PCW, {}, true); if (y + hh > bottom) { newPage(); y = PT.top; } y += pRow(doc, b, r, ri, false, PT.side, y, PCW, {}, false); });
        y += 8; continue;
      }
      const h = pBlock(doc, b, 0, 0, PCW, {}, true);
      if (y + h > bottom && y > PT.top + 1) { newPage(); y = PT.top; }
      y += pBlock(doc, b, PT.side, y, PCW, {}, false);
    }
  }
  doc.end();
  return new Promise(r => stream.on('finish', () => r(file)));
}

/* =====================================================================
   ICONS (SVG, from the web icon system)
   ===================================================================== */
const icons = {
  search: '<circle cx="10.5" cy="10.5" r="6"/><path d="M15 15l5 5"/>', doc: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 15h6M9 18h4"/>',
  home: '<path d="M4 11l8-7 8 7"/><path d="M6 10v10h12V10M10 20v-5h4v5"/>', shield: '<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><path d="M9 12l2 2 4-4"/>',
  calendar: '<rect x="4" y="5" width="16" height="15"/><path d="M4 9h16M8 3v4M16 3v4"/>', chat: '<path d="M4 5h16v11H9l-5 4z"/><path d="M8 9h8M8 12h5"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4.5 4.5-7 8-7s7 2.5 8 7"/>', chart: '<path d="M4 20h16"/><path d="M7 17v-4M11 17V9M15 17v-6M19 17V5"/>',
  target: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/>', layers: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 12l9 5 9-5M3 16l9 5 9-5"/>',
  cycle: '<path d="M20 12a8 8 0 0 1-14 5.3M4 12a8 8 0 0 1 14-5.3"/><path d="M18 3v4h-4M6 21v-4h4"/>', signal: '<path d="M4 18l5-5 4 3 7-8"/><path d="M15 8h5v5"/>',
  key: '<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M16 7l3 3M14 9l2 2"/>', compass: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
  flag: '<path d="M5 21V4M5 4h12l-2 4 2 4H5"/>', mail: '<rect x="3" y="5" width="18" height="14"/><path d="M3 6l9 7 9-7"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18"/>', building: '<path d="M5 21V4h9v17M14 9h5v12M3 21h18"/><path d="M8 7h3M8 11h3M8 15h3"/>',
};
function iconSvg(p, c) { return `<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24" fill="none" stroke="#${c}" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`; }

/* =====================================================================
   BUILD
   ===================================================================== */
const manifest = { templates: [], master: {}, guide: {} };
const blank = templates('blank'), example = templates('example');
for (let i = 0; i < blank.length; i++) {
  const t = blank[i];
  const fb = await writeDocx(`Oweleen_${t.key}_BLANK.docx`, `Oweleen — ${t.name} (Blank Master)`, [sectionFor(t, 'blank')]);
  const fe = await writeDocx(`Oweleen_${t.key}_EXAMPLE.docx`, `Oweleen — ${t.name} (Example)`, [sectionFor(example[i], 'example')]);
  const pe = await pdfDocument(`Oweleen_${t.key}_EXAMPLE.pdf`, [example[i]], 'example', `Oweleen — ${t.name}`);
  manifest.templates.push({ key: t.key, name: t.name, blank: fb, example: fe, pdf: pe });
}
manifest.master.blank = await writeDocx('Oweleen_Master_All-Templates_BLANK.docx', 'Oweleen Master Template (Blank)', blank.map(t => sectionFor(t, 'blank')));
manifest.master.example = await writeDocx('Oweleen_Master_All-Templates_EXAMPLE.docx', 'Oweleen Master Template (Example)', example.map(t => sectionFor(t, 'example')));
manifest.master.pdf = await pdfDocument('Oweleen_Master_All-Templates_EXAMPLE.pdf', example, 'example', 'Oweleen Strategic Outlook — Example');
manifest.master.pdfBlank = await pdfDocument('Oweleen_Master_All-Templates_BLANK-reference.pdf', blank, 'blank', 'Oweleen Master Template — Blank reference');
if (process.env.STRESS) {
  const grow = b => b.type === 'table' ? { ...b, rows: b.style === 'plain' || b.style === 'process' ? b.rows.map(r => r.map(c => c.map(grow))) : [...b.rows, ...b.rows, ...b.rows, ...b.rows].map(r => r.map(c => c.map(grow))) }
    : b.type === 'panel' ? { ...b, children: b.children.map(grow) } : (b.type === 'p' ? { ...b, t: `${b.t} ${b.t} ${b.t}` } : b);
  const stress = templates('example').map(t => ({ ...t, blocks: t.blocks.map(grow) }));
  await pdfDocument('../../.qa/stress.pdf', stress, 'example', 'stress');
  await writeDocx('../../.qa/stress.docx', 'stress', stress.map(t => sectionFor(t, 'example')));
}
const g = guide();
manifest.guide.docx = await writeDocx('Oweleen_Customization_Guide.docx', 'Oweleen Template Customization Guide', [sectionFor(g, 'example')]);
manifest.guide.pdf = await pdfDocument('Oweleen_Customization_Guide.pdf', [g], 'example', 'Oweleen Template Customization Guide');

fs.mkdirSync(path.join(OUT, 'icons'), { recursive: true });
for (const [n, p] of Object.entries(icons)) {
  fs.writeFileSync(path.join(OUT, 'icons', `oweleen-icon-${n}-midnight.svg`), iconSvg(p, K.midnight));
  fs.writeFileSync(path.join(OUT, 'icons', `oweleen-icon-${n}-copper.svg`), iconSvg(p, K.copper));
}
fs.copyFileSync(imgPath('skyline.jpg'), path.join(OUT, 'oweleen-image-skyline.jpg'));
fs.copyFileSync(imgPath('facade.jpg'), path.join(OUT, 'oweleen-image-facade.jpg'));

manifest.icons = Object.keys(icons);
// Embed every deliverable into the app bundle (only dist/index.html is deployed).
const embed = {};
const walk = (dir, pre = '') => { for (const f of fs.readdirSync(dir)) { const p = path.join(dir, f); if (fs.statSync(p).isDirectory()) walk(p, pre + f + '/'); else embed[pre + f] = fs.readFileSync(p).toString('base64'); } };
walk(OUT);
for (const f of fs.readdirSync(FONTS)) embed['fonts/' + f] = fs.readFileSync(path.join(FONTS, f)).toString('base64');
fs.writeFileSync(path.join(ROOT, 'src/files.gen.ts'), 'export const FILES: Record<string, string> = ' + JSON.stringify(embed) + ';\n');
manifest.zip = 'Oweleen_Template_Kit.zip';
fs.writeFileSync(path.join(ROOT, 'src/manifest.json'), JSON.stringify(manifest, null, 2));
const total = Object.values(embed).reduce((a, b) => a + b.length, 0);
console.log('Embedded', Object.keys(embed).length, 'files,', (total / 1e6).toFixed(2), 'MB base64');
