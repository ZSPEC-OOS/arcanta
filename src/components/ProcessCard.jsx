import ImageWithFallback from './ImageWithFallback';

function ProcessCard({ step, title, description, icon, iconLabel }) {
  return (
    <article className="glass-card p-5">
      <div className="mb-5 inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-arcanta-gold/40 px-3 text-lg font-semibold text-arcanta-gold">
        {step}
      </div>
      {icon ? (
        <ImageWithFallback
          src={icon}
          alt={`${title} icon`}
          fallbackLabel={iconLabel || `${title} Icon`}
          className="mb-4 h-12 w-12 object-contain"
        />
      ) : null}
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-white/70">{description}</p>
    </article>
  );
}

export default ProcessCard;
