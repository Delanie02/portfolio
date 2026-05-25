import Hero from '../../components/Hero';
import Quote from '../../components/Quote';
import ProjectCard from '../../components/ProjectCard';
import Image from 'next/image';
import ThreeImageRow from '../../components/ThreeImageRow';
import TwoImageGroup from '../../components/TwoImageGroup';
import NavProject from '../../components/navigation/NavProject';

export const metadata = {
  title: 'Rapid Prototype Testing | Delanie Heck — Product Design',
  description: 'Pioneering a rapid testing process to support continuous research and iteration across product teams.',
};

export default function RapidPrototypeTestingPage() {
  return (
    <>
        <NavProject theme="mist" />

        {/* Hero Section */}
        <Hero
            title="Rapid Prototype Testing"
            imageUrl="/images/rapid-prototype/hero.png"
            theme="mist"
            meta={{
                role: "Associate UX Director",
                team: "1 UX Researcher, 1 Product Designer, 1 Product Manager",
                reach: "9+ million monthly active users",
                timeline: "Every 2 weeks",
            }}
        />

        {/* All page content - centered wrapper */}
        <div className="max-w-[1280px] mx-auto px-6">
            {/* Challenge Section */}
            <section id="challenge" className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
                <h2 className="h3-bold text-mist-dark mb-6">
                Challenge
                </h2>
                <div className="body-base text-neutral-dark space-y-4">
                <p>
                    At Gartner, my team supported 18 product teams across three brands. We prioritized research studies on a project-by-project basis, rather than continuously for a given product area. This incentivized us to scope research initiatives broadly to ensure all our research questions were answered in one fell swoop, resulting in bigger, longer studies often involving larger, complex prototypes. In addition, the fact that we had no guaranteed capacity for a given product area disincentivized requests.
                </p>
                <p>
                    This bottleneck limited iteration on our designs and research's ability to inform meaningful design decisions over time or measure impact. We needed a faster, more sustainable way to deliver research—one that would integrate directly into the product development cycle and allow us to learn and act continuously.
                </p>
                </div>
            </section>

            {/* Process Diagram */}
            <div className="space-y-8 md:space-y-12 lg:space-y-12 pb-24 max-w-[980px] mx-auto">
  
                {/* Mobile SVG */}
                <div className="block md:hidden">
                <Image src="/images/rapid-prototype/3-steps-mobile.svg" alt="Process diagram" width={600} height={400} />
                </div>

                {/* Desktop SVG */}
                <div className="hidden md:block">
                <Image src="/images/rapid-prototype/3-steps.svg" alt="Process diagram" width={1200} height={600} />
                </div>
            </div>

            {/* My Role Section */}
            <section className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
                <h3 className="h5-bold text-mist-dark mb-6">
                My Role as a Design Leader
                </h3>
                <div className="space-y-4">
                    <p className="body-base text-neutral-dark">
                        As an Associate UX Director, I led this transformation across product areas by:
                    </p>
                    <ul className="list-disc list-outside pl-6 space-y-2 body-base text-neutral-dark">
                        <li>Partnering across product, design, and research to develop a scalable rapid testing process.</li>
                        <li>Coaching teams in shifting from waterfall-style studies to sprint-aligned research.</li>
                        <li>Defining the new process and pilot scope, and overseeing cross-functional rollouts.</li>
                        <li>Advocating for and socializing the program with executive stakeholders.</li>
                    </ul>
                </div>              
            </section>

            {/* Approach Section */}
            <section id="approach" className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
                <h2 className="h3-bold text-mist-dark mb-6 md:mb-6 lg:mb-6">
                Approach
                </h2>
                <div className="space-y-4">
                    <p className="body-base text-neutral-dark">
                        I partnered with product to launch and scale a new, rapid way of doing user research that worked in parallel with product development in order to support a more iterative product development process. Instead of testing large, multi-page flows, we scoped each test to 6–7 key questions and a single page or interaction. This allowed us to deliver results within one sprint.
                    </p>
                </div>
            </section>

            {/* Research Cycle Diagram */}
            <div className="space-y-8 md:space-y-12 lg:space-y-12 pb-24 max-w-[980px] mx-auto">
  
                {/* Mobile SVG */}
                <div className="block md:hidden">
                <Image src="/images/rapid-prototype/5-cycles-mobile.svg" alt="Process diagram" width={600} height={400} />
                </div>

                {/* Desktop SVG */}
                <div className="hidden md:block">
                <Image src="/images/rapid-prototype/5-cycles.svg" alt="Process diagram" width={1200} height={600} />
                </div>
            </div>

            {/* Example 1 Section */}
            <section id="recommendations" className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
                <h2 className="h3-bold text-mist-dark mb-6 md:mb-6 lg:mb-6">
                Examples and Recommendations
                </h2>
                <h3 className="h5-bold text-mist-dark mb-6">
                Example #1: Capterra Services
                </h3>
                <div className="space-y-4 body-base text-neutral-dark">
                    <p>
                        I piloted the new process with a newly formed team launching Capterra Services, a brand-new product line. We scoped our research questions so that we could provide results in a single sprint. We piloted three tests:
                    </p>
                    <ul className="list-disc list-outside pl-6 space-y-2">
                        <li>Pricing clarity on mobile</li>
                        <li>Desirability of a new mobile interface</li>
                        <li>Ability to add/remove service providers on mobile</li>
                    </ul>
                    <p>
                        Each test delivered clear insights in 10 business days or less, helping the team iterate quickly and confidently. Ultimately, we expected these designs to deliver better user experiences that will in turn increase vendor conversion rate.
                    </p>
                </div>
            </section>

            {/* Example 1 Images */}
            <div className="space-y-8 md:space-y-12 lg:space-y-12 pb-24 max-w-[980px] mx-auto">
                <ThreeImageRow
                items={[
                    {
                    header: "Mobile Test 1: June 2",
                    subheader: "How intuitive is mobile pricing data?",
                    src: "/images/rapid-prototype/CA Services Test 1.png",
                    alt: "A Capterra mobile screen showing vendor listings and pricing cost tabs used in the June 2 pricing data usability test.",
                    },
                    {
                    header: "Mobile Test 2: June 16",
                    subheader: "Is test 2's UX preferred over test 1?",
                    src: "/images/rapid-prototype/CA Services Test 2.png",
                    alt: "A Capterra mobile screen showing the updated mobile interface used in the June 16 usability test.",
                    },
                    {
                    header: "Mobile Test 3: June 28",
                    subheader: "How intuitive is the compare feature?",
                    src: "/images/rapid-prototype/CA Services Test 3.png",
                    alt: "A Capterra mobile screen showing the compare feature used in the June 28 usability test.",
                    },
                ]}
                />
            </div>          

            {/* Example 2 Section */}
            <section className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
                <h3 className="h5-bold text-mist-dark mb-6">
                Example #2: Software Advice Forms
                </h3>
                <div className="space-y-4 body-base text-neutral-dark">
                    <p>
                        I then scaled to a more established team, resulting in speeding up the ability for design to drive conversion and revenue impact. A traditional test this team ran took 7 weeks, focused on improving the trustworthiness of the forms that connect users to software advisors. While that test successfully improved conversion by 18%, we were looking to achieve similar results in less time. My new rapid testing program delivered learnings in 1.5 weeks, with a project impact of $1 million in net new revenue.
                    </p>
                </div>
            </section>

            {/* Example 2 Images */}
            <div className="flex flex-col gap-16 pb-24 max-w-[980px] mx-auto">
                {/* Traditional Tests */}
                <TwoImageGroup
                    images={[
                    {
                        src: "/images/rapid-prototype/PPL form traditional test 1.png",
                        alt: "...",
                        header: "Traditional Test 1",
                        subheader: "How trustworthy are current-state Software Advice forms?",
                    },
                    {
                        src: "/images/rapid-prototype/PPL form traditional test 2.png",
                        alt: "...",
                        header: "Traditional Test 2",
                        subheader: "How trustworthy are the re-designed Software Advice forms?",
                    },
                    ]}
                    captions={[
                    { label: "Timeline:", value: "7 weeks" },
                    { label: "Impact:", value: "18% increase in conversion (form submissions)" },
                    ]}
                />

                {/* Rapid Tests */}
                <TwoImageGroup
                    images={[
                    {
                        src: "/images/rapid-prototype/PPL form rapid test 1.png",
                        alt: "...",
                        header: "Rapid Test 1",
                        subheader: "How trustworthy are the forms on Capterra.com?",
                    },
                    {
                        src: "/images/rapid-prototype/PPL form rapid test 2.png",
                        alt: "...",
                        header: "Rapid Test 2",
                        subheader: "How trustworthy are the re-designed Capterra forms?",
                    },
                    ]}
                    captions={[
                    { label: "Timeline:", value: "1.5 weeks" },
                    { label: "Impact:", value: "$1 million in net new revenue" },
                    ]}
                />
            </div>

            {/* Example 3 Section */}
            <section className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
                <h3 className="h5-bold text-mist-dark mb-6">
                Example #3: Capterra Shortlist
                </h3>
                <div className="space-y-4 body-base text-neutral-dark">
                    <p>
                        I also scaled to a team with a different goal, demonstrating how the process works for a variety of teams and objectives. This team was focused on improving the usability and usefulness of the Capterra Shortlist. The last, traditional test ran on the Shortlist took eight weeks. After coaching the team on switching to a rapid testing model, the team saw an <b>18.6% increase in engagement</b> from the first test. While the second test was unsuccessful, the third test received more positive feedback. Each test was only 8 business days, showing how quickly the team could move on from a failed test and towards better, more successful experiences.
                    </p>
                </div>
            </section>

            {/* Example 3 Images */}
            <div className="flex flex-col gap-16 pb-24 max-w-[980px] mx-auto">
                <TwoImageGroup
                    images={[
                    {
                        src: "/images/rapid-prototype/Shortlist traditional test.png",
                        alt: "...",
                        header: "Shortlist Traditional Test",
                        subheader: "How useful is the Shortlist as is?",
                    },
                    {
                        src: "/images/rapid-prototype/Shortlist-rapid-test-1.jpg",
                        alt: "...",
                        header: "Shortlist Rapid Test 1",
                        subheader: "How useful are product cards alongside the Shortlist grid?",
                    },
                    ]}
                />

                <TwoImageGroup
                    images={[
                    {
                        src: "/images/rapid-prototype/Shortlist rapid test 2.png",
                        alt: "...",
                        header: "Shortlist Rapid Test 2",
                        subheader: "How useful is seeing other products outside of the Shortlist grid?",
                    },
                    {
                        src: "/images/rapid-prototype/Shortlist Rapid Test 3.png",
                        alt: "...",
                        header: "Shortlist Rapid Test 3",
                        subheader: "How useful are updated product cards alongside the Shortlist grid?",
                    },
                    ]}
                />
            </div>

            {/* Impact Section */}
            <section id="impact" className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
                <h2 className="h3-bold text-mist-dark mb-6 md:mb-6 lg:mb-6">
                Impact
                </h2>
                <div className="space-y-4 body-base text-neutral-dark">
                    <p>
                        The rapid testing program I launched and scaled allowed us to speed up time to insights without sacrificing  reliability or quality, enabling more iteration not just on the designs but on the our understanding of our users and what they need. 
                    </p>
                    <p>
                        After launching this new way of doing research, <b>we tripled the number of tests run quarter-over-quarter</b>. We gathered more user feedback than ever before, meaning our product teams were better positioned than ever before to make more user-centered decisions. Executive leadership recognized the program as a success in C-Suite and team-wide forums.   
                    </p>
                </div>
            </section>
            
            <div className="flex flex-col gap-16 pb-24 max-w-[784px] mx-auto">
                {/* Top decoration */}
                <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-8">
                <div className="flex-1 h-px bg-neutral-dark opacity-30" />
                <span className="text-2xl md:text-3xl text-mist-dark">⁂</span>
                <div className="flex-1 h-px bg-neutral-dark opacity-30" />
                </div>

                {/* Quotes */}
                <Quote
                text='"We were **really lucky to partner with Delanie** to pilot a new rapid prototype testing process which yielded really incredible results…These rapid tests helped us iterate quickly and design an easy-to-understand, intuitive experience for our users." – Product Manager'
                theme="mist"
                />
                <Quote
                text='The ability to be able to rapidly test prototypes needs to be an integral part of how we work. The quicker we learn, the quicker we can validate a hypothesis, the better our experiences will become. **Thanks Delanie for the rapid development of this new process**." – MVP, Product'
                theme="mist"
                />
                <Quote
                text='"**Shout out to Delanie for helping with research and testing**! It has been a tremendous help to concentrate on prototyping and get such valuable information and findings from user testing." – Product Designer'
                theme="mist"
                />
                <Quote
                text='"HUGE props for the entire process…**The thorough work and attention to detail is unparalleled**. The findings pushed us to quickly iterate on the product, and I am pumped as to where we have gotten, and where we will take these insights moving forward." – Product Manager'
                theme="mist"
                />
                {/* Bottom decoration */}
                <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-8">
                <div className="flex-1 h-px bg-neutral-dark opacity-30" />
                <span className="text-2xl md:text-3xl text-mist-dark">⁂</span>
                <div className="flex-1 h-px bg-neutral-dark opacity-30" />
                </div>
            </div>

            {/* Explore More of My Work Section */}
            <div className="py-12 md:py-16 lg:py-24">
                <h3 className="h3-bold text-neutral-dark mb-8 md:mb-12 lg:mb-12 text-center">
                Explore more of my work
                </h3>

                {/* Case Study Cards - Vertical Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-8">
                <ProjectCard
                    layout="vertical"
                    theme="sand"
                    title="Capterra"
                    description="Uncovering UX opportunity areas to reverse declining organic traffic and improve user retention for Capterra."
                    image="/images/capterra/cover.png"
                    href="/projects/capterra"
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
