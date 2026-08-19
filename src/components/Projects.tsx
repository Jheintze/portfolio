import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="bg-surface">
      {" "}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <h2 className="text-4xl font-bold sm:text-5xl">Projects</h2>

        <div className="mt-16 grid items-stretch gap-16 md:grid-cols-2">
          <article className="flex flex-col">
            <h3 className="text-3xl font-bold text-center">Dishboost</h3>

            <div
              className="mt-6
               aspect-[4/3]
               overflow-hidden
               rounded-xl
               border border-foreground/10
               shadow-sm
               transition-all duration-300
               hover:-translate-y-0.5
              hover:shadow-md"
            >
              <a
                href="https://dishboost.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/dishboost2.png"
                  alt="Dishboost application screenshot"
                  width={1200}
                  height={675}
                  className="h-full w-full object-cover"
                />
              </a>
            </div>

            <p className="mt-6 text-lg leading-relaxed text-foreground/80 md:h-32">
              AI marketing assistant that turns restaurant information,
              promotions, and food photos into ready-to-use content for
              Instagram, Facebook, and Google Business. Early-stage prototype,
              currently in active development and validation.
            </p>

            <p className="mt-6 text-sm text-foreground/80">
              React · Next.js · TypeScript · Tailwind CSS · OpenAI API ·
              Supabase
            </p>
          </article>
          <article className="flex flex-col">
            <h3 className="text-3xl font-bold text-center">NoteToStudy</h3>

            <div
              className="mt-6
               aspect-[4/3]
               overflow-hidden
               rounded-xl
               border border-foreground/10
               shadow-sm
               transition-all duration-300
               hover:-translate-y-0.5
              hover:shadow-md"
            >
              <a
                href="https://note-to-study.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/NoteToStudy.png"
                  alt="NoteToStudy application screenshot"
                  width={1200}
                  height={675}
                  className="h-full w-full object-cover"
                />
              </a>
            </div>

            <p className="mt-6 text-lg leading-relaxed text-foreground/80 md:h-32">
              AI-powered study application that transforms unstructured notes
              into structured learning material. It helps students organize,
              enhance and transform their notes into clearer study resources.
            </p>

            <p className="mt-6 text-sm text-foreground/80">
              React · Next.js · TypeScript · Tailwind CSS · OpenAI API ·
              Supabase
            </p>

            <div className="mt-6 flex gap-10">
              <a
                href="/projects/notetostudy"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center  text-base font-medium transition-opacity hover:opacity-70"
              >
                View Case Study{" "}
                <span className="ml-1 inline-block transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </article>

          <article className="flex flex-col">
            <h3 className="text-3xl font-bold text-center">Wedding Website</h3>

            <div
              className="mt-6
            aspect-[4/3]
            overflow-hidden
            rounded-xl
            border border-foreground/10
            shadow-sm
            transition-all duration-300
            hover:-translate-y-0.5
            hover:shadow-md"
            >
              <a
                href="https://jheintze.github.io/Wedding-Website/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/WeddingWebsite.png"
                  alt="Wedding Website screenshot"
                  width={1200}
                  height={675}
                  className="h-full w-full object-cover"
                />
              </a>
            </div>

            <p className="mt-6 text-lg leading-relaxed text-foreground/80 md:h-32">
              A responsive wedding website built for a real wedding event,
              providing guests with essential information about the location,
              accommodation, schedule and RSVP process.
            </p>

            <p className="mt-6 text-sm text-foreground/80">
              HTML · CSS · JavaScript
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
