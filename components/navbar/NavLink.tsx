import Link from "next/link";
import { motion, Variants } from "framer-motion";

interface NavLinkProps {
    link: NavLink;
    isActive: boolean;
}

const NavLink = (props: NavLinkProps) => {
    const item: Variants = {
        hidden: { y: -25, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.15, ease: "easeInOut" },
        },
    };

    return (
        <motion.li
            key={props.link.path}
            className="inline-block"
            variants={item}>
            <Link
                href={props.link.path}
                className={`transition-all hover:text-drd-light-neutral-12 ${
                    props.isActive
                        ? "text-drd-light-neutral-13"
                        : "text-drd-light-neutral-10"
                } mx-1`}>
                {props.link.name}
            </Link>
            {props.isActive && (
                <motion.span
                    layoutId="drd"
                    className="mt-0.5 h-0.5 bg-drd-primary w-full block"
                />
            )}
        </motion.li>
    );
};

export default NavLink;
