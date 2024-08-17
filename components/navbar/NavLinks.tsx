"use client";

import NavLink from "./NavLink";
import { navItems } from "@/constants";
import { usePathname } from "next/navigation";

const NavLinks = () => {
    const pathName = usePathname();

    return (
        <ul className="hidden sm:block space-x-4 truncate">
            {navItems.toReversed().map((item) => {
                const isActive =
                    pathName === item.path ||
                    pathName.startsWith(`${item.path}/`);
                return (
                    <NavLink
                        key={item.path}
                        path={item.path}
                        name={item.name}
                        isActive={isActive}
                    />
                );
            })}
        </ul>
    );
};

export default NavLinks;
