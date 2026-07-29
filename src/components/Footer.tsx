const year = new Date().getFullYear();

export default function Footer() {
    return (
       <footer className="grid grid-cols-1 items-center gap-4 px-8 py-6 text-sm sm:grid-cols-3">
  <p className="text-center sm:text-left">
    © {year} Jakob Heintze
  </p>

  <a
    href="#hero"
    className="justify-self-center transition-opacity hover:opacity-70"
  >
    ↑ Back to top
  </a>

  <div className="hidden sm:block" />
</footer>
    );
}