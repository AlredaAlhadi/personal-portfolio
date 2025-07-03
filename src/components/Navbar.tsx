export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-semibold text-blue-600">Alreda.dev</div>
        <ul className="flex gap-6 text-sm font-medium text-gray-700">
          <li>
            <a href="#about" className="hover:text-blue-600 transition">About</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
