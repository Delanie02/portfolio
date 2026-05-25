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
                <h2 className="h3-bold text-sand-dark mb-6 text-center">
                Under Construction
                </h2>
                <div className="body-base text-neutral-dark space-y-4 text-center">
                <p>
                   Check back soon for the full case study! 
                </p>
                </div>
            </section>

            {/* Explore More of My Work Section */}
            <div className="py-12 md:py-16 lg:py-24">
                <h3 className="h3-bold text-neutral-dark mb-8 md:mb-12 lg:mb-12 text-center">
                Explore more of my work
                </h3>

                {/* Case Study Cards - Vertical Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-8">
                {/* <ProjectCard
                    layout="vertical"
                    theme="sand"
                    title="Capterra"
                    description="Uncovering UX opportunity areas to reverse declining organic traffic and improve user retention for Capterra."
                    image="/images/capterra/cover.png"
                    href="/projects/capterra"
                /> */}
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
