import ImageWithFallback from './ImageWithFallback';
import { useEmblemPositioning } from './EmblemPositioningContext';

function Hero() {
  const { heroConfig } = useEmblemPositioning();

  return (
    <section id="home" className="section-shell relative z-10 pb-14 pt-10 md:pb-20 md:pt-16">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="eyebrow">AI APP DEVELOPMENT</p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.08] text-white md:text-6xl">
            We Build AI Apps
            <br />
            That Solve Real
            <br />
            <span className="bg-gradient-to-r from-arcanta-blue to-arcanta-gold bg-clip-text text-transparent">
              Problems.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/72">
            Arcanta is an AI app development company crafting intelligent, intuitive,
            and impactful applications for the future.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-full border border-arcanta-gold px-6 py-3 text-sm font-semibold text-arcanta-gold transition hover:bg-arcanta-gold/10">
              Explore Our Apps
            </button>
            <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/10">
              See Our Process
            </button>
          </div>

          <div className="mt-12 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
            <span>Scroll to discover</span>
            <span className="h-px w-16 bg-white/25" />
          </div>
        </div>

        <div
          className="relative mx-auto"
          style={{ width: `${heroConfig.width}%`, maxWidth: '100%' }}
        >
          <ImageWithFallback
            src="/assets/arcanta-hero-emblem-primary.png"
            alt="Arcanta hero emblem"
            fallbackLabel="Arcanta Hero Emblem"
            className="relative z-10 mx-auto h-auto w-full object-contain"
            style={{
              transform: `translate(${heroConfig.translateX}px, ${heroConfig.translateY}px)`,
              opacity: heroConfig.opacity / 100,
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
