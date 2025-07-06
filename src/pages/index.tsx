import { Geist, Geist_Mono } from "next/font/google";
import ProjectCard from "@/components/ProjectCard";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Education from "@/components/Education";

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
          Fourth-year Computer Science student at Ontario Tech University, focused on full-stack development, backend systems, and mobile apps. Actively seeking internship or co-op opportunities to build clean, impactful software.
        </p>
      </section>



        <section className="py-20 px-4 sm:px-8 bg-white w-full" id="about">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl text-green-600 font-bold mb-4">About Me</h2>
            <p className="text-lg text-gray-700">
              I'm a fourth-year Computer Science student at Ontario Tech University with a broad and practical skill set in software development, QA, and IT systems. I’ve built full-stack web apps, mobile applications, and backend systems using tools like Node.js, Python, PostgreSQL, and Flutter. I'm also experienced in frontend development, RESTful APIs, and database design.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              In addition to software, I’ve worked on projects involving software testing, file-based I/O, and Bash scripting. My academic experience includes systems programming in C and basic exposure to computer architecture and low-level logic, which gives me a strong foundation for embedded or hardware-adjacent development.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              I’m currently interning as an IT Support Intern at a financial firm in Jeddah, where I’ve been gaining hands-on experience with Windows systems, hardware setup, user support, and enterprise infrastructure.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              I’m adaptable, collaborative, and eager to contribute across a range of roles — from frontend, backend, mobile, and QA/testing, to IT support or data-oriented work. I'm always looking to grow and apply my skills in meaningful, real-world projects.
            </p>
          </div>
        </section>

        
        
<section className="py-20 px-4 sm:px-8 bg-gray-50 w-full" id="projects">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold mb-8 text-red-600 text-center">Projects</h2>
    <div className="grid gap-8 sm:grid-cols-2">

      <ProjectCard
        title="Personal Portfolio Website"
        date="July 2025 – Present"
        description="Developed a responsive developer portfolio site using Next.js, React, and Tailwind CSS. Features smooth scrolling, project cards, sticky navbar with burger menu, and SEO/meta tags. Hosted on Vercel."
        tech="Next.js · React.js · Tailwind CSS · Vercel · Responsive Design · GitHub"
      />

      <ProjectCard
        title="WorkQuest – Job Tracker Web App"
        date="Mar 2025 – Apr 2025"
        description="Developed a full-stack job tracking app for managing applications with features like resume matching (via keyword relevance), Jooble API integration, and D3.js visualizations. Built frontend in Vue.js (Bulma CSS) and backend in Node.js with PostgreSQL."
        tech="Vue.js · Bulma CSS · Node.js · PostgreSQL · REST API · D3.js · Express.js"
      />

      <ProjectCard
        title="Bee Healthy – AI Workout Assistant"
        date="Feb 2025"
        description="Built an AI-powered workout planner at HackHive using a DeepSeek model via Ollama. Used SVG muscle selectors, AJAX for user input, and dynamic DOM rendering to show personalized plans. Frontend: HTML/CSS/JS/jQuery. AI-backed JSON responses."
        tech="JavaScript · jQuery · HTML · CSS · Bootstrap · AJAX · DeepSeek AI · SVG · Ollama"
      />

      <ProjectCard
        title="PennyWise – Expense Tracker Mobile App"
        date="Oct 2024 – Dec 2024"
        description="Created a finance tracking app using Flutter (Dart), SQLite, and Firebase. Designed profile selector, transactions list, and budget tracking with local + cloud storage. Collaborated using Figma for layout planning."
        tech="Flutter · Dart · Firebase · SQLite · Android Studio · Figma"
      />

      <ProjectCard
        title="Chatroom Server Web App"
        date="Mar 2024 – Apr 2024"
        description="Built a real-time chatroom app with Java and WebSockets in IntelliJ. Supported multiple chatrooms, image sharing, user status, and even a live multiplayer Gomoku minigame. Focused on live communication and responsive design."
        tech="Java · WebSockets · IntelliJ IDEA · JavaScript · HTML/CSS · Team Collaboration"
      />

      <ProjectCard
        title="Spam Detector & Analysis Dashboard"
        date="Feb 2024 – Mar 2024"
        description="Trained a spam classifier using word frequencies in spam vs ham documents. Displayed spam probabilities and precision/accuracy metrics on a clean dashboard built with Java and JAX-RS, served via a full-stack web app."
        tech="Java · JAX-RS · Jakarta EE · Web Applications · REST APIs · JavaScript · JSON"
      />

      <ProjectCard
        title="Sun Destroyer v1.3 – Space Game (XNA)"
        date="Apr 2022 – Jun 2022"
        description="Designed and built a 2D multiplayer space game using C# and XNA. Added features like background selection, health tracking, controller support, and audio. Built game logic with class hierarchies and OOP best practices."
        tech="C# · XNA · Visual Studio · Game Physics · OOP · UML · Audio · UI Design"
      />

    </div>
  </div>
</section>


      <Education />
      
      <ContactSection />


      <Footer />


      </main>

    </div>
  );
}
