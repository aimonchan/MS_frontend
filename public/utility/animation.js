import { easeInOut } from "framer-motion";

export const SlideRight = (delay) => {
    return {
        hidden: {
            opacity: 0,
            y: 100,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: delay,
            },
        },
        exit: {
            opacity: 0,
            y: -100,
            transition: {
                duration: 0.2,
                delay: delay,
            },
        },
    };
}

// Fade-In Animation
export const FadeIn = (delay) => {
    return {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: {
                opacity: {
                    duration: 0.5,  // Fade-in duration
                    ease: easeInOut, // Smooth transition easing
                    delay: delay,  // Delay for the fade-in to start
                },
            },
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.2,
                ease: easeInOut,
                delay: delay,
            },
        },
    };
};