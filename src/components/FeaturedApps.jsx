import AppCard from './AppCard';

const appCards = [
  {
    name: 'WolfKrow',
    subtitle: 'AI Workflow Builder',
    description:
      'Platform for automating large-scale AI prompt workflows, featuring caching, variable-based parameterization, multi-run execution, image/file attachments, and automated storage of generated text outputs.',
    image: '/assets/WFlogo.PNG',
    imageLink: 'https://wolfkrow.onrender.com',
    accentColor: 'rgba(220, 38, 38, 0.55)',
  },
  {
    name: 'BluSwan',
    subtitle: 'AI Code Assistant',
    description:
      'Ship clean code faster with context-aware suggestions, review workflows, and tooling integrations.',
    image: '/assets/BSlogo.PNG',
    imageLink: 'https://bluswan.vercel.app',
    accentColor: 'rgba(59, 130, 246, 0.55)',
  },
  {
    name: 'Wisp',
    subtitle: 'Open-Web Research API',
    description:
      'Research the open web with one API. Search, extract, crawl, and synthesize any corner of the internet. No vendor lock-in, no black boxes.',
    image: '/assets/WISPlogo.PNG',
    imageLink: 'https://wisp-rouge.vercel.app',
    accentColor: 'rgba(139, 92, 246, 0.55)',
  },
  {
    name: 'MCAT Mastery',
    subtitle: 'AI-Powered MCAT Prep Platform',
    description:
      'High-quality AI-powered MCAT prep platform with real-time progress tracking, personalized practice sessions targeting weak areas, and full-length exam simulations.',
    image: '/assets/Mcatlogo.PNG',
    imageLink: 'https://mcatmastery.vercel.app',
    accentColor: 'rgba(148, 163, 184, 0.55)',
  },
  {
    name: 'CopyAI',
    subtitle: 'Prompt Management Module',
    description:
      'Prompt management module enabling instantaneous copying and reuse of large, structured context prompts to optimize high-throughput AI content workflows.',
    image: '/assets/Cailogo.jpg',
    imageLink: 'https://www.copyai.space',
    accentColor: 'rgba(124, 58, 237, 0.55)',
  },
  {
    name: 'Corpus',
    subtitle: 'PDF-to-JSONL Trainer',
    description:
      'Combine PDFs into a high-quality training JSONL. Optionally attach an existing dataset — new content is deduplicated against it automatically.',
    image: '/assets/CORPlogo.jpg',
    imageLink: 'https://corpus-peach.vercel.app',
    accentColor: 'rgba(6, 182, 212, 0.55)',
  },
];

function FeaturedApps() {
  return (
    <section className="section-shell py-12 md:py-24">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.65fr] lg:gap-10">

        {/* Section header */}
        <div className="max-w-md">
          <p className="eyebrow">FEATURED AI APPS</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:mt-4 sm:text-4xl">
            Intelligent apps.
            <br />
            Infinite possibilities.
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/75 sm:mt-5 sm:text-base">
            Explore our suite of AI-powered applications built to enhance productivity,
            creativity, wellness, and more.
          </p>
          <button className="mt-6 rounded-full border border-arcanta-gold px-6 py-3 text-sm font-semibold text-arcanta-gold transition hover:bg-arcanta-gold/10 active:scale-95 sm:mt-8">
            View All Apps
          </button>
        </div>

        {/* App cards — single column list on mobile, 2-col grid on sm+ */}
        <div className="flex flex-col gap-3 sm:grid sm:grid-cols-2 sm:gap-5">
          {appCards.map((app) => (
            <AppCard key={app.name} {...app} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedApps;
