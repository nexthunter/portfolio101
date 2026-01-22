"use client"

import React from "react"
import { MeshGradient } from "@paper-design/shaders-react"
import { useLoader } from "@/context/loader-context";

interface ShaderBackgroundProps {
    children: React.ReactNode
    className?: string
}

export function ShaderBackground({ children, className = "" }: ShaderBackgroundProps) {
    const { isLoading } = useLoader();
    const [isDesktop, setIsDesktop] = React.useState(false);
    const [showShader, setShowShader] = React.useState(false);

    React.useEffect(() => {
        const checkIsDesktop = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        checkIsDesktop();
        window.addEventListener('resize', checkIsDesktop);
        return () => window.removeEventListener('resize', checkIsDesktop);
    }, []);

    // Extra buffer to protect TBT on Desktop after preloader finishes
    React.useEffect(() => {
        if (!isLoading && isDesktop) {
            const timer = setTimeout(() => {
                setShowShader(true);
            }, 1300);
            return () => clearTimeout(timer);
        }
    }, [isLoading, isDesktop]);

    return (
        <div className={`min-h-screen w-full relative overflow-hidden bg-black ${className}`}>
            {/* Static CSS Gradient Fallback (for Mobile & Loading) */}
            <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#333_0%,#000_100%)] opacity-40 z-0" />

            {/* Mobile Animated Shader (Recorded WebP) */}
            {!isDesktop && (
                <div className="absolute inset-0 w-full h-full z-0 opacity-60">
                    <img
                        className="w-full h-full object-cover"
                        src="/mobile-shader.webp"
                        alt="Background Animation"
                    />
                </div>
            )}

            {/* Background Shaders - Desktop Only (Deferred via secondary timer) */}
            {showShader && (
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
