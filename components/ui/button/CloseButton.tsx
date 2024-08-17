"use client";

import { cn } from "@/lib/utils";
import { CloseIcon } from "@/components/icons";

interface CloseButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}
const CloseButton = (props: CloseButtonProps) => {
    return (
        <button
            className={cn(
                "transition-colors text-drd-neutral-60 hover:text-drd-neutral-40",
                props.className
            )}
            {...props}>
            <CloseIcon />
        </button>
    );
};

export default CloseButton;
