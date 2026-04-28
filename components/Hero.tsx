import WaitlistForm from './WaitlistForm';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white px-6 py-20 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
            DevOps automation that
            <br />
            <span className="text-blue-600">understands your codebase</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl md:text-2xl">
            Ship code faster with AI-powered DevOps. Automated workflows,
            intelligent agents, and Git-native tools that work with your
            existing setup.
          </p>
          <div className="mt-10 flex justify-center">
            <WaitlistForm />
          </div>
          <p className="mt-4 text-sm text-gray-500">
            No credit card required. Get early access.
          </p>
        </div>
      </div>
    </section>
  );
}
