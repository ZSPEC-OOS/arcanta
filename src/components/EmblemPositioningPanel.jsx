import { useState } from 'react';
import { useEmblemPositioning } from './EmblemPositioningContext';

function Slider({ label, value, min, max, step = 1, unit = '', color = '#11A8FF', onChange }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, marginBottom: 4, color: '#8899aa' }}>
        <span>{label}</span>
        <span style={{ color: '#fff', fontFamily: 'monospace', fontWeight: 600 }}>
          {value}{unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={e => onChange(Number(e.target.value))}
        style={{ width: '100%', accentColor: color, cursor: 'pointer', height: 4 }}
      />
    </div>
  );
}

function Section({ label, color, children }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: '0.14em',
        color,
        marginBottom: 10,
        textTransform: 'uppercase',
        display: 'flex',
        alignItems: 'center',
        gap: 6,
      }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: color, display: 'inline-block', flexShrink: 0 }} />
        {label}
      </div>
      {children}
    </div>
  );
}

export function EmblemPositioningPanel() {
  const { heroConfig, setHeroConfig, headerConfig, setHeaderConfig } = useEmblemPositioning();
  const [collapsed, setCollapsed] = useState(false);
  const [copied, setCopied] = useState(false);

  const updateHero = (key, value) => setHeroConfig(prev => ({ ...prev, [key]: value }));
  const updateHeader = (key, value) => setHeaderConfig(prev => ({ ...prev, [key]: value }));

  const configCode = `// Hero Emblem (arcanta-hero-emblem-primary.png)
translateX: ${heroConfig.translateX}px
translateY: ${heroConfig.translateY}px
scale: ${heroConfig.scale}
opacity: ${heroConfig.opacity}%

// Header Emblem (arcanta-emblem-horizontal.png)
translateX: ${headerConfig.translateX}px
translateY: ${headerConfig.translateY}px
height: ${headerConfig.height}px
mixBlendMode: ${headerConfig.blendMode}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(configCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setHeroConfig({ translateX: 0, translateY: 0, scale: 1, opacity: 100 });
    setHeaderConfig({ translateX: 0, translateY: 0, height: 32, blendMode: 'normal' });
  };

  const panelStyle = {
    position: 'fixed',
    bottom: 20,
    right: 20,
    zIndex: 99999,
    width: collapsed ? 'auto' : 288,
    background: '#050D18',
    border: '1px solid rgba(17, 168, 255, 0.25)',
    borderRadius: 14,
    boxShadow: '0 12px 40px rgba(0,0,0,0.7), 0 0 0 1px rgba(17,168,255,0.08)',
    fontFamily: "'Inter', system-ui, sans-serif",
    fontSize: 12,
    color: '#fff',
    userSelect: 'none',
    overflow: 'hidden',
  };

  const headerBarStyle = {
    padding: '10px 14px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'rgba(17, 168, 255, 0.07)',
    borderBottom: collapsed ? 'none' : '1px solid rgba(17,168,255,0.12)',
  };

  const dividerStyle = {
    height: 1,
    background: 'rgba(255,255,255,0.06)',
    margin: '12px 0',
  };

  return (
    <div style={panelStyle}>
      <div style={headerBarStyle} onClick={() => setCollapsed(!collapsed)}>
        <span style={{ fontWeight: 700, color: '#11A8FF', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
          ✦ Emblem Positioning
        </span>
        <span style={{ color: '#445566', fontSize: 12 }}>{collapsed ? '▲' : '▼'}</span>
      </div>

      {!collapsed && (
        <div style={{ padding: '14px 16px' }}>
          <Section label="Hero Emblem — Primary" color="#11A8FF">
            <Slider
              label="Translate X" value={heroConfig.translateX}
              min={-400} max={400} unit="px" color="#11A8FF"
              onChange={v => updateHero('translateX', v)}
            />
            <Slider
              label="Translate Y" value={heroConfig.translateY}
              min={-400} max={400} unit="px" color="#11A8FF"
              onChange={v => updateHero('translateY', v)}
            />
            <Slider
              label="Scale" value={heroConfig.scale}
              min={0.1} max={6} step={0.05} unit="×" color="#11A8FF"
              onChange={v => updateHero('scale', v)}
            />
            <Slider
              label="Opacity" value={heroConfig.opacity}
              min={10} max={100} unit="%" color="#11A8FF"
              onChange={v => updateHero('opacity', v)}
            />
          </Section>

          <div style={dividerStyle} />

          <Section label="Header Emblem — Horizontal" color="#F5A33B">
            <Slider
              label="Translate X" value={headerConfig.translateX}
              min={-120} max={120} unit="px" color="#F5A33B"
              onChange={v => updateHeader('translateX', v)}
            />
            <Slider
              label="Translate Y" value={headerConfig.translateY}
              min={-40} max={40} unit="px" color="#F5A33B"
              onChange={v => updateHeader('translateY', v)}
            />
            <Slider
              label="Height" value={headerConfig.height}
              min={16} max={80} unit="px" color="#F5A33B"
              onChange={v => updateHeader('height', v)}
            />
            <div style={{ marginBottom: 10 }}>
              <div style={{ fontSize: 11, marginBottom: 5, color: '#8899aa' }}>
                Blend Mode — removes dark background
              </div>
              <select
                value={headerConfig.blendMode}
                onChange={e => updateHeader('blendMode', e.target.value)}
                style={{
                  width: '100%',
                  background: '#0a1525',
                  color: '#fff',
                  border: '1px solid rgba(245,163,59,0.25)',
                  borderRadius: 6,
                  padding: '5px 8px',
                  fontSize: 11,
                  cursor: 'pointer',
                  outline: 'none',
                }}
              >
                {['normal', 'screen', 'lighten', 'overlay', 'soft-light', 'color-dodge'].map(m => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>
          </Section>

          <div style={dividerStyle} />

          <div>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: '#445566', marginBottom: 8, textTransform: 'uppercase' }}>
              Config Output
            </div>
            <pre style={{
              background: '#030810',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: 8,
              padding: '10px 12px',
              fontSize: 10,
              color: '#7eb8f7',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-all',
              margin: 0,
              maxHeight: 130,
              overflowY: 'auto',
              lineHeight: 1.7,
            }}>
              {configCode}
            </pre>
            <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
              <button
                onClick={handleCopy}
                style={{
                  flex: 1,
                  padding: '7px',
                  background: copied ? 'rgba(17,168,255,0.22)' : 'rgba(17,168,255,0.1)',
                  border: '1px solid rgba(17,168,255,0.3)',
                  borderRadius: 7,
                  color: '#11A8FF',
                  cursor: 'pointer',
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  transition: 'background 0.15s',
                }}
              >
                {copied ? '✓ Copied!' : '⧉ Copy Config'}
              </button>
              <button
                onClick={handleReset}
                style={{
                  padding: '7px 12px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 7,
                  color: '#556677',
                  cursor: 'pointer',
                  fontSize: 11,
                  fontWeight: 600,
                  transition: 'background 0.15s',
                }}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
