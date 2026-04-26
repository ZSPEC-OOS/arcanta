import { useState } from 'react';

function ImageWithFallback({ src, alt, className = '', fallbackLabel, style }) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        className={`flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-center text-xs font-medium uppercase tracking-wider text-white/60 ${className}`}
        style={style}
      >
        {fallbackLabel || alt}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onError={() => setErrored(true)}
      loading="lazy"
    />
  );
}

export default ImageWithFallback;
