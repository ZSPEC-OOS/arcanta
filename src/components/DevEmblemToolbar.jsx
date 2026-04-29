import { useState } from 'react';

function DevEmblemToolbar({ values, onChange }) {
  const [open, setOpen] = useState(false);
  const { width, opacity, translateX, translateY, alignSelf } = values;

  const codeString = [
    `width: ${width}px`,
    `opacity: ${(opacity / 100).toFixed(2)}`,
    `translateX: ${translateX}px`,
    `translateY: ${translateY}px`,
    `alignSelf: ${alignSelf}`,
  ].join('\n');

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString).catch(() => {});
  };

  const slider = (label, key, min, max, unit = 'px') => (
    <label className="flex flex-col gap-1">
      <span className="text-white/55 text-[10px] font-medium uppercase tracking-wide">
        {label}: <span className="text-white/90">{values[key]}{unit}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        value={values[key]}
        onChange={(e) => onChange({ ...values, [key]: +e.target.value })}
        className="h-1.5 w-full cursor-pointer accent-[#11A8FF]"
      />
      <div className="flex justify-between text-[9px] text-white/30">
        <span>{min}{unit}</span>
        <span>{max}{unit}</span>
      </div>
    </label>
  );

  return (
    <div className="fixed bottom-0 right-0 z-[9999] md:hidden">
      {/* Expanded panel */}
      {open && (
        <div className="mb-14 mr-2 w-[320px] rounded-2xl border border-white/15 bg-[#07111Ff5] p-4 shadow-2xl backdrop-blur">
          <p className="mb-3 text-xs font-semibold text-white/80">Emblem Position Tool</p>

          <div className="flex flex-col gap-4">
            {slider('Width', 'width', 50, 220)}
            {slider('Opacity', 'opacity', 20, 100, '%')}
            {slider('Translate X', 'translateX', -120, 120)}
            {slider('Translate Y', 'translateY', -120, 120)}
          </div>

          {/* Vertical align */}
          <div className="mt-4">
            <p className="mb-1.5 text-[10px] font-medium uppercase tracking-wide text-white/55">
              Align Self: <span className="text-white/90">{alignSelf}</span>
            </p>
            <div className="flex gap-2">
              {[
                { label: 'Top', value: 'flex-start' },
                { label: 'Mid', value: 'center' },
                { label: 'Bot', value: 'flex-end' },
              ].map(({ label, value }) => (
                <button
                  key={value}
                  onClick={() => onChange({ ...values, alignSelf: value })}
                  className={`flex-1 rounded-lg border py-1.5 text-xs font-medium transition ${
                    alignSelf === value
                      ? 'border-arcanta-blue bg-arcanta-blue/15 text-arcanta-blue'
                      : 'border-white/15 text-white/40 hover:text-white/70'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Code preview */}
          <pre className="mt-4 rounded-xl border border-white/10 bg-black/40 p-3 text-[10px] leading-5 text-white/70">
            {codeString}
          </pre>

          {/* Copy */}
          <button
            onClick={handleCopy}
            className="mt-3 w-full rounded-full border border-arcanta-gold/60 py-2.5 text-xs font-semibold text-arcanta-gold transition hover:bg-arcanta-gold/10 active:scale-95"
          >
            Copy Values
          </button>
        </div>
      )}

      {/* FAB toggle */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle emblem toolbar"
        className="mb-6 mr-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-arcanta-card shadow-lg backdrop-blur transition active:scale-95"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke={open ? '#11A8FF' : 'rgba(255,255,255,0.6)'}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </button>
    </div>
  );
}

export default DevEmblemToolbar;
