import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Experience from "@/components/experience/Experience";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Contact from "@/components/contact/Contact";
import Education from "@/components/education/education";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}