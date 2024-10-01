import Link from "next/link";
import { motion } from "framer-motion";

interface SideLinkProps {
    link: NavLink;
    isActive: boolean;
    onClick?: () => void;
}

const SideLink = (props: SideLinkProps) => {
    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    return (
        <motion.li
            variants={item}
            key={props.link.path}
            className={`flex items-start justify-end gap-2 ${
                props.isActive && "bg-drd-light-neutral-2"
            } text-right rounded-lg py-2 w-full`}>
            <Link
                onClick={props.onClick}
                href={props.link.path}
                className={`transition-colors w-full ${
                    props.isActive
                        ? "text-drd-light-neutral-12"
                        : "text-drd-light-neutral-11"
                }`}>
                {props.link.name}
            </Link>

            {props.isActive && (
                <span className="bg-drd-primary rounded-xl h-full w-1 p-0.5" />
            )}
        </motion.li>
    );
};

export default SideLink;
