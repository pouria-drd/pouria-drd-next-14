import NavLinks from "@/constants/routes";
import styles from "./sidebar.module.css";

import { SideLink } from ".";
import { PdIcon } from "../icons";
import { NavLinkManager } from "../navbar";
import { usePathname } from "next/navigation";
import { Variants, AnimatePresence } from "framer-motion";
import { AppVersion, Backdrop, CloseButton, SocialCard } from "../ui";

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
        <Backdrop isOpen={props.isOpen} onClose={props.onClick}>
            <aside
                className={`absolute right-0 glass ${styles.drdSidebar} ${
                    props.isOpen ? "translate-x-0" : "translate-x-full"
                }`}
                onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center justify-between w-full">
                    <CloseButton onClick={props.onClick} />

                    <PdIcon className="text-drd-primary" />
                </div>

                <AnimatePresence>
                    {props.isOpen && (
                        <NavLinkManager
                            links={NavLinks}
                            container={container}
                            className="flex flex-col items-center w-full gap-2"
                            renderItem={(link, index) => {
                                return (
                                    <SideLink
                                        link={link}
                                        key={index}
                                        onClick={props.onClick}
                                        isActive={handleIsActive(link)}
                                    />
                                );
                            }}
                        />
                    )}
                </AnimatePresence>

                <SocialCard />

                <AppVersion className="right-6" />
            </aside>
        </Backdrop>
    );
};

export default Sidebar;
