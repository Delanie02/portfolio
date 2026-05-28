import Hero from '../../components/Hero';
import Quote from '../../components/Quote';
import ProjectCard from '../../components/ProjectCard';
import Image from 'next/image';
import TwoImageGroup from '@/app/components/TwoImageGroup';
import NavProject from '@/app/components/navigation/NavProject';

export const metadata = {
  title: 'FiscalNote | Delanie Heck — Product Design',
  description: 'Leading a cross-functional team to envision a unified future-state product for FiscalNote.',
};

export default function FiscalNotePage() {
  return (
    <>
        <NavProject theme="purple" />

        {/* Hero Section */}
        <Hero
            title="FiscalNote"
            imageUrl="/images/fiscalnote/hero.png"
            theme="purple"
            meta={{
                role: "UX Manager",
                team: "3 PMs, 3 designers, & 1 engineer",
                reach: "Thousands of B2B users",
                timeline: "5 months",
            }}
        />

        {/* All page content - centered wrapper */}
        <div className="max-w-[1280px] mx-auto px-6">
            {/* Challenge Section */}
            <section id="challenge" className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
                <h2 className="h3-bold text-purple-dark mb-6">
                Challenge
                </h2>
                <div className="body-base text-neutral-dark space-y-4">
                <p>
                   As a UX Manager at FiscalNote, a policy tracking startup, I saw how its strategy of acquiring other companies and their products led to several pain points:
                </p>
                <ul className="list-disc list-outside pl-6 space-y-2 body-base text-neutral-dark">
                    <li>Increased development and maintenance costs.</li>
                    <li>Increased time to deliver new features.</li>
                    <li>Confusion around each product's unique value proposition and idiosyncrasies.</li>
                    <li>Duplication of user effort managing information across siloed products.</li>
                </ul>
                </div>
            </section>

            {/* Product Images Images */}
            <div className="flex flex-col gap-16 pb-24 max-w-[980px] mx-auto">
                <TwoImageGroup
                    images={[
                    {
                        src: "/images/fiscalnote/FiscalNote search.png",
                        alt: "Screenshot of FiscalNote, a policy tracking software. The screenshot shows the search functionality with filter options.",
                        header: "FiscalNote",
                        subheader: "Policy tracking software",
                    },
                    {
                        src: "/images/fiscalnote/CQ.jpg",
                        alt: "Screenshot of CQ, a policy tracking software. The screenshot shows the bill analysis page.",
                        header: "CQ",
                        subheader: "...also policy tracking software",
                    },
                    ]}
                />

                <TwoImageGroup
                    images={[
                    {
                        src: "/images/fiscalnote/VV.jpg",
                        alt: "Screenshot of VoterVoice, an advocacy campaign software used by advocacy organizations. The screenshot shows a campaign creation flow with form fields for legislative session, bill selection, and criteria to target officials.",
                        header: "VoterVoice",
                        subheader: "Advocacy campaign software",
                    },
                    {
                        src: "/images/fiscalnote/CQEngage.png",
                        alt: "Screenshot of CQ Engage, a policy advocacy campaign software used by advocacy organizations. The screenshot shows a campaign creation flow with form fields for campaign name and type.",
                        header: "Engage",
                        subheader: "...also advocacy campaign software",
                    },
                    ]}
                />
            </div>

            {/* Approach Section */}
            <section id="approach" className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
                <h2 className="h3-bold text-purple-dark mb-6 md:mb-6 lg:mb-6">
                Approach
                </h2>
                <div className="space-y-4">
                    <p className="body-base text-neutral-dark">
                        To envision a unified future-state, I led a cross-functional team of product managers, engineers, and designers through the design process. 
                    </p>
                </div>
            </section>

            {/* Double Diamond Diagram */}
            <div className="space-y-8 md:space-y-12 lg:space-y-12 pb-24 max-w-[980px] mx-auto">
  
                {/* Mobile: Text list */}
                <div className="block sm:hidden">
                    {[
                    { title: 'Discover', text: "I challenged existing assumptions about user needs by journey mapping users' jobs, pain points, tools, and collaborators with 30 users." },
                    { title: 'Define', text: 'I partnered with data science to create a dashboard of NLP findings. Using these findings as inputs, I co-created service blueprints and value proposition canvases with product, engineering, sales, and design.' },
                    { title: 'Develop', text: 'Based on these learnings, I led a design sprint with product, design, and engineering to generate a prototype of the unified experience.' },
                    { title: 'Deliver', text: 'I tested the prototype with users, which I used along with product, design, and engineering feedback to refine the prototype into a final concept.' },
                    ].map((item, index, arr) => (
                    <div key={item.title}>
                        <div className="py-6">
                        <p className="h5-bold mb-2 text-neutral-dark">{item.title}</p>
                        <p className="body-base text-neutral-dark">{item.text}</p>
                        </div>
                        {/* Dotted divider — skip after last item */}
                        {index < arr.length - 1 && (
                        <div className="border-b border-dotted border-neutral-dark opacity-40" />
                        )}
                    </div>
                    ))}
                </div>

                {/* Tablet PNG */}
                <div className="hidden sm:block md:hidden lg:hidden">
                <Image src="/images/fiscalnote/double-diamond-vertical.png" alt="Process diagram" width={600} height={400} />
                </div>

                {/* Desktop PNG */}
                <div className="hidden md:block">
                <Image src="/images/fiscalnote/double-diamond-horizontal.png" alt="Process diagram" width={1200} height={600} />
                </div>
            </div>

            <section className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
                <h3 className="h5-bold text-purple-dark mb-6">
                Storytelling that resonates
                </h3>
                <div className="space-y-4 body-base text-neutral-dark">
                    <p>
                        After pitching our final unified concept to the C-Suite, we socialized these needs with the rest of the company via comics. I wrote the comic copy, and a designer on my team illustrated them. Each comic leveraged a Knights of the Round Table analogy to help people immediately connect with each distinct user role. Each comic strip linked to video clips from real users, creating a memorable company-wide resource on what our users need.
                    </p>
                </div>
            </section>

            {/* Comics */}
            <div className="flex flex-col gap-16 pb-24 max-w-[980px] mx-auto">
                <TwoImageGroup
                    images={[
                    {
                        src: "/images/fiscalnote/Lance.png",
                        alt: "...",
                        header: "Advocacy",
                        subheader: "Lancelot",
                    },
                    {
                        src: "/images/fiscalnote/Merlin.png",
                        alt: "...",
                        header: "Researcher/Analyst",
                        subheader: "Merlin",
                    },
                    ]}
                />

                <TwoImageGroup
                    images={[
                    {
                        src: "/images/fiscalnote/Morgan.png",
                        alt: "...",
                        header: "Government Affairs",
                        subheader: "Morgan La Fey",
                    },
                    {
                        src: "/images/fiscalnote/Arthur.png",
                        alt: "...",
                        header: "Communications/Public Affairs",
                        subheader: "King Arthur",
                    },
                    ]}
                />
            </div>

            <section id="recommendations" className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
                <h3 className="h5-bold text-purple-dark mb-6">
                Making the business case
                </h3>
                <div className="space-y-4 body-base text-neutral-dark">
                    <p>
                        Beyond meeting user needs, I reiterated the business benefits of the unified concept:
                    </p>
                    <ul className="list-disc list-outside pl-6 space-y-2 body-base text-neutral-dark">
                        <li>Reduced development time and costs.</li>
                        <li>Increased average contract value.</li>
                        <li>Reduced churn.</li>
                        <li>Ability for customer success to focus more on strategic rather than tactical support.</li>
                    </ul>
                </div>
            </section>

            {/* NGP image */}
            <div className="flex flex-col gap-16 pb-24 max-w-[980px] mx-auto">
                <div className="relative w-full h-full min-h-[338px]">
                <Image
                    src="/images/fiscalnote/NGP.png"
                    alt="Visual of the unified concept, which combines the best of FiscalNote, CQ, VoterVoice and Engage into a single product. The image shows a talking points document open for editing, with a right rail of highlights from a selected bill."
                    width={980}
                    height={800}
                    className="object-cover"
                />
                </div>
            </div>

            {/* Impact Section */}
            <section id="impact" className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
                <h2 className="h3-bold text-purple-dark mb-6 md:mb-6 lg:mb-6">
                Impact
                </h2>
                <div className="space-y-4 body-base text-neutral-dark">
                    <p>
                        Overall, users and executives were excited about the concept. The CPO called the concept the “best output I've seen in my career.” However, while the concept was strong, it was risky to change the status quo. Some customers were hesitant about the change in workflow the unified concept implied. Ultimately, the company decided to split the difference and unify two (FiscalNote and CQ) out of the four products into what is now sold as PolicyNote. 
                    </p>
                </div>
            </section>
            
            <div className="flex flex-col gap-16 pb-24 max-w-[784px] mx-auto">
                {/* Top decoration */}
                <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-8">
                <div className="flex-1 h-px bg-neutral-dark opacity-30" />
                <span className="text-2xl md:text-3xl text-purple-dark">⁂</span>
                <div className="flex-1 h-px bg-neutral-dark opacity-30" />
                </div>

                {/* Quotes */}
                <Quote
                text='“I would rate other systems on the market today a 1 out of 5, because they don’t have the collaborative element... They didn’t have many, if any, of the features that you’ve got here... this one page when you’ve got everything and you can just flip through it.”'
                theme="purple"
                />
                <Quote text={`"I'm going to say extremely valuable and it would just... have to hit me at the right time of the year. So as soon as the legislature’s over, and then I have months before the legislature starts again, I could transition and integrate this."`}

                theme="purple"
                />

                {/* Bottom decoration */}
                <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-8">
                <div className="flex-1 h-px bg-neutral-dark opacity-30" />
                <span className="text-2xl md:text-3xl text-purple-dark">⁂</span>
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
                    theme="sand"
                    title="Capterra"
                    description="Uncovering UX opportunity areas to reverse declining organic traffic and improve user retention for Capterra."
                    image="/images/capterra/cover.png"
                    href="/projects/capterra"
                />
                <ProjectCard
                    layout="vertical"
                    theme="mist"
                    title="Rapid Prototype Testing"
                    description="Piloting a rapid and continuous way of doing research that tripled user tests run quarter-over-quarter."
                    image="/images/rapid-prototype/cover.png"
                    href="/projects/rapid-prototype-testing"
                />
                {/* <ProjectCard
                    layout="vertical"
                    theme="purple"
                    title="FiscalNote"
                    description="I led a cross-functional team to envision a unified future-state unified product for FiscalNote, a B2B policy tracking SaaS company."
                    image="/images/fiscalnote/cover.png"
                    href="/projects/fiscalnote"
                /> */}
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

