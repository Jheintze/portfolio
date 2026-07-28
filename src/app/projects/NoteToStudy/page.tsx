import Image from "next/image";

const sectionHeadingClassName = "text-4xl font-bold sm:text-5xl";

export default function notetostudy(){
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

</main>
    )
}

