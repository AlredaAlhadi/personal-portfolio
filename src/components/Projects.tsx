import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="py-20 px-4 sm:px-8 bg-gray-50 w-full" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-red-600 text-center">Projects</h2>
        <div className="grid gap-8 sm:grid-cols-2">

          <ProjectCard
            title="Personal Portfolio Website"
            date="July 2025 - Present"
            description="Developed a responsive developer portfolio site using Next.js, React, and Tailwind CSS. Features smooth scrolling, project cards, sticky navbar with burger menu, and SEO/meta tags. Hosted on Vercel."
            tech="Next.js · React.js · Tailwind CSS · Vercel · Responsive Design · GitHub"
          />

          <ProjectCard
            title="WorkQuest - Job Tracker Web App"
            date="Mar 2025 - Apr 2025"
            description="Developed a full-stack job tracking app for managing applications with features like resume matching (via keyword relevance), Jooble API integration, and D3.js visualizations. Built frontend in Vue.js (Bulma CSS) and backend in Node.js with PostgreSQL."
            tech="Vue.js · Bulma CSS · Node.js · PostgreSQL · REST API · D3.js · Express.js"
          />

          <ProjectCard
            title="ATM + Banking System (Console App)"
            date="Jan 2025 - Apr 2025"
            description="Built a text-based ATM and backend banking system in Python and Bash. Included user login, deposits, withdrawals, and transaction history. Used text files for account data and implemented strict I/O rules, error handling, and multi-phase QA testing (black-box and white-box)."
            tech="Python · Bash · Shell Scripting · File I/O · QA Testing · UML · Agile"
          />


          <ProjectCard
            title="Bee Healthy - AI Workout Assistant"
            date="Feb 2025"
            description="Built an AI-powered workout planner at HackHive using a DeepSeek model via Ollama. Used SVG muscle selectors, AJAX for user input, and dynamic DOM rendering to show personalized plans. Frontend: HTML/CSS/JS/jQuery. AI-backed JSON responses."
            tech="JavaScript · jQuery · HTML · CSS · Bootstrap · AJAX · DeepSeek AI · SVG · Ollama"
          />

          <ProjectCard
            title="PennyWise - Expense Tracker Mobile App"
            date="Oct 2024 - Dec 2024"
            description="Created a finance tracking app using Flutter (Dart), SQLite, and Firebase. Designed profile selector, transactions list, and budget tracking with local + cloud storage. Collaborated using Figma for layout planning."
            tech="Flutter · Dart · Firebase · SQLite · Android Studio · Figma"
          />

          <ProjectCard
            title="Chatroom Server Web App"
            date="Mar 2024 - Apr 2024"
            description="Built a real-time chatroom app with Java and WebSockets in IntelliJ. Supported multiple chatrooms, image sharing, user status, and even a live multiplayer Gomoku minigame. Focused on live communication and responsive design."
            tech="Java · WebSockets · IntelliJ IDEA · JavaScript · HTML/CSS · Team Collaboration"
          />

          <ProjectCard
            title="Spam Detector & Analysis Dashboard"
            date="Feb 2024 - Mar 2024"
            description="Trained a spam classifier using word frequencies in spam vs ham documents. Displayed spam probabilities and precision/accuracy metrics on a clean dashboard built with Java and JAX-RS, served via a full-stack web app."
            tech="Java · JAX-RS · Jakarta EE · Web Applications · REST APIs · JavaScript · JSON"
          />

          <ProjectCard
            title="Sun Destroyer v1.3 - Space Game (XNA)"
            date="Apr 2022 - Jun 2022"
            description="Designed and built a 2D multiplayer space game using C# and XNA. Added features like background selection, health tracking, controller support, and audio. Built game logic with class hierarchies and OOP best practices."
            tech="C# · XNA · Visual Studio · Game Physics · OOP · UML · Audio · UI Design"
          />

        </div>
      </div>
    </section>
  );
}
