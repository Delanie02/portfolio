'use client';

import Hero from '../components/Hero';
import Quote from '../components/Quote';
import ProjectCard from '../components/ProjectCard';
import NavSimple from '../components/navigation/NavSimple';

export default function About() {
  return (
    <>
      <NavSimple />

      {/* Hero Section */}
      <Hero
        title="About Me,"
        subtitle="Delanie Heck"
        imageUrl="/images/about/Me-shadow.png"
        theme="purple"
      />
        {/* All page content - centered wrapper */}
        <div className="max-w-[780px] mx-auto px-6">
            {/* About Me Content Section */}
            <div className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
                {/* Professional Background */}
                <section className="mb-12 md:mb-12 lg:mb-12">
                <h3 className="h3-bold text-purple-mid mb-6">
                    Professional background
                </h3>
                <p className="body-base text-neutral-dark">
                    I am a product design leader with over twelve years of experience managing teams of designers and researchers in organizations ranging from startups to Fortune 500s, in industries spanning international development, finance, SaaS, and automotive. I am unique in that I've spent the majority of my career in management positions, often in player-coach roles where I've had the good fortune to hone both my leadership and craft skills simultaneously.
                </p>
                </section>

                {/* How I got into UX */}
                <section className="mb-12 md:mb-12 lg:mb-12">
                <h5 className="h5-bold text-neutral-dark mb-6">
                    How I got into UX
                </h5>
                <p className="body-base text-neutral-dark">
                    After spending a year in Uganda crafting eLearning courses for health practitioners, I moved to DC for a role at an international development startup managing a team of three designers and $600,000 in eLearning projects for clients such as USAID and UNICEF. I knew I wanted to deepen my UX skills, so I enrolled Carnegie Mellon University and got my Masters in Design for Interactions.
                </p>
                </section>

                {/* Career Highlights */}
                <section className="mb-12 md:mb-12 lg:mb-12">
                <h5 className="h5-bold text-neutral-dark mb-6">
                    Career highlights
                </h5>
                <div className="space-y-4">
                    <p className="body-base text-neutral-dark">
                    Upon moving back to DC, I worked for Fannie Mae as a design strategist. I am still proud of the mortgage insurance service blueprints I co-created with customers there, and the onboarding resource I designed as a result that helped to raise deliveries from $30 to over $110 million in five months.
                    </p>
                    <p className="body-base text-neutral-dark">
                    After Fannie Mae, I worked for FiscalNote, which at the time was a late stage B2B policy tracking SaaS startup. There I built up a team of designers and researchers, scaled user research recruitment from 29 per year to over 170 per year, and led a strategic initiative to envision a net new unified product in collaboration with product, design, and data science leads.
                    </p>
                    <p className="body-base text-neutral-dark">
                    I had the good fortune to have everyone reporting to me at FiscalNote follow me over to Gartner, where I grew our team to six to support 18 product teams across three websites with over nine million active monthly users. My team's insights led to a 20% increase in form submissions, a 41% increase in chat revenue, and a 76% increase in feature engagement.
                    </p>
                </div>
                </section>

                {/* Where I'm at now */}
                <section className="mb-12 md:mb-12 lg:mb-12">
                <h5 className="h5-bold text-neutral-dark mb-6">
                    Where I'm at now
                </h5>
                <p className="body-base text-neutral-dark">
                    Currently, I manage UX designers at Ford Motor Company. I am proud of my team's payments platform re-design, which powers Ford's mobile app, Ford.com, in-vehicle infotainment systems, and more. I also worked directly with Ford's mobile app team to redesign how customers sign up for and manage subscriptions, leading to an 170% increase in traffic and 77% increase in orders. Most recently, I've transitioned to a role that oversees the product our commercial customers use to get financing and make payments on their vehicles.
                </p>
                </section>

                {/* What keeps me going */}
                <section className="mb-12 md:mb-12 lg:mb-12">
                <h5 className="h5-bold text-neutral-dark mb-6">
                    What keeps me going
                </h5>
                <div className="space-y-4">
                    <p className="body-base text-neutral-dark">
                    In every organization and industry I've worked in, I've taken pride in building environments where my team feels supported, challenged, and fulfilled in their work. As for me, my most fulfilling roles have been ones where I am able to mentor and advocate for my team while developing close collaborative relationships across product and engineering.
                    </p>
                    <p className="body-base text-neutral-dark">
                    I am also driven by the desire to learn new things. I consider myself lucky to be in a field where I am challenged to learn how different businesses operate, how to best leverage and evolve various design systems, and, of course, how our ever evolving tool belt as UX practitioners can transform our craft.
                    </p>
                </div>
                </section>
            </div>

            {/* How Others Describe Me Section */}
            <div className="py-12 md:py-16 lg:py-24">
                <h3 className="h3-bold text-purple-mid mb-6 md:mb-8 lg:mb-12">
                How others describe me
                </h3>
                <p className="body-base text-neutral-dark mb-12 md:mb-16 lg:mb-16">
                Below are some quotes I've gotten from performance reviews and LinkedIn recommendations.
                </p>

                {/* Quotes */}
                <div className="space-y-8 md:space-y-12 lg:space-y-12">
                <div className="flex items-center gap-4 md:gap-6 lg:gap-6 mb-8 md:mb-12 lg:mb-12">
                    <div className="flex-1 h-px bg-neutral-dark opacity-30" />
                    <span className="text-2xl md:text-3xl lg:text-3xl text-purple-dark">⁂</span>
                    <div className="flex-1 h-px bg-neutral-dark opacity-30" />
                </div>

                <Quote
                    text='"Her **focus, guidance, and clarity have been instrumental** in establishing our new team and defining priorities. Her feedback is consistently clear, actionable, and demonstrates a strong ability to understand and address the needs of the users."'
                    theme="purple"
                />
                <Quote
                    text={`"She doesn't just disagree – she always provides careful and balanced facts to support her stance so that **decisions are made transparently**."`}
                    theme="purple"
                />
                <Quote
                    text={`"Delanie's management skills are truly unparalleled, and her **unwavering commitment to her team** and her craft has been instrumental in my professional growth."`}
                    theme="purple"
                />

                <div className="flex items-center gap-4 md:gap-6 lg:gap-6 mt-8 md:mt-12 lg:mt-12">
                    <div className="flex-1 h-px bg-neutral-dark opacity-30" />
                    <span className="text-2xl md:text-3xl lg:text-3xl text-purple-dark">⁂</span>
                    <div className="flex-1 h-px bg-neutral-dark opacity-30" />
                </div>
                </div>
            </div>

            {/* Outside of Work Section */}
            <div className="py-12 md:py-12 lg:py-12">
                <h3 className="h3-bold text-purple-mid mb-8 md:mb-12 lg:mb-12">
                Outside of work
                </h3>
                <p className="body-base text-neutral-dark mb-8 md:mb-12 lg:mb-12">
                When I'm not designing, I enjoy spending time outside, cooking, trying new restaurants, and catching up with friends and family. I also took up running after adopting a high-energy border collie mix named Pepper, and have since finished two marathons. She has turned out to be quite the personal trainer!
                </p>

                {/* Three Portrait Images Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-8">
                <div className="relative h-[300px] md:h-[280px] lg:h-[340px] rounded-lg overflow-hidden">
                    <img
                    src="/images/about/Pepper-crop-2.jpeg"
                    alt="Outside of work"
                    className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative h-[300px] md:h-[280px] lg:h-[340px] rounded-lg overflow-hidden">
                    <img
                    src="/images/about/MCM-monument.jpeg"
                    alt="Outside of work"
                    className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative h-[300px] md:h-[280px] lg:h-[340px] rounded-lg overflow-hidden">
                    <img
                    src="/images/about/Pepper-pemi.jpeg"
                    alt="Outside of work"
                    className="w-full h-full object-cover"
                    />
                </div>
                </div>
            </div>

            {/* Explore More of My Work Section */}
            <div className="py-12 md:py-16 lg:py-24 border-t border-neutral-mid">
                <h3 className="h3-bold text-purple-mid mb-8 md:mb-12 lg:mb-12">
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
