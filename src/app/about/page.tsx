"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Download, Figma, Framer, Code2, Database } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-white/30">
            <main className="max-w-7xl mx-auto px-6 py-24 md:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-3  items-start">

                    {/* Left Column - Profile Card */}
                    <div className="lg:col-span-1 bg-neutral-900/50 backdrop-blur-xl border border-white/10  p-8 flex flex-col items-center text-center sticky top-24">
                        <div className="relative w-[300px] h-[400px] mb-6">
                            <div className="absolute inset-0 bg-gradient-to-tr from-neutral-800 to-neutral-600 rounded-full blur-2xl opacity-50"></div>
                            <Image
                                src="/guy.png" // Using the generic hero image as profile pic
                                alt="Mohaddis Ansari"
                                fill
                                className="object-cover  grayscale"
                            />
                        </div>

                        <h2 className="text-2xl font-bold text-white mb-2">Mohd Mohaddis Ansari</h2>
                        <a href="mailto:mohaddisansari1031@gmail.com" className="text-sm text-neutral-400 hover:text-white transition-colors mb-8">
                            mohaddisansari1031@gmail.com
                        </a>

                        <a
                            href="/md-resume.pdf"
                            target="_blank"
                            className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-neutral-200 transition-colors w-full justify-center"
                        >
                            <Download size={18} />
                            Download CV
                        </a>
                    </div>

                    {/* Right Column - Details */}
                    <div className="lg:col-span-2 ">

                        {/* Bio Section */}
                        <div className="bg-neutral-900/50 backdrop-blur-xl border border-white/10  p-8 md:p-12 relative overflow-hidden">
                            {/* Decorative Badge */}
                            <div className="absolute top-8 right-8">
                                <div className="animate-[spin_10s_linear_infinite] w-24 h-24 border border-white/10 rounded-full flex items-center justify-center text-[10px] uppercase tracking-widest text-neutral-500 font-medium">
                                    Based in Mumbai •
                                </div>
                            </div>

                            <div className="flex items-center mb-6">
                                <h3 className="text-3xl font-bold">About Me</h3>
                                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-neutral-300 font-medium">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                    Open to work
                                </span>
                            </div>

                            <div className="prose prose-invert prose-neutral max-w-none text-neutral-300 font-light leading-relaxed space-y-6">
                                <p>
                                    I’m a developer, designer, and system thinker based in Mumbai. Growing up, I learned that ideas are easy, but systems are what actually matter. That mindset pulled me into web development—I don’t just build things that look good; I build systems that work.
                                </p>
                                <p>
                                    Most of my projects are self-initiated demos designed to feel real: full-stack apps, lead-generation systems, and automation workflows. I keep things simple on purpose—clean UI, clear logic, and code that is meant to be used.
                                </p>
                                <p>
                                    My BCA program gives me structure, but my real learning happens by building, breaking, and fixing things on my own. When I'm not coding, I'm training at the gym, designing, or learning German and Arabic to adapt faster in different environments.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 ">
                            {/* Latest Roles */}
                            <div className="bg-neutral-900/50 backdrop-blur-xl border border-white/10 p-8">
                                <h3 className="text-xl font-bold mb-6">Latest Roles</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 shrink-0">
                                            <Code2 size={24} className="text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-white">Freelance Developer</h4>
                                            <p className="text-sm text-neutral-500">Self-Employed • 2023 - Present</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 shrink-0">
                                            <Database size={24} className="text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-white">Full Stack Student</h4>
                                            <p className="text-sm text-neutral-500">BCA Program • 2024 - Present</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Main Apps */}
                            <div className="bg-neutral-900/50 backdrop-blur-xl border border-white/10  p-8">
                                <h3 className="text-xl font-bold mb-6">Main Stack</h3>
                                <div className="grid grid-cols-4 gap-4">
                                    <div className="aspect-square bg-white/5 rounded-xl flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors">
                                        <Figma size={24} className="text-white/70" />
                                    </div>
                                    <div className="aspect-square bg-white/5 rounded-xl flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors">
                                        <Code2 size={24} className="text-white/70" />
                                    </div>
                                    <div className="aspect-square bg-white/5 rounded-xl flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors">
                                        <Database size={24} className="text-white/70" />
                                    </div>
                                    <div className="aspect-square bg-white/5 rounded-xl flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors">
                                        <Framer size={24} className="text-white/70" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
