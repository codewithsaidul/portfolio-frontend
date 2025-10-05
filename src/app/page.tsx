import Hero from "@/components/Home/Hero";
import Skills from "@/components/Home/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <Skills />
      </div>
    </main>
  );
}
