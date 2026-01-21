import { LinkPreviewDemoSecond } from "@/components/demo";
import { ShaderBackground } from "@/components/ui/hero-shader";
import { BentoDemo } from "@/components/bento-demo";
import { EducationScroll } from "@/components/education-scroll";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { Outfit, Inter } from "next/font/google";
import Image from "next/image";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function Home() {
  return (
    <div className={`${inter.variable} ${outfit.variable} font-sans bg-bg-deep text-text-main selection:bg-accent-primary/30`}>


      <main>
        <section className="home relative" id="home">
          <ShaderBackground className="flex items-center justify-center px-10 pt-32 min-h-screen">
            {/* Header / Navbar */}
            <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-8">
              {/* Logo */}
              <div className="flex items-center">
                {/* Placeholder Logo Icon if needed, or just text */}
                <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold rounded-md mr-2">M</div>
                <span className="text-white font-bold tracking-tight">nextHUNTER</span>
              </div>

              {/* Navigation */}
              <nav className="hidden md:flex items-center space-x-6">
                <a href="#home" className="text-white/70 hover:text-white text-sm font-light transition-colors">ABOUT ME</a>
                <a href="#projects" className="text-white/70 hover:text-white text-sm font-light transition-colors">CASE STUDIES</a>
                <a href="#contact" className="text-white/70 hover:text-white text-sm font-light transition-colors">WORK WITH ME</a>
              </nav>


            </header>

            {/* Main Hero Content - Center Aligned Grid */}
            <main className="relative z-20 flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto gap-8 pt-10">

              {/* Left: Portrait Image Container */}
              <div className="relative w-[300px] h-[450px] md:w-[400px] md:h-[600px] shrink-0 z-10">
                <Image
                  src="/hero.png"
                  alt="Mohaddis"
                  fill
                  className="object-cover  shadow-2xl brightness-75"
                />

                {/* Resume Button pinned to top-right of image */}
                <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 z-40">
                  <a href="/md-resume.pdf" target="_blank" className="flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-white rounded-full text-black text-xs md:text-sm font-medium hover:scale-110 transition-transform shadow-xl">
                    RESUME
                  </a>
                </div>
              </div>

              {/* Right: Text Content (Overlapping) */}
              <div className="text-center md:text-left relative z-20 md:-ml-20 mt-8 md:mt-0">
                {/* Pill Label */}
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-6">
                  <span className="text-white/60 text-xs font-medium mr-2">✨</span>
                  <span className="text-white/90 text-sm font-light">Web Developer & UI Designer</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-6xl md:text-7xl lg:text-9xl leading-[0.9] tracking-tight text-white mb-6">
                  <span className="font-serif italic font-light opacity-90 block mb-2">Mohaddis</span>
                  <span className="font-light flex flex-col md:flex-row items-center md:items-start text-5xl gap-3">
                    YOUR
                    <TypewriterEffect
                      words={[
                        {
                          text: "WEB DEVELOPER",
                          className: "text-light font-gill",
                        },
                        {
                          text: "UX/UI DESIGNER",
                          className: "text-light",
                        },
                        {
                          text: "CREATIVE GUY",
                          className: "text-light",
                        },
                        {
                          text: "PROBLEM SOLVER",
                          className: "text-light",
                        },
                      ]}
                      className="text-5xl"
                      cursorClassName="bg-white"
                    />
                  </span>
                </h1>

                {/* Description */}
                <p className="text-base font-light text-white/70 mb-8 max-w-lg leading-relaxed mx-auto md:mx-0">
                  Discover the essence of creativity in my portfolio. I build immersive, user-centric products with modern aesthetics and seamless functionality.
                </p>

                {/* Buttons */}
                <div className="flex justify-center md:justify-start gap-4">
                  <a href="#projects" className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-medium text-sm transition-all duration-200 hover:bg-white/10 hover:border-white/50">
                    See how I Desgin & Build
                  </a>
                  <a href="mailto:mohaddisansari1031@gmail.com" className="px-8 py-3 rounded-full bg-white text-black font-medium text-sm transition-all duration-200 hover:bg-white/90 shadow-lg shadow-white/20">
                    lets talk
                  </a>
                </div>
              </div>
            </main>
          </ShaderBackground>
        </section>



        <section className="skills py-24 px-0 " id="skills">

          <h2 className="heading text-6xl font-light  text-center mb-24 text-white">
            - About <span className="text-light">ME -</span>
          </h2>
          <div className="max-w-full mx-auto">
            <BentoDemo />
          </div>
        </section>

        <EducationScroll />
        <section id="projects">
          <LinkPreviewDemoSecond />
        </section>

        <section className="contact relative py-32 px-10 overflow-hidden" id="contact">
          <Image
            src="/hero-bg.jpg"
            alt="Background"
            fill
            className="absolute top-0 left-0 w-full h-full object-cover opacity-20 z-0"
          />
          <div className="relative z-10">
            <h2 className="heading text-6xl font-light text-center mb-10 text-white">
              - Get In <span className="text-light">Touch -</span>
            </h2>
            <form className="glass p-12 rounded-[40px] border border-white/5 max-w-3xl mx-auto shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <input type="text" placeholder="Full Name" className="bg-bg-deep/50 border border-white/10 rounded-2xl p-5 focus:border-accent-primary outline-none transition-colors" />
                <input type="number" placeholder="Phone Number" className="bg-bg-deep/50 border border-white/10 rounded-2xl p-5 focus:border-accent-primary outline-none transition-colors" />
                <input type="email" placeholder="Email Address" className="bg-bg-deep/50 border border-white/10 rounded-2xl p-5 focus:border-accent-primary outline-none transition-colors col-span-2" />
              </div>
              <textarea rows={6} placeholder="Your Message" className="w-full bg-bg-deep/50 border border-white/10 rounded-2xl p-5 focus:border-accent-primary outline-none transition-colors mb-8 resize-none"></textarea>
              <button className="w-full bg-white text-black py-5 rounded-2xl font-light text-lg hover:scale-[0.98] transition-transform shadow-lg shadow-accent-primary/20">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer py-12 px-10 bg-bg-elevated/50 text-center border-t border-white/5">
        <p className="text-text-muted">&copy; 2026 MOHADDIS ANSARI | Built with ❤️ & Passion</p>
      </footer>
    </div>
  );
}
