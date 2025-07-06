export default function Education() {
  return (
    <section className="py-20 px-4 sm:px-8 bg-white w-full" id="education">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl text-blue-600 font-bold mb-8 text-center">
          Education
        </h2>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-2xl text-orange-600 font-semibold mb-1">
            Ontario Tech University
          </h3>
          <p className="text-gray-700 text-md mb-2">
            <span className="font-medium">Bachelor of Science (Hons), Computer Science</span>  
            <br />September 2022 - June 2026 
          </p>

          <p className="text-gray-700 mb-3">
            <strong>GPA:</strong> 4.09 / 4.30 &nbsp;|&nbsp; 5x President&apos;s List Honoree
          </p>

          <div className="mb-4">
            <p className="text-gray-700 font-semibold mb-1 text-left">Relevant Coursework:</p>
            <ul className="list-disc list-inside text-gray-600 text-left text-sm leading-relaxed">
              <li>Web & Mobile Development</li>
              <li>Systems Programming & Algorithms</li>
              <li>Software Quality Assurance</li>
              <li>Databases, Graphics, and Computational Science</li>
              <li>Calculus, Discrete Math, and Statistics</li>
            </ul>
          </div>

          <a
            href="https://ontariotechu.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Visit University Website
          </a>
        </div>
      </div>
    </section>
  );
}
