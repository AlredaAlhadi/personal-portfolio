export default function ContactSection() {
  return (
    <section className="py-20 px-4 sm:px-8 bg-white w-full" id="contact">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl text-purple-600 font-bold mb-4">Get In Touch</h2>
        <p className="text-lg text-gray-700 mb-6">
          Interested in working together, collaborating, or just saying hi? I'm always open to new opportunities and conversations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:alreda1alhadi@gmail.com"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Contact Me
          </a>
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
