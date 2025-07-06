interface ProjectCardProps {
  title: string;
  description: string;
  tech: string;
  date: string;
}

export default function ProjectCard({ title, description, tech, date }: ProjectCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-left border border-gray-200">
      <div className="flex items-baseline justify-between mb-2">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-sm text-gray-500">{date}</p>
      <p className="text-gray-700 mb-3">{description}</p>
      <p className="text-sm text-gray-600 italic">{tech}</p>
    </div>
  );
}
