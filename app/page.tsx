import NavSimple from './components/navigation/NavSimple';
import ProjectCard from './components/ProjectCard';

const projects = [
  {
    theme: 'sand' as const,
    title: 'Capterra',
    description:
      'I led a cross-functional initiative to uncover the largest UX opportunity areas to reverse declining organic traffic and improve user retention for Capterra, a software reviews platform serving over 9 million active monthly users.',
    image: '/images/capterra/cover.png',
    href: '/projects/capterra',
  },
  {
    theme: 'mist' as const,
    title: 'Rapid Prototype Testing',
    description:
      'As Associate Director, UX at Gartner, I partnered with product and design leads to pilot a rapid and continuous way of doing research. As a result, we tripled the number of user tests run quarter-over-quarter.',
    image: '/images/rapid-prototype/cover.png',
    href: '/projects/rapid-prototype-testing',
  },
  {
    theme: 'ocean' as const,
    title: 'Ford BlueCruise',
    description:
      "I redesigned the subscription experience in FordPass, Ford's consumer mobile app. From the product details page to the manage flow, I made it easier for customers to find, learn about, and activate services like BlueCruise.",
    image: '/images/ford-bluecruise/cover.png',
    href: '/projects/ford-bluecruise',
  },
  {
    theme: 'purple' as const,
    title: 'FiscalNote',
    description:
      'I led a cross-functional team to envision a unified future-state product for FiscalNote, a B2B policy intelligence platform.',
    image: '/images/fiscalnote/cover.png',
    href: '/projects/fiscalnote',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-balanced-light">
      <NavSimple />

      {/* All page content - centered wrapper */}
      <div className="max-w-[800px] mx-auto px-6">
        <div className="py-16">
          {/* Heading */}
          <h2 className="text-neutral-dark mb-6">
            Hi. I&apos;m{' '}
            <span className="h2-bold text-purple-mid">Delanie Heck.</span>
          </h2>
      
          {/* Bio */}
          <p className="h4 text-neutral-dark mb-12">
            I am a product design leader with 12+ years of experience leading high-performing teams and delivering measurable business impact across platforms. I am at my best when I am coaching designers and creating intuitive experiences for complex systems.
            {/* I am a product design leader with 10+ years of experience leading
            high-performing teams, scaling design systems and operations, and
            delivering exceptional user experiences across platforms. */}
          </p>
      
          {/* Project Cards */}
          <div className="flex flex-col gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.href} {...project} />
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer */}
    </main>
  );
}
