import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { href: "#intro", label: "Home" },
    { href: "#stats", label: "Statistics" },
    { href: "#projects", label: "Projects" },
    { href: "#offers", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
          Rami Abbassi
        </div>

        {/* Desktop Menu */}
        <nav className="hidden sm:flex gap-8">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-slate-300 hover:text-blue-400 transition-colors duration-300 text-sm font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden flex flex-col gap-1 text-white"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="2em"
            height="2em"
          >
            <path
              fill="currentColor"
              d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="sm:hidden bg-slate-800/90 border-t border-slate-700/50">
          <div className="flex flex-col px-6 py-4 gap-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-300 hover:text-blue-400 transition-colors duration-300 text-sm font-medium"
                onClick={() => setOpen(false)} // close menu on click
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
