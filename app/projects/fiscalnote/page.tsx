export const metadata = {
  title: 'FiscalNote | Delanie Heck — Product Design',
  description: 'Leading a cross-functional team to envision a unified future-state product for FiscalNote.',
};

export default function FiscalNotePage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <div className="w-screen -mx-[calc((100vw-100%)/2)] bg-purple-light overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center md:min-h-[420px] lg:min-h-[571px]">
          {/* Hero Text Content */}
          <div className="w-full md:w-1/2 flex items-center">
            <div className="flex flex-col gap-4 px-6 py-8 md:px-8 lg:px-12 lg:py-12 w-full md:text-left lg:text-right">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-dark font-heading">
                FiscalNote
              </h1>
              <div className="flex gap-2 text-sm md:text-base lg:text-base">
                <span className="font-bold text-purple-dark">Role:</span>
                <span className="font-light text-purple-dark">UX Manager</span>
              </div>
              <div className="flex gap-2 text-sm md:text-base lg:text-base">
                <span className="font-bold text-purple-dark">Team:</span>
                <span className="font-light text-purple-dark">3 product managers, 2 designers, 1 user researcher, 1 data science lead</span>
              </div>
              <div className="flex gap-2 text-sm md:text-base lg:text-base">
                <span className="font-bold text-purple-dark">Reach:</span>
                <span className="font-light text-purple-dark">Thousands of B2B users</span>
              </div>
              <div className="flex gap-2 text-sm md:text-base lg:text-base">
                <span className="font-bold text-purple-dark">Timeline:</span>
                <span className="font-light text-purple-dark">5 months</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-[300px] md:w-1/2 md:h-[420px] lg:h-[571px] bg-purple-light">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-mid to-purple-dark opacity-20" />
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="px-6 md:px-8 lg:px-0 w-full">
        <div className="mx-auto max-w-4xl lg:max-w-6xl">
          {/* Challenge Section */}
          <section className="py-12 md:py-16 lg:py-24">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-purple-dark mb-6 font-heading">
              Challenge
            </h2>
            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-neutral-dark leading-relaxed">
              <p>
                As a UX Manager at FiscalNote, a policy tracking startup, I saw how its strategy of acquiring other companies and their products led to several pain points:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-neutral-dark leading-relaxed">
                <li>Increased development and maintenance costs.</li>
                <li>Increased time to deliver new features.</li>
                <li>Confusion around each product's unique value proposition and idiosyncrasies.</li>
                <li>Duplication of user effort managing information across siloed products.</li>
              </ul>
            </div>
          </section>

          {/* Approach Section */}
          <section className="py-12 md:py-16 lg:py-24 border-t border-neutral-mid">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-purple-dark mb-6 font-heading">
              Approach
            </h2>
            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-neutral-dark leading-relaxed">
              <p>
                I led a cross-functional team to envision a unified future-state product that would consolidate three siloed products (FiscalNote, CQ, and VoterVoice) into a single, integrated platform. This initiative required aligning product, design, research, and data science teams around a shared vision.
              </p>
              <p>
                My role involved:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-neutral-dark leading-relaxed">
                <li>Facilitating cross-functional workshops to identify core user needs across products.</li>
                <li>Synthesizing research and data insights into strategic product recommendations.</li>
                <li>Creating and iterating on conceptual designs and information architecture.</li>
                <li>Building buy-in across leadership and stakeholders for the long-term vision.</li>
              </ul>
            </div>
          </section>

          {/* Product Consolidation */}
          <section className="py-12 md:py-16 lg:py-24 border-t border-neutral-mid">
            <h2 className="text-xl md:text-2xl font-bold text-neutral-dark mb-6">
              Consolidating Three Products into One
            </h2>
            <div className="space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div className="p-4 md:p-6 bg-purple-light rounded-lg">
                  <h3 className="font-bold text-purple-dark text-base md:text-lg mb-2">FiscalNote</h3>
                  <p className="text-sm md:text-base text-neutral-dark">Policy tracking</p>
                </div>
                <div className="p-4 md:p-6 bg-purple-light rounded-lg">
                  <h3 className="font-bold text-purple-dark text-base md:text-lg mb-2">CQ</h3>
                  <p className="text-sm md:text-base text-neutral-dark">Policy Tracking</p>
                </div>
                <div className="p-4 md:p-6 bg-purple-light rounded-lg">
                  <h3 className="font-bold text-purple-dark text-base md:text-lg mb-2">VoterVoice</h3>
                  <p className="text-sm md:text-base text-neutral-dark">Advocacy campaigns</p>
                </div>
              </div>

              <p className="text-base md:text-lg text-neutral-dark leading-relaxed italic">
                This unified platform would enable users to easily track legislative activities, manage advocacy campaigns, and engage stakeholders—all in one place.
              </p>
            </div>
          </section>

          {/* Impact Section */}
          <section className="py-12 md:py-16 lg:py-24 border-t border-neutral-mid">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-purple-dark mb-8 font-heading">
              Impact
            </h2>
            <div className="space-y-6 md:space-y-8">
              <p className="text-base md:text-lg text-neutral-dark leading-relaxed">
                The strategic vision I developed became the blueprint for FiscalNote's product roadmap for the following 18 months. This work demonstrated the value of user-centered strategic thinking and helped the organization prioritize investments in consolidating their product offering.
              </p>

              <div className="p-6 md:p-8 bg-purple-light bg-opacity-40 rounded-lg border-l-4 border-purple-mid">
                <p className="text-lg md:text-xl italic text-purple-dark font-light">
                  "This vision work was essential in helping us understand what our unified product could look like and guided our engineering and product teams in prioritizing the right investments." — FiscalNote Leadership
                </p>
              </div>
            </div>
          </section>

          {/* Next Project Link */}
          <section className="py-12 md:py-16 lg:py-24 border-t border-neutral-mid">
            <a
              href="/projects/capterra"
              className="inline-block text-lg md:text-xl font-bold text-purple-dark hover:text-purple-mid transition-colors"
            >
              ← Explore more of my work
            </a>
          </section>
        </div>
      </div>
    </main>
  );
}
