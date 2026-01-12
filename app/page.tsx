import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedDocument from "@/components/FeaturedDocument";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import AvatarChat from "@/components/AvatarChat";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      {/* <FeaturedDocument /> */}
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Resume />
      <AvatarChat />
      <Contact />
    </main>
  );
}

