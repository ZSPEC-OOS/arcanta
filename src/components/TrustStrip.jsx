function TrustStrip() {
  const logos = ['Nova', 'Elevate', 'Cortex', 'Pivot', 'Latitude'];

  return (
    <section className="border-y border-white/10 py-8">
      <div className="section-shell">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
          TRUSTED BY INNOVATORS
        </p>
        <div className="mt-5 grid grid-cols-2 gap-5 text-center text-xl font-semibold text-white/82 sm:grid-cols-3 md:grid-cols-5">
          {logos.map((logo) => (
            <p key={logo}>{logo}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustStrip;
