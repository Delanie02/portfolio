import Hero from "../../components/Hero";
import ProjectCard from "../../components/ProjectCard";
import { projectCards } from "../../data/projects";
import Image from "next/image";
import TwoImageGroup from "../../components/TwoImageGroup";
import NavProject from "../../components/navigation/NavProject";

export const metadata = {
  title: "Ford Pro | Delanie Heck — Product Design",
  description:
    "Leading a high-stakes payments initiative across Ford Credit and Ford Pro while raising design quality and aligning stakeholders around a clearer customer experience.",
};

export default function FordProPage() {
  return (
    <>
      <NavProject theme="purple" />

      <Hero
        title="Ford Pro"
        imageUrl="/images/fordpro/hero.png"
        theme="purple"
        imageVerticalAlign="center"
        meta={{
          role: "UX Manager",
          team: "65 engineers, 8 designers, 17 product managers",
          reach: "130,000+ commercial customers",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6">
        <section id="challenge" className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
          <h2 className="h3-bold text-purple-dark mb-6">Challenge</h2>
          <div className="body-base text-neutral-dark space-y-4">
            <p>
              To compete with fleet management companies, Ford Credit set out to unify commercial
              payment experiences by bringing FinSimple vehicle financing payments and Ford Pro
              subscription payments into a single flow. This initiative also shifted ownership of
              the subscription payments experience from Ford Pro teams to Ford Credit teams,
              creating a significant cross-functional transition across design, product, and
              engineering.
            </p>
            <p>
              As UX Manager, the easiest part of my role was coordinating with the Ford Pro design
              team. The harder challenge was raising the quality bar while executive leadership
              pushed for speed, coaching my team through material scope changes, and defending
              unpopular design decisions in the interest of customer transparency.
            </p>
          </div>
        </section>

        <section className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
          <h3 className="h4-bold text-purple-dark mb-6">Stakeholder landscape</h3>
          <div className="body-base text-neutral-dark space-y-4">
            <p>
              The work affected a large network of Ford Credit and Ford Pro partners across
              engineering, product, design, and legal. Aligning these teams was essential before the
              experience could move from prototype to implementation.
            </p>
          </div>
        </section>

        <div className="space-y-8 md:space-y-12 lg:space-y-12 pb-24 max-w-[980px] mx-auto">
          <div className="block md:hidden">
            <Image
              src="/images/fordpro/stakeholders-mobile.svg"
              alt="Stakeholder landscape for the Ford Pro payments initiative."
              width={600}
              height={400}
            />
          </div>

          <div className="hidden md:block lg:hidden">
            <Image
              src="/images/fordpro/stakeholders-tablet.svg"
              alt="Stakeholder landscape for the Ford Pro payments initiative."
              width={900}
              height={600}
            />
          </div>

          <div className="hidden lg:block">
            <Image
              src="/images/fordpro/stakeholders-desktop.svg"
              alt="Stakeholder landscape for the Ford Pro payments initiative."
              width={1200}
              height={700}
            />
          </div>
        </div>

        <section id="approach" className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
          <h2 className="h3-bold text-purple-dark mb-6">Approach</h2>
          <div className="body-base text-neutral-dark space-y-4">
            <p>
              My approach centered on three leadership priorities: raising the quality of the work,
              protecting the team from unnecessary ambiguity, and aligning stakeholders around a
              payment experience that was both technically feasible and transparent to customers.
            </p>
          </div>
        </section>

        <section className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
          <h3 className="h4-bold text-purple-dark mb-6">Raising the quality bar</h3>
          <div className="body-base text-neutral-dark space-y-4">
            <p>
              After the SVP of Engineering received approval from the head of Ford Credit to pursue
              the initiative, the next step was securing funding. To help leadership visualize the
              future-state experience, our design team was asked to produce a prototype for
              executive review. At the time, the team had provisional access to Figma Make and used
              it to accelerate exploration. While it sped up prototyping, it also introduced
              reliability issues. In trying to correct one problem, the AI would often introduce
              others, and the prototypes relied on an AI-generated design system that lacked the
              fidelity needed to guide implementation.
            </p>
            <p>
              The situation became riskier when we learned that engineering had started building
              from these presentation prototypes. At that point, I pushed the team to pivot away
              from Figma Make and consolidate our work into a single high-fidelity Figma file that
              used the design system correctly and documented intended behavior clearly.
            </p>
            <p>
              This shift immediately raised the quality of the work. Instead of managing dozens of
              fragmented prototype files, the team could keep iterations, comments, and behavioral
              annotations in one place. More importantly, we stopped spending time explaining what
              was an AI hallucination versus what was intended UI, and refocused on communicating
              clear design intent to the 135+ people involved in the initiative.
            </p>
            <p>
              AI accelerated exploration, but it did not create alignment. Once engineering began
              building, our responsibility shifted from generating possibilities to defining the
              source of truth.
            </p>
          </div>
        </section>

        <div className="flex flex-col pb-12 md:pb-24 lg:pb-24 max-w-[980px] mx-auto">
          <p className="h5-bold text-neutral-dark text-center mb-3">From chaos to clarity</p>
          <p className="body-sm text-neutral-mid text-center mb-3">
            Pivoting from 25+ Figma Makes to a single Figma file.
          </p>
          <div className="relative w-full">
            <Image
              src="/images/fordpro/ub-figmas.png"
              alt="A collection of prototype explorations contrasted with a single Figma file used as the source of truth."
              width={1300}
              height={900}
              className="object-cover rounded"
            />
          </div>
        </div>

        <section className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
          <h3 className="h4-bold text-purple-dark mb-6">Coaching through ambiguous scope</h3>
          <div className="body-base text-neutral-dark space-y-4">
            <p>
              Early in the initiative, the SVP of Engineering proposed a standalone feature that
              would let users group bills however they chose. While grouping already existed
              elsewhere in Ford Pro, leadership initially envisioned this bill-grouping
              functionality as a separate experience.
            </p>
            <p>
              I identified the overlap, reached out to the Ford Pro design team responsible for
              vehicle grouping, and worked with my product partners to document and escalate the
              issue. Because the purpose of the initiative was unification, I made the case that
              creating a siloed grouping flow would work against the broader product strategy.
            </p>
            <p>
              Once product and I were aligned, we were able to push back whenever requests came in
              for designs supporting a custom bill-group feature before cross-org alignment existed.
              The result was that I protected my team from unnecessary throwaway work while
              preserving a more coherent product direction.
            </p>
          </div>
        </section>

        <div className="flex flex-col pb-12 md:pb-24 lg:pb-24 max-w-[980px] mx-auto">
          <div className="relative w-full pb-0 md:pb-4">
            <Image
              src="/images/fordpro/groups.png"
              alt="Existing Ford Pro grouping functionality referenced to align the new payments experience with established patterns."
              width={1300}
              height={900}
              className="object-cover rounded"
            />
            <div className="relative z-10 mx-4 -mt-4 rounded-2xl bg-white/98 px-6 pt-6 pb-7 shadow-[0_12px_32px_rgba(42,45,49,0.14)] md:absolute md:left-auto md:right-8 md:-bottom-4 md:mx-0 md:mt-0 md:max-w-[400px] md:px-8 md:pt-8 md:pb-10 md:backdrop-blur-[2px] md:shadow-[0_12px_32px_rgba(42,45,49,0.16)]">
              <p className="h5-bold text-purple-dark mb-2">Reducing siloed solutions</p>
              <p className="body-sm text-neutral-dark">
                Ideally, Ford Credit would integrate with this existing Ford Pro grouping
                functionality so that users could set up groups once and use them to pay for the
                vehicles and equipment added to each group.
              </p>
            </div>
          </div>
        </div>

        <section id="recommendations" className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
          <h2 className="h3-bold text-purple-dark mb-6">Recommendations</h2>
          <h3 className="h4-bold text-purple-dark mb-6">
            Standing up for unpopular design decisions
          </h3>
          <div className="body-base text-neutral-dark space-y-4">
            <p>
              Once scope was confirmed, my team moved into final design. Although engineering
              leadership had funding to create a new front-end experience, the back-end payment
              processing systems were not changing. That meant the customer experience had to
              accurately reflect how payments would actually be processed.
            </p>
            <p>
              Payments toward Ford Pro subscriptions were handled separately from vehicle financing
              payments. The system could also process only up to 150 vehicles at a time, meaning
              larger payments could be split into multiple transactions. Any pseudo bill group
              payment would also be treated as its own transaction.
            </p>
            <p>
              Engineering had sold leadership on a vision in which customers could click once and
              pay for everything at the same time. In reality, NACHA consent requirements for
              ACH-based vehicle payments meant that we needed to be far more explicit about what
              each payment represented.
            </p>
            <p>
              After working with legal to understand how those guidelines should appear in the
              interface, my team proposed a review page where users would explicitly consent to each
              transaction included in their payment. For larger customers, that could mean reviewing
              and agreeing to multiple transactions.
            </p>
            <p>
              It was not the most elegant experience in theory, but it was the clearest and most
              honest one in practice. When engineering leadership pushed back, I worked with my team
              to explore alternatives, then aligned with product around the review-page direction we
              believed best balanced clarity, compliance, and usability.
            </p>
            <p>
              We ultimately escalated the decision to the VP of Product, who secured alignment with
              engineering leadership on the review-page approach. Although it added one step, it
              reduced overall confusion and gave customers a dedicated space to understand exactly
              how their payments would be processed.
            </p>
          </div>
        </section>

        <div className="flex flex-col gap-16 pb-24 max-w-[1240px] mx-auto">
          <TwoImageGroup
            borderless
            images={[
              {
                src: "/images/fordpro/configure.png",
                alt: "The payment configuration experience before review.",
                header: "Review and pay",
                subheader: "Terms are hidden in accordions.",
              },
              {
                src: "/images/fordpro/review.png",
                alt: "A review page clarifying consent across split transactions.",
                header: "Separate review page",
                subheader: "Terms move to a dedicated step.",
              },
            ]}
          />
        </div>

        <section id="impact" className="py-6 md:py-12 lg:py-12 max-w-[580px] mx-auto">
          <h2 className="h3-bold text-purple-dark mb-6">Impact</h2>
          <div className="body-base text-neutral-dark space-y-4">
            <p>
              The project required alignment across Ford Credit and Ford Pro teams while design,
              product, engineering, and legal worked through shifting ownership, technical
              constraints, and executive expectations. By establishing a clear source of truth,
              escalating scope risks early, and aligning stakeholders around transparent payment
              behavior, I helped the team move forward with greater clarity and less ambiguity.
            </p>
            <p>
              The most important outcome was not just a stronger interface, but a stronger
              decision-making process: one that protected the team from throwaway work, raised the
              fidelity of deliverables, and secured support for a customer experience that
              accurately reflected how payments would actually work.
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
