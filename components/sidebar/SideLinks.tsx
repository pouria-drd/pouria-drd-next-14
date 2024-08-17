"use client";

import SideLink from "./SideLink";
import { navItems } from "@/constants";
import { usePathname } from "next/navigation";
import { motion, Variants, AnimatePresence } from "framer-motion";

interface SideLinksProps {
    isOpen: boolean;
    onClick?: () => void;
}

const SideLinks = (props: SideLinksProps) => {
    const pathName = usePathname();

    const container: Variants = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.15,
            },
        },
    };

    return (
        <AnimatePresence>
            {props.isOpen && (
                <motion.ul
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center w-full gap-6">
                    {navItems.map((item) => {
                        const isActive =
                            pathName === item.path ||
                            pathName.startsWith(`${item.path}/`);
                        return (
                            <SideLink
                                onClick={props.onClick}
                                key={item.path}
                                path={item.path}
                                name={item.name}
                                isActive={isActive}
                            />
                        );
                    })}
                </motion.ul>
            )}
        </AnimatePresence>
    );
};

export default SideLinks;
