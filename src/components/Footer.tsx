export default function Footer() {
  return (
    <footer className="text-sm text-gray-500 bg-red text-center py-8">
      <p>
        © {new Date().getFullYear()} Alreda Alhadi · Built with{" "}
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
    </footer>
  );
}
