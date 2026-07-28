import Image from "next/image";

const sectionHeadingClassName = "text-4xl font-bold sm:text-5xl";

export default function NoteToStudy(){
    return (
        <main>
     <section className="mx-auto max-w-7xl px-4 pt-16 pb-20 text-center">
        <p className="text-sm font-medium uppercase tracking-wider text-foreground/60">
    Project Case Study
  </p>
<h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl">
       NoteToStudy
      </h1>
<p className="mt-4 text-lg  leading-relaxed text-foreground/80 sm:mt-5 sm:text-2xl">
        An AI-powered study application
      </p>
 <div className="mx-auto mt-16 max-w-4xl">
    <Image
    src="/NoteToStudy.png"
    alt="NoteToStudy application screenshot"
    width={1200}
    height={675}
   className="w-full rounded-xl border border-foreground/10 shadow-sm"
  />
  </div>
</section>
<section className="mx-auto max-w-7xl px-4 pt-16 pb-20 items-start">
    <h2 className={sectionHeadingClassName}>Overview</h2>
    <div className="mt-8 max-w-3xl text-lg leading-relaxed text-foreground/80">
    <p>
      NoteToStudy was built to explore how AI can help students turn messy
      lecture notes into structured study resources.

      The idea was to create a simple tool that reduces the time required to
      organize and prepare learning material.
    </p>
  </div>
</section>
<section className="mx-auto max-w-7xl px-4 pt-16 pb-20 items-start">
    <h2 className={sectionHeadingClassName}>The Problem</h2>
    <div className="mt-8 max-w-3xl text-lg leading-relaxed text-foreground/80">
    <p>
      Students often collect information from lectures, slides and handwritten notes, but turning those notes into structured learning material takes time.

The challenge was creating a simple workflow where students could transform unorganized information into something easier to study.
    </p>
  </div>
</section>
<section className="mx-auto max-w-7xl px-4 pt-16 pb-20 items-start">
    <h2 className={sectionHeadingClassName}>The Solution</h2>
   <div className="mt-8 max-w-3xl space-y-4 text-lg leading-relaxed text-foreground/80">
  <p>
    NoteToStudy allows students to paste or upload their notes and transform
    them into structured study sheets using AI. Students can choose between
    organizing their existing content or generating an AI-enhanced version
    that improves clarity, adds explanations, and enriches the learning
    material.
  </p>

  <p>
    The application combines a simple interface with AI-powered processing
    to transform raw input into organized and more effective study resources.
  </p>
</div>

  <div className="mt-14 grid gap-16 md:grid-cols-2">

    <div>
   <p className="mb-4 text-base font-medium text-center text-foreground/70">
      Input
    </p>
  <div className="overflow-hidden rounded-xl border border-foreground/10 shadow-sm">
  
    <Image
      src="/messynotes.png"
      alt="NoteToStudy input screen"
      width={1200}
      height={800}
      className="w-full"
    />
  </div> </div>
  
   <div>
    <p className="mb-4 text-base font-medium text-center text-foreground/70">
      Output
    </p>
  <div className="overflow-hidden rounded-xl border border-foreground/10 shadow-sm">
  
    <Image
      src="/organizednotes.png"
      alt="NoteToStudy generated study material"
      width={1200}
      height={800}
      className="w-full"
    />
  </div> </div>
</div>
</section>
<section className="mx-auto max-w-7xl px-4 pt-16 pb-20">
  <h2 className={sectionHeadingClassName}>
    AI Integration
  </h2>

  <div className="mt-8 max-w-3xl text-lg leading-relaxed text-foreground/80">
    <h3 className="text-2xl font-semibold text-foreground">
      Using AI to support the learning process
    </h3>

    <p className="mt-4">
      One of the main challenges when building NoteToStudy was deciding where
      AI could provide real value. Instead of simply generating summaries, the
      application uses AI to help students transform their own notes into
      structured study material.
    </p>

    <p className="mt-6">
      Students can choose between two workflows:
    </p>

    <div className="mt-6 space-y-6">
      <div>
        <h4 className="font-semibold text-foreground">
          Organize
        </h4>

        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Keeps the student&apos;s original content</li>
          <li>Improves structure and readability</li>
          <li>Converts notes into a clearer study format</li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-foreground">
          AI Enhanced
        </h4>

        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Adds explanations and additional context</li>
          <li>Expands the learning material</li>
          <li>
          Helps make complex topics easier to understand
          </li>
        </ul>
      </div>
    </div>

    <p className="mt-8">
      The goal was to give students control over the level of AI assistance
      while keeping their own notes as the foundation.
    </p>
  </div>

  <div className="mt-12 max-w-3xl">
    <h3 className="text-2xl font-semibold text-foreground">
      AI Processing Workflow
    </h3>

    <div className="mt-6 rounded-xl border border-foreground/10 bg-foreground/[0.03] p-6 text-center text-lg">
      <p>Student Input</p>
      <p className="my-2">↓</p>
      <p>Next.js Application</p>
      <p className="my-2">↓</p>
      <p>OpenAI API</p>
      <p className="my-2">↓</p>
      <p>Structured Study Material</p>
    </div>

    <p className="mt-6 text-lg leading-relaxed text-foreground/80">
      The application handles the user input, sends relevant information to the
      AI model, and presents the generated result as structured learning
      material.
    </p>
  </div>
</section>
<section className="mx-auto max-w-7xl px-4 pt-16 pb-20">
  <h2 className={sectionHeadingClassName}>
    Building & Technology
  </h2>

  <div className="mt-8 max-w-3xl text-lg leading-relaxed text-foreground/80">
    <p>
      NoteToStudy was built as a full-stack application combining a modern
      frontend, AI capabilities, analytics, and deployment.
    </p>

    <div className="mt-10 space-y-10">
      <div>
        <h3 className="text-2xl font-semibold text-foreground">
          Frontend
        </h3>

        <h4 className="mt-3 font-semibold text-foreground">
          Next.js, React, TypeScript, Tailwind CSS
        </h4>

        <p className="mt-3">
          The application uses Next.js and React to build the user interface,
          with TypeScript helping maintain a more reliable codebase. Tailwind
          CSS was used to create a consistent responsive design and iterate
          quickly during development.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-foreground">
          AI
        </h3>

        <h4 className="mt-3 font-semibold text-foreground">
          OpenAI API
        </h4>

        <p className="mt-3">
          The OpenAI API powers the note transformation features by processing
          user input and generating structured study material.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-foreground">
          Analytics
        </h3>

        <h4 className="mt-3 font-semibold text-foreground">
          Supabase
        </h4>

        <p className="mt-3">
          Supabase was used to store application analytics, including page
          visits and generation events, allowing me to measure usage during
          testing.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-foreground">
          Deployment
        </h3>

        <h4 className="mt-3 font-semibold text-foreground">
          Vercel
        </h4>

        <p className="mt-3">
          The application is deployed with Vercel, providing a simple workflow
          for publishing updates directly from the repository.
        </p>
      </div>
    </div>
  </div>
</section>
</main>
    )
}

