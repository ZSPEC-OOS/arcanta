import AppCard from './AppCard';

const appCards = [
  {
    name: 'WolfKrow',
    subtitle: 'AI Workflow Builder',
    description:
      'Orchestrate tasks, agents, and decision flows with practical automation teams can actually use.',
    image: '/assets/WFlogo.PNG',
    imageLink: 'https://wolfkrow.onrender.com',
    highlight: true,
  },
  {
    name: 'BluSwan',
    subtitle: 'AI Code Assistant',
    description:
      'Ship clean code faster with context-aware suggestions, review workflows, and tooling integrations.',
    image: '/assets/BSlogo.PNG',
    imageLink: 'https://bluswan.vercel.app',
  },
  {
    name: 'App Three',
    subtitle: 'Coming Soon',
    description:
      'A focused product currently in design. More details will be released as we approach launch.',
    image: '/assets/iphone-frame-transparent-screen.png',
    hideImageOnMobile: true,
  },
  {
    name: 'App Four',
    subtitle: 'Coming Soon',
    description:
      'Another practical AI app in development aimed at solving measurable, day-to-day business pain.',
    image: '/assets/iphone-frame-transparent-screen.png',
    hideImageOnMobile: true,
  },
];

function FeaturedApps() {
  return (
    <section className="section-shell py-16 md:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.65fr]">
        <div className="max-w-md">
          <p className="eyebrow">FEATURED AI APPS</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-white">
            Intelligent apps.
            <br />
            Infinite possibilities.
          </h2>
          <p className="mt-5 text-base leading-7 text-white/75">
            Explore our suite of AI-powered applications built to enhance productivity,
            creativity, wellness, and more.
          </p>
          <button className="mt-8 rounded-full border border-arcanta-gold px-6 py-3 text-sm font-semibold text-arcanta-gold transition hover:bg-arcanta-gold/10">
            View All Apps
          </button>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {appCards.map((app) => (
            <AppCard key={app.name} {...app} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedApps;
