import ImageWithFallback from './ImageWithFallback';

function AppCard({ name, subtitle, description, image, imageLink, highlight }) {
  const imgClass = 'aspect-square w-full rounded-xl border border-white/10 object-cover';

  const MobileImage = (
    <div className="w-[52px] shrink-0">
      {imageLink ? (
        <a href={imageLink} target="_blank" rel="noreferrer" aria-label={`Open ${name}`}>
          <ImageWithFallback src={image} alt={`${name} logo`} fallbackLabel={name} className={imgClass} />
        </a>
      ) : (
        <ImageWithFallback src={image} alt={`${name} logo`} fallbackLabel={name} className={imgClass} />
      )}
    </div>
  );

  const DesktopImage = imageLink ? (
    <a href={imageLink} target="_blank" rel="noreferrer" aria-label={`Open ${name}`}>
      <ImageWithFallback
        src={image}
        alt={`${name} preview`}
        fallbackLabel={name}
        className="mb-4 aspect-square w-full rounded-2xl border border-white/10 object-cover"
      />
    </a>
  ) : (
    <ImageWithFallback
      src={image}
      alt={`${name} preview`}
      fallbackLabel={name}
      className="mb-4 aspect-square w-full rounded-2xl border border-white/10 object-cover"
    />
  );

  return (
    <article
      className={`glass-card w-full overflow-hidden p-4 sm:p-5 ${
        highlight ? 'ring-1 ring-arcanta-gold/40' : ''
      }`}
    >
      {/* Mobile: horizontal row */}
      <div className="flex items-center gap-3.5 sm:hidden">
        {MobileImage}
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-semibold text-white leading-tight">{name}</h3>
          <p className="mt-0.5 text-xs font-medium text-arcanta-blue">{subtitle}</p>
          <p className="mt-1.5 text-xs leading-[1.55] text-white/65 line-clamp-2">{description}</p>
        </div>
      </div>

      {/* Desktop: vertical card */}
      <div className="hidden sm:block">
        {DesktopImage}
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <p className="mt-1 text-sm font-medium text-arcanta-blue">{subtitle}</p>
        <p className="mt-3 text-sm leading-6 text-white/70">{description}</p>
      </div>
    </article>
  );
}

export default AppCard;
