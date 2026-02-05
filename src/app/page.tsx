import dynamic from "next/dynamic";

import { ShaderBackground } from "@/components/visuals/hero-shader";
import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { Footer } from "@/components/layout/footer";

const AboutSection = dynamic(() => import("@/components/sections/about").then(mod => mod.AboutSection));
const EducationScroll = dynamic(() => import("@/components/sections/education").then(mod => mod.EducationScroll));
const Projects = dynamic(() => import("@/components/sections/projects").then(mod => mod.Projects));
const Contact = dynamic(() => import("@/components/sections/contact").then(mod => mod.Contact));



export default function Home() {
  return (
    <div className={`font-sans bg-bg-deep text-text-main selection:bg-accent-primary/30`}>
      <main>
        <section className="home relative" id="home">
          <ShaderBackground className="flex items-center justify-center px-10 pt-32 min-h-screen">
            <Navbar />
            <Hero />
          </ShaderBackground>
        </section>

        <section className="skills py-16 px-0 " id="skills">
          <h2 className="heading text-6xl font-light  text-center mb-24 text-white">
            - About <span className="text-light">ME -</span>
          </h2>
          <div className="max-w-full mx-auto">
            <AboutSection />
          </div>
        </section>

        <EducationScroll />

        <section id="projects">
          <Projects />
        </section>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
