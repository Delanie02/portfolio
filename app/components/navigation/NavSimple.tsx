'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavSimple() {
  const pathname = usePathname();

  return (
    <nav className="w-full h-[4.5rem] flex items-center justify-end bg-neutral-balanced-light px-8 lg:px-16">
      <div className="flex items-center gap-8">
        <Link
          href="/"
          className={`${
            pathname === '/' ? 'h5-bold' : 'h5'
          } text-neutral-dark hover:opacity-70 transition-opacity`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`${
            pathname === '/about' ? 'h5-bold' : 'h5'
          } text-neutral-dark hover:opacity-70 transition-opacity`}
        >
          About
        </Link>
      </div>
    </nav>
  );
}
