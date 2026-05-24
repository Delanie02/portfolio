import Link from 'next/link';
import Image from 'next/image';

type CardTheme = 'sand' | 'mist' | 'ocean' | 'purple';

interface ProjectCardProps {
  theme: CardTheme;
  title: string;
  description: string;
  image: string;
  href: string;
}

const cardStyles: Record<CardTheme, { bg: string; outline: string; title: string }> = {
  sand: {
    bg: 'bg-sand-light',
    outline: 'hover:outline hover:outline-4 hover:outline-sand-mid',
    title: 'text-sand-dark',
  },
  mist: {
    bg: 'bg-mist-light',
    outline: 'hover:outline hover:outline-4 hover:outline-mist-mid',
    title: 'text-mist-dark',
  },
  ocean: {
    bg: 'bg-ocean-light',
    outline: 'hover:outline hover:outline-4 hover:outline-ocean-mid',
    title: 'text-ocean-dark',
  },
  purple: {
    bg: 'bg-purple-light',
    outline: 'hover:outline hover:outline-4 hover:outline-purple-mid',
    title: 'text-purple-dark',
  },
};

export default function ProjectCard({
  theme,
  title,
  description,
  image,
  href,
}: ProjectCardProps) {
  const styles = cardStyles[theme];

  return (
    <Link
      href={href}
      className={`flex items-stretch rounded-2xl overflow-hidden max-w-[784px] ${styles.bg} ${styles.outline} transition-all`}
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
