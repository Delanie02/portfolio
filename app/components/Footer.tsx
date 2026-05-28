export default function Footer() {
  return (
    <footer className="w-full bg-neutral-balanced-light py-6 flex flex-col md:flex-row items-center justify-between px-8 md:px-16 gap-2 md:gap-0">
      <a
        href="https://www.linkedin.com/in/delanie-heck/"
        target="_blank"
        rel="noopener noreferrer"
        className="h5 text-neutral-dark hover:opacity-70 transition-opacity"
      >
        LinkedIn
      </a>
      <p className="h5 text-neutral-dark">
        © Delanie Heck 2026 All Rights Reserved
      </p>
    </footer>
  );
}
