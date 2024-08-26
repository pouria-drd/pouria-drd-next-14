"use client";

import NavLinks from "./NavLinks";
import styles from "./navbar.module.css";
import Sidebar from "../sidebar/Sidebar";
import { /*useEffect,*/ useState } from "react";
import { MenuButton, PouriaLogo } from "../ui";

const Navbar = () => {
    // const [show, setShow] = useState<boolean>(true);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    // const [lastScrollY, setLastScrollY] = useState<number>(0);

    // const controlNavbar = () => {
    //     if (typeof window !== "undefined") {
    //         if (window.scrollY > lastScrollY) {
    //             // if scroll down
    //             setShow(false);
    //         } else {
    //             // if scroll up
    //             setShow(true);
    //         }
    //         setLastScrollY(window.scrollY);
    //     }
    // };

    // useEffect(() => {
    //     if (typeof window !== "undefined") {
    //         window.addEventListener("scroll", controlNavbar);

    //         return () => {
    //             window.removeEventListener("scroll", controlNavbar);
    //         };
    //     }
    // }, [lastScrollY]);

    /*${
        show ? "translate-y-0" : "-translate-y-full"
    }*/
    return (
        <>
            <nav className={`${styles.drdNavbar} glass app-px`}>
                <PouriaLogo />

                <NavLinks />

                <MenuButton onClick={() => setIsOpen(true)} />
            </nav>

            <Sidebar
                isOpen={isOpen}
                onClick={() => {
                    setIsOpen(false);
                }}
            />
        </>
    );
};

export default Navbar;
