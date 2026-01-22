import React from "react";
import Image from "next/image";

// Note: We need to handle the Image imports/components carefully. 
// For now, I will keep the structure similar to the source, but in a real app, 
// we might pass image paths string and render the component in the usage place to keep data pure.
// However, since the bento grid items had complex 'background' JSX, I'll extract the data that can be extracted easily.
// Ideally, this file should return a function or simple objects.
// Let's refactor the text content first.

export const TYPEWRITER_WORDS = [
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
];

export const BENTO_ITEMS = [
    {
        name: "who I am",
        href: "/about",
        cta: "Learn more",
        description: "A glimpse into my background and personality.",
        // Keeping background as a prop to be passed or handled in component for now as it contains JSX
        imgSrc: "/moody.png",
        imgClass: "grayscale-5 opacity-50 object-contain",
        className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
        name: "What I Build",
        href: "#projects",
        cta: "Learn more",
        description: "Showcasing my projects and technical capabilities. ",
        imgSrc: "/what.png",
        imgClass: "opacity-50 object-cover",
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
        name: "Education",
        href: "/",
        cta: "Learn more",
        description: "My academic journey and qualifications.",
        imgSrc: "/edu.jpg",
        imgClass: "grayscale-100 opacity-50 object-cover",
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
        name: "How I Work",
        href: "/",
        cta: "Learn more",
        description: "My approach to problem-solving and collaboration.",
        imgSrc: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop",
        imgClass: "opacity-60 object-cover", // Manual adjustment needed for specific style props like -right-20
        extraClasses: "-right-20 -top-20",
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
        name: "Location and Languages",
        href: "/about",
        cta: "Learn more",
        description: "Mumbai, India | English, Hindi, Urdu, German, Arabic",
        imgSrc: "/location.jpg",
        imgClass: "opacity-50 object-cover",
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
];
