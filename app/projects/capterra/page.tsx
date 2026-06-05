import Hero from '../../components/Hero';
import Quote from '../../components/Quote';
import ProjectCard from '../../components/ProjectCard';
import Image from 'next/image';
import TwoImageGroup from '@/app/components/TwoImageGroup';
import NavProject from '@/app/components/navigation/NavProject';

export const metadata = {
  title: 'Capterra | Delanie Heck — Product Design',
  description: 'Leading a cross-functional initiative to improve organic traffic and user retention for Capterra.',
};

export default function CapterraPage() {
  return (
    <>
        <NavProject theme="sand" />

        {/* Hero Section */}
        <Hero
            title="Capterra"
            imageUrl="/images/capterra/hero.png"
            theme="sand"
            meta={{
                role: "Associate UX Director",
                team: "5 UX professionals",
                reach: "9+ million monthly active users",
                timeline: "1 month",
            }}
        />

        {/* All page content - centered wrapper */}
        <div className="max-w-[1280px] mx-auto px-6">
            {/* Challenge Section */}
            <section id="challenge" className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
                <h2 className="h3-bold text-sand-dark mb-6">
                Challenge
                </h2>
                <div className="body-base text-neutral-dark space-y-4">
                <p>
                   Capterra was experiencing declining organic traffic and returning users. While teams across Product, SEO, and UX had ideas for improving performance, there was no shared understanding of which user experience investments would have the greatest impact.
                </p>
                <p>
                   As Associate Director of UX, I led a cross-functional effort to identify opportunities to improve trust, discoverability, and engagement in the parts of the product most critical to long-term growth.
                </p>
                </div>
            </section>

            {/* Approach Section */}
            <section id="approach" className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
                <h2 className="h3-bold text-sand-dark mb-6">
                Approach
                </h2>
                <div className="body-base text-neutral-dark space-y-4">
                <p>
                   To set my team up for success, I assembled and aligned a cross-functional group including Product Directors, SEO leaders, UX researchers, and executive stakeholders to ensure findings could translate into action.
                </p>
                </div>
            </section>

            {/* DACI Table Section */}
            <section className="py-6 md:py-12 lg:py-12 w-screen -mx-[calc((100vw-100%)/2)] bg-neutral-light overflow-x-auto">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-6">
                        {/* Drivers Column */}
                        <div>
                            <div className="border-b-2 border-sand-dark pb-4 mb-6">
                                <h5 className="h5-bold text-sand-dark text-center">Drivers</h5>
                            </div>
                            <div className="space-y-4">
                                <div className="flex gap-2 items-center">
                                    <div className="w-8 h-8 md:w-12 md:h-12 bg-sand-mid rounded-full flex-shrink-0 overflow-hidden relative border border-sand-dark">
                                            <Image
                                            src="/images/capterra/d1.png"
                                            alt="Senior UX Researcher"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>                     
                                    <p className="body-base text-sand-dark">Senior UX Researcher</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div className="w-8 h-8 md:w-12 md:h-12 bg-sand-mid rounded-full flex-shrink-0 overflow-hidden relative border border-sand-dark">
                                            <Image
                                            src="/images/capterra/d2.png"
                                            alt="UX Researcher"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <p className="body-base text-sand-dark">UX Researcher</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div className="w-8 h-8 md:w-12 md:h-12 bg-sand-mid rounded-full flex-shrink-0 overflow-hidden relative border border-sand-dark">
                                            <Image
                                            src="/images/capterra/d3.png"
                                            alt="UX Researcher"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <p className="body-base text-sand-dark">UX Researcher</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div className="w-8 h-8 md:w-12 md:h-12 bg-sand-mid rounded-full flex-shrink-0 overflow-hidden relative border border-sand-dark">
                                            <Image
                                            src="/images/capterra/d4.png"
                                            alt="UX Researcher"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <p className="body-base text-sand-dark">UX Researcher</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div className="w-8 h-8 md:w-12 md:h-12 bg-sand-mid rounded-full flex-shrink-0 overflow-hidden relative border border-sand-dark">
                                            <Image
                                            src="/images/capterra/d5.png"
                                            alt="UX Researcher"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <p className="body-base text-sand-dark">UX Researcher</p>
                                </div>
                            </div>
                        </div>

                        {/* Approver Column */}
                        <div>
                            <div className="border-b-2 border-sand-dark pb-4 mb-6">
                                <h5 className="h5-bold text-sand-dark text-center">Approver</h5>
                            </div>
                            <div className="space-y-4">
                                <div className="flex gap-2 items-center">
                                    <div className="w-8 h-8 md:w-12 md:h-12 bg-sand-mid rounded-full flex-shrink-0 overflow-hidden relative border border-sand-dark">
                                        <Image
                                            src="/images/capterra/me.jpg"
                                            alt="Associate Director, UX (me!)"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <p className="body-base  text-sand-dark">Associate Director, UX (me!)</p>
                                </div>
                            </div>
                        </div>

                        {/* Consulted Column */}
                        <div>
                            <div className="border-b-2 border-sand-dark pb-4 mb-6">
                                <h5 className="h5-bold text-sand-dark text-center">Consulted</h5>
                            </div>
                            <div className="space-y-4">
                                <div className="flex gap-2 items-center">
                                    <div className="w-8 h-8 md:w-12 md:h-12 bg-sand-mid rounded-full flex-shrink-0 overflow-hidden relative border border-sand-dark">
                                        <Image
                                            src="/images/capterra/c1.png"
                                            alt="Product Director"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <p className="body-base text-sand-dark">Product Director</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div className="w-8 h-8 md:w-12 md:h-12 bg-sand-mid rounded-full flex-shrink-0 overflow-hidden relative border border-sand-dark">
                                        <Image
                                            src="/images/capterra/c2.png"
                                            alt="Product Director"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <p className="body-base text-sand-dark">Product Director</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div className="w-8 h-8 md:w-12 md:h-12 bg-sand-mid rounded-full flex-shrink-0 overflow-hidden relative border border-sand-dark">
                                        <Image
                                            src="/images/capterra/c3.png"
                                            alt="SEO Manager"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <p className="body-base text-sand-dark">SEO Manager</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div className="w-8 h-8 md:w-12 md:h-12 bg-sand-mid rounded-full flex-shrink-0 overflow-hidden relative border border-sand-dark">
                                        <Image
                                            src="/images/capterra/c4.png"
                                            alt="SEO Senior Analyst"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <p className="body-base text-sand-dark">SEO Senior Analyst</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div className="w-8 h-8 md:w-12 md:h-12 bg-sand-mid rounded-full flex-shrink-0 overflow-hidden relative border border-sand-dark">
                                        <Image
                                            src="/images/capterra/c5.png"
                                            alt="SEO Analyst"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <p className="body-base text-sand-dark">SEO Analyst</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div className="w-8 h-8 md:w-12 md:h-12 bg-sand-mid rounded-full flex-shrink-0 overflow-hidden relative border border-sand-dark">
                                        <Image
                                            src="/images/capterra/c6.png"
                                            alt="SEO Analyst"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <p className="body-base 
                                    text-sand-dark">SEO Analyst</p>
                                </div>
                            </div>
                        </div>

                        {/* Informed Column */}
                        <div>
                            <div className="border-b-2 border-sand-dark pb-4 mb-6">
                                <h5 className="h5-bold text-sand-dark text-center">Informed</h5>
                            </div>
                            <div className="space-y-4">
                                <div className="flex gap-2 items-center">
                                    <div className="w-8 h-8 md:w-12 md:h-12 bg-sand-mid rounded-full flex-shrink-0 overflow-hidden relative border border-sand-dark">
                                        <Image
                                            src="/images/capterra/i1.png"
                                            alt="CPO"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <p className="body-base text-sand-dark">CPO</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div className="w-8 h-8 md:w-12 md:h-12 bg-sand-mid rounded-full flex-shrink-0 overflow-hidden relative border border-sand-dark">
                                        <Image
                                            src="/images/capterra/i2.png"
                                            alt="MVP, Product"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <p className="body-base text-sand-dark">MVP, Product</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div className="w-8 h-8 md:w-12 md:h-12 bg-sand-mid rounded-full flex-shrink-0 overflow-hidden relative border border-sand-dark">
                                        <Image
                                            src="/images/capterra/i3.png"
                                            alt="VP, SEO"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <p className="body-base text-sand-dark">VP, SEO</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div className="w-8 h-8 md:w-12 md:h-12 bg-sand-mid rounded-full flex-shrink-0 overflow-hidden relative border border-sand-dark">
                                        <Image
                                            src="/images/capterra/i4.png"
                                            alt="Associate Director, SEO"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <p className="body-base text-sand-dark">Associate Director, SEO</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div className="w-8 h-8 md:w-12 md:h-12 bg-sand-mid rounded-full flex-shrink-0 overflow-hidden relative border border-sand-dark">
                                        <Image
                                            src="/images/capterra/i5.png"
                                            alt="UX Manager"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <p className="body-base text-sand-dark">UX Manager</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div className="w-8 h-8 md:w-12 md:h-12 bg-sand-mid rounded-full flex-shrink-0 overflow-hidden relative border border-sand-dark">
                                        <Image
                                            src="/images/capterra/i6.png"
                                            alt="UX Manager"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <p className="body-base text-sand-dark">UX Manager</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Research Findings Section */}
            <section className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
                <div className="body-base text-neutral-dark space-y-6">
                    <p>
                        Once I identified stakeholders, I led my team in a one-month 110 participant study to identify where Capterra could improve in EEAT. We found that the most valuable parts of the site — reviews and comparisons — were among the least trustworthy or discoverable.
                    </p>
                </div>
            </section>

            {/* User Quotes Section */}
            <div className="flex flex-col gap-8 md:gap-12 lg:gap-12 pb-12 md:pb-24 lg:pb-24 max-w-[784px] mx-auto">
                <div className="flex gap-4 items-center">
                    <div className="flex-1 h-px bg-neutral-dark opacity-30" />
                    <span className="text-xl md:text-2xl text-sand-dark">⁂</span>
                    <div className="flex-1 h-px bg-neutral-dark opacity-30" />
                </div>

                <Quote
                    text={`"They may not allow negative reviews, for example, to be posted on their site. So depending on the sources of the information, I\'m not sure that this site is trustworthy and my gut instinct tells me it is not trustworthy."`}
                    theme="sand"
                />

                <Quote
                    text={`"I kind of had to click at random before I found this [compare] page."`}
                    theme="sand"
                />

                <div className="flex gap-4 items-center">
                    <div className="flex-1 h-px bg-neutral-dark opacity-30" />
                    <span className="text-xl md:text-2xl text-sand-dark">⁂</span>
                    <div className="flex-1 h-px bg-neutral-dark opacity-30" />
                </div>
            </div>

            {/* Recommendations Section */}
            <section className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
                <h2 className="h3-bold text-sand-dark mb-6">
                Recommendations
                </h2>
                <div className="body-base text-neutral-dark space-y-4">
                    <p>
                        Based on our study's results and in close collaboration with our SEO partners, we recommended the following changes that challenged existing assumptions about conversion optimization and business priorities in favor of long-term trust and organic growth.
                    </p>
                </div>
            </section>

            {/* Recommendation #1 */}
            <section className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
                <h3 className="h4-bold text-sand-dark mb-4">Recommendation #1: Improve reviews discoverability</h3>
                <div className="body-base text-neutral-dark">
                    <p>
                        First, we recommended improving the discoverability of the most valuable Capterra content — reviews. In particular, we proposed iterating on product pages so that when users land on them, they know immediately that the site offers an easy way for them to find reviews from people like them — it's not just a place to read a canned product description.
                    </p>
                </div>
            </section>

            {/* Before/After Images #1 */}
            <div className="flex flex-col gap-16 pb-24 max-w-[980px] mx-auto">
                <TwoImageGroup
                    images={[
                    {
                        src: "/images/capterra/CA profile current state.png",
                        alt: "Screenshot of FiscalNote, a policy tracking software. The screenshot shows the search functionality with filter options.",
                        header: "Before: Reviews lack prominency.",
                    },
                    {
                        src: "/images/capterra/CA profile proposed no outline.png",
                        alt: "Screenshot of CQ, a policy tracking software. The screenshot shows the bill analysis page.",
                        header: "Proposed: Reviews are brought to the forefront.",
                    },
                    ]}
                />
            </div>

            {/* Recommendation #2 */}
            <section className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
                <h3 className="h4-bold text-sand-dark mb-4">Recommendation #2: Improve comparisons discoverability</h3>
                <div className="body-base text-neutral-dark">
                    <p>
                        Secondly, we recommended improving the discoverability of comparisons. We proposed making comparing always accessible through the navigation bar so users wouldn't have to hunt for this valuable feature.
                    </p>
                </div>
            </section>

            {/* Comparison Image */}
            <div className="flex flex-col gap-4 pb-12 md:pb-24 lg:pb-24 max-w-[980px] mx-auto">
                <p className="body-base-bold text-neutral-dark text-center">Proposed: Comparing is always accessible through the nav bar.</p>
                <div className="relative w-full aspect-[13/9] border border-neutral-mid">
                    <Image
                        src="/images/capterra/CA compare proposed no outline.png"
                        alt="Proposed: Comparing is always accessible through the nav bar"
                        fill
                        className="object-cover rounded"
                    />
                </div>
            </div>

            {/* Recommendation #3 */}
            <section className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
                <h3 className="h4-bold text-sand-dark mb-4">Recommendation #3: Improve transparency</h3>
                <div className="body-base text-neutral-dark">
                    <p>
                        Finally, we recommended improving transparency. While there was risk to conversion in experimenting with bolder, more prominent transparency into Capterra's business model, we couldn't maintain the status quo and expect sessions to stop declining.
                    </p>
                </div>
            </section>

            {/* Before/After Images #2 */}
            <div className="flex flex-col gap-16 pb-24 max-w-[980px] mx-auto">
                <TwoImageGroup
                    images={[
                    {
                        src: "/images/capterra/CA article current state no outline.png",
                        alt: "Screenshot of FiscalNote, a policy tracking software. The screenshot shows the search functionality with filter options.",
                        header: "Before: Affiliate links are not clearly identified as such.",
                    },
                    {
                        src: "/images/capterra/CA article proposed no exclude.png",
                        alt: "Screenshot of CQ, a policy tracking software. The screenshot shows the bill analysis page.",
                        header: "Proposed: Affiliate links are addressed up front.",
                    },
                    ]}
                />
            </div>

            {/* Driving Alignment Section */}
            <section className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
                <h2 className="h3-bold text-sand-dark mb-6">Driving alignment</h2>
                <div className="body-base text-neutral-dark space-y-4">
                    <p>
                        Because the recommendations would require support across Product, SEO, and executive leadership, I treated stakeholder alignment as a primary workstream rather than a final presentation milestone. Via the highlighted steps below, I proactively sought feedback from the stakeholders I identified early and often. This approach shifted the final readout from a debate about whether the findings were credible to a discussion about which recommendations to prioritize.
                    </p>
                </div>
            </section>

            {/* Process Steps */}
            <div className="py-12 md:py-16 lg:py-24 max-w-[1280px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8 lg:gap-8">
                    <div className="lg:col-span-2 bg-white rounded-lg p-6 md:p-8 shadow-sm border border-neutral-light">
                        <div className="text-3xl mb-4">📋</div>
                        <h4 className="h5-bold text-sand-dark mb-2">Planning | July 31</h4>
                        <ul className="body-sm text-neutral-dark space-y-2 list-disc list-outside pl-4">
                            <li>Share the completed research plan with stakeholders for feedback.</li>
                            <li>Share the research plan at demo and/or via Slack.</li>
                            <li>Refine the research plan based on feedback.</li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2 bg-white rounded-lg p-6 md:p-8 shadow-sm border border-neutral-light">
                        <div className="text-3xl mb-4">🚀</div>
                        <h4 className="h5-bold text-sand-dark mb-2">Executing | Aug 3</h4>
                        <ul className="body-sm text-neutral-dark space-y-2 list-disc list-outside pl-4">
                            <li>Conduct an internal dry-run with stakeholders.</li>
                            <li>Update the research plan based on feedback.</li>
                            <li>Launch test.</li>
                            <li>Share video links with stakeholders.</li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2 bg-white rounded-lg p-6 md:p-8 shadow-sm border border-neutral-light">
                        <div className="text-3xl mb-4">🔬</div>
                        <h4 className="h5-bold text-sand-dark mb-2">Analyzing | Aug 7</h4>
                        <ul className="body-sm text-neutral-dark space-y-2 list-disc list-outside pl-4">
                            <li>Analyze quantitative data.</li>
                            <li>Analyze qualitative data.</li>
                            <li>Create and share insights with stakeholders.</li>
                            <li>Update insights based on feedback.</li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2 lg:col-start-2 bg-white rounded-lg p-6 md:p-8 shadow-sm border border-neutral-light">
                        <div className="text-3xl mb-4">✍️</div>
                        <h4 className="h5-bold text-sand-dark mb-2">Synthesizing | Aug 21</h4>
                        <ul className="body-sm text-neutral-dark space-y-2 list-disc list-outside pl-4">
                            <li>Draft synthesis.</li>
                            <li>Share the draft synthesis with stakeholders.</li>
                            <li>Update synthesis based on stakeholder input.</li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2 bg-white rounded-lg p-6 md:p-8 shadow-sm border border-neutral-light">
                        <div className="text-3xl mb-4">📢</div>
                        <h4 className="h5-bold text-sand-dark mb-2">Sharing | Aug 28</h4>
                        <ul className="body-sm text-neutral-dark space-y-2 list-disc list-outside pl-4">
                            <li>Lead share-out.</li>
                            <li>Post links to the share-out recording and synthesis in Slack.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Impact Section */}
            <section id="impact" className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
                <h2 className="h3-bold text-sand-dark mb-6">Impact</h2>
                <div className="body-base text-neutral-dark space-y-4 mb-12">
                    <p>
                        My efforts to build consensus throughout the project paid off. The study became the foundation for a broader effort to improve trust and content quality across Capterra. Two of the three primary recommendations were implemented, including a redesign that elevated user reviews as the primary focus of product pages and the introduction of transparency disclosures across much of the site. The recommendations contributed to improvements in search visibility while influencing how teams across Product, UX, and SEO approached trust and transparency going forward.
                    </p>
                </div>
            </section>

            {/* Final Designs Image */}
            <div className="flex flex-col gap-4 pb-12 md:pb-24 lg:pb-24 max-w-[980px] mx-auto">
                <p className="body-base-bold font-semibold text-neutral-dark text-center">Final Designs: Affiliate links are addressed up front, and reviews content is rightfully the primary focus.</p>
                <div className="relative w-full]">
                    <Image
                        src="/images/capterra/hero.png"
                        alt="Final Designs showing affiliate links addressed and reviews as primary focus"
                        width={1300}
                        height={900}
                        className="object-cover rounded"
                    />
                </div>
            </div>

            {/* Quotes Section */}
            <div className="flex flex-col gap-8 md:gap-12 lg:gap-12 pb-12 md:pb-24 lg:pb-24 max-w-[784px] mx-auto">
                <div className="flex gap-4 items-center">
                    <div className="flex-1 h-px bg-neutral-dark opacity-30" />
                    <span className="text-xl md:text-2xl text-sand-dark">⁂</span>
                    <div className="flex-1 h-px bg-neutral-dark opacity-30" />
                </div>

                <Quote
                    text='"Shout out to the entire team for the benchmark study! SO much **great digestible data** and information. It really is inspiring the amount of work and the teamwork that went into this. Bravo!" — UX Designer'
                    theme="sand"
                />

                <Quote
                    text='"Fantastic presentation, Delanie! Tough message transported with what I thought was a **great mix of urgency and constructive comments** and suggestions." — SEO Manager'
                    theme="sand"
                />
  
                <Quote
                    text={`"Shout out to Delanie and team for the amazing work on benchmark testing. It\'s super impressive the **breadth and depth** you went into across the product. I think the insights and presentation are very timely." — UX Manager`}
                    theme="sand"
                />
 
                <div className="flex gap-4 items-center">
                    <div className="flex-1 h-px bg-neutral-dark opacity-30" />
                    <span className="text-xl md:text-2xl text-sand-dark">⁂</span>
                    <div className="flex-1 h-px bg-neutral-dark opacity-30" />
                </div>
            </div>

            {/* Explore More of My Work Section */}
            <div className="py-12 md:py-16 lg:py-24">
                <h3 className="h3-bold text-neutral-dark mb-8 md:mb-12 lg:mb-12 text-left md:text-center">
                Explore more of my work
                </h3>

                {/* Case Study Cards - Vertical Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-8">
                <ProjectCard
                    layout="vertical"
                    theme="mist"
                    title="Rapid Prototype Testing"
                    description="Piloting a rapid and continuous way of doing research that tripled user tests run quarter-over-quarter."
                    image="/images/rapid-prototype/cover.png"
                    href="/projects/rapid-prototype-testing"
                />
                <ProjectCard
                    layout="vertical"
                    theme="purple"
                    title="FiscalNote"
                    description="I led a cross-functional team to envision a unified future-state unified product for FiscalNote, a B2B policy tracking SaaS company."
                    image="/images/fiscalnote/cover.png"
                    href="/projects/fiscalnote"
                />
                <ProjectCard
                    layout="vertical"
                    theme="ocean"
                    title="Ford BlueCruise"
                    description="Redesigning the subscription experience in FordPass to help customers find, learn about, and activate services."
                    image="/images/ford-bluecruise/cover.png"
                    href="/projects/ford-bluecruise"
                />
                </div>
            </div>
        </div>
    </>  
  );
}
