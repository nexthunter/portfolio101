import Image from "next/image";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const features = [
    {
        name: "What I Build",
        href: "#projects",
        cta: "Learn more",
        description: "Showcasing my projects and technical capabilities. ",
        background: <Image src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={500} height={500} className="absolute -top-10 -right-20 opacity-20 object-cover w-full h-full" alt="Files" />,
        className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
        name: "Who I Am",
        href: "/about",
        cta: "Learn more",
        description: "A glimpse into my background and personality.",
        background: <Image src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" width={500} height={500} className="absolute -right-20 -top-20 opacity-60 object-cover w-full h-full" alt="Search" />,
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
        name: "Education",
        href: "/",
        cta: "Learn more",
        description: "My academic journey and qualifications.",
        background: <Image src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=2070&auto=format&fit=crop" width={500} height={500} className="absolute -right-20 -top-20 opacity-60 object-cover w-full h-full" alt="Globe" />,
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
        name: "How I Work",
        href: "/",
        cta: "Learn more",
        description: "My approach to problem-solving and collaboration.",
        background: <Image src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop" width={500} height={500} className="absolute -right-20 -top-20 opacity-60 object-cover w-full h-full" alt="Calendar" />,
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
        name: "Location and Languages",
        href: "/about",
        cta: "Learn more",
        description: "Mumbai, India | English, Hindi, Urdu, German, Arabic",
        background: <Image src="/location.jpg" width={500} height={500} className="absolute  opacity-50 object-cover w-full h-full" alt="Notifications" />,
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
];

function BentoDemo() {
    return (
        <BentoGrid className="max-w-8xl mx-auto">
            {features.map((feature) => (
                <BentoCard key={feature.name} {...feature} />
            ))}
        </BentoGrid>
    );
}

export { BentoDemo };
