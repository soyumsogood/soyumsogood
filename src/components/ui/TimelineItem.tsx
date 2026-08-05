type TimelineItemProps = {
  year: string;
  title: string;
  description: string;
  status: "completed" | "current" | "future";
};

export default function TimelineItem({
  year,
  title,
  description,
  status,
}: TimelineItemProps) {
  const dotColor = {
    completed: "bg-[#C8102E]",
    current: "bg-[#111827]",
    future: "bg-gray-300",
  };

  return (
    <div className="relative flex flex-col items-center text-center">
      {/* Timeline Line */}
      <div className="absolute top-0 bottom-0 w-px bg-gray-200" />

      {/* Timeline Dot */}
      <div
        className={`relative z-10 h-5 w-5 rounded-full border-4 border-white shadow-sm ${dotColor[status]}`}
      />

      {/* Content */}
      <div className="mt-8 max-w-xl pb-20">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#C8102E]">
          {year}
        </p>

        <h3 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">
          {title}
        </h3>

        <p className="text-lg leading-8 text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
}