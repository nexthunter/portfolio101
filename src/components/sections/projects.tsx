"use client";
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";
import { BlurTextAnimation } from "@/components/visuals/blur-text";

export function Projects() {
    return (
        <div className="flex justify-center items-start font-light h-auto min-h-[40rem] flex-col px-4 py-0 w-[90%] mx-auto gap-10">
            <div className="text-neutral-500 dark:text-neutral-500 text-xl md:text-3xl text-left w-full md:w-[85%] mt-10 leading-relaxed">
                <BlurTextAnimation text="I don’t just design websites — I build real, working systems." className="inline" />{" "}
                <LinkPreview
                    url="https://luxemarket-gamma.vercel.app/"
                    className="font-light font-serif italic cursor-pointer"
                >
                    Luxemarket
                </LinkPreview>{" "}
                <BlurTextAnimation text="is a full-stack e-commerce platform built end-to-end to simulate real production logic." className="inline" />
            </div>

            <div className="text-neutral-500 dark:text-neutral-500 text-xl md:text-3xl text-left md:text-right w-full md:w-[85%] ml-0 md:ml-auto leading-relaxed">
                <BlurTextAnimation text="Projects like" className="inline" />{" "}
                <LinkPreview
                    url="https://ecoluxe-salon.vercel.app/"
                    className="font-light cursor-pointer font-serif italic"
                >
                    Ecoluxe Salon
                </LinkPreview>
                ,{" "}
                <LinkPreview
                    url="https://elysianluxe.vercel.app/"
                    className="font-light cursor-pointer font-serif italic"
                >
                    ElysianLuxe
                </LinkPreview>
                ,{" "}
                <LinkPreview
                    url="https://trove9.vercel.app/"
                    className="font-light cursor-pointer font-serif italic"
                >
                    Trove9
                </LinkPreview>
                ,{" "}
                <LinkPreview
                    url="https://nexthunter.github.io/beautiful-world/"
                    className="font-light cursor-pointer font-serif italic"
                >
                    Beautiful World
                </LinkPreview>
                , <BlurTextAnimation text="and" className="inline" />{" "}
                <LinkPreview
                    url="https://heritage-room.vercel.app/"
                    className="font-light cursor-pointer font-serif italic"
                >
                    Heritage Room
                </LinkPreview>{" "}
                <BlurTextAnimation text="are all integrated with Google Sheets to capture leads, bookings, or form data." className="inline" />
            </div>

            <div className="text-neutral-500 dark:text-neutral-500 text-xl md:text-3xl text-left w-full md:w-[85%] leading-relaxed">
                <BlurTextAnimation text="With" className="inline" />{" "}
                <LinkPreview
                    url="https://fluxdm.space"
                    className="font-light cursor-pointer font-serif italic"
                >
                    FluxDM
                </LinkPreview>
                , <BlurTextAnimation text="I experiment with automation to reduce manual workflows and data handling. Across projects, I focus on clean UI, smooth animations, and systems that actually collect and move data." className="inline" />
            </div>
        </div>
    );
}
