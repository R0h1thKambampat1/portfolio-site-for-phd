type EducationCardProps = {
  university: string;
  degree: string;
  courses: string[];
  thesis: string;
  advisor: string;
  year: string;
};

export default function EducationCard({ university, degree, courses, thesis, advisor, year }: EducationCardProps) {
  return (
    <div className="border border-gray-300 rounded-lg p-6">
      <h3 className="text-2xl font-semibold">{university}</h3>
      <p className="text-gray-700 italic">
        {degree} &middot; {year}
      </p>
      <div className="mt-4">
        <h4 className="font-semibold text-lg">Selected Courses:</h4>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-2 text-gray-600 mt-2">
          {courses.map(course => (
            <li className="font-semibold" key={course}>
              {course}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h4 className="font-semibold text-lg">Final Thesis:</h4>
        <p className="text-gray-600 mt-1">
          <strong>Title: </strong>
          {thesis} <strong>Advisor: </strong>
          {advisor}
        </p>
      </div>
    </div>
  );
}
