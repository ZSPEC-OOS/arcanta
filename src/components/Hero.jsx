import ImageWithFallback from './ImageWithFallback';

function Hero() {
  return (
    <section id="home" className="section-shell relative z-10 overflow-visible pb-10 pt-10 md:pb-20 md:pt-16">
      <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-12">

        {/* Text content */}
        <div>
          <p className="eyebrow">AI APP DEVELOPMENT</p>

          {/* Heading row — emblem sits to the right of the heading on iPhone only */}
          <div className="mt-4 flex items-start gap-4 sm:mt-5">
            <h1 className="flex-1 text-[2.15rem] font-semibold leading-[1.1] text-white sm:text-5xl md:text-6xl">
              We Build AI Apps
              <br />
              That Solve Real
              <br />
              <span className="bg-gradient-to-r from-arcanta-blue to-arcanta-gold bg-clip-text text-transparent">
                Problems.
              </span>
            </h1>

            {/* Mobile-only emblem: right of the heading, hidden sm+ */}
            <div className="shrink-0 sm:hidden">
              <ImageWithFallback
                src="/assets/arcanta-hero-emblem-primary.png"
                alt="Arcanta hero emblem"
                fallbackLabel="Arcanta"
                className="h-auto w-[100px] object-contain opacity-85"
              />
            </div>
          </div>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/72 sm:mt-6 sm:text-lg">
            Arcanta is an AI app development company crafting intelligent, intuitive,
            and impactful applications for the future.
          </p>

          <div className="mt-7 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
            <button className="rounded-full border border-arcanta-gold px-6 py-3 text-sm font-semibold text-arcanta-gold transition hover:bg-arcanta-gold/10 active:scale-95">
              Explore Our Apps
            </button>
            <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/10 active:scale-95">
              See Our Process
            </button>
          </div>

          <div className="mt-10 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/50 sm:mt-12">
            <span>Scroll to discover</span>
            <span className="h-px w-16 bg-white/25" />
          </div>
        </div>

        {/* Hero emblem — hidden on mobile to keep the page clean, visible lg+ */}
        <div className="relative mx-auto hidden w-full overflow-visible lg:block">
          <ImageWithFallback
            src="/assets/arcanta-hero-emblem-primary.png"
            alt="Arcanta hero emblem"
            fallbackLabel="Arcanta Hero Emblem"
            className="relative z-10 mx-auto h-auto w-full object-contain md:-translate-x-[81px] md:translate-y-[77px] md:scale-[2.35]"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;
