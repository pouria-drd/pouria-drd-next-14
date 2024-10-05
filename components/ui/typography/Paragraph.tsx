import { cn } from "@/utils/base";

interface MessageProps {
    className?: string;
    children?: React.ReactNode;
    status?: "success" | "pending" | "error" | "warning" | "info";
}

const Paragraph = (props: MessageProps) => {
    const status = props.status || "pending";

    const statusStyles = {
        success: "text-green-600",
        pending: "text-drd-light-neutral-10",
        error: "text-red-500",
        warning: "text-yellow-500",
        info: "text-blue-600",
    };

    return (
        <p
            className={cn(
                `transition-all text-xs sm:text-[13px] text-wrap text-center r2l w-full ${statusStyles[status]}`,
                props.className
            )}>
            {props.children}
        </p>
    );
};

export default Paragraph;
