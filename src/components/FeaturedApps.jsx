import AppCard from './AppCard';

const appCards = [
  {
    name: 'WolfKrow',
    subtitle: 'AI Workflow Builder',
    description:
      'Platform for automating large-scale AI prompt workflows, featuring caching, variable-based parameterization, multi-run execution, image/file attachments, and automated storage of generated text outputs.',
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
    name: 'Wisp',
    subtitle: 'Open-Web Research API',
    description:
      'Research the open web with one API. Search, extract, crawl, and synthesize any corner of the internet. No vendor lock-in, no black boxes.',
    image: '/assets/WISPlogo.PNG',
    imageLink: 'https://wisp-rouge.vercel.app',
  },
  {
    name: 'CopyAI',
    subtitle: 'Prompt Management Module',
    description:
      'Prompt management module enabling instantaneous copying and reuse of large, structured context prompts to optimize high-throughput AI content workflows.',
    image: '/assets/Cailogo.jpg',
    imageLink: 'https://www.copyai.space',
  },
  {
    name: 'Corpus',
    subtitle: 'PDF-to-JSONL Trainer',
    description:
      'Combine PDFs into a high-quality training JSONL. Optionally attach an existing dataset — new content is deduplicated against it automatically.',
    image: '/assets/CORPlogo.jpg',
    imageLink: 'https://corpus-peach.vercel.app',
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
