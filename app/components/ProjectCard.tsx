import Link from 'next/link';
import Image from 'next/image';

type CardTheme = 'sand' | 'mist' | 'ocean' | 'purple';
type CardLayout = 'horizontal' | 'vertical';

interface ProjectCardProps {
  theme: CardTheme;
  title: string;
  description: string;
  image: string;
  href: string;
  layout?: CardLayout;
}

const cardStyles: Record<CardTheme, { bg: string; outline: string; title: string }> = {
  sand: {
    bg: 'bg-sand-light',
    outline: 'ring-0 hover:ring-4 ring-sand-mid',
    title: 'text-sand-dark',
  },
  mist: {
    bg: 'bg-mist-light',
    outline: 'ring-0 hover:ring-4 ring-mist-mid',
    title: 'text-mist-dark',
  },
  ocean: {
    bg: 'bg-ocean-light',
    outline: 'ring-0 hover:ring-4 ring-ocean-mid',
    title: 'text-ocean-dark',
  },
  purple: {
    bg: 'bg-purple-light',
    outline: 'ring-0 hover:ring-4 ring-purple-mid',
    title: 'text-purple-dark',
  },
};

export default function ProjectCard({
  theme,
  title,
  description,
  image,
  href,
  layout = 'horizontal',
}: ProjectCardProps) {
  const styles = cardStyles[theme];

  if (layout === 'vertical') {
    return (
      <Link
        href={href}
        className={`flex flex-col items-stretch rounded-2xl overflow-hidden max-w-full w-full ${styles.bg} ${styles.outline} transition-all duration-200 hover:scale-[1.02]`}
      >
        {/* Image — top */}
        <div className="relative w-full h-[220px] md:h-[240px] lg:h-[280px]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        {/* Text — bottom */}
        <div className="px-6 pt-6 pb-8 md:px-8 md:pt-8 md:pb-10 lg:px-8 lg:pt-8 lg:pb-10 flex flex-col justify-center">
          <h5 className={`h5-bold ${styles.title} mb-2`}>{title}</h5>
          <p className="body-sm md:body-base text-neutral-dark">{description}</p>
        </div>
      </Link>
    );
  }

  // Default horizontal layout
  return (
    <Link
      href={href}
      className={`flex items-stretch rounded-2xl overflow-hidden max-w-[784px] ${styles.bg} ${styles.outline} transition-all duration-200 hover:scale-[1.02]`}
    >
      {/* Image — left 40% */}
      <div className="relative w-2/5 min-h-[220px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Text — right 60% */}
      <div className="w-3/5 pl-6 pt-12 pr-12 pb-14 flex flex-col justify-center">
        <h4 className={`h4-bold ${styles.title} mb-3`}>{title}</h4>
        <p className="body-base text-neutral-dark">{description}</p>
      </div>
    </Link>
  );
}
