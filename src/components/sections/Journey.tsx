import StoryChapter from "@/components/story/StoryChapter";
import { story } from "@/data/story/homepage";

export default function Journey() {
  return (
    <>
      {story.map((chapter) => (
        <StoryChapter
          key={chapter.id}
          year={chapter.year}
          eyebrow={chapter.eyebrow}
          title={chapter.title}
          description={chapter.description}
          image={chapter.image}
          theme={chapter.theme}
        />
      ))}
    </>
  );
}