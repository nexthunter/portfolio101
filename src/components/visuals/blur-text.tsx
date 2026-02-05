"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";



interface BlurTextAnimationProps {
    text?: string;
    className?: string;
    fontSize?: string;
    fontFamily?: string;
    textColor?: string;
    animationDelay?: number;
}

export function BlurTextAnimation({
    text = "",
    className = "",
    fontSize = "",
    fontFamily = "",
    textColor = "",
    animationDelay = 0,
}: BlurTextAnimationProps) {
    const [isAnimating, setIsAnimating] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const elementRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const words = useMemo(() => {
        const splitWords = text.split(" ");
        const totalWords = splitWords.length;

        return splitWords.map((word, index) => {
            const progress = index / totalWords;
            const exponentialDelay = Math.pow(progress, 0.8) * 0.165; // Speeded up 2x
            const baseDelay = index * 0.02; // Speeded up 2x

            // Use deterministic pseudo-randomness based on index and text length
            // This avoids "impure render" errors and hydration mismatches
            const pseudoRandom = Math.sin(index * 43758.5453 + text.length) * 0.0165; // Speeded up 2x
            const pseudoRandomBlur = (Math.abs(Math.sin(index * 12.9898)) * 4) + 2;

            return {
                text: word,
                duration: (1.1 + Math.cos(index * 0.3) * 0.3) / 3.0, // Speeded up 2x
                delay: baseDelay + exponentialDelay + pseudoRandom + (animationDelay / 1000),
                blur: Math.floor(pseudoRandomBlur),
                scale: 0.9 + Math.sin(index * 0.2) * 0.05
            };
        });
    }, [text, animationDelay]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsAnimating(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <span ref={elementRef} className={`${className} inline-block`}>
            <span className={`${textColor} ${fontSize} ${fontFamily} leading-relaxed tracking-wide`}>
                {words.map((word, index) => (
                    <span
                        key={index}
                        className={`inline-block transition-all ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
                        style={{
                            transitionDuration: `${word.duration}s`,
                            transitionDelay: `${word.delay}s`,
                            transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                            filter: isAnimating
                                ? 'blur(0px) brightness(1)'
                                : (isMobile ? 'opacity(0)' : `blur(${word.blur}px) brightness(0.6)`),
                            transform: isAnimating
                                ? 'translateY(0) scale(1) rotateX(0deg)'
                                : (isMobile ? 'translateY(10px)' : `translateY(20px) scale(${word.scale || 1}) rotateX(-15deg)`),
                            marginRight: '0.35em',
                            willChange: 'filter, transform, opacity',
                            transformStyle: 'preserve-3d',
                            backfaceVisibility: 'hidden',
                            textShadow: isAnimating
                                ? '0 2px 8px rgba(255,255,255,0.1)'
                                : '0 0 40px rgba(255,255,255,0.4)'
                        }}
                    >
                        {word.text}
                    </span>
                ))}
            </span>
        </span>
    );
}
