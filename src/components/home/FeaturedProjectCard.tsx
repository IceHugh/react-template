interface FeaturedProjectCardProps {
  project: {
    image: string;
    title: string;
    description: string;
  };
}

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  return (
    <div className="w-64 flex-shrink-0">
      <img
        src={project.image}
        alt={project.title}
        className="aspect-[4/3] w-full rounded-lg object-cover"
      />
      <div className="mt-3">
        <h3 className="font-semibold text-white">{project.title}</h3>
        <p className="mt-1 text-sm text-gray-400">{project.description}</p>
      </div>
    </div>
  );
}