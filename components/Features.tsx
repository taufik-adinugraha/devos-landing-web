export default function Features() {
  const features = [
    {
      title: 'Standardization',
      description:
        'Consistent patterns across all your repos. DevOS learns your conventions and enforces them automatically, so every service follows the same architecture, testing, and deployment practices.',
      icon: '📐',
    },
    {
      title: 'Speed',
      description:
        'Ship features in minutes, not days. Automated code generation, instant previews, and intelligent CI/CD pipelines mean your team moves faster without sacrificing quality.',
      icon: '⚡',
    },
    {
      title: 'Automation',
      description:
        'Let AI handle the repetitive work. From scaffolding new services to maintaining dependencies, DevOS agents work 24/7 to keep your infrastructure modern and your team focused on building.',
      icon: '🤖',
    },
  ];

  return (
    <section className="bg-white px-6 py-20 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Why DevOS?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 md:text-xl">
            Three pillars that transform how your team ships software.
          </p>
        </div>
        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-3xl">
                {feature.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-4 text-base text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
