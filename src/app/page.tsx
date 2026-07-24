import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <hr className="border-foreground/5" />
      <Projects />
      <hr className="border-foreground/5" />
      <About />
      <hr className="border-foreground/5" />
      <Contact />
      <Footer />
    </main>
  );
}
