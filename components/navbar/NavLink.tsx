import Link from "next/link";
import { motion } from "framer-motion";

interface NavLinkProps {
    path: string;
    name: string;
    isActive: boolean;
}

const NavLink = (props: NavLinkProps) => {
    return (
        <li key={props.path} className="inline-block">
            <Link
                href={props.path}
                className={`transition-colors ${
                    props.isActive
                        ? "text-drd-light-neutral-12"
                        : "text-drd-light-neutral-11"
                } mx-1`}>
                {props.name}
            </Link>
            {props.isActive && (
                <motion.span
                    layoutId="drd"
                    className="mt-0.5 h-0.5 bg-drd-primary w-full block"
                />
            )}
        </li>
    );
};

export default NavLink;
