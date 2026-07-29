import Image from "next/image";

const sectionHeadingClassName = "text-4xl font-bold sm:text-5xl";

export default function NoteToStudy(){
    return (
        <main>

          {/*Hero */}

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

{/*Overview */}

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

{/*The Problem */}

<section className="mx-auto max-w-7xl px-4 pt-16 pb-20 items-start">
    <h2 className={sectionHeadingClassName}>The Problem</h2>
    <div className="mt-8 max-w-3xl text-lg leading-relaxed text-foreground/80">
    <p>
      Students often collect information from lectures, slides and handwritten notes, but turning those notes into structured learning material takes time.

The challenge was creating a simple workflow where students could transform unorganized information into something easier to study.
    </p>
  </div>
</section>

{/*The Solution */}

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

{/*AI Integration */}

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

{/*Building & Technology */}

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

{/* Testing the idea */}

<section className="mx-auto max-w-7xl px-4 pt-16 pb-20">
  <h2 className={sectionHeadingClassName}>
    Testing the Idea
  </h2>
 <div className="mt-12 grid items-start gap-16 md:grid-cols-2">
  <div className="text-lg leading-relaxed text-foreground/80">
    <p>
      The idea for NoteToStudy came while studying Spanish at UNAM
      (National Autonomous University of Mexico), where I experienced the
      challenge of organizing large amounts of learning material.
    </p>

    <p className="mt-4">
      To validate whether students would find value in the tool, I created
      promotional material and tested the application with students around
      the university area.
    </p>
  
  {/* Flyer Campaign */}
 
    <div  className="mt-12">
      <h3 className="text-2xl font-semibold text-foreground">
        Flyer Campaign
      </h3>

      <p className="mt-4 text-lg leading-relaxed text-foreground/80">
        I designed a flyer introducing NoteToStudy and placed 50 copies around
        campus notice boards and student areas to reach potential users.
      </p>

      <p className="mt-4 text-lg leading-relaxed text-foreground/80">
        The goal was to create awareness of the application and encourage
        students to try the tool.
      </p>
    </div>
</div>
    <div className="mx-auto max-w-md overflow-hidden rounded-xl border border-foreground/10 shadow-sm">
      <Image
        src="/flyer.png"
        alt="NoteToStudy flyer"
        width={800}
        height={1200}
        className="w-full"
      />
    </div>
  </div>


  {/* Analytics */}

 <div className="mt-20 max-w-3xl">
  <h3 className="text-2xl font-semibold text-foreground">
    Measuring Engagement
  </h3>

  <p className="mt-4 text-lg leading-relaxed text-foreground/80">
    To understand whether students interacted with the application, I
    implemented custom analytics tracking using Supabase.
  </p>

  <p className="mt-4 text-lg leading-relaxed text-foreground/80">
    The initial campaign generated:
  </p>

  <div className="mt-8 grid gap-6 sm:grid-cols-3">
    <div>
      <p className="text-3xl font-semibold text-foreground">
       78
      </p>
      <p className="mt-1 text-sm text-foreground/70">
        Website visits
      </p>
    </div>

    <div>
      <p className="text-3xl font-semibold text-foreground">
        16
      </p>
      <p className="mt-1 text-sm text-foreground/70">
        Note generations
      </p>
    </div>

    <div>
      <p className="text-3xl font-semibold text-foreground">
        0
      </p>
      <p className="mt-1 text-sm text-foreground/70">
        AI Enhanced generations
      </p>
    </div>
  </div>
</div>
</section>

 {/*  Results & Learnings */}
 
<section className="mx-auto max-w-7xl px-4 pt-16 pb-20">
  <h2 className={sectionHeadingClassName}>
    Results & Learnings
  </h2>

  <div className="mt-8 max-w-3xl text-lg leading-relaxed text-foreground/80">
    <p>
      The initial test provided valuable insights into how students interacted
      with the application. While the campaign generated visitors and some
      users tested the generation workflow, the conversion from visitors to
      active users remained limited.
    </p>

    <p className="mt-4">
      The testing phase helped identify areas where the product experience
      could be improved and highlighted the importance of validating ideas
      with real users.
    </p>
  </div>


  <div className="mt-12 max-w-3xl">
    <h3 className="text-2xl font-semibold text-foreground">
      Key Learnings
    </h3>

    <div className="mt-6 space-y-6 text-lg leading-relaxed text-foreground/80">
      <div>
        <h4 className="font-semibold text-foreground">
          Clearer Feature Differentiation
        </h4>

        <p className="mt-2">
          The difference between the Organize and AI Enhanced workflows was not
          clear enough for users. The two features needed stronger
          differentiation to communicate when additional AI assistance provides
          value.
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-foreground">
          User Communication & Onboarding
        </h4>

        <p className="mt-2">
          The application would benefit from clearer explanations of the
          available workflows and how AI contributes to the generated study
          material.
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-foreground">
          Early Validation
        </h4>

        <p className="mt-2">
          Testing with real users helped identify product limitations before investing more time
into further development.
        </p>
      </div>
    </div>
  </div>
</section>
</main>
    )
}

