export default function SkillCard({ skills = [] }: Readonly<{ skills?: string[] }>) {
  return (
    <div className="border border-gray-300 rounded-lg p-6 shadow-sm mb-4">
      {skills && skills.length > 0 && (
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-2 text-sm text-gray-700">
          {skills.map(skill => (
            <li key={skill} className="bg-gray-100 px-3 py-2 rounded hover:bg-gray-200 transition">
              {skill}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
