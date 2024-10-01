import Link from "next/link";
import { cn } from "@/utils/base";

interface SocialLinkProps {
    href: string;
    icon: JSX.Element;
    className?: string;
}

const SocialLink = (props: SocialLinkProps) => {
    return (
        <Link
            href={props.href}
            className={cn(
                "text-drd-light-neutral-10 hover:text-drd-primary cursor-pointer transition-colors duration-200",
                props.className
            )}
            target="_blank">
            {props.icon}
        </Link>
    );
};

export default SocialLink;
