import { Geist, Geist_Mono } from "next/font/google";
import About from "@/components/About";
import Projects from "@/components/Projects";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Education from "@/components/Education";
import Skills from "@/components/Skills";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-6 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <Navbar />

      <main className="row-start-2 flex flex-col items-center text-center gap-6 w-full">


        <section className="py-20 px-4 sm:px-8 bg-gray-50 w-full">
        <h1 className="text-5xl font-bold text-blue-600 mb-4">Hi, I&apos;m Alreda 👋</h1>
        <p className="text-lg text-blue-800">
          Full Stack Developer | Computer Science Student | IT Support Intern
        </p>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto">
          Fourth-year Computer Science student at Ontario Tech University, focused on full-stack development, backend systems, and mobile apps. Actively seeking internship or co-op opportunities to build clean, impactful software.
        </p>
      </section>

      <About />
 
      <Projects />

      <Education />

      <Skills />

      <ContactSection />

      <Footer />

      </main>

    </div>
  );
}
