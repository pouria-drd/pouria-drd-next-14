"use client";

import styles from "./navbar.module.css";
import NavLinks from "@/constants/routes";

import { Sidebar } from "../sidebar";
import { Variants } from "framer-motion";
import { Fragment, useState } from "react";
import { NavLink, NavLinkManager } from ".";
import { usePathname } from "next/navigation";
import { MenuButton, PouriaLogo } from "../ui";

const Navbar = () => {
    const pathName = usePathname();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleIsActive = (link: NavLink): boolean => {
        const result =
            pathName === link.path ||
            (link.path !== "/admin" && pathName.startsWith(`${link.path}/`));

        return result;
    };

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0,
                staggerChildren: 0.25,
            },
        },
    };

    return (
        <Fragment>
            <nav className={`${styles.drdNavbar} glass app-px`}>
                <PouriaLogo />

                <NavLinkManager
                    links={NavLinks}
                    container={container}
                    className="sm:flex-row-reverse"
                    renderItem={(link, index) => {
                        return (
                            <NavLink
                                link={link}
                                isActive={handleIsActive(link)}
                                key={index}
                            />
                        );
                    }}
                />

                <MenuButton onClick={() => setIsOpen(true)} />
            </nav>

            <Sidebar
                isOpen={isOpen}
                onClick={() => {
                    setIsOpen(false);
                }}
            />
        </Fragment>
    );
};

export default Navbar;
