const navItems = [
  "About",
  "Experience",
  "Education",
  "Projects",
  "Skills",
  "Contact",
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/5">
      <nav className="section-container h-16 flex items-center justify-between">
        <a
          href="#"
          className="text-lg font-semibold tracking-wide"
        >
          AMAN
        </a>

        <div className="hidden md:flex items-center gap-8">
          { navItems.map((item) => (
            <a
              key={ item }
              href={ `#${item.toLowerCase()}` }
              className="text-sm text-zinc-400 hover:text-white transition-colors duration-300"
            >
              { item }
            </a>
          )) }
        </div>

        <a
          href="https://drive.google.com/file/d/1zzKnBSJF7zMDNy41mai0WKaPpX3rpuxe/view?usp=sharing"
          target="_blank"
          className="border border-white/10 px-4 py-2 rounded-xl text-sm hover:bg-white hover:text-black transition-all duration-300"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}