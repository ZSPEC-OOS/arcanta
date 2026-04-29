function Hero() {
  return (
    <section id="home" className="section-shell relative z-10 overflow-visible pb-10 pt-10 md:pb-20 md:pt-16">
      <div>
        <p className="eyebrow">AI APP DEVELOPMENT</p>

        <div className="mt-4 sm:mt-5">
          <h1 className="text-center text-[2.15rem] font-semibold leading-[1.1] text-white sm:text-5xl md:text-6xl">
            We Build AI Apps
            <br />
            That Solve Real
            <br />
            <span className="bg-gradient-to-r from-arcanta-blue to-arcanta-gold bg-clip-text text-transparent">
              Problems.
            </span>
          </h1>
        </div>

        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/72 sm:mt-6 sm:text-lg">
          Arcanta is an AI app development company crafting intelligent, intuitive,
          and impactful applications for the future.
        </p>

        <div className="mt-7 flex justify-center sm:mt-8 sm:block sm:gap-4">
          <button className="rounded-full border border-arcanta-gold px-6 py-3 text-sm font-semibold text-arcanta-gold transition hover:bg-arcanta-gold/10 active:scale-95">
            Explore Our Apps
          </button>
          <button className="hidden rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/10 active:scale-95 sm:inline-block">
            See Our Process
          </button>
        </div>

        <div className="mt-10 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/50 sm:mt-12">
          <span>Scroll to discover</span>
          <span className="h-px w-16 bg-white/25" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
