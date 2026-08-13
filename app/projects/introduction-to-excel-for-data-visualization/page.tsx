import Hero from "../../components/Hero";
import Image from "next/image";
import ProjectCard from "../../components/ProjectCard";
import { projectCards } from "../../data/projects";
import TwoImageGroup from "../../components/TwoImageGroup";
import NavProject from "../../components/navigation/NavProject";

export const metadata = {
  title: "Introduction to Excel for Data Visualization | Delanie Heck — Product Design",
  description:
    "Building an online learning product that combined interactive lessons, learner analytics, and iteration to improve engagement and outcomes.",
};

export default function ExcelPage() {
  return (
    <>
      <NavProject
        theme="mist"
        sectionLinks={[
          { label: "Challenge", href: "#challenge", id: "challenge" },
          { label: "Approach", href: "#approach", id: "approach" },
          { label: "Impact", href: "#impact", id: "impact" },
        ]}
      />

      <Hero
        title="Introduction to Excel for Data Visualization"
        imageUrl="/images/excel/hero.png"
        theme="mist"
        imageVerticalAlign="center"
        meta={{
          role: "Director of Learning Experience Design",
          team: "Myself and 1 developer",
          reach: "200+ learners in the first month",
          // timeline: "6 months",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6">
        <section id="challenge" className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
          <h2 className="h3-bold text-mist-dark mb-6">Challenge</h2>
          <div className="body-base text-neutral-dark space-y-4">
            <p>
              Working with a small social enterprise, I designed this online course to teach
              international development and monitoring and evaluation professionals from all
              backgrounds how to create both static and dynamic data visualizations in Excel. The
              challenge was creating an experience that could compete in already crowded online
              learning market.
            </p>
          </div>
        </section>

        <section id="approach" className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
          <h2 className="h3-bold text-mist-dark mb-6">Approach</h2>
          <div className="body-base text-neutral-dark space-y-4">
            <p>
              My design process began with identifying in-demand Excel skills and how this course
              could differentiate itself from other courses available online. Based on this
              research, I identified the following learning outcomes:
            </p>
            <ul className="list-disc list-outside pl-6 space-y-2 body-base text-neutral-dark">
              <li>Clean and prepare data for analysis.</li>
              <li>
                Apply key Excel formulas, including INDEX-MATCH and VLOOKUP, to analyze and
                manipulate data.
              </li>
              <li>Build interactive visualizations using PivotTables and slicers.</li>
            </ul>
            <p>
              As for how to differentiate the course, I decided upon brevity and interactivity as
              the missing components of other courses on the market and designed the course around
              three principles:
            </p>
            <ul className="list-disc list-outside pl-6 space-y-2 body-base text-neutral-dark">
              <li>
                <b>Bite-sized learning:</b> I created focused screencasts that allowed learners to
                quickly build specific skills.
              </li>
              <li>
                <b>Active practice:</b> I designed interactive demonstrations, case studies, and
                scenarios where learners selected appropriate formulas and visualization techniques
                based on real-world situations.
              </li>
              <li>
                <b>Continuous improvement:</b> I built measurement capabilities into the experience
                to understand learner behavior and identify opportunities for iteration.
              </li>
            </ul>
          </div>
        </section>

        <section className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
          <h3 className="h4-bold text-mist-dark mb-4">Bite-sized learning</h3>
          <div className="body-base text-neutral-dark space-y-4">
            <p>
              To generate bite-sized lessons, I created standalone screencasts on data cleaning,
              formulas, and interactive visualizations that covered a single topic within a few
              minutes.
            </p>
          </div>
        </section>

        <div className="flex flex-col gap-4 pb-12 md:pb-24 lg:pb-24 max-w-[980px] mx-auto">
          <div className="relative w-full h-full min-h-[338px]">
            <Image
              src="/images/excel/excel-screencast.png"
              alt="A short screencast walkthrough demonstrating a focused Excel lesson on a specific skill such as cleaning data or applying a formula."
              width={980}
              height={800}
              className="object-cover"
            />
          </div>
          <p className="body-sm text-neutral-mid text-center max-w-[720px] mx-auto">
            Focused screencasts made complex Excel tasks feel approachable by breaking them into
            short, practical lessons learners could complete quickly.
          </p>
        </div>

        <section className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
          <h3 className="h4-bold text-mist-dark mb-4">Active practice</h3>
          <div className="body-base text-neutral-dark space-y-4">
            <p>
              To encourage interactivity, I built animated presentations and case studies. I also
              created two custom scenarios in which learners selected the appropriate Excel function
              or visualization technique based on real-world situations.
            </p>
          </div>
        </section>

        <div className="flex flex-col gap-8 pb-12 md:pb-24 lg:pb-24 max-w-[980px] mx-auto">
          <TwoImageGroup
            borderless
            images={[
              {
                src: "/images/excel/excel-chart-1.png",
                alt: "An interactive Excel learning scenario that asks learners to choose the right function or visualization for a real-world situation.",
                caption:
                  "In this interaction, the learner clicks on the parts of a hypothetical graph that should be improved.",
                fit: "contain",
              },
              {
                src: "/images/excel/excel-chart-3.png",
                alt: "A second interactive Excel learning scenario showing how learners apply a visualization method to an example dataset.",
                caption:
                  "The graph visually improves as the user clicks to apply data visualization best practices.",
                fit: "contain",
              },
            ]}
          />
        </div>

        <div className="flex flex-col gap-4 pb-12 md:pb-24 lg:pb-24 max-w-[980px] mx-auto">
          <div className="relative w-full aspect-video overflow-hidden rounded">
            <iframe
              src="https://www.youtube.com/embed/mQluXPkEEoI"
              title="Excel walkthrough"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <p className="body-sm text-neutral-mid text-center max-w-[720px] mx-auto">
            This walkthrough demonstrates the interactive exercises I designed to help learners
            apply Excel concepts through practice and feedback.
          </p>
        </div>

        <section className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
          <h3 className="h4-bold text-mist-dark mb-4">Continuous improvement</h3>
          <div className="body-base text-neutral-dark space-y-4">
            <p>
              To enable data-driven optimization, I partnered with a developer to implement custom
              tracking through a Learning Records Store. Together, we defined which learner
              behaviors would provide meaningful insights, including completion, navigation
              patterns, and interaction with course activities.
            </p>
            <p>
              After launch, I analyzed learner behavior data from our Learning Records Store to
              understand where users were dropping off and identify opportunities to improve
              engagement. Within one month of launching the course, over two hundred people enrolled
              in the course. One of the most significant insights was that only 25% of learners got
              past the first module. However, once past the first module, 65% completed the second
              module. The second module, while much shorter, was also much more interactive. Most
              people clicked on interactive elements if they were present, even if they were not
              required to progress to the next slide.
            </p>
            <p>
              Based on these insights, I redesigned sections of the first module to introduce more
              interactive exercises earlier in the experience. These changes helped address early
              drop-off by applying the proven engagement patterns from later sections of the course.
            </p>
          </div>
        </section>

        <div className="flex flex-col gap-4 pb-12 md:pb-24 lg:pb-24 max-w-[980px] mx-auto">
          <div className="relative w-full h-full min-h-[338px]">
            <Image
              src="/images/excel/excel-1.png"
              alt="A learner analytics view showing how early course engagement and module completion informed a redesign of the first module."
              width={980}
              height={800}
              className="object-cover"
            />
          </div>
          <p className="body-sm text-neutral-mid text-center max-w-[720px] mx-auto">
            Based on user data and analytics, I added this interaction to help learners practice the
            INDEX MATCH formula and break up the series of screencasts in module 1.
          </p>
        </div>

        <section id="impact" className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
          <h2 className="h3-bold text-mist-dark mb-6">Impact</h2>
          <div className="body-base text-neutral-dark space-y-4">
            <p>
              Within the first month, more than 200 learners enrolled in the course, growing to more
              than 600 learners within six months. Rather than treating launch as the end of the
              design process, this course established a continuous improvement model by combining
              quantitative learner behavior data with qualitative feedback to deliver the best
              possible learning experience for students.
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
            <ProjectCard layout="vertical" {...projectCards.capterra} />
            <ProjectCard layout="vertical" {...projectCards.fordPro} />
            <ProjectCard layout="vertical" {...projectCards.fordBlueCruise} />
          </div>
        </div>
      </div>
    </>
  );
}
