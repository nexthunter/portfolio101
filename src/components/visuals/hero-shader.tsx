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
    const [showShader, setShowShader] = React.useState(false);

    // Defer shader load after preloader for performance on all devices
    React.useEffect(() => {
        if (!isLoading) {
            const timer = setTimeout(() => {
                setShowShader(true);
            }, 1300);
            return () => clearTimeout(timer);
        }
    }, [isLoading]);

    return (
        <div className={`min-h-screen w-full relative overflow-hidden bg-black ${className}`}>
            {/* Static CSS Gradient Fallback (for Loading) */}
            <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#333_0%,#000_100%)] opacity-40" />

            {/* Background Shaders - All Devices (Deferred for performance) */}
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
