import ImageWithFallback from './ImageWithFallback';

function AppCard({ name, subtitle, description, image, highlight, hideImageOnMobile }) {
  return (
    <article
      className={`glass-card overflow-hidden p-5 ${
        highlight ? 'ring-1 ring-arcanta-gold/40' : ''
      }`}
    >
      <ImageWithFallback
        src={image}
        alt={`${name} preview`}
        fallbackLabel={`${name} Image`}
        className={`mb-5 h-40 w-full rounded-2xl border border-white/10 object-cover sm:h-52 ${
          hideImageOnMobile ? 'hidden sm:block' : ''
        }`}
      />
      <h3 className="text-xl font-semibold text-white">{name}</h3>
      <p className="mt-1 text-sm font-medium text-arcanta-blue">{subtitle}</p>
      <p className="mt-3 text-sm leading-6 text-white/70">{description}</p>
    </article>
  );
}

export default AppCard;
