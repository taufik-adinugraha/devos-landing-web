import WaitlistForm from './WaitlistForm';

export default function FinalCTA() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-20 md:py-24 lg:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          Ready to ship faster?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100 md:text-xl">
          Join hundreds of engineering teams using DevOS to automate their
          workflows and focus on what matters—building great products.
        </p>
        <div className="mt-10 flex justify-center">
          <WaitlistForm />
        </div>
        <p className="mt-4 text-sm text-blue-200">
          Early access is limited. Join the waitlist to reserve your spot.
        </p>
      </div>
    </section>
  );
}
