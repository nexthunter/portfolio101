"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export const TypewriterEffect = ({
    words,
    className,
    cursorClassName,
}: {
    words: {
        text: string
        className?: string
    }[]
    className?: string
    cursorClassName?: string
}) => {
    // Split words into characters
    const wordsArray = words.map((word) => {
        return {
            ...word,
            text: word.text.split(""),
        }
    })

    // State
    const [currentWordIndex, setCurrentWordIndex] = useState(0)
    const [currentTextIndex, setCurrentTextIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const typeSpeed = isDeleting ? 50 : 100
        const pauseTime = 2000

        const timeout = setTimeout(() => {
            const currentWord = wordsArray[currentWordIndex]

            if (isDeleting) {
                // Deleting
                if (currentTextIndex > 0) {
                    setCurrentTextIndex(currentTextIndex - 1)
                } else {
                    // Finished deleting, move to next word
                    setIsDeleting(false)
                    setCurrentWordIndex((prev) => (prev + 1) % wordsArray.length)
                }
            } else {
                // Typing
                if (currentTextIndex < currentWord.text.length) {
                    setCurrentTextIndex(currentTextIndex + 1)
                } else {
                    // Finished typing, pause then delete
                    setTimeout(() => setIsDeleting(true), pauseTime)
                }
            }
        }, typeSpeed)

        return () => clearTimeout(timeout)
    }, [currentWordIndex, currentTextIndex, isDeleting, wordsArray])

    const currentWord = wordsArray[currentWordIndex]

    return (
        <div className={cn("inline-flex items-center", className)}>
            <motion.div
                className="overflow-hidden"
                initial={{
                    clipPath: "inset(0 100% 0 0)",
                    width: "fit-content"
                }}
                animate={{
                    clipPath: "inset(0 0% 0 0)",
                    width: "fit-content"
                }}
                transition={{
                    duration: 2,
                    ease: "linear",
                    delay: 1,
                }}
            >
                <div
                    className={cn("text-5xl font-bold", currentWord.className)}
                    style={{ whiteSpace: "nowrap" }}
                >
                    {/* Render current word up to currentTextIndex */}
                    {currentWord.text.slice(0, currentTextIndex).join("")}
                </div>
            </motion.div>
            <motion.span
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className={cn(
                    "inline-block rounded-sm w-[4px] h-[36px] md:h-[48px] bg-white ml-1",
                    cursorClassName
                )}
            ></motion.span>
        </div>
    )
}
