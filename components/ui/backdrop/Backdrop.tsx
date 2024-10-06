import { cn } from "@/utils/base";
import styles from "./backdrop.module.css";

interface BackdropProps {
    isOpen: boolean;
    onClose: () => void;
    className?: string;
    children?: React.ReactNode;
}

const Backdrop = (props: BackdropProps) => {
    return (
        <div
            onClick={props.onClose}
            className={cn(
                `${styles.drdBackdrop} ${
                    props.isOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                }`,
                props.className
            )}>
            {props.children}
        </div>
    );
};

export default Backdrop;
