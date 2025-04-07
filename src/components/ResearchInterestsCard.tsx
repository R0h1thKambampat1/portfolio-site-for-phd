type ResearchInterestCardProps = {
  interests?: string[];
};

export default function ResearchInterestCard({ interests = [] }: Readonly<ResearchInterestCardProps>) {
  return (
    <div className="border border-gray-300 rounded-lg p-6 shadow-sm">
      {interests && interests.length > 0 && (
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-2 text-sm text-gray-700">
          {interests.map(interest => (
            <li key={interest} className="bg-gray-100 px-3 py-2 rounded hover:bg-gray-200 transition">
              {interest}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
