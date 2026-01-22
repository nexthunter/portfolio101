"use client"

import React from "react"
import { MeshGradient } from "@paper-design/shaders-react"

interface ShaderBackgroundProps {
    children: React.ReactNode
    className?: string
}

export function ShaderBackground({ children, className = "" }: ShaderBackgroundProps) {
    const [isDesktop, setIsDesktop] = React.useState(false);

    React.useEffect(() => {
        const checkIsDesktop = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        checkIsDesktop();
        window.addEventListener('resize', checkIsDesktop);
        return () => window.removeEventListener('resize', checkIsDesktop);
    }, []);

    return (
        <div className={`min-h-screen w-full relative overflow-hidden bg-black ${className}`}>
            {/* Static CSS Gradient Fallback (for Mobile & Loading) */}
            <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#333_0%,#000_100%)] opacity-40" />

            {/* Background Shaders - Desktop Only */}
            {isDesktop && (
                <MeshGradient
                    className="absolute inset-0 w-full h-full opacity-60"
                    colors={["#000000", "#000000", "#ffffff", "#000000", "#000000"]}
                    speed={0.5}
                />
            )}

            {children}
        </div>
    )
}
