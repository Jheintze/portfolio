import Image from "next/image";

export default function Projects(){
    return (
        <section id="projects" className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
  <h2 className="text-4xl font-bold sm:text-5xl">
    Projects
  </h2>

  <div className="mt-10 grid items-stretch gap-10 md:grid-cols-2">
    
    <article className="flex flex-col">
      <h3 className="text-3xl font-bold text-center">
        NoteToStudy
      </h3>

      <div className="mt-6  aspect-[4/3] overflow-hidden rounded-lg">
       <a href="https://note-to-study.vercel.app"
         target="_blank"
  rel="noopener noreferrer">
  <Image
    src="/NoteToStudy.png"
    alt="NoteToStudy application screenshot"
    width={1200}
    height={675}
    className="h-full w-full object-cover"
  />
  </a>
</div>

      <p className="mt-6 min-h-24 text-lg leading-relaxed text-foreground/80">
        AI-powered study application that transforms unstructured notes into structured learning material. It helps students organize, enhance and simplify their notes into clear study resources.
      </p>

      <p className="mt-4 text-sm text-foreground/80">
        React · Next.js · TypeScript · OpenAI API · Supabase
      </p>

      <div className="mt-6 flex gap-10">
        <a href="#">
          View Case Study
        </a>
      </div>
    </article>


    <article className="flex flex-col">
      <h3 className="text-3xl font-bold text-center">
        Wedding Website
      </h3>

      <div className="mt-6  aspect-[4/3] overflow-hidden rounded-lg">
      <a href="https://jheintze.github.io/Wedding-Website/"
         target="_blank"
  rel="noopener noreferrer">
  <Image
    src="/WeddingWebsite.png"
    alt="Wedding Website screenshot"
    width={1200}
    height={675}
    className="h-full w-full object-cover"
  /></a>
</div>

      <p className="mt-6 min-h-24 text-lg leading-relaxed text-foreground/80">
        A responsive wedding website built for a real wedding event, providing guests with essential information about the location, accommodation, schedule and RSVP process.
      </p>

      <p className="mt-4 text-sm text-foreground/80">
        HTML · CSS · JavaScript 
      </p>     
    </article>

  </div>
</section>
    );
}