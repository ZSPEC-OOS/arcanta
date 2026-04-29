function TrustStrip() {
  const logos = ['Nova', 'Elevate', 'Cortex', 'Pivot', 'Latitude'];

  return (
    <section className="hidden border-y border-white/10 py-7 sm:block sm:py-8">
      <div className="section-shell">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
          TRUSTED BY INNOVATORS
        </p>
        {/* Mobile: centered flex wrap. Desktop: even grid columns */}
        <div className="mt-5 flex flex-wrap justify-center gap-x-8 gap-y-3 text-center text-lg font-semibold text-white/80 sm:grid sm:grid-cols-5 sm:gap-5 sm:text-xl">
          {logos.map((logo) => (
            <span key={logo}>{logo}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustStrip;
