"use client";

import Link from "next/link";
import Image from "next/image";

const aboutSections = [
    {
        text: `I’m Mohd Mohaddis Ansari, a BCA student based in Mumbai, originally from Pilibhit, Uttar Pradesh. Growing up between these two places gave me a mix of grounded roots and a practical, fast-moving mindset.`,
        img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974&auto=format&fit=crop",
        alt: "Personal background",
        reverse: false,
    },
    {
        text: `Before getting serious about development, I spent time exploring how real businesses work — from dropshipping and online selling to understanding in-person operations. Those early experiments made one thing clear: ideas are easy, systems are what actually matter.`,
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        alt: "Business systems",
        reverse: true,
    },
    {
        text: `That’s what pulled me into web development. I like building things that do something, not just look good. Most of my projects are self-initiated demos designed to feel real — full-stack apps, lead-generation and booking systems, and automation workflows, usually connected to Google Sheets or backend logic to mirror real business setups.`,
        img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
        alt: "Web development",
        reverse: false,
    },
    {
        text: `My BCA program gives me structure, but most of my learning happens by building, breaking, and fixing things on my own. I keep things simple on purpose — clean UI, clear logic, and systems that are meant to be used.`,
        img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
        alt: "Academic foundation",
        reverse: true,
    },
    {
        text: `Outside of code, I train regularly at the gym, spend time on design and painting, and enjoy cooking. I speak English, Hindi, and Urdu, and I’m currently learning German and Arabic to get better at communication and adapt faster in different environments.`,
        img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
        alt: "Discipline and hobbies",
        reverse: false,
    },
    {
        text: `I’m still learning, but I take it seriously. I build with intent, stay curious, and focus on getting better with every project.`,
        img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop",
        alt: "Future goals",
        reverse: true,
    },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-bg-deep text-text-main font-sans selection:bg-accent-primary/30">

            <main className="max-w-7xl mx-auto px-6 py-24 md:py-32 space-y-32">
                <div className="text-center space-y-6 mb-24">
                    <h1 className="text-6xl md:text-8xl font-semibold tracking-tighter text-white">
                        About <span className="text-white font-light">Me</span>
                    </h1>
                    <p className="text-xl text-text-muted max-w-2xl mx-auto font-light">
                        Developer. Designer. System Thinker.
                    </p>
                </div>

                {aboutSections.map((section, index) => (
                    <section
                        key={index}
                        className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${section.reverse ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Text Side */}
                        <div className="flex-1 space-y-6">
                            {section.text.split("\n\n").map((paragraph, pIndex) => (
                                <p key={pIndex} className="text-lg md:text-xl font-light leading-relaxed text-gray-300">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {/* Image Side */}
                        <div className="flex-1 w-full">
                            <div className="relative aspect-[4/3] overflow-hidden   border-white/10 group">
                                <div className="absolute inset-0 bg-accent-primary/20 opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10"></div>
                                <Image
                                    src={section.img}
                                    alt={section.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </section>
                ))}

                <div className="flex justify-center mt-24">
                    <Link href="/" className="px-10 py-4 rounded-full bg-white text-black font-medium text-lg hover:bg-gray-200 transition-colors shadow-lg shadow-white/10">
                        Back to Home
                    </Link>
                </div>
            </main>
        </div>
    );
}
