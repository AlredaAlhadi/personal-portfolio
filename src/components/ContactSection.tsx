import { useForm, ValidationError } from "@formspree/react";

export default function ContactSection() {
  const [state, handleSubmit] = useForm("xkgzwqro");

  return (
    <section className="py-20 px-4 sm:px-8 bg-white w-full" id="contact">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl text-purple-600 font-bold mb-4">Get In Touch</h2>
        <p className="text-lg text-gray-700 mb-6">
          Interested in working together, collaborating, or just saying hi? I am always open to new opportunities and conversations.
        </p>


        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href="mailto:alreda1alhadi@gmail.com"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/alreda-alhadi"
            target="_blank"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            LinkedIn
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

        <div className="text-left">
          <h3 className="text-xl text-purple-800 font-bold py-4">Send Me A Message</h3>

          {state.succeeded ? (
            <p className="text-green-600 font-medium">✅ Message sent successfully!</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 border border-gray-300 rounded text-gray-800"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 border border-gray-300 rounded text-gray-800"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />

              <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                required
                className="w-full p-3 border border-gray-300 rounded text-gray-800"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />

              <button
                type="submit"
                disabled={state.submitting}
                className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
