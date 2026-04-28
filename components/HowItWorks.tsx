export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Connect your repository',
      description:
        'Install the DevOS GitHub App and grant access to your repos. No code changes required—DevOS works with your existing Git workflow.',
    },
    {
      number: '02',
      title: 'AI analyzes your codebase',
      description:
        'Our agents read your architecture, understand your patterns, and learn your team's conventions. They map dependencies, detect frameworks, and create a knowledge graph.',
    },
    {
      number: '03',
      title: 'Automated workflows deploy',
      description:
        'Push a branch and DevOS spins up a preview environment. Merge to main and production deploys automatically. Every commit is tested, built, and shipped.',
    },
    {
      number: '04',
      title: 'Continuous monitoring & optimization',
      description:
        'DevOS agents watch for errors, security issues, and performance regressions. They suggest fixes, open PRs, and keep your infrastructure up to date.',
    },
  ];

  return (
    <section className="bg-gray-50 px-6 py-20 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 md:text-xl">
            From first commit to production in four simple steps.
          </p>
        </div>
        <div className="mt-16 space-y-12 md:space-y-16">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="flex flex-col gap-6 md:flex-row md:gap-12"
            >
              <div className="flex-shrink-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white md:h-20 md:w-20">
                  {step.number}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 md:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-base text-gray-600 md:text-lg">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
