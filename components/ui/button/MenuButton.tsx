"use client";

import { cn } from "@/utils/base";
import { MenuIcon } from "@/components/icons";

interface MenuButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

const MenuButton = (props: MenuButtonProps) => {
    return (
        <button
            className={cn(
                "hover:bg-drd-light-neutral-2 transition-colors sm:hidden border-2 text-drd-primary rounded-xl p-1",
                props.className
            )}
            {...props}>
            <MenuIcon />
        </button>
    );
};

export default MenuButton;
