import NavLinks from "@/constants/routes";
import styles from "./sidebar.module.css";

import { SideLink } from ".";
import { PdIcon } from "../icons";
import { NavLinkManager } from "../navbar";
import { usePathname } from "next/navigation";
import { Variants, AnimatePresence, motion } from "framer-motion";
import {
    AppVersion,
    Backdrop,
    CloseButton,
    MotionSlide,
    SocialCard,
} from "../ui";

interface SidebarProps {
    isOpen: boolean;
    onClick: () => void;
}

const Sidebar = (props: SidebarProps) => {
    const pathName = usePathname();

    const handleIsActive = (link: NavLink): boolean => {
        const result =
            pathName === link.path ||
            (link.path !== "/admin" && pathName.startsWith(`${link.path}/`));

        return result;
    };

    const navLinkVariants: Variants = {
        hidden: { y: 20, opacity: 1 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.2,
                delayChildren: 0.5,
                staggerChildren: 0.15,
                ease: "backInOut",
            },
        },
    };

    const sidebarVariants: Variants = {
        hidden: {
            x: 100,
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: "backInOut",
            },
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "backInOut",
            },
        },
        exit: {
            x: 100,
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: "backInOut",
            },
        },
    };

    return (
        <Backdrop isOpen={props.isOpen} onClose={props.onClick}>
            <motion.aside
                exit="exit"
                initial="hidden"
                animate="visible"
                variants={sidebarVariants}
                className={`${styles.drdSidebar}`}
                onClick={(e) => e.stopPropagation()}>
                {/* header */}
                <motion.div
                    variants={{
                        hidden: { y: -20, opacity: 0 },
                        visible: {
                            y: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.5,
                                ease: "backInOut",
                                delay: 0.2,
                            },
                        },
                    }}
                    initial="hidden"
                    animate="visible"
                    className="flex items-center justify-between w-full">
                    <CloseButton onClick={props.onClick} />
                    <PdIcon className="text-drd-primary" />
                </motion.div>

                {/* Links */}
                <AnimatePresence>
                    {props.isOpen && (
                        <NavLinkManager
                            links={NavLinks}
                            container={navLinkVariants}
                            className="flex flex-col items-center w-full gap-2"
                            renderItem={(link, index) => (
                                <SideLink
                                    link={link}
                                    key={index}
                                    onClick={props.onClick}
                                    isActive={handleIsActive(link)}
                                />
                            )}
                        />
                    )}
                </AnimatePresence>

                {/* social links */}
                <MotionSlide>
                    <SocialCard />
                </MotionSlide>

                {/* app version */}
                <div className="absolute right-4 bottom-4">
                    <AppVersion />
                </div>
            </motion.aside>
        </Backdrop>
    );
};

export default Sidebar;
