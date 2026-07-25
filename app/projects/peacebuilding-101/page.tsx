import Hero from "../../components/Hero";
import Image from "next/image";
import ProjectCard from "../../components/ProjectCard";
import TwoImageGroup from "../../components/TwoImageGroup";
import NavProject from "../../components/navigation/NavProject";

export const metadata = {
  title: "Peacebuilding 101 | Delanie Heck — Product Design",
  description:
    "Designing a global online learning experience that transformed an instructor-led peacebuilding workshop into an interactive, self-paced course.",
};

export default function PeacebuildingPage() {
  return (
    <>
      <NavProject
        theme="sand"
        sectionLinks={[
          { label: "Challenge", href: "#challenge", id: "challenge" },
          { label: "Approach", href: "#approach", id: "approach" },
          { label: "Impact", href: "#impact", id: "impact" },
        ]}
      />

      <Hero
        title="Peacebuilding 101"
        imageUrl="/images/peacebuilding/hero.png"
        theme="sand"
        meta={{
          role: "Director of Learning Experience Design",
          team: "Myself, 1 graphic designer, and 1 illustrator",
          reach: "Up to 1.3 million participants across 34 countries",
          // timeline: "6 months",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6">
        <section
          id="challenge"
          className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto"
        >
          <h2 className="h3-bold text-sand-dark mb-6">Challenge</h2>
          <div className="body-base text-neutral-dark space-y-4">
            <p>
              An international humanitarian organization wanted to transform its
              annual, instructor-led peacebuilding workshop in Madagascar into
              an online learning experience that could reach practitioners
              around the world.
            </p>
            <p>
              The challenge was not simply digitizing classroom materials. It
              was preserving the collaborative, reflective, and experiential
              nature of a workshop that relied heavily on discussion, group
              activities, and real-world case studies while making it effective
              for self-paced learners across diverse cultural contexts.
            </p>
          </div>
        </section>

        <section
          id="approach"
          className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto"
        >
          <h2 className="h3-bold text-sand-dark mb-6">Approach</h2>
          <div className="body-base text-neutral-dark space-y-4">
            <p>
              I traveled to Madagascar to film parts of the in-person workshop,
              understand the facilitation methods and activities that made the
              experience effective, and identify opportunities to translate
              those elements into an engaging online experience.
            </p>
          </div>
        </section>

        <div className="flex flex-col gap-4 pb-12 md:pb-24 lg:pb-24 max-w-[980px] mx-auto">
          <Image
            src="/images/peacebuilding/crs-group.jpg"
            alt="A peacebuilding workshop in Madagascar where participants discuss and reflect together in a group setting."
            width={980}
            height={800}
            className="object-cover"
          />
          <p className="body-sm text-neutral-mid text-center">
            Participants on the first day of the training. Photo credit:{" "}
            <a
              href="https://www.behance.net/yohanp"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-sand-mid transition-colors"
            >
              Yohan Perrera
            </a>
          </p>
        </div>

        <section className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
          <div className="body-base text-neutral-dark space-y-4">
            <p>
              Rather than replicating classroom activities verbatim, I
              reimagined them as interactive learning experiences that followed
              the following principles.
            </p>
            <ul className="list-disc list-outside pl-6 space-y-2 body-base text-neutral-dark">
              <li>
                <b>Support reflection.</b> Reflection activities accumulated
                throughout the course, helping learners connect new concepts to
                their own professional experiences.
              </li>
              <li>
                <b>Localize through authentic examples.</b>
                Real peacebuilding case studies grounded abstract frameworks in
                practical application.
              </li>
              <li>
                <b>Preserve social learning.</b> Videos from the in-person
                workshop exposed online learners to diverse interpretations and
                approaches even in an asynchronous environment.
              </li>
              <li>
                <b>Design for active learning.</b> Learners applied concepts
                through interactive scenarios rather than passively consuming
                content.
              </li>
            </ul>
          </div>
        </section>
        <section className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
          <h3 className="h4-bold text-sand-dark mb-4">Supporting reflection</h3>
          <div className="body-base text-neutral-dark">
            <p>
              In order to facilitate personal reflection in an online
              environment, I created a digital reflection notebook that captured
              learner responses throughout the course and generated a
              personalized summary learners could download.
            </p>
          </div>
        </section>
        <div className="flex flex-col gap-4 pb-12 md:pb-24 lg:pb-24 max-w-[980px] mx-auto">
          <div className="relative w-full h-full min-h-[338px]">
            <Image
              src="/images/peacebuilding/crs-conflict-styles.png"
              alt="A screenshot of the digital reflection notebook experience showing a learner’s personalized conflict styles summary."
              width={980}
              height={800}
              className="object-cover"
            />
          </div>
          <p className="body-sm text-neutral-mid text-center max-w-[720px] mx-auto">
            After completing reflection questions for themselves, learners have
            the option of watching how participants in the in-person training
            responded to similar questions.
          </p>
        </div>

        <section className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
          <h3 className="h4-bold text-sand-dark mb-4">
            Localizing through authentic examples
          </h3>
          <div className="body-base text-neutral-dark">
            <p>
              In order to teach learners in an online context the concept of
              actors mapping, I designed an exercise in which users learn about
              a case study from Kenya. After receiving information about the
              case study and identifying stakeholders, learners interact with a
              graphic map of these stakeholders to learn how each stakeholder is
              related to one another.
            </p>
          </div>
        </section>

        <div className="flex flex-col gap-4 pb-12 md:pb-24 lg:pb-24 max-w-[980px] mx-auto">
          <div className="relative w-full h-full min-h-[338px]">
            <Image
              src="/images/peacebuilding/crs-actors-map-hover.png"
              alt="A screenshot of an interactive actors mapping exercise showing relationships between stakeholders in a Kenya case study."
              width={980}
              height={800}
              className="object-cover"
            />
          </div>
          <p className="body-sm text-neutral-mid text-center max-w-[720px] mx-auto">
            An interactive map I designed to visualize various actors in a
            conflict and their relationships to one another.
          </p>
        </div>

        <section className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
          <h3 className="h4-bold text-sand-dark mb-4">
            Preserving social learning
          </h3>
          <div className="body-base text-neutral-dark space-y-4">
            <p>
              To demonstrate learning of how the Kenya case study can be
              understood through the conflict tree model, users drag and drop
              aspects of the case study onto the appropriate part of the tree —
              the branches, trunk, or roots — where the branches represent
              effects of the conflict, the trunk represents the core issues, and
              the roots represent underlying causes.
            </p>
            <p>
              I also embedded a video of how participants in the in-person
              workshop used the same model for a fictional case study they
              analyzed in small groups, providing online learners with another
              example of how to apply the framework.
            </p>
          </div>
        </section>

        <div className="flex flex-col gap-8 pb-0 max-w-[980px] mx-auto">
          <TwoImageGroup
            borderless
            images={[
              {
                src: "/images/peacebuilding/crs-tree-complete.png",
                alt: "A complete conflict tree model showing the branches, trunk, and roots used to analyze a peacebuilding case study.",
                caption:
                  "A drag and drop conflict tree exercise used to analyze a case study from Kenya.",
                fit: "contain",
              },
              {
                src: "/images/peacebuilding/crs-ipa-conflict-tree.png",
                alt: "A second conflict tree diagram showing how the model can be applied to a different case study example.",
                caption:
                  "Learners may watch a video of one group's use of the conflict tree model at the in-person workshop.",
                fit: "contain",
              },
            ]}
          />
        </div>
        <section className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
          <h3 className="h4-bold text-sand-dark mb-4">
            Designing for active learning
          </h3>
          <div className="body-base text-neutral-dark">
            <p>
              While several of the exercises in the online course derived from
              the in-person workshop, some experiences were unique to the online
              course. For example, the print materials provided by the client
              included an individual quiz intended to help practitioners
              identify their own conflict style. Because self-awareness is an
              important foundation for understanding conflict at a larger scale,
              I transformed this static assessment into an interactive
              experience that generated personalized results showing which
              conflict styles learners tended to exhibit more or less
              frequently.
            </p>
          </div>
        </section>

        <div className="flex flex-col gap-4 pb-12 md:pb-24 lg:pb-24 max-w-[980px] mx-auto">
          <Image
            src="/images/peacebuilding/crs-quiz-results.png"
            alt="A screenshot of the interactive conflict styles quiz showing personalized results for a learner."
            width={980}
            height={800}
            className="object-cover"
          />
          <p className="body-sm text-neutral-mid text-center">
            To reflect on their own conflict styles, learners complete and
            interactive quiz.
          </p>
        </div>

        <section className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
          <div className="body-base text-neutral-dark space-y-4">
            <p>
              In addition to the conflict styles assessment, the online course
              featured a unique interaction explaining the challenges
              practitioners often face when measuring the progress of
              peacebuilding projects. Rather than presenting the information as
              static content, I designed an interactive maze that functioned
              both as a metaphor for these challenges and as an engaging
              activity in which learners dragged a pencil through the maze to
              discover each obstacle.
            </p>
          </div>
        </section>

        <div className="flex flex-col gap-4 pb-12 md:pb-24 lg:pb-24 max-w-[980px] mx-auto">
          <div className="relative w-full h-full min-h-[338px]">
            <Image
              src="/images/peacebuilding/crs-maze-info.png"
              alt="A screenshot of the interactive maze activity used to explain the challenges of measuring peacebuilding progress."
              width={980}
              height={800}
              className="object-cover"
            />
          </div>
          <p className="body-sm text-neutral-mid text-center">
            Learners interact with a virtual maze to written and audio content.
          </p>
        </div>

        <section
          id="impact"
          className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto"
        >
          <h2 className="h3-bold text-sand-dark mb-6">Impact</h2>
          <div className="body-base text-neutral-dark space-y-4">
            <p>
              The project transformed a location-bound annual workshop into a
              scalable digital learning experience that could reach
              practitioners globally.
            </p>
            <p>
              Beyond expanding access, the experience preserved many of the
              instructional qualities that made the in-person workshop
              successful by emphasizing active participation, reflection,
              authentic case studies, and continuous feedback.
            </p>
            <p>
              The project also reinforced an approach to learning design that
              continues to influence my work today. Effective digital learning
              is created by designing for engagement and human understanding,
              not by simply translating classroom content onto a screen.
            </p>
          </div>
        </section>
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
