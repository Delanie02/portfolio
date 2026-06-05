import Hero from '../components/Hero';
import Quote from '../components/Quote';
import ProjectCard from '../components/ProjectCard';
import NavSimple from '../components/navigation/NavSimple';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'About | Delanie Heck',
  description: 'Learn more about Delanie Heck, a product design leader with over twelve years of experience managing teams of designers and researchers in organizations ranging from startups to Fortune 500s, in industries spanning international development, finance, SaaS, and automotive.',
};

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
        imagePosition="left"
      />
        {/* All page content - centered wrapper */}
        <div className="max-w-[780px] mx-auto px-6">
            {/* About Me Content Section */}
            <div className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
                {/* Professional Background */}
                <section className="mb-12 md:mb-12 lg:mb-12">
                <h3 className="h3-bold text-purple-mid mb-6">
                    I build healthy, high-performing design organizations.
                </h3>
                <p className="body-base text-neutral-dark">
                    Over the last 12 years I've led research and design teams across startups and Fortune 500 companies alike. My strength is helping teams succeed in complex environments by creating clarity, building trust, and scaling effective ways of working.
                </p>
                </section>

                {/* How I got into UX */}
                <section className="mb-12 md:mb-12 lg:mb-12">
                <h5 className="h4-bold text-purple-mid mb-6">
                    What teams hire me to do
                </h5>
                <p className="body-base text-neutral-dark">
                    <ul className="list-disc list-outside pl-6 space-y-2 body-base text-neutral-dark">
                        <li className="mb-4">
                            <p className="body-base-bold mb-2">
                                Navigate ambiguous environments
                            </p>
                            <p>
                                I help teams define priorities, align stakeholders, and make progress when requirements, ownership, or direction are unclear.
                            </p>
                        </li>
                        <li className="mb-4">
                            <p className="body-base-bold mb-2">
                                Scale design organizations
                            </p>
                            <p>
                                I establish processes, feedback loops, and operating models that help teams grow without sacrificing quality.
                            </p>
                        </li>
                        <li className="mb-4">
                            <p className="body-base-bold mb-2">
                                Develop designers into leaders
                            </p>
                            <p>
                                I enjoy coaching designers through career growth, increasing their influence, and helping them navigate complex organizations.
                            </p>
                        </li>
                        <li className="mb-4">
                            <p className="body-base-bold mb-2">
                                Advocate for users at the executive level
                            </p>
                            <p>
                                I have spent much of my career helping organizations balance business goals with customer needs, often in environments where user-centered thinking was not yet mature.
                            </p>
                        </li>
                    </ul>
                </p>
                </section>

                {/* Career Highlights */}
                <section className="mb-12 md:mb-12 lg:mb-12">
                <h5 className="h4-bold text-purple-mid mb-6">
                    Career highlights
                </h5>
                <p className="body-base text-neutral-dark">
                    <ul className="list-disc list-outside pl-6 space-y-2 body-base text-neutral-dark">
                        <li className="mb-4">
                            <p>
                                At Ford Motor Company, I lead design efforts across enterprise-scale payment experiences spanning Ford.com, FordPro.com,{" "}
                                <Link href="/projects/ford-bluecruise" className="underline hover:text-purple-mid transition-colors">
                                    mobile applications
                                </Link>{" "}, and in-vehicle systems, helping align customer and business needs across a highly complex ecosystem.
                            </p>
                        </li>
                        <li className="mb-4">
                            <p>
                                At Gartner, I scaled a UX team from three to six researchers and designers to support 18 product teams across three websites with over nine million active monthly users. My team's insights drove measurable business outcomes, including a 20% increase in form submissions, a 41% increase in chat. 
                            </p>
                        </li>
                        <li className="mb-4">
                            <p>
                                At {" "}
                                <Link href="/projects/fiscalnote" className="underline hover:text-purple-mid transition-colors">FiscalNote
                                </Link>{" "}, a B2B policy tracking SaaS startup, I worked cross-functionally with product, design, and data science to lead a strategic initiative to envision a net new unified product.
                            </p>
                        </li>
                    </ul>
                </p>
                </section>

                {/* Where I'm at now */}
                <section className="mb-12 md:mb-12 lg:mb-12">
                <h5 className="h4-bold text-purple-mid mb-6">
                    Leadership Philosophy
                </h5>
                <div className="space-y-4 body-base text-neutral-dark">
                    <p>
                        I believe great design starts with trust. Teams produce their best work when they feel safe asking questions, sharing unfinished ideas, and giving candid feedback. As a leader, I focus on creating psychological safety, fostering healthy debate, and ensuring designers have the context, visibility, and support they need to succeed.
                    </p>
                    <p>
                        Beyond culture, I believe evidence should drive decisions. Having led both design and research teams, I bring a strong commitment to incorporating user feedback into product development and{" "}
                        <Link href="/projects/rapid-prototype-testing" className="underline hover:text-purple-mid transition-colors">scaling systems that help teams learn from customers continuously.
                        </Link>{" "}
                    </p>
                    <p>
                        Throughout the design and product development lifecycle, I help teams understand not only what we're trying to achieve, but why it matters. I believe in setting clear expectations, providing candid feedback, and giving people the opportunities they need to grow into greater ownership and influence.
                    </p>
                </div>              
                </section>

                {/* What keeps me going */}
                <section className="mb-12 md:mb-12 lg:mb-12">
                <h5 className="h4-bold text-purple-mid mb-6">
                    What keeps me going
                </h5>
                <div className="space-y-4">
                    <p className="body-base text-neutral-dark">
                    In every organization and industry I've worked in, I've taken pride in building environments where my team feels supported, challenged, and fulfilled in their work. As for me, my most fulfilling roles have been ones where I am helping teams navigate competing business and user needs. Throughout my career, I've worked in complex organizations where customer needs, technical constraints, and business goals often pull in different directions. I enjoy helping teams find pragmatic solutions that move the business forward without losing sight of the user.
                    </p>
                    <p className="body-base text-neutral-dark">
                    I am also driven by the desire to learn new things. I consider myself lucky to be in a field where I am challenged to learn how different businesses operate, how to best design for users ranging from Wall Street traders to small business owners, and how our ever evolving tool belt as UX practitioners can transform our craft. Most recently, I taught myself how to build this portfolio using Github Copilot, Figma's MCP server, and Claude.
                    </p>
                </div>
                </section>
            
                {/* How Others Describe Me Section */}
                <section className="py-12 md:py-12 lg:py-12">
                    <h3 className="h3-bold text-purple-mid mb-6 md:mb-6 lg:mb-6">
                    How others describe me
                    </h3>
                    <p className="body-base text-neutral-dark">
                    Below are some quotes I've gotten from performance reviews and LinkedIn recommendations.
                    </p>
                </section>
            </div>

            {/* Quotes */}
            <div className="space-y-8 md:space-y-12 lg:space-y-12">
                <div className="flex items-center gap-4 md:gap-6 lg:gap-6 mb-8 md:mb-8 lg:mb-8">
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

                <div className="flex items-center gap-4 md:gap-6 lg:gap-6 mt-8 md:mt-8 lg:mt-8">
                    <div className="flex-1 h-px bg-neutral-dark opacity-30" />
                    <span className="text-2xl md:text-3xl lg:text-3xl text-purple-dark">⁂</span>
                    <div className="flex-1 h-px bg-neutral-dark opacity-30" />
                </div>
            </div>

            {/* Outside of Work Section */}
            <div className="py-12 md:py-12 lg:py-12 max-w-[580px] mx-auto">
                <h3 className="h3-bold text-purple-mid mb-6 md:mb-6 lg:mb-6">
                Outside of work
                </h3>
                <p className="body-base text-neutral-dark">
                When I'm not designing, I enjoy spending time outside, cooking, and catching up with friends. I also took up running after adopting a high-energy border collie mix named Pepper, and have since finished two marathons. She has turned out to be quite the personal trainer!
                </p>
            </div>
            
            {/* Three Portrait Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-8 pb-24">
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
        <div className="py-12 md:py-16 lg:py-24 max-w-[1280px] mx-auto px-6">
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
    </>
  );
}
