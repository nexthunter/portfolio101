"use client";
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";
import { BlurTextAnimation } from "./ui/blur-text-animation";

export function LinkPreviewDemoSecond() {
    return (
        <div className="flex justify-center items-start h-auto min-h-[40rem] flex-col px-4 py-0 w-[90%] mx-auto gap-10">
            <div className="text-neutral-500 dark:text-neutral-500 text-xl md:text-3xl text-left w-[85%] mt-10 leading-relaxed">
                <BlurTextAnimation text="I don’t just design websites — I build real, working systems." className="inline" />{" "}
                <LinkPreview
                    url="https://luxemarket-mcrc.vercel.app/"
                    className="font-light bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                >
                    Luxemarket
                </LinkPreview>{" "}
                <BlurTextAnimation text="is a full-stack e-commerce platform built end-to-end to simulate real production logic." className="inline" />
            </div>

            <div className="text-neutral-500 dark:text-neutral-500 text-xl md:text-3xl text-right w-[85%] ml-40 leading-relaxed">
                <BlurTextAnimation text="Projects like" className="inline" />{" "}
                <LinkPreview
                    url="https://primetaxi.vercel.app/"
                    className="font-light cursor-pointer"
                >
                    PrimeTaxi
                </LinkPreview>
                ,{" "}
                <LinkPreview
                    url="https://ecoluxe-salon.vercel.app/"
                    className="font-light cursor-pointer"
                >
                    Ecoluxe Salon
                </LinkPreview>
                ,{" "}
                <LinkPreview
                    url="https://elysianluxe.vercel.app/"
                    className="font-light cursor-pointer"
                >
                    ElysianLuxe
                </LinkPreview>
                ,{" "}
                <LinkPreview
                    url="https://trove9.vercel.app/"
                    className="font-light cursor-pointer"
                >
                    Trove9
                </LinkPreview>
                ,{" "}
                <LinkPreview
                    url="https://nexthunter.github.io/beautiful-world/"
                    className="font-light cursor-pointer"
                >
                    Beautiful World
                </LinkPreview>
                , <BlurTextAnimation text="and" className="inline" />{" "}
                <LinkPreview
                    url="https://heritage-room.vercel.app/"
                    className="font-light cursor-pointer"
                >
                    Heritage Room
                </LinkPreview>{" "}
                <BlurTextAnimation text="are all integrated with Google Sheets to capture leads, bookings, or form data." className="inline" />
            </div>

            <div className="text-neutral-500 dark:text-neutral-500 text-xl md:text-3xl text-left w-[85%] leading-relaxed">
                <BlurTextAnimation text="With" className="inline" />{" "}
                <LinkPreview
                    url="https://fluxdm.space"
                    className="font-light cursor-pointer"
                >
                    FluxDM
                </LinkPreview>
                , <BlurTextAnimation text="I experiment with automation to reduce manual workflows and data handling. Across projects, I focus on clean UI, smooth animations, and systems that actually collect and move data." className="inline" />
            </div>
        </div>
    );
}
