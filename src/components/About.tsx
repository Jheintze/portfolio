const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend & Data",
    items: ["Node.js", "MongoDB", "Supabase"],
  },
  {
    title: "Tools",
    items: ["Git", "Vercel", "AI APIs"],
  },
];

const columnHeadingClassName = "text-4xl font-bold sm:text-5xl";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:py-24">
      <div className="flex flex-col items-start gap-10 md:flex-row md:justify-start md:gap-20 lg:gap-28 xl:gap-50">
        <div className="w-full max-w-md">
          <h2 className={columnHeadingClassName}>About Me</h2>

          <div className="mt-10 space-y-4 text-lg leading-relaxed text-foreground/80">
            <p>
              I&apos;m a frontend developer focused on creating clean, responsive
              and user-friendly web applications.
            </p>
            <p>
              Through self-directed learning and hands-on projects, I&apos;ve
              built applications using modern technologies like React, Next.js,
              TypeScript and AI APIs.
            </p>
            <p>
              I enjoy turning ideas into practical digital products and exploring
              how AI can improve development workflows, increase productivity and
              help bring useful applications to life faster.
            </p>
          </div>
        </div>

        <div className="w-full max-w-sm">
          <h2 className={columnHeadingClassName}>Tech Stack</h2>

          <div className="mt-10 space-y-4">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-lg font-bold">{group.title}</h3>
                <p className="mt-2 text-foreground/80">
                  {group.items.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
