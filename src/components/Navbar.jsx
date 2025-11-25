export default function Navbar() {
  return (
    <nav className="sticky top-0 navbar list-none flex gap-8 justify-center py-6 bg-gray-800 text-white absolute w-full z-10">
        <li><a href="#intro">Introduction</a></li>
        <li><a href="#stats">Statistics</a></li>
        <li><a href="#projects">Personel projects</a></li>
        <li><a href="#offers">My offers</a></li>
        <li><a href="#contact">Contact</a></li>
    </nav>
  );
}