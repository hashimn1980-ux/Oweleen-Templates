import { useState, useEffect, useRef, useCallback, type ComponentType } from 'react';
import { saveFile } from './download';
import manifest from './manifest.json';
import { C, OweleenLogo } from './system';

export interface TemplateItem {
  code: string;
  set: string;
  num: string;
  title: string;
  desc: string;
  isDark?: boolean;
  Component: ComponentType;
  key: string;
}

interface TemplateEditorModalProps {
  template: TemplateItem;
  templates: readonly TemplateItem[];
  isOpen: boolean;
  onClose: () => void;
  onSelectTemplate: (codeOrNum: string) => void;
}

export default function TemplateEditorModal({
  template,
  templates,
  isOpen,
  onClose,
  onSelectTemplate,
}: TemplateEditorModalProps) {
  const [zoom, setZoom] = useState<number>(0.85);
  const [showOutlines, setShowOutlines] = useState<boolean>(true);
  const [ver, setVer] = useState<number>(0);
  const [toast, setToast] = useState<string | null>(null);
  const [docxDownloading, setDocxDownloading] = useState<boolean>(false);
  const [activeEditingTag, setActiveEditingTag] = useState<string | null>(null);
  const [editableCount, setEditableCount] = useState<number>(0);
  const [showDocxMenu, setShowDocxMenu] = useState<boolean>(false);

  const canvasRef = useRef<HTMLDivElement>(null);
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const manifestEntry = manifest.templates.find(
    (t) => t.code === template.code || t.key === template.key || t.name.toLowerCase() === template.title.toLowerCase()
  );

  const showToast = useCallback((msg: string) => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    setToast(msg);
    toastTimeoutRef.current = setTimeout(() => setToast(null), 3500);
  }, []);

  // Calculate fit-to-screen zoom based on window height
  const handleFitToScreen = useCallback(() => {
    const availableHeight = window.innerHeight - 130;
    const computed = Math.min(1.0, Math.max(0.45, availableHeight / 1123));
    setZoom(Number(computed.toFixed(2)));
    showToast(`Zoom set to fit (${Math.round(computed * 100)}%)`);
  }, [showToast]);

  // Handle ESC key to close modal
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Auto-fit on open if screen height is smaller than A4
  useEffect(() => {
    if (isOpen) {
      if (window.innerHeight < 1250) {
        handleFitToScreen();
      } else {
        setZoom(1.0);
      }
    }
  }, [isOpen, handleFitToScreen]);

  // Initialize contenteditable elements inside the active canvas
  useEffect(() => {
    if (!isOpen) return;
    const el = canvasRef.current;
    if (!el) return;

    let count = 0;
    const candidates = el.querySelectorAll<HTMLElement>(
      'h1, h2, h3, h4, h5, h6, p, span, div, td, th, figcaption, b, strong, i, em, a, blockquote, li, .t-id, .t-h1, .t-sup, .t-h4, .t-body, .t-meta, .t-note, .t-quote'
    );

    candidates.forEach((node) => {
      if (node.tagName.toLowerCase() === 'svg' || node.closest('svg')) return;
      // Do not make entire layout columns editable, only leaves/text-holding nodes
      const hasDirectText = Array.from(node.childNodes).some(
        (c) => c.nodeType === Node.TEXT_NODE && (c.textContent || '').trim().length > 0
      );

      if (hasDirectText) {
        node.contentEditable = 'true';
        node.spellcheck = false;
        node.setAttribute('data-editable-field', 'true');
        count++;

        node.onfocus = () => {
          const tag = node.tagName.toLowerCase();
          const className = node.className || '';
          setActiveEditingTag(`${tag}${className ? ` · .${className.split(' ')[0]}` : ''}`);
        };
        node.onblur = () => {
          setActiveEditingTag(null);
        };
      }
    });

    setEditableCount(count);
  }, [isOpen, ver, template.code]);

  if (!isOpen) return null;

  // Navigation handlers
  const currentIndex = templates.findIndex((t) => t.code === template.code);
  const prevTemplate = templates[(currentIndex - 1 + templates.length) % templates.length];
  const nextTemplate = templates[(currentIndex + 1) % templates.length];

  // Group templates by set for the dropdown
  const sets = Array.from(new Set(templates.map((t) => t.set)));

  // Actions
  const handleDownloadPdf = () => {
    document.body.classList.add('modal-printing');
    showToast('Opening PDF Print preview. Choose "Save as PDF" with 0 margins.');
    const cleanup = () => {
      document.body.classList.remove('modal-printing');
      window.removeEventListener('afterprint', cleanup);
    };
    window.addEventListener('afterprint', cleanup);
    window.print();
    setTimeout(cleanup, 2500);
  };

  const handleDownloadDocx = async (variant: 'example' | 'blank' = 'example') => {
    const filename = variant === 'blank' ? manifestEntry?.blank : manifestEntry?.example;
    if (!filename) {
      showToast('Word (.docx) template file not found for this template.');
      return;
    }
    setDocxDownloading(true);
    setShowDocxMenu(false);
    showToast(`Downloading Word master (${variant === 'blank' ? 'Blank' : 'Example'})...`);
    try {
      await saveFile(filename);
      showToast(`✓ Downloaded ${filename}`);
    } catch (err) {
      showToast(`Failed to download: ${String(err)}`);
    } finally {
      setDocxDownloading(false);
    }
  };

  const handleReset = () => {
    setVer((v) => v + 1);
    showToast('Reset template canvas to original default copy.');
  };

  const TemplateComponent = template.Component;

  return (
    <div
      id="modal-root"
      className="editor-modal-container fixed inset-0 z-50 flex flex-col bg-[#14191E] text-[#F4F1EB] overflow-hidden select-none"
    >
      {/* =========================================================================
          STICKY TOP ACTION TOOLBAR (DARK & COPPER THEME)
          ========================================================================= */}
      <header className="modal-chrome flex-shrink-0 bg-[#0E1318] border-b border-[#2D3740] px-4 py-2.5 flex items-center justify-between gap-3 shadow-2xl z-30">
        {/* Left: Close/Back + Template Navigation */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onClose}
            title="Back to master templates library (Esc)"
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium tracking-wider uppercase border border-[#3E4A56] hover:border-[#B8703F] hover:bg-[#B8703F]/15 text-[#E6E1D7] transition-colors rounded-none"
          >
            <span className="text-sm leading-none">←</span>
            <span>Back to Library</span>
          </button>

          <div className="h-5 w-[1px] bg-[#2D3740] hidden sm:block" />

          {/* Template Indicator & Selector */}
          <div className="flex items-center gap-2">
            <OweleenLogo variant="symbol" color="copper" symbolSize={20} title="Oweleen" />
            <span className="px-2 py-0.5 text-xs font-bold tracking-wider bg-[#B8703F] text-white">
              {template.code}
            </span>

            <select
              value={template.code}
              onChange={(e) => onSelectTemplate(e.target.value)}
              className="bg-[#1C242C] text-[#F4F1EB] text-xs font-serif border border-[#3E4A56] focus:border-[#B8703F] focus:outline-none px-2.5 py-1.5 rounded-none cursor-pointer max-w-[200px] sm:max-w-[300px] truncate"
            >
              {sets.map((setName) => (
                <optgroup key={setName} label={setName}>
                  {templates
                    .filter((t) => t.set === setName)
                    .map((t) => (
                      <option key={t.code} value={t.code}>
                        {t.code} — {t.title}
                      </option>
                    ))}
                </optgroup>
              ))}
            </select>

            <div className="flex items-center border border-[#3E4A56]">
              <button
                type="button"
                onClick={() => onSelectTemplate(prevTemplate.code)}
                title={`Previous: ${prevTemplate.code} · ${prevTemplate.title}`}
                className="px-2 py-1 text-xs hover:bg-[#B8703F]/20 hover:text-[#B8703F] border-r border-[#3E4A56] transition-colors"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => onSelectTemplate(nextTemplate.code)}
                title={`Next: ${nextTemplate.code} · ${nextTemplate.title}`}
                className="px-2 py-1 text-xs hover:bg-[#B8703F]/20 hover:text-[#B8703F] transition-colors"
              >
                ›
              </button>
            </div>
          </div>
        </div>

        {/* Center: Live Edit Indicator & Zoom Controls */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Status Badge */}
          <div className="flex items-center gap-2 px-2.5 py-1 bg-[#19222B] border border-[#2F3C48] text-[11px] text-[#A2B1BC]">
            <span className="w-2 h-2 rounded-full bg-[#B8703F] animate-pulse" />
            <span className="font-medium text-[#E6E1D7]">Live Text Editing Active</span>
            <span className="text-[#6A7B88]">({editableCount} fields)</span>
          </div>

          {/* Toggle Outlines */}
          <button
            type="button"
            onClick={() => setShowOutlines((prev) => !prev)}
            className={`px-2.5 py-1 text-[11px] tracking-wider uppercase border transition-colors ${
              showOutlines
                ? 'border-[#B8703F] bg-[#B8703F]/20 text-[#D9A882]'
                : 'border-[#333F4B] text-[#8C9BA6] hover:border-[#5A7385]'
            }`}
            title="Toggle dashed boxes around all editable headings and paragraphs"
          >
            {showOutlines ? '✓ Fields Highlighted' : 'Show Field Outlines'}
          </button>

          {/* Zoom controls */}
          <div className="flex items-center border border-[#333F4B] bg-[#161D24] text-xs">
            <button
              type="button"
              onClick={() => setZoom((z) => Math.max(0.4, Number((z - 0.1).toFixed(2))))}
              title="Zoom out"
              className="px-2 py-1 hover:bg-[#B8703F]/20 hover:text-[#B8703F] border-r border-[#333F4B]"
            >
              −
            </button>
            <span className="px-2.5 py-1 min-w-[50px] text-center font-mono text-[11px] text-[#D9A882]">
              {Math.round(zoom * 100)}%
            </span>
            <button
              type="button"
              onClick={() => setZoom((z) => Math.min(1.5, Number((z + 0.1).toFixed(2))))}
              title="Zoom in"
              className="px-2 py-1 hover:bg-[#B8703F]/20 hover:text-[#B8703F] border-r border-[#333F4B]"
            >
              +
            </button>
            <button
              type="button"
              onClick={handleFitToScreen}
              title="Fit entire page to screen height"
              className="px-2.5 py-1 text-[11px] tracking-wider uppercase hover:bg-[#B8703F]/20 hover:text-[#B8703F] border-r border-[#333F4B]"
            >
              Fit
            </button>
            <button
              type="button"
              onClick={() => setZoom(1.0)}
              title="Actual 100% size"
              className="px-2 py-1 text-[11px] hover:bg-[#B8703F]/20 hover:text-[#B8703F]"
            >
              100%
            </button>
          </div>
        </div>

        {/* Right: Primary Action Toolbar */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Reset to Default */}
          <button
            type="button"
            onClick={handleReset}
            title="Revert all edits and restore original template copy"
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-[#C9CFD3] hover:text-[#F4F1EB] border border-[#3E4A56] hover:border-[#5A7385] hover:bg-[#202932] transition-colors"
          >
            <span className="text-sm">↺</span>
            <span className="hidden sm:inline">Reset Default</span>
          </button>

          {/* Download as Word (.docx) */}
          <div className="relative">
            <div className="flex items-stretch border border-[#B8703F] bg-[#1E252D]">
              <button
                type="button"
                onClick={() => handleDownloadDocx('example')}
                disabled={docxDownloading}
                title="Download editable Microsoft Word master document"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#F4F1EB] hover:bg-[#B8703F]/25 transition-colors disabled:opacity-60"
              >
                <span>↓</span>
                <span className="font-medium">Word (.docx)</span>
              </button>
              <button
                type="button"
                onClick={() => setShowDocxMenu((prev) => !prev)}
                title="Choose Word master variant"
                className="px-1.5 border-l border-[#B8703F]/50 hover:bg-[#B8703F]/25 text-xs text-[#D9A882]"
              >
                ▾
              </button>
            </div>

            {/* Docx Variant Menu */}
            {showDocxMenu && (
              <div className="absolute right-0 top-full mt-1 w-52 bg-[#0E1318] border border-[#3E4A56] shadow-2xl py-1 z-40 text-xs">
                <button
                  type="button"
                  onClick={() => handleDownloadDocx('example')}
                  className="w-full text-left px-3 py-2 hover:bg-[#B8703F]/20 text-[#F4F1EB] flex flex-col"
                >
                  <span className="font-medium text-[#D9A882]">Master Example .docx</span>
                  <span className="text-[10px] text-[#8C9BA6]">With illustrative text & tables</span>
                </button>
                <div className="border-t border-[#2D3740] my-1" />
                <button
                  type="button"
                  onClick={() => handleDownloadDocx('blank')}
                  className="w-full text-left px-3 py-2 hover:bg-[#B8703F]/20 text-[#F4F1EB] flex flex-col"
                >
                  <span className="font-medium">Blank Master .docx</span>
                  <span className="text-[10px] text-[#8C9BA6]">Clean scaffolds with style placeholders</span>
                </button>
              </div>
            )}
          </div>

          {/* Download as PDF (Primary) */}
          <button
            type="button"
            onClick={handleDownloadPdf}
            title="Download high-resolution print-ready A4 PDF with exact margins"
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold tracking-wide uppercase bg-[#B8703F] hover:bg-[#A35F32] text-[#F4F1EB] transition-colors shadow-md"
          >
            <span>⎙</span>
            <span>Download as PDF</span>
          </button>

          {/* Close X */}
          <button
            type="button"
            onClick={onClose}
            title="Close editor (Esc)"
            className="p-1.5 text-[#8C9BA6] hover:text-[#F4F1EB] hover:bg-[#202932] border border-transparent hover:border-[#3E4A56] transition-colors ml-1"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      </header>

      {/* =========================================================================
          NOTIFICATIONS / TOAST BANNER
          ========================================================================= */}
      {toast && (
        <div className="modal-chrome absolute top-14 left-1/2 -translate-x-1/2 z-40 bg-[#1A2530] border-l-2 border-[#B8703F] text-[#F4F1EB] text-xs px-4 py-2 shadow-2xl flex items-center gap-3">
          <span className="text-[#D9A882]">◈</span>
          <span>{toast}</span>
          <button
            type="button"
            onClick={() => setToast(null)}
            className="text-[#8C9BA6] hover:text-white ml-2 text-sm leading-none"
          >
            ×
          </button>
        </div>
      )}

      {/* =========================================================================
          MAIN SCROLLABLE CANVAS VIEWPORT
          ========================================================================= */}
      <main className="modal-viewport flex-1 overflow-auto bg-[#181F26] p-6 sm:p-10 flex flex-col items-center select-text">
        <div
          className="modal-zoom-wrapper transition-transform duration-100 ease-out origin-top flex flex-col items-center"
          style={{
            transform: `scale(${zoom})`,
            marginBottom: `${Math.max(40, 1123 * zoom - 1123 + 60)}px`,
          }}
        >
          {/* Document container */}
          <div
            ref={canvasRef}
            key={`${template.code}-${ver}`}
            className={`modal-canvas print-modal-page ${showOutlines ? 'show-outlines' : ''}`}
            style={{
              width: 794,
              minHeight: 1123,
              background: template.isDark ? C.midnight : C.ivory,
              color: template.isDark ? C.ivory : C.ink,
              boxShadow: '0 25px 65px -15px rgba(0, 0, 0, 0.75), 0 0 0 1px rgba(255, 255, 255, 0.08)',
            }}
          >
            <TemplateComponent />
          </div>
        </div>
      </main>

      {/* =========================================================================
          BOTTOM HELPER / FOOTER STATUS BAR
          ========================================================================= */}
      <footer className="modal-chrome flex-shrink-0 bg-[#0E1318] border-t border-[#252E36] px-5 py-2 flex items-center justify-between text-[11px] text-[#788894] z-20">
        <div className="flex items-center gap-3">
          <span className="text-[#B8703F]">●</span>
          <span>
            {activeEditingTag ? (
              <span className="text-[#F4F1EB]">
                Active field: <code className="text-[#D9A882] font-mono">{activeEditingTag}</code>
              </span>
            ) : (
              <span>Click any headline, paragraph, stat, or date on the page to type over it.</span>
            )}
          </span>
        </div>

        <div className="flex items-center gap-4 hidden sm:flex">
          <span>{template.set} · {template.code}</span>
          <span className="text-[#414E5B]">|</span>
          <span>A4 Canvas (794 × 1123 px)</span>
          <span className="text-[#414E5B]">|</span>
          <span className="text-[#96A6B2]">
            Click <b>"Download as PDF"</b> for crisp print output.
          </span>
        </div>
      </footer>
    </div>
  );
}
