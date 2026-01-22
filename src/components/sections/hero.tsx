import React from "react";
import Image from "next/image";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { TYPEWRITER_WORDS } from "@/constants/content";

export function Hero() {
    return (
        <section className="home relative" id="home">
            {/* Main Hero Content - Center Aligned Grid */}
            <main className="relative z-20 flex pb-24 flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto gap-8 pt-10">
                {/* Left: Portrait Image Container */}
                <div className="relative w-[300px] h-[450px] md:w-[400px] md:h-[600px] shrink-0 z-10">
                    <Image
                        src="/hero.png"
                        alt="Mohaddis"
                        fill
                        priority
                        quality={65}
                        sizes="(max-width: 768px) 300px, 400px"
                        className="object-cover  shadow-2xl brightness-75"
                    />

                    {/* Resume Button pinned to top-right of image */}
                    <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 z-40">
                        <a
                            href="/md-resume.pdf"
                            target="_blank"
                            className="flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-white rounded-full text-black text-xs md:text-sm font-medium hover:scale-110 transition-transform shadow-xl"
                        >
                            RESUME
                        </a>
                    </div>
                </div>

                {/* Right: Text Content (Overlapping) */}
                <div className="text-center md:text-left relative z-20 md:-ml-20 mt-8 md:mt-0">
                    {/* Pill Label */}
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-6">
                        <span className="text-white/60 text-xs font-medium mr-2">
                            ✨
                        </span>
                        <span className="text-white/90 text-sm font-light">
                            Web Developer & UI Designer
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-6xl md:text-7xl lg:text-9xl leading-[0.9] tracking-tight text-white mb-6">
                        <span className="font-serif italic font-light opacity-90 block mb-2">
                            Mohaddis
                        </span>
                        <span className="font-light flex flex-col md:flex-row items-center md:items-start text-5xl gap-3">
                            YOUR
                            <TypewriterEffect
                                words={TYPEWRITER_WORDS}
                                className="text-5xl"
                                cursorClassName="bg-white"
                            />
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-base font-light text-white/70 mb-8 max-w-lg leading-relaxed mx-auto md:mx-0">
                        Discover the essence of creativity in my portfolio. I build
                        immersive, user-centric products with modern aesthetics and
                        seamless functionality.
                    </p>

                    {/* Buttons */}
                    <div className="flex justify-center md:justify-start gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-medium text-sm transition-all duration-200 hover:bg-white/10 hover:border-white/50"
                        >
                            Explore my work
                        </a>
                        <a
                            href="mailto:mohaddisansari1031@gmail.com"
                            className="px-8 py-3 rounded-full bg-white text-black font-medium text-sm transition-all duration-200 hover:bg-white/90 shadow-lg shadow-white/20"
                        >
                            lets talk
                        </a>
                    </div>
                </div>
            </main>
        </section>
    );
}
