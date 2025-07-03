interface ProjectCardProps {
  title: string;
  description: string;
  tech: string;
}

export default function ProjectCard({ title, description, tech }: ProjectCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl text-red-400 font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-2">{description}</p>
      <p className="text-sm text-gray-500">{tech}</p>
    </div>
  );
}
