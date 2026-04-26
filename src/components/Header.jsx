import ImageWithFallback from './ImageWithFallback';
import { useEmblemPositioning } from './EmblemPositioningContext';

function Header() {
  const { headerConfig } = useEmblemPositioning();
  const navItems = ['Home', 'About', 'Apps', 'Process', 'Careers', 'Contact'];

  return (
    <header className="section-shell relative z-20 pt-6 md:pt-8">
      <div className="glass-card flex flex-col gap-5 rounded-2xl px-5 py-4 md:flex-row md:items-center md:justify-between md:px-7">
        <a href="#home" className="inline-flex items-center">
          <ImageWithFallback
            src="/assets/arcanta-emblem-horizontal.png"
            alt="Arcanta wordmark"
            fallbackLabel="ARCANTA"
            className="w-auto max-w-[220px] object-contain"
            style={{
              height: `${headerConfig.height}px`,
              transform: `translate(${headerConfig.translateX}px, ${headerConfig.translateY}px)`,
              mixBlendMode: headerConfig.blendMode,
            }}
          />
        </a>

        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 md:gap-x-6" aria-label="Main">
          {navItems.map((item) => {
            const id = item.toLowerCase();
            return (
              <a key={item} href={`#${id}`} className="nav-link">
                {item}
              </a>
            );
          })}
        </nav>

        <button className="rounded-full border border-arcanta-gold/65 px-5 py-2 text-sm font-medium text-arcanta-gold transition hover:bg-arcanta-gold/10">
          Let&apos;s Build
        </button>
      </div>
    </header>
  );
}

export default Header;
