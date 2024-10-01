import { cn } from "@/utils/base";
import { motion, Variants } from "framer-motion";

interface NavLinksProps {
    links: NavLink[];
    className?: string;
    container?: Variants;
    renderItem: (item: NavLink, index: number) => React.ReactNode;
}

const NavLinkManager = (props: NavLinksProps) => {
    return (
        <motion.ul
            initial="hidden"
            animate="visible"
            variants={props.container}
            className={cn(
                "hidden sm:flex items-center justify-center gap-4 truncate",
                props.className
            )}>
            {props.links.map((link, index) => props.renderItem(link, index))}
        </motion.ul>
    );
};

export default NavLinkManager;
