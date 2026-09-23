import JSZip from 'jszip';

const MIME: Record<string, string> = {
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  pdf: 'application/pdf', zip: 'application/zip', svg: 'image/svg+xml', jpg: 'image/jpeg', png: 'image/png', ttf: 'font/ttf',
};
const mimeOf = (f: string) => MIME[f.split('.').pop() || ''] || 'application/octet-stream';

let cache: Record<string, string> | null = null;
async function files() {
  if (!cache) cache = (await import('./files.gen')).FILES;
  return cache;
}
function b64ToBytes(b64: string) {
  const bin = atob(b64); const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

export async function getBlob(name: string): Promise<Blob> {
  const F = await files();
  if (name.endsWith('.zip')) {
    const zip = new JSZip();
    for (const [k, v] of Object.entries(F)) zip.file(k, v, { base64: true });
    return zip.generateAsync({ type: 'blob', compression: 'DEFLATE', mimeType: MIME.zip });
  }
  const b = F[name];
  if (!b) throw new Error('File not found: ' + name);
  return new Blob([b64ToBytes(b)], { type: mimeOf(name) });
}

/** Save a file. Returns the blob URL so the UI can offer a manual fallback link. */
export async function saveFile(name: string): Promise<string> {
  const blob = await getBlob(name);
  const nav = navigator as Navigator & { msSaveOrOpenBlob?: (b: Blob, n: string) => void };
  if (nav.msSaveOrOpenBlob) { nav.msSaveOrOpenBlob(blob, name); return ''; }
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = name.split('/').pop() || name; a.rel = 'noopener'; a.style.display = 'none';
  document.body.appendChild(a); a.click(); a.remove();
  return url;
}
