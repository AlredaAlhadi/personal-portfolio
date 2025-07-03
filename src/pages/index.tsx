import { Geist, Geist_Mono } from "next/font/google";
import ProjectCard from "@/components/ProjectCard";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      className={`${geistSans.className} ${geistMono.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <Navbar />
      <main className="row-start-2 flex flex-col items-center text-center gap-6 w-full">


        <section className="py-20 px-4 sm:px-8 bg-gray-50 w-full">
          <h1 className="text-5xl font-bold text-blue-600 mb-4">Hi, I&apos;m Alreda 👋</h1>
          <p className="text-lg text-gray-700 max-w-xl mx-auto">
            I&apos;m a Computer Science student at Ontario Tech University focused on full-stack development, backend systems, and polished frontend UI.
          </p>
        </section>


        <section className="py-20 px-4 sm:px-8 bg-white w-full" id="about">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl text-green-600 font-bold mb-4">About Me</h2>
            <p className="text-lg text-gray-700">
              I&apos;m a third-year Computer Science student with a strong foundation in full-stack development, backend systems, and mobile app design.
              I&apos;ve worked with technologies like Java, Node.js, Flutter, PostgreSQL, and Python, and I love building clean, efficient applications.
            </p>
          </div>
        </section>
        
        
        <section className="py-20 px-4 sm:px-8 bg-gray-50 w-full" id="projects">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-red-600 text-center">Projects</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            
            <ProjectCard
              title="WorkQuest - Job Tracker"
              description="Built a full-stack job tracking app with a responsive UI using Vue.js and Bulma CSS. Integrated a Node.js + PostgreSQL backend for storing job posts, filters, and resume data."
              tech="Vue.js · Bulma CSS · Node.js · PostgreSQL"
            />

            <ProjectCard
              title="ATM + Banking System"
              description="Designed and built a console-based ATM system in Python and Bash. Implemented file I/O, account updates, transaction logs, and black-box/white-box testing."
              tech="Python · Shell Scripting · UML · QA Testing"
            />

            <ProjectCard
              title="Bee Healthy - AI Workout Planner"
              description="Created an AI-powered workout assistant using a DeepSeek model with interactive SVG muscle group selection. Built with HTML/CSS/JS and AJAX for live UI updates."
              tech="HTML · CSS · JavaScript · AI · HackHive Hackathon"
            />

            <ProjectCard
              title="PennyWise - Expense Tracker"
              description="Developed a cross-platform finance app using Flutter and Firebase. Designed custom UI pages and built SQLite-based local storage with real-time syncing."
              tech="Flutter · Firebase · SQLite · Android Studio"
            />
            
          </div>
        </div>
      </section>


      <ContactSection />


      <Footer />


      </main>

    </div>
  );
}
