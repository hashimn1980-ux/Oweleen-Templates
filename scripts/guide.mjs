import { B } from './content.mjs';
const { id, h1, sup, h2, p, bullets, note, table, label, panel, quote } = B;
const row = (a, b) => [[{ type: 'h2t', t: a }], [p(b)]];

export function guide() {
  return { key: 'Guide', name: 'Customization Guide', header: 'Template Guide', blocks: [
    id('Guide'), h1('Using the Oweleen Templates'), sup('Replace content, not layout. The styles carry the brand.'),
    h2('1. Files in the kit'),
    table({ style: 'rules', widths: [0.38, 0.62], rows: [
      row('…_BLANK.docx', 'Editable master with [PLACEHOLDERS] and dashed instruction boxes. Start every new document here.'),
      row('…_EXAMPLE.docx', 'Completed sample showing intended length and tone. Reference only.'),
      row('…_EXAMPLE.pdf', 'Print/share export with selectable text. Not an editable template.'),
      row('Master_All-Templates', 'All 11 page types in one file. Delete the pages you do not need.'),
      row('icons/ · fonts/', 'Brand icons (SVG, midnight and copper) and the Figtree / Newsreader font files.'),
    ] }),
    h2('2. Edit vs. leave unchanged'),
    table({ style: 'data', widths: [0.5, 0.5], head: ['Normally edit', 'Normally leave unchanged (brand)'], rows: [[
      [bullets(['Anything in [BRACKETS] (tinted background)', 'Headlines, statements, body text, tables', 'Images (right-click → Change Picture)', 'Header section name, edition, date'])],
      [bullets(['Paragraph styles, colours and fonts', 'Page size (A4), margins, header/footer rules', 'Copper rules and section identifiers', 'Logo proportions and clear space'])],
    ]] }),
    h2('3. Replace content'),
    bullets([
      'Find placeholders: Ctrl/Cmd + F and search for "[" — every placeholder is bracketed and tinted.',
      'Type over a placeholder, then clear its tint: select text → apply "Default Paragraph Font" (Word) or Format → Clear formatting then re-apply the style (Google Docs).',
      'Delete every dashed "INSTRUCTION — DELETE BEFORE PUBLISHING" box before export.',
      'Paste text without formatting (Word: Ctrl+Shift+V / Paste → Keep Text Only; Google Docs: Ctrl+Shift+V) so brand styles are kept.',
    ]),
    h2('4. Apply styles, not manual formatting'),
    table({ style: 'rules', widths: [0.38, 0.62], rows: [
      row('Title', 'Cover document title only.'), row('Heading 1', 'Page headline (appears in navigation pane / outline).'),
      row('Subtitle', 'Supporting statement under a headline.'), row('Heading 2', 'Sub-section heading.'),
      row('OW Section Identifier', 'Copper section number above a headline, e.g. 03.'), row('Normal', 'Body text.'),
      row('OW Pull Quote · OW Label · OW Source Note', 'Editorial statements, small captions, data sources.'),
      row('OW KPI Number · OW Hero Number', 'Metrics. Use one Hero per page at most.'),
    ] }),
    h2('5. Add, remove and reorder sections'),
    bullets([
      'Each template is a separate document section with its own running header. To duplicate a page type, copy it from the Master file (click at the start of the page, Shift+click at the end, copy, paste).',
      'Rows: right-click inside a table → Insert row below / Delete row. Columns (process stages): Insert column right.',
      'Reorder: Word → View → Navigation Pane → drag Heading 1 entries. Google Docs → cut and paste the page content.',
      'Header text per section: double-click the header. In Word, untick "Link to Previous" before editing only one section.',
    ]),
    h2('6. Replace logo and images'),
    bullets([
      'Images: right-click → Change Picture → From a file (Word) or Replace image → Upload (Google Docs). Size and position are kept.',
      'Stone-coloured blocks in BLANK files are image placeholders. Use architectural, muted, geometric photography; no generic stock people.',
      'Logo: the ◎ OWELEEN wordmark is live text. To use the official logo file, delete the line and Insert → Picture at max. 45 mm wide.',
    ]),
    h2('7. Export'),
    bullets([
      'Word: File → Save As → PDF → Options → tick "Create bookmarks using Headings" and "ISO 19005-1 (PDF/A)". Fonts are embedded.',
      'Google Docs: File → Download → PDF document (.pdf).',
      'Check before sending: no [brackets], no instruction boxes, page numbers correct, sources filled in.',
    ]),
    h2('8. Opening in Google Docs'),
    bullets([
      'Upload the .docx to Google Drive → right-click → Open with → Google Docs (or enable "Convert uploads" in Drive settings).',
      'Fonts: Figtree and Newsreader are Google Fonts. If text appears in Arial, choose Font → More fonts → add both.',
      'Expected differences: letter-spacing on uppercase labels is not supported (labels render tighter); dashed instruction borders may show as solid; running headers are kept but section-specific headers may merge — check headers after import.',
    ]),
    panel([label('Principle'), quote('Whitespace is part of the brand. When a page gets crowded, cut content — do not shrink the type or margins.')]),
    note('Accessibility: copper (#B8703F) on ivory meets contrast only for large or bold text — use it for numbers, rules and labels, never for body copy.'),
  ] };
}
