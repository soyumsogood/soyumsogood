import { Eyebrow } from "../ui/Typography";

type StoryChapterProps = {
  year: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  theme?: "light" | "dark";
};

export default function StoryChapter({
  year,
  eyebrow,
  title,
  description,
  image,
  theme = "light",
}: StoryChapterProps) {
  const dark = theme === "dark";

  return (
    <section
      className={`min-h-screen flex items-center ${
        dark ? "bg-[#111827] text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 py-24 lg:grid-cols-2 lg:px-8">
        {/* Left Content */}
        <div>
          <p
            className={`mb-6 text-7xl font-black tracking-tight ${
              dark ? "text-white/10" : "text-gray-100"
            }`}
          >
            {year}
          </p>

          <Eyebrow className="mb-4">
            {eyebrow}
          </Eyebrow>

          <h2 className="mb-8 text-5xl font-bold tracking-tight lg:text-6xl">
            {title}
          </h2>

          <p
            className={`max-w-xl text-xl leading-9 ${
              dark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {description}
          </p>
        </div>

        {/* Right Visual */}
        <div>
          <div
            className={`aspect-[4/5] w-full rounded-[36px] border ${
              dark
                ? "border-white/10 bg-white/5"
                : "border-gray-200 bg-gray-100"
            } flex items-center justify-center`}
          >
            <span
              className={`text-sm uppercase tracking-[0.3em] ${
                dark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {image}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}