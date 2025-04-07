import Link from "next/link";
export default function ProjectCard({ title, description, link, linkToLiveSite }: Readonly<{ title: string; description: string; link?: string; linkToLiveSite?: string }>) {
  return (
    <div className="border border-gray-300 rounded-lg p-6">
      <h3 className="font-semibold text-xl">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      {link && (
        <Link href={link} className="text-blue-600 hover:underline mt-4 block">
          View source code
        </Link>
      )}
      {linkToLiveSite && (
        <Link href={linkToLiveSite} className="text-blue-600 hover:underline mt-4 block">
          Visit the live application
        </Link>
      )}
    </div>
  );
}
