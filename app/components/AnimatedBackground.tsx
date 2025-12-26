"use client";
import React from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

const AnimatedBackground = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ clientX, clientY, currentTarget }: React.MouseEvent) => {
        if (currentTarget) {
            const { left, top } = currentTarget.getBoundingClientRect();
            mouseX.set(clientX - left);
            mouseY.set(clientY - top);
        }
    };

    const background = useMotionTemplate`
        radial-gradient(
            600px circle at ${mouseX}px ${mouseY}px,
            rgba(0, 180, 255, 0.15),
            transparent 80%
        )
    `;

    return (
        <motion.div
            className="fixed top-0 left-0 w-full h-full -z-10"
            onMouseMove={handleMouseMove}
            style={{ background }}
        />
    );
};

export default AnimatedBackground;
