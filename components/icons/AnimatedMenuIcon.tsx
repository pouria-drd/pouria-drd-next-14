"use client";

import { motion } from "framer-motion";
import styles from "./icons.module.css";

const AnimatedMenuIcon = () => {
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };
    return (
        <div className="hover:scale-105 transition-transform">
            <motion.div
                className={`${styles.menuIconContainer}
                bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer  rounded-lg p-2 gap-1.5`}
                variants={container}
                initial="hidden"
                animate="visible">
                {[0, 1, 2, 3].map((index) => (
                    <motion.div
                        key={index}
                        className="bg-drd-primary rounded-full size-1.5"
                        variants={item}
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default AnimatedMenuIcon;
