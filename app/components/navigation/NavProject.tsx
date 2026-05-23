'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import type { NavProjectProps, NavTheme } from './nav.types';

const themeConfig: Record<NavTheme, { textClass: string; shadow: string }> = {
  sand: {
    textClass: 'text-sand-dark',
    shadow: '0 4px 4px 0 rgba(168, 144, 108, 0.25)',
  },
  mist: {
    textClass: 'text-mist-dark',
    shadow: '0 4px 4px 0 rgba(50, 74, 99, 0.25)',
  },
  ocean: {
    textClass: 'text-ocean-dark',
    shadow: '0 4px 4px 0 rgba(0, 80, 94, 0.25)',
  },
  purple: {
    textClass: 'text-purple-dark',
    shadow: '0 4px 4px 0 rgba(58, 31, 78, 0.25)',
  },
};

const sectionLinks = [
  { label: 'Challenge', href: '#challenge', id: 'challenge' },
  { label: 'Approach', href: '#approach', id: 'approach' },
  { label: 'Recommendations', href: '#recommendations', id: 'recommendations' },
  { label: 'Impact', href: '#impact', id: 'impact' },
];

export default function NavProject({ theme }: NavProjectProps) {
  const { textClass, shadow } = themeConfig[theme];
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 w-full bg-neutral-balanced-light h-[4.5rem] flex items-center px-8 lg:px-16"
      style={{ boxShadow: shadow }}
    >
      {/* Left: Section links — hidden on mobile */}
      <div className={`hidden md:flex items-center gap-8 ${textClass}`}>
        {sectionLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`${
              activeSection === link.id ? 'h5-bold' : 'h5'
            } hover:opacity-70 transition-opacity`}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Right: Home & About — always visible */}
      <div className={`flex items-center gap-8 ml-auto ${textClass}`}>
        <Link
          href="/"
          className={`${
            pathname === '/' ? 'h5-bold' : 'h5'
          } hover:opacity-70 transition-opacity`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`${
            pathname === '/about' ? 'h5-bold' : 'h5'
          } hover:opacity-70 transition-opacity`}
        >
          About
        </Link>
      </div>
    </nav>
  );
}
