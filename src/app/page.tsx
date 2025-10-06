import About from "@/components/Home/About";
import Blogs from "@/components/Home/Blogs";
import Hero from "@/components/Home/Hero";
import Projects from "@/components/Home/Projects";
import Skills from "@/components/Home/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Blogs />
    </main>
  );
}
