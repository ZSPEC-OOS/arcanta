import ProcessCard from './ProcessCard';

const processCards = [
  {
    step: '01',
    title: 'Discover',
    description: 'We define the problem, users, requirements, and success criteria.',
  },
  {
    step: '02',
    title: 'Design',
    description: 'We design clean workflows, interfaces, and product logic before build.',
  },
  {
    step: '03',
    title: 'Develop',
    description: 'We build secure, scalable applications using modern AI infrastructure.',
    icon: '/assets/iphone-frame-transparent-screen.png',
    iconLabel: 'Develop icon',
    hideIconOnMobile: true,
  },
  {
    step: '04',
    title: 'Deploy',
    description: 'We launch, monitor, optimize, and support your product after release.',
    icon: '/assets/iphone-frame-transparent-screen.png',
    iconLabel: 'Deploy icon',
    hideIconOnMobile: true,
  },
];

function ProcessSection() {
  return (
    <section className="section-shell pb-16 md:pb-24">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.65fr] lg:gap-10">

        {/* Section header */}
        <div className="max-w-md">
          <p className="eyebrow">OUR APPROACH</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:mt-4 sm:text-4xl">
            Human insight.
            <br />
            AI intelligence.
            <br />
            Real impact.
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/75 sm:mt-5 sm:text-base">
            We combine human-centered design with practical AI engineering to build apps
            that are useful, scalable, and measurable.
          </p>
          <button className="mt-6 rounded-full border border-arcanta-gold px-6 py-3 text-sm font-semibold text-arcanta-gold transition hover:bg-arcanta-gold/10 active:scale-95 sm:mt-8">
            Our Process
          </button>
        </div>

        {/* Process cards — 2-col grid on all sizes (compact on mobile) */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5">
          {processCards.map((step) => (
            <ProcessCard key={step.step} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
