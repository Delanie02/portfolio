export const metadata = {
  title: 'Ford BlueCruise | Delanie Heck — Product Design',
  description: 'Redesigning the subscription experience in FordPass to make subscriptions easier to find, understand, and activate.',
};

export default function FordBlueCruisePage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <div className="w-screen -mx-[calc((100vw-100%)/2)] bg-ocean-light overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center md:min-h-[420px] lg:min-h-[571px]">
          {/* Hero Text Content */}
          <div className="w-full md:w-1/2 flex items-center">
            <div className="flex flex-col gap-4 px-6 py-8 md:px-8 lg:px-12 lg:py-12 w-full md:text-left lg:text-right">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ocean-dark font-heading">
                Ford BlueCruise
              </h1>
              <div className="flex gap-2 text-sm md:text-base lg:text-base">
                <span className="font-bold text-ocean-dark">Role:</span>
                <span className="font-light text-ocean-dark">UX Manager</span>
              </div>
              <div className="flex gap-2 text-sm md:text-base lg:text-base">
                <span className="font-bold text-ocean-dark">Reach:</span>
                <span className="font-light text-ocean-dark">Over 55,000 user sessions/week</span>
              </div>
              <div className="flex gap-2 text-sm md:text-base lg:text-base">
                <span className="font-bold text-ocean-dark">Timeline:</span>
                <span className="font-light text-ocean-dark">3 months</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-[300px] md:w-1/2 md:h-[420px] lg:h-[571px] bg-ocean-light">
            <div className="absolute inset-0 bg-gradient-to-br from-ocean-mid to-ocean-dark opacity-20" />
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="px-6 md:px-8 lg:px-0 w-full">
        <div className="mx-auto max-w-4xl lg:max-w-6xl">
          {/* Challenge Section */}
          <section className="py-12 md:py-16 lg:py-24">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ocean-dark mb-6 font-heading">
              Challenge
            </h2>
            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-neutral-dark leading-relaxed">
              <p>
                Subscription products like BlueCruise, which enables drivers to drive hands free, are an important revenue driver for Ford. And yet, subscriptions were buried two layers deep within Ford's mobile app for consumers, FordPass. Beyond the discoverability issue, all of the subscriptions pages were in an outdated design system that didn't match the rest of the app and relied almost exclusively on text to explain the service.
              </p>
            </div>
          </section>

          {/* Approach Section */}
          <section className="py-12 md:py-16 lg:py-24 border-t border-neutral-mid">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ocean-dark mb-6 font-heading">
              Approach
            </h2>
            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-neutral-dark leading-relaxed">
              <p>
                As a UX Manager, I partnered with the subscriptions design team to make subscriptions easier to find, understand, and sign up for. First, I helped plan and co-facilitate a workshop with product, marketing, engineering, research, and design leads to align on the long term visions for subscriptions.
              </p>
              <p>
                As someone with introvert tendencies, I always strive to offer people lots of ways to contribute to discussions and decisions. For this workshop, I helped plan the activity flow and built a clear, visually organized Miro board that made it easy for participants to follow along and engage in whatever way felt most comfortable. It turns out that following UX best practices like providing multiple entry points, reducing cognitive load, and creating intuitive wayfinding result in workshops participants that are more excited and present contributors.
              </p>
            </div>

            {/* Testimonial */}
            <div className="mt-12 md:mt-16 lg:mt-20 p-6 md:p-8 bg-ocean-light bg-opacity-30 rounded-lg border-l-4 border-ocean-mid">
              <p className="text-lg md:text-xl italic text-ocean-dark font-light">
                "This is the most exciting and aesthetically pleasing workshop I have ever been to." — Product Manager
              </p>
            </div>
          </section>

          {/* Recommendations Section */}
          <section className="py-12 md:py-16 lg:py-24 border-t border-neutral-mid">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ocean-dark mb-6 font-heading">
              Recommendations
            </h2>
            <div className="space-y-6 md:space-y-8">
              <p className="text-base md:text-lg text-neutral-dark leading-relaxed">
                After the workshop, we were all aligned on moving forward with updates to the mobile app. The first and most impact decision we made was to move subscriptions out of the profile section and into the app's home screen. This drove a statistically significant increase in subscriptions traffic (+170%) and orders (+77%).
              </p>

              {/* Communicating Value Section */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-neutral-dark">
                  Communicating value at a glance
                </h3>
                <p className="text-base md:text-lg text-neutral-dark leading-relaxed">
                  Now that we had solved the discoverability issue, we shifted focus to updating the design to transform what had been walls of text into a clear, engaging explanation of the product.
                </p>
                <p className="text-base md:text-lg text-neutral-dark leading-relaxed font-semibold">
                  Key elements I introduced:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-neutral-dark leading-relaxed">
                  <li>A prominent hero image showing hands-free driving to communicate value instantly.</li>
                  <li>Value propositions broken into visual, scannable sections.</li>
                  <li>"How it works" content supported by simple illustrations.</li>
                  <li>Testimonials, FAQs, and payment details.</li>
                  <li>A more visual design aligned with the rest of the app's design system.</li>
                </ul>
              </div>

              {/* Simplifying Management Section */}
              <div className="space-y-4 pt-6 border-t border-neutral-mid">
                <h3 className="text-xl md:text-2xl font-bold text-neutral-dark">
                  Simplifying the subscriptions management experience
                </h3>
                <p className="text-base md:text-lg text-neutral-dark leading-relaxed">
                  Once subscribed, users needed a more intuitive way to manage and review their services. We learned through user research that customers often don't even know they have a free trial to some subscriptions like BlueCruise. With this in mind, I re-designed the manage page, focusing on:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-neutral-dark leading-relaxed">
                  <li>Clarifying and highlighting the plan status.</li>
                  <li>Surfacing actions above the fold.</li>
                  <li>Updating the design system to match the rest of the mobile app.</li>
                  <li>Ideating future-state gamification concepts.</li>
                </ul>
                <p className="text-base md:text-lg text-neutral-dark leading-relaxed italic pt-4">
                  When our user research partner tested these updated designs, participants described the flow as "a piece of cake," validating that we were headed in the right direction.
                </p>
              </div>

              {/* Design System Pivot Section */}
              <div className="space-y-4 pt-6 border-t border-neutral-mid">
                <h3 className="text-xl md:text-2xl font-bold text-neutral-dark">
                  Pivoting to a new design system
                </h3>
                <p className="text-base md:text-lg text-neutral-dark leading-relaxed">
                  After completing the entire set of flows in one design system, leadership decided we needed to re-do the work in the design system that the mobile app would be rolling out later in the year. While the system wasn't as fleshed out and required a few manual work arounds, overall I welcomed the pivot as the newer design system reflected a simpler, more streamlined visual design.
                </p>
              </div>
            </div>
          </section>

          {/* Impact Section */}
          <section className="py-12 md:py-16 lg:py-24 border-t border-neutral-mid">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ocean-dark mb-6 font-heading">
              Impact
            </h2>
            <div className="space-y-6 md:space-y-8">
              <p className="text-base md:text-lg text-neutral-dark leading-relaxed">
                Beyond the statistically significant increase in subscriptions traffic (+170%) and orders (+77%) we drove by surfacing the entry point on the app's homepage, my product details and manage re-designs showed clear improvements in terms of clarity and integration with the latest design system. When we shared the updated designs with design leadership, I was proud of the following feedback I received.
              </p>

              {/* Impact Testimonials */}
              <div className="space-y-6 md:space-y-8">
                <div className="p-6 md:p-8 bg-ocean-light bg-opacity-30 rounded-lg border-l-4 border-ocean-mid">
                  <p className="text-lg md:text-xl italic text-ocean-dark font-light">
                    "Amazing work. That was a glowing review." — Digital Product Design Lead
                  </p>
                </div>
                <div className="p-6 md:p-8 bg-ocean-light bg-opacity-30 rounded-lg border-l-4 border-ocean-mid">
                  <p className="text-lg md:text-xl italic text-ocean-dark font-light">
                    "This stuff looks so good. You should show the existing in there just for a cold bath of current reality." — FordPass Design Lead
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Next Project Link */}
          <section className="py-12 md:py-16 lg:py-24 border-t border-neutral-mid">
            <a
              href="/projects/capterra"
              className="inline-block text-lg md:text-xl font-bold text-ocean-dark hover:text-ocean-mid transition-colors"
            >
              ← Explore more of my work
            </a>
          </section>
        </div>
      </div>
    </main>
  );
}
