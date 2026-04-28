export default function SocialProof() {
  const testimonials = [
    {
      quote:
        'DevOS cut our deployment time from hours to minutes. The AI agents understand our codebase better than some of our junior devs.',
      author: 'Sarah Chen',
      role: 'VP Engineering, TechCorp',
    },
    {
      quote:
        'We went from 3 manual releases per week to continuous deployment. DevOS handles the entire pipeline—we just write code.',
      author: 'Marcus Johnson',
      role: 'CTO, StartupXYZ',
    },
    {
      quote:
        'The standardization alone saved us weeks of onboarding time. Every new service follows the same patterns, automatically.',
      author: 'Elena Rodriguez',
      role: 'Lead Developer, DataFlow',
    },
  ];

  return (
    <section className="bg-white px-6 py-20 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Trusted by Teams Worldwide
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 md:text-xl">
            See what engineering leaders are saying about DevOS.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-lg bg-gray-50 p-8 shadow-sm"
            >
              <p className="text-base italic text-gray-700 md:text-lg">
                "{testimonial.quote}"
              </p>
              <div className="mt-6">
                <p className="font-semibold text-gray-900">
                  {testimonial.author}
                </p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
