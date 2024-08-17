import Link from "next/link";
import { motion } from "framer-motion";

interface SideLinkProps {
    path: string;
    name: string;
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
            key={props.path}
            className={`flex items-start justify-end gap-2 ${
                props.isActive && "bg-drd-neutral-95/40"
            } text-right rounded-lg py-2 w-full`}>
            <Link
                onClick={props.onClick}
                href={props.path}
                className={`transition-colors w-full ${
                    props.isActive
                        ? "text-drd-neutral-40"
                        : "text-drd-neutral-60"
                }`}>
                {props.name}
            </Link>

            {props.isActive && (
                <span className="bg-drd-primary rounded-xl h-full w-1 p-0.5" />
            )}
        </motion.li>
    );
};

export default SideLink;
