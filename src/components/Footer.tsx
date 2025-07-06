export default function Footer() {
  return (
    <footer className="text-sm text-gray-500 text-center py-8">
      <p className="mb-2">
        © {new Date().getFullYear()} Alreda Alhadi · Built with{" "}
        <a
          href="https://reactjs.org"
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
        ,{" "}
        <a
          href="https://nextjs.org"
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js
        </a>{" "}
        &{" "}
        <a
          href="https://tailwindcss.com"
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tailwind CSS
        </a>
      </p>

      <a
        href="#"
        className="block text-blue-500 hover:underline mt-4"
      >
        ↑ Back to Top
      </a>
    </footer>
  );
}
