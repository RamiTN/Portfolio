import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-gray-800 text-white z-10">
      <div className="flex justify-between items-center px-6 py-6 sm:hidden">
        <h1 className="font-bold text-lg">Menu</h1>

        <button onClick={() => setOpen(!open)} className="flex flex-col gap-1">
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

      {/* Your original nav list */}
      <ul
        className={`
          navbar list-none flex flex-col md:flex-row 
          gap-4 md:gap-8 justify-center 
          py-4 md:py-6 
          bg-gray-800  
          transition-all duration-300 
          ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0 md:max-h-none md:opacity-100 overflow-hidden"}
        `}
      >
        <li><a href="#stats">Statistics</a></li>
        <li><a href="#projects">Personal projects</a></li>
        <li><a href="#offers">My offers</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
