type ExperienceCardProps = {
  company?: string;
  role?: string;
  duration?: string;
  description?: string;
  technologies?: string[];
};

export default function ExperienceCard({ company, role, duration, description, technologies }: Readonly<ExperienceCardProps>) {
  return (
    <div className="border border-gray-300 rounded-lg p-6 shadow-sm">
      {company && <h3 className="text-xl font-semibold text-gray-900">{company}</h3>}
      {role && <p className="text-gray-700 font-medium mt-1">{role}</p>}
      {duration && <p className="text-sm text-gray-500 mt-1">{duration}</p>}
      {description && <p className="text-gray-600 mt-4">{description}</p>}

      {technologies && technologies.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-1">Technologies Used:</h4>
          <ul className="flex flex-wrap gap-2 text-sm text-gray-600">
            {technologies.map((tech, idx) => (
              <li key={idx} className="bg-gray-100 px-2 py-1 rounded">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
