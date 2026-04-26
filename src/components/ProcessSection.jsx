import ProcessCard from './ProcessCard';

const processCards = [
  {
    step: '01',
    title: 'Discover',
    description: 'We define the problem, users, requirements, and success criteria.',
    icon: '/assets/icon-discover.png',
  },
  {
    step: '02',
    title: 'Design',
    description: 'We design clean workflows, interfaces, and product logic before build.',
    icon: '/assets/icon-design.png',
  },
  {
    step: '03',
    title: 'Develop',
    description: 'We build secure, scalable applications using modern AI infrastructure.',
    icon: '/assets/iphone-frame-transparent-screen.png',
    iconLabel: 'Develop icon placeholder',
  },
  {
    step: '04',
    title: 'Deploy',
    description: 'We launch, monitor, optimize, and support your product after release.',
    icon: '/assets/iphone-frame-transparent-screen.png',
    iconLabel: 'Deploy icon placeholder',
  },
];

function ProcessSection() {
  return (
    <section className="section-shell pb-20 md:pb-24">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.65fr]">
        <div className="max-w-md">
          <p className="eyebrow">OUR APPROACH</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-white">
            Human insight.
            <br />
            AI intelligence.
            <br />
            Real impact.
          </h2>
          <p className="mt-5 text-base leading-7 text-white/75">
            We combine human-centered design with practical AI engineering to build apps
            that are useful, scalable, and measurable.
          </p>
          <button className="mt-8 rounded-full border border-arcanta-gold px-6 py-3 text-sm font-semibold text-arcanta-gold transition hover:bg-arcanta-gold/10">
            Our Process
          </button>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {processCards.map((step) => (
            <ProcessCard key={step.step} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
