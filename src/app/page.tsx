import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      {/* Sections to be added:
          <About />
          <Work />
          <Skills />
          <Experience />
          <Contact />
      */}
      <div className="h-[200vh]"></div> {/* Temp spacing for scrolling testing */}
    </main>
  );
}
