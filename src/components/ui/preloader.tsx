"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLoader } from "@/context/loader-context";
import { useEffect } from "react";

export function Preloader() {
    const { isLoading, setIsLoading } = useLoader();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1100); // 1.1 seconds loading time - Optimized for Mobile LCP

        return () => clearTimeout(timer);
    }, [setIsLoading]);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <motion.div
                        initial={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }}
                        animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                        exit={{ opacity: 0, filter: "blur(10px)", scale: 1.1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative"
                    >
                        <h1 className="text-6xl md:text-9xl font-light text-white tracking-tighter">
                            <span className="font-serif font-weight-500 italic opacity-80 mr-3">M</span>
                            <span className="font-bold">A</span>
                        </h1>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
