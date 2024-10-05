"use client";

import { cn } from "@/utils/base";
import { motion, Variants } from "framer-motion";

interface MotionSlideProps {
    id?: string;
    once?: boolean;
    amount?: number;
    duration?: number;
    className?: string;
    children?: React.ReactNode;
    initialDirection?: "left" | "right" | "up" | "down";
}

const MotionSlide = (props: MotionSlideProps) => {
    const direction = props.initialDirection || "right";

    const slideDirection: Variants = {
        hidden: {
            opacity: 0,
            x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
            y: direction === "up" ? -100 : direction === "down" ? 100 : 0,
        },
        visible: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: { duration: props.duration || 0.25, ease: "easeInOut" },
        },
    };

    return (
        <motion.div
            id={props.id}
            initial="hidden"
            whileInView="visible"
            variants={slideDirection}
            className={cn("", props.className)}
            viewport={{ once: props.once, amount: props.amount || 0.7 }}>
            {props.children}
        </motion.div>
    );
};

export default MotionSlide;
