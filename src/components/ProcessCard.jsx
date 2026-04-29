import ImageWithFallback from './ImageWithFallback';

function ProcessCard({ step, title, description, icon, iconLabel, hideIconOnMobile }) {
  return (
    <article className="glass-card p-4 sm:p-5">
      {/* Mobile: step badge + title inline */}
      <div className="flex items-center gap-3 sm:hidden mb-2.5">
        <div className="inline-flex h-8 min-w-8 items-center justify-center rounded-full border border-arcanta-gold/40 px-2.5 text-sm font-semibold text-arcanta-gold shrink-0">
          {step}
        </div>
        <h3 className="text-base font-semibold text-white">{title}</h3>
      </div>

      {/* Desktop: step badge alone */}
      <div className="hidden sm:inline-flex mb-5 h-10 min-w-10 items-center justify-center rounded-full border border-arcanta-gold/40 px-3 text-lg font-semibold text-arcanta-gold">
        {step}
      </div>

      {icon ? (
        <ImageWithFallback
          src={icon}
          alt={`${title} icon`}
          fallbackLabel={iconLabel || `${title} Icon`}
          className={`mb-4 h-12 w-12 object-contain ${hideIconOnMobile ? 'hidden sm:block' : ''}`}
        />
      ) : null}

      <h3 className="hidden sm:block text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-[1.65] text-white/70 sm:mt-3">{description}</p>
    </article>
  );
}

export default ProcessCard;
