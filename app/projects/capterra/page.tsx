export const metadata = {
  title: 'Capterra | Delanie Heck — Product Design',
  description: 'Leading a cross-functional initiative to improve organic traffic and user retention for Capterra.',
};

export default function CapterraPage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <div className="w-screen -mx-[calc((100vw-100%)/2)] bg-sand-light overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center md:min-h-[420px] lg:min-h-[571px]">
          {/* Hero Text Content */}
          <div className="w-full md:w-1/2 flex items-center">
            <div className="flex flex-col gap-4 px-6 py-8 md:px-8 lg:px-12 lg:py-12 w-full md:text-left lg:text-right">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-sand-dark font-heading">
                Capterra
              </h1>
              <div className="flex gap-2 text-sm md:text-base lg:text-base">
                <span className="font-bold text-sand-dark">Role:</span>
                <span className="font-light text-sand-dark">Associate Director, UX</span>
              </div>
              <div className="flex gap-2 text-sm md:text-base lg:text-base">
                <span className="font-bold text-sand-dark">Team:</span>
                <span className="font-light text-sand-dark">5 UX professionals</span>
              </div>
              <div className="flex gap-2 text-sm md:text-base lg:text-base">
                <span className="font-bold text-sand-dark">Reach:</span>
                <span className="font-light text-sand-dark">9+ million monthly active users</span>
              </div>
              <div className="flex gap-2 text-sm md:text-base lg:text-base">
                <span className="font-bold text-sand-dark">Timeline:</span>
                <span className="font-light text-sand-dark">1 month</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-[300px] md:w-1/2 md:h-[420px] lg:h-[571px] bg-sand-light">
            <div className="absolute inset-0 bg-gradient-to-br from-sand-mid to-sand-dark opacity-20" />
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="px-6 md:px-8 lg:px-0 w-full">
        <div className="mx-auto max-w-4xl lg:max-w-6xl">
          {/* Challenge Section */}
          <section className="py-12 md:py-16 lg:py-24">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-sand-dark mb-6 font-heading">
              Challenge
            </h2>
            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-neutral-dark leading-relaxed">
              <p>
                Capterra's sessions and return users were in decline, primarily due to diminished visibility in search engine results like Google. Reliance on paid advertising was unsustainable, necessitating a strategic pivot to improve organic reach and user retention.
              </p>
              <p>
                We knew from a survey my team ran that most users came to the site to compare software and returned to write reviews, but their satisfaction with the site's UX was a mixed bag. We also knew through collaboration with our search engine optimization (SEO) partners that Google's algorithm rewards sites with high EEAT (Experience, Expertise, Authority, and Trust). If we figured out how to improve the EEAT of our comparison and reviews experiences — the most valuable parts of the site — we should see increased organic and return user sessions over time.
              </p>
            </div>
          </section>

          {/* Approach Section */}
          <section className="py-12 md:py-16 lg:py-24 border-t border-neutral-mid">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-sand-dark mb-6 font-heading">
              Approach
            </h2>
            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-neutral-dark leading-relaxed">
              <p>
                In order to set my team up for success, I first identified the stakeholders that would need to take ownership of our recommendations.
              </p>
            </div>

            {/* DACI Table */}
            <div className="mt-12 md:mt-16 lg:mt-20 overflow-x-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 min-w-[600px]">
                {/* Drivers Column */}
                <div className="space-y-4">
                  <h3 className="text-sm md:text-base font-bold text-sand-dark border-b-2 border-sand-dark pb-3 text-center">
                    Drivers
                  </h3>
                  <div className="space-y-4">
                    <div className="text-sm md:text-base text-neutral-dark font-semibold">
                      Senior UX Researcher
                    </div>
                    <div className="text-sm md:text-base text-neutral-dark font-semibold">
                      UX Researcher
                    </div>
                    <div className="text-sm md:text-base text-neutral-dark font-semibold">
                      UX Researcher
                    </div>
                    <div className="text-sm md:text-base text-neutral-dark font-semibold">
                      UX Researcher
                    </div>
                    <div className="text-sm md:text-base text-neutral-dark font-semibold">
                      UX Researcher
                    </div>
                  </div>
                </div>

                {/* Approver Column */}
                <div className="space-y-4">
                  <h3 className="text-sm md:text-base font-bold text-sand-dark border-b-2 border-sand-dark pb-3 text-center">
                    Approver
                  </h3>
                  <div className="text-sm md:text-base text-neutral-dark font-semibold">
                    Associate Director, UX (me!)
                  </div>
                </div>

                {/* Consulted Column */}
                <div className="space-y-4">
                  <h3 className="text-sm md:text-base font-bold text-sand-dark border-b-2 border-sand-dark pb-3 text-center">
                    Consulted
                  </h3>
                  <div className="space-y-4 text-sm md:text-base">
                    <div className="text-neutral-dark font-semibold">Product Director</div>
                    <div className="text-neutral-dark font-semibold">Product Director</div>
                    <div className="text-neutral-dark font-semibold">SEO Manager</div>
                    <div className="text-neutral-dark font-semibold">SEO Senior Analyst</div>
                    <div className="text-neutral-dark font-semibold">SEO Analyst</div>
                  </div>
                </div>

                {/* Informed Column */}
                <div className="space-y-4">
                  <h3 className="text-sm md:text-base font-bold text-sand-dark border-b-2 border-sand-dark pb-3 text-center">
                    Informed
                  </h3>
                  <div className="space-y-4 text-sm md:text-base">
                    <div className="text-neutral-dark font-semibold">CPO</div>
                    <div className="text-neutral-dark font-semibold">MVP, Product</div>
                    <div className="text-neutral-dark font-semibold">VP, SEO</div>
                    <div className="text-neutral-dark font-semibold">Associate Director, SEO</div>
                    <div className="text-neutral-dark font-semibold">UX Manager</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Next Project Link */}
          <section className="py-12 md:py-16 lg:py-24 border-t border-neutral-mid">
            <a
              href="/projects/rapid-prototype-testing"
              className="inline-block text-lg md:text-xl font-bold text-sand-dark hover:text-sand-mid transition-colors"
            >
              ← Explore more of my work
            </a>
          </section>
        </div>
      </div>
    </main>
  );
}
