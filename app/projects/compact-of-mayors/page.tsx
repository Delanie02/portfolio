import Hero from "../../components/Hero";
import ProjectCard from "../../components/ProjectCard";
import { projectCards } from "../../data/projects";
import Image from "next/image";
import TwoImageGroup from "../../components/TwoImageGroup";
import NavProject from "../../components/navigation/NavProject";

export const metadata = {
  title: "Compact of Mayors | Delanie Heck — Product Design",
  description:
    "Designing a digital learning experience that helped city leaders navigate complex climate action requirements with more clarity and confidence.",
};

export default function CompactOfMayorsPage() {
  return (
    <>
      <NavProject
        theme="ocean"
        sectionLinks={[
          { label: "Challenge", href: "#challenge", id: "challenge" },
          { label: "Approach", href: "#approach", id: "approach" },
          { label: "Impact", href: "#impact", id: "impact" },
        ]}
      />

      <Hero
        title="Compact of Mayors"
        imageUrl="/images/compact-of-mayors/hero.png"
        theme="ocean"
        meta={{
          role: "Director of Learning Experience Design",
          team: "Myself, 1 instructional designer, and 1 illustrator",
          reach: "Hundreds of global city officials",
          // timeline: "Ongoing",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6">
        <section id="challenge" className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
          <h2 className="h3-bold text-ocean-dark mb-6">Challenge</h2>
          <div className="body-base text-neutral-dark space-y-4">
            <p>
              The Compact of Mayors is a global initiative designed to help cities reduce greenhouse
              gas emissions. To support participation from mayors and city officials around the
              world, the client needed to transform complex climate action requirements into an
              accessible digital learning experience. The challenge was creating training that could
              motivate busy government leaders to engage with unfamiliar technical concepts while
              helping them understand how individual actions contribute to broader climate goals.
            </p>
          </div>
        </section>

        <section id="approach" className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
          <h2 className="h3-bold text-ocean-dark mb-6">Approach</h2>
          <div className="body-base text-neutral-dark space-y-4">
            <p>
              I served as project manager and lead instructional designer, facilitating client
              communication, coordinating team resources, and designing of four of seven course
              modules. Working with the client, our illustrator, and an instructional designer on my
              team, I translated complex climate action concepts into an interactive learning
              experience designed around three principles:
            </p>
            <ul className="list-disc list-outside pl-6 space-y-2 body-base text-neutral-dark">
              <li>
                <b>Make abstract goals tangible:</b> To reinforce the global impact of local climate
                action, I designed the course around a virtual city that evolves as learners
                progress.
              </li>
              <li>
                <b>Support learner autonomy:</b> Recognizing that city leaders bring different
                levels of knowledge and priorities, I designed flexible learning paths that allowed
                learners to explore content in a nonlinear way while maintaining clear progress
                through the course.
              </li>
              <li>
                <b>Create opportunities for application:</b> Rather than relying on passive
                information delivery, I incorporated interactive exercises and practice activities
                that allowed learners to apply concepts and receive immediate feedback.
              </li>
            </ul>
          </div>
        </section>

        <section className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
          <h3 className="h4-bold text-ocean-dark mb-6">Making abstract goals tangible</h3>
          <div className="body-base text-neutral-dark space-y-4">
            <p>
              To reinforce the global impact of local climate action, I designed the course around a
              virtual city that evolves as learners progress. I designed a persistent course map
              that provided context and reinforced the connection between individual learning
              activities and broader climate outcomes. Each completed module transforms the city
              environment, adding elements such as trees, wildlife, and improved infrastructure to
              visually represent collective progress toward climate goals.
            </p>
          </div>
        </section>

        <div className="flex flex-col gap-4 pb-12 md:pb-24 lg:pb-24 max-w-[980px] mx-auto">
          <div className="relative w-full h-full min-h-[338px]">
            <Image
              src="/images/compact-of-mayors/wri-gif-loop.gif"
              alt="A course map showing how the virtual city grows and changes as learners complete modules and advance toward climate action goals."
              width={980}
              height={800}
              className="object-cover"
            />
          </div>
          <p className="body-sm text-neutral-mid text-center max-w-[720px] mx-auto">
            The persistent course map made global climate goals feel tangible by showing how each
            completed module visibly transformed the virtual city.
          </p>
        </div>

        <section className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
          <h3 className="h4-bold text-ocean-dark mb-6">Supporting learner autonomy</h3>
          <div className="body-base text-neutral-dark space-y-4">
            <p>
              Recognizing that city leaders bring different levels of knowledge and priorities, I
              designed flexible learning paths that allowed learners to explore content in a
              nonlinear way while maintaining clear progress through the course. I provided
              nonlinear learning paths, such as completing a stack of books in whatever order one
              chooses, to allow learners to structure their own learning experience. Similarly, in
              Module 1 the course invites the learner to click parts of a city scene to learn more
              about the role of cities in combating climate change. Every time the learner completes
              a section, the learner is invited to pick the next section that interests them.
            </p>
          </div>
        </section>

        <div className="flex flex-col gap-4 pb-12 md:pb-24 lg:pb-24 max-w-[980px] mx-auto">
          <div className="relative w-full aspect-video overflow-hidden rounded">
            <iframe
              src="https://www.youtube.com/embed/QeS7kGQG-WI"
              title="Compact of Mayors module 1 walkthrough"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <p className="body-sm text-neutral-mid text-center max-w-[720px] mx-auto">
            Course walkthrough: examples of nonlinear learning paths within module 1.
          </p>
        </div>

        <section className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
          <h3 className="h4-bold text-ocean-dark mb-6">Creating opportunities for application</h3>
          <div className="body-base text-neutral-dark space-y-4">
            <p>
              Rather than relying on passive information delivery, I incorporated interactive
              exercises and practice activities that allowed learners to apply concepts and receive
              immediate feedback. In addition to emphasizing the importance of climate action goals
              and empowering learners to customize their learning paths, I aimed to capture learner
              attention by providing opportunities for learners to apply material through practice
              exercises with real-time feedback.
            </p>
          </div>
        </section>
        <div className="flex flex-col gap-4 pb-12 md:pb-24 lg:pb-24 max-w-[980px] mx-auto">
          <div className="relative w-full aspect-video overflow-hidden rounded">
            <iframe
              src="https://www.youtube.com/embed/DwwFkTEX_RI"
              title="Compact of Mayors course walkthrough"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <p className="body-sm text-neutral-mid text-center max-w-[720px] mx-auto">
            Course walkthrough: examples of interactive learning activities within module 4.
          </p>
        </div>
        <section id="impact" className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
          <h2 className="h3-bold text-ocean-dark mb-6">Impact</h2>
          <div className="body-base text-neutral-dark space-y-4">
            <p>
              The course provided city leaders around the world with an accessible, engaging way to
              understand the Compact of Mayors framework and take steps toward climate action. The
              project demonstrated how thoughtful experience design can transform complex
              information into a learning journey that motivates learners, supports exploration, and
              connects individual actions to broader societal outcomes.
            </p>
          </div>
        </section>

        <div className="py-12 md:py-16 lg:py-24">
          <h3 className="h3-bold text-neutral-dark mb-8 md:mb-12 lg:mb-12 text-left md:text-center">
            Explore more of my work
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-8">
            <ProjectCard layout="vertical" {...projectCards.capterra} />
            <ProjectCard layout="vertical" {...projectCards.rapidPrototypeTesting} />
            <ProjectCard layout="vertical" {...projectCards.fordBlueCruise} />
          </div>
        </div>
      </div>
    </>
  );
}
