import { ImageResponse } from 'next/og';

export const alt = 'Victor Emanuel — Software Engineer / Engenheiro de Software';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#09090b', color: '#f4f4f5', padding: '72px', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 24, color: '#a1a1aa' }}><span>VE.</span><span>Brazil · Canada · English C1</span></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <span style={{ fontSize: 76, fontWeight: 700 }}>Victor Emanuel</span>
        <span style={{ fontSize: 36 }}>Software Engineer / Engenheiro de Software</span>
      </div>
      <div style={{ display: 'flex', fontSize: 26, color: '#a1a1aa', borderTop: '1px solid #27272a', paddingTop: 28 }}>Software · Business Systems · Automation</div>
    </div>,
    size
  );
}
