import Hero from '../../components/Hero';
import Quote from '../../components/Quote';
import ProjectCard from '../../components/ProjectCard';
import Image from 'next/image';
import TwoImageGroup from '../../components/TwoImageGroup';
import ThreeImageRow from '../../components/ThreeImageRow';
import NavProject from '../../components/navigation/NavProject';
import FourImageTimeline from '../../components/FourImageTimeline';

export const metadata = {
  title: 'Ford BlueCruise | Delanie Heck — Product Design',
  description: 'Redesigning the subscription experience in FordPass to make subscriptions easier to find, understand, and activate.',
};

export default function FordBlueCruisePage() {
  return (
    <>
        <NavProject theme="ocean" />

        {/* Hero Section */}
        <Hero
            title="Ford BlueCruise"
            imageUrl="/images/ford-bluecruise/hero.png"
            theme="ocean"
            meta={{
                role: "UX Manager",
                team: "1 PMs, 2 designers, 1 UX researcher",
                reach: "Over 55,000 user sessions/week",
                timeline: "3 months",
            }}
        />

        {/* All page content - centered wrapper */}
        <div className="max-w-[1280px] mx-auto px-6">
            {/* Challenge Section */}
            <section id="challenge" className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
                <h2 className="h3-bold text-ocean-dark mb-6">
                Challenge
                </h2>
                <div className="body-base text-neutral-dark space-y-4">
                <p>
                   Subscription products like BlueCruise, which enables drivers to drive hands free, are an important revenue driver for Ford. And yet, subscriptions were buried two layers deep within Ford’s mobile app for consumers, FordPass. Beyond the discoverability issue, all of the subscriptions pages were in an outdated design system that didn’t match the rest of the app and relied almost exclusively on text to explain the service. 
                </p>
                </div>
            </section>

            {/* Product Images */}
            <div className="flex flex-col gap-16 pb-24 max-w-[980px] mx-auto">
                <FourImageTimeline
                    columns={4}
                    images={[
                    {
                        src: "/images/ford-bluecruise/FordPass Home.png",
                        alt: "Mobile screenshot of the FordPass home screen. The screen has a bottom navigation bar with icons for vehicle, energy, and service.",
                    },
                    {
                        src: "/images/ford-bluecruise/FordPass Account.png",
                        alt: "Mobile screenshot of the FordPass account screen. The screen shows the user's settings and other services.",
                    },
                    {
                        src: "/images/ford-bluecruise/FordPass BlueCruise.png",
                        alt: "Mobile screenshot of the FordPass BlueCruise screen.",
                    },
                    {
                        src: "/images/ford-bluecruise/FordPass Manage.png",
                        alt: "Mobile screenshot of the FordPass Manage screen.",
                    },
                    ]}
                    captionGroups={[
                        // 👇 Left bracket — spans first two images
                        [
                        { label: "Before:", value: "The app hid subscriptions within the Account page" },
                        ],
                        // 👇 Right bracket — spans last two images
                        [
                        { label: "Before:", value: "The subscriptions pages' design system was outdated" },
                        ],
                    ]}
                />
            </div>

            {/* Approach Section */}
            <section id="approach" className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
                <h2 className="h3-bold text-ocean-dark mb-6 md:mb-6 lg:mb-6">
                Approach
                </h2>
                <div className="space-y-4 body-base text-neutral-dark">
                    <p>
                        As a UX Manager, I partnered with the subscriptions design team to make subscriptions easier to find, understand, and sign up for. First, I helped plan and co-facilitate a workshop with product, marketing, engineering, research, and design leads to align on the long term vision for subscriptions. 
                    </p>
                    <p>
                        I always strive to offer people lots of ways to contribute to discussions and decisions. For this workshop, I helped plan the activity flow and built a clear, visually organized Miro board that made it easy for participants to follow along and engage in whatever way felt most comfortable. By following UX best practices like providing multiple entry points, reducing cognitive load, and creating intuitive wayfinding, I sucessfully designed a workshop that resulted in more excited and present participants.
                    </p>
                </div>
            </section>

            <div className="flex flex-col gap-16 pb-24 max-w-[784px] mx-auto">
                {/* Top decoration */}
                <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-8">
                <div className="flex-1 h-px bg-neutral-dark opacity-30" />
                <span className="text-2xl md:text-3xl text-ocean-dark">⁂</span>
                <div className="flex-1 h-px bg-neutral-dark opacity-30" />
                </div>

                {/* Quotes */}
                <Quote
                text='"This is the most exciting and aesthetically pleasing workshop I have ever been to." — Product Manager'
                theme="ocean"
                />

                {/* Bottom decoration */}
                <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-8">
                <div className="flex-1 h-px bg-neutral-dark opacity-30" />
                <span className="text-2xl md:text-3xl text-ocean-dark">⁂</span>
                <div className="flex-1 h-px bg-neutral-dark opacity-30" />
                </div>
            </div>

            <section id="recommendations" className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
                <h2 className="h3-bold text-ocean-dark mb-6 md:mb-6 lg:mb-6">
                Recommendations
                </h2>
                <div className="space-y-4 body-base text-neutral-dark mb-12">
                    <p>
                        After the workshop, we were all aligned on moving forward with updates to the mobile app. The first and most impactful decision we made was to move subscriptions out of the profile section and into the app’s home screen. This drove a statistically significant increase in subscriptions traffic (+170%) and orders (+77%). 
                    </p>
                </div>
                <h3 className="h4-bold text-ocean-dark mb-6">
                    Communicating value at a glance
                </h3>
                <div className="space-y-4 body-base text-neutral-dark">
                    <p>
                        Now that we had solved the discoverability issue, we shifted focus to updating the design to transform what had been walls of text into a clear, engaging explanation of the product. 
                    </p>
                    <p className="mb-4">
                        Key elements I introduced:
                    </p>
                </div>
                <ul className="list-disc list-outside pl-6 space-y-2 body-base text-neutral-dark">
                    <li>
                        A prominent hero image showing hands-free driving to communicate value instantly.
                    </li>
                    <li>
                        Value propositions broken into visual, scannable sections.
                        </li>
                    <li>
                        “How it works” content supported by simple illustrations
                    </li>
                    <li>
                        Testimonials, FAQs, and payment details.
                    </li>
                    <li>
                        A more visual design aligned with the rest of the app’s design system.
                    </li>
                </ul>
            </section>

            {/* Phoenix Images */}
            <div className="space-y-8 md:space-y-12 lg:space-y-12 pb-24 max-w-[980px] mx-auto">
                <ThreeImageRow
                items={[
                    {
                        header: "After: A hero image communicates the offering instantly",
                        src: "/images/ford-bluecruise/Phoenix-home.png",
                        alt: "A mock-up of a BlueCruise home screen.",
                        subheader: ''
                    },
                    {
                        header: "After: Value propositions are easy to scan and understand.",
                        src: "/images/ford-bluecruise/Value Props.png",
                        alt: "A mock-up of a screen showing the benefits of BlueCruise.",
                        subheader: ''
                    },
                    {
                        header: "After: “How it works” explains the offering with simple illustrations.",
                        src: "/images/ford-bluecruise/How It Works.png",
                        alt: "A mock-up of a screen showing the 'How It Works' section of BlueCruise page on a mobile device.",
                        subheader: ''
                    },
                ]}
                />
            </div>  

            <section className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
                <h3 className="h4-bold text-ocean-dark mb-6">
                    Simplifying the subscriptions management experience
                </h3>
                <div className="space-y-4 body-base text-neutral-dark mb-4">
                    <p>
                        Once subscribed, users needed a more intuitive way to manage and review their services. We learned through user research that customers often don’t even know they have a free trial to some subscriptions like BlueCruise. With this in mind, I re-designed the manage page, focusing on:
                    </p>
                </div>
                <ul className="list-disc list-outside pl-6 space-y-2 body-base text-neutral-dark mb-4">
                    <li>
                        Clarifying and highlighting the plan status.
                    </li>
                    <li>
                        Surfacing actions above the fold.
                    </li>
                    <li>
                        Updating the design system to match the rest of the mobile app.
                    </li>
                    <li>
                        Ideating future-state gamification concepts.
                    </li>
                </ul>
                <div className="space-y-4 body-base text-neutral-dark">
                    <p>
                        When our user research partner tested these updated designs, participants described the  flow as “a piece of cake,” validating that we were headed in the right direction. 
                    </p>
                </div>
            </section>

            {/* Progress Images */}
            <div className="space-y-8 md:space-y-12 lg:space-y-12 pb-24 max-w-[980px] mx-auto">
                <ThreeImageRow
                items={[
                    {
                        header: "Before",
                        src: "/images/ford-bluecruise/FordPass Manage.png",
                        alt: "The original BlueCruise home screen.",
                        subheader: ''
                    },
                    {
                        header: "MVP",
                        src: "/images/ford-bluecruise/MVP.png",
                        alt: "A mock-up of a screen showing the manage screen for BlueCruise.",
                        subheader: ''
                    },
                    {
                        header: "Future State",
                        src: "/images/ford-bluecruise/future-state.png",
                        alt: "A mock-up of a screen showing a future state BlueCruise screen, with streaks, stats, and gamificaiton elements",
                        subheader: ''
                    },
                ]}
                />
            </div>  

            <section className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
                <h3 className="h4-bold text-ocean-dark mb-6">
                    Pivoting to a new design system
                </h3>
                <div className="space-y-4 body-base text-neutral-dark">
                    <p>
                        After completing the entire set of flows in one design system, leadership decided we needed to re-do the work in the design system that the mobile app would be rolling out later in the year. While the system wasn’t as fleshed out and required a few manual work arounds, overall I welcomed the pivot as the newer design system reflected a simpler, more streamlined visual design. 
                    </p>
                </div>
            </section>

            {/* Orion Images */}
            <div className="flex flex-col gap-16 pb-24 max-w-[980px] mx-auto">
                <FourImageTimeline
                    columns={4}
                    images={[
                    {
                        src: "/images/ford-bluecruise/Phoenix-home.png",
                        alt: "Mobile screenshot of the BlueCruise screen.",
                    },
                    {
                        src: "/images/ford-bluecruise/Ford Blue Cruise Manage Phoenix.png",
                        alt: "Mobile screenshot of the manage page for BlueCruise.",
                    },
                    {
                        src: "/images/ford-bluecruise/Orion-home.png",
                        alt: "Mobile screenshot of an updated FordPass BlueCruise screen.",
                    },
                    {
                        src: "/images/ford-bluecruise/Manage - Orion.png",
                        alt: "Mobile screenshot of an updated FordPass Manage screen.",
                    },
                    ]}
                    captionGroups={[
                        // 👇 Left bracket — spans first two images
                        [
                        { label: "", value: "Before" },
                        ],
                        // 👇 Right bracket — spans last two images
                        [
                        { label: "", value: "After" },
                        ],
                    ]}
                />
            </div>

            {/* Impact Section */}
            <section id="impact" className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
                <h2 className="h3-bold text-ocean-dark mb-6 md:mb-6 lg:mb-6">
                Impact
                </h2>
                <div className="space-y-4 body-base text-neutral-dark">
                    <p>
                        Beyond the statistically significant increase in subscriptions traffic (+170%) and orders (+77%) we drove by surfacing the entry point on the app’s homepage, my product details and manage re-designs showed clear improvements in terms of clarity and integration with the latest design system. When we shared the updated designs with design leadership, I was proud of the following feedback I received. 
                    </p>
                </div>
            </section>
            
            <div className="flex flex-col gap-16 pb-24 max-w-[784px] mx-auto">
                {/* Top decoration */}
                <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-8">
                <div className="flex-1 h-px bg-neutral-dark opacity-30" />
                <span className="text-2xl md:text-3xl text-ocean-dark">⁂</span>
                <div className="flex-1 h-px bg-neutral-dark opacity-30" />
                </div>

                {/* Quotes */}
                <Quote
                text='“Amazing work. That was a glowing review.” — Digital Product Design Lead.'
                theme="ocean"
                />
                <Quote text='“This stuff looks so good. You should show the existing in there just for a cold bath of current reality.” — FordPass Design Lead.'

                theme="ocean"
                />

                {/* Bottom decoration */}
                <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-8">
                <div className="flex-1 h-px bg-neutral-dark opacity-30" />
                <span className="text-2xl md:text-3xl text-ocean-dark">⁂</span>
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
                <ProjectCard
                    layout="vertical"
                    theme="purple"
                    title="FiscalNote"
                    description="I led a cross-functional team to envision a unified future-state unified product for FiscalNote, a B2B policy tracking SaaS company."
                    image="/images/fiscalnote/cover.png"
                    href="/projects/fiscalnote"
                />
                {/* <ProjectCard
                    layout="vertical"
                    theme="ocean"
                    title="Ford BlueCruise"
                    description="Redesigning the subscription experience in FordPass to help customers find, learn about, and activate services."
                    image="/images/ford-bluecruise/cover.png"
                    href="/projects/ford-bluecruise"
                /> */}
                </div>
            </div>
        </div>
    </>  
  );
}