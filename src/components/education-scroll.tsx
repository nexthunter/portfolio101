"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const educationData = [
    {
        date: "2020 - 2021",
        title: "High School",
        desc: "HMW English High School. Served as House Captain, excelling in leadership and sports.",
    },
    {
        date: "2021 - 2023",
        title: "Secondary School",
        desc: "Thakur Vidya Mandir Junior College. Focused on Science & Computer Science.",
    },
    {
        date: "2024 - 2028",
        title: "University",
        desc: "Bachelor of Computer Applications (BCA) at Thakur College of Engineering and Technology.",
    },
    {
        date: "2024",
        title: "Internship",
        desc: "Web Development Intern at CODESOFT. Working on dynamic, user-friendly applications.",
    },
];

export const EducationScroll = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(() => {
        const items = itemsRef.current;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: `+=${items.length * 400}`, // Scroll distance proportional to items
                pin: true,
                scrub: 1,
            }
        });

        items.forEach((item, index) => {
            if (item) {
                tl.fromTo(item,
                    { opacity: 0, y: 100, scale: 0.9 },
                    { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power2.out" },
                    index * 0.8 // Overlap animations slightly
                );
            }
        });

        // Hold the final state for a moment
        tl.to({}, { duration: 1 });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="h-100vh pt-20 pb-10 flex flex-col items-center relative overflow-hidden bg-bg-deep border-b border-white/5" id="education">
            <div className="absolute inset-0  from-black/0 via-black/50 to-black/0 pointer-events-none" />

            <h2 className="heading text-6xl font-light text-center mb-16 relative z-10">
                - <span className="text-light">Education</span> Journey -
            </h2>

            <div className="max-w-7xl w-full px-4 flex flex-col lg:flex-row gap-6 relative z-10 items-stretch">
                {educationData.map((item, idx) => (
                    <div
                        key={idx}
                        ref={(el) => { itemsRef.current[idx] = el; }}
                        className="glass p-8 rounded-2xl border border-white/5 hover:border-accent-primary/30 transition-all duration-300 w-full lg:w-1/4 opacity-0 flex flex-col justify-between"
                    >
                        <div className="flex flex-col gap-4 h-full">
                            <div className="text-sm font-bold text-accent-primary whitespace-nowrap bg-accent-primary/10 px-4 py-2 rounded-full border border-accent-primary/20 w-fit mb-2">
                                {item.date}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
