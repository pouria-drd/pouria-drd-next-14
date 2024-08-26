import { cn } from "@/lib/utils";

interface SocialLinkProps {
    href: string;
    icon: JSX.Element;
    className?: string;
}

const SocialLink = (props: SocialLinkProps) => {
    return (
        <a
            href={props.href}
            className={cn(
                "text-drd-light-neutral-11 hover:text-drd-primary cursor-pointer transition-colors duration-200",
                props.className
            )}
            target="_blank">
            {props.icon}
        </a>
    );
};

export default SocialLink;
