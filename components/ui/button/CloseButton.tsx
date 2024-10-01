"use client";

import { cn } from "@/utils/base";
import { CloseIcon } from "@/components/icons";

interface CloseButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}
const CloseButton = (props: CloseButtonProps) => {
    return (
        <button
            className={cn(
                "transition-colors text-drd-light-neutral-10 hover:text-drd-light-neutral-13",
                props.className
            )}
            {...props}>
            <CloseIcon />
        </button>
    );
};

export default CloseButton;
