"use client";

import NavLinks from "./NavLinks";
import styles from "./navbar.module.css";
import Sidebar from "../sidebar/Sidebar";
import { Fragment, useState } from "react";
import { MenuButton, PouriaLogo } from "../ui";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <Fragment>
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
        </Fragment>
    );
};

export default Navbar;
