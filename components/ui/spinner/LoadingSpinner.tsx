import { cn } from "@/utils/base";
import styles from "./spinner.module.css";

interface LoadingSpinnerProps {
    className?: string;
    borderSize?: number | string; // Accept size as a prop to set the CSS variable --b
}

const LoadingSpinner = (props: LoadingSpinnerProps) => {
    const { className, borderSize = 8 } = props; // Default value for --b is 8px
    const __b = borderSize + "px";

    return (
        <div
            className={cn(
                styles.loader,
                "w-10 text-vand-primary-main",
                className
            )}
            style={{ "--b": __b } as React.CSSProperties} // Pass --b dynamically
        >
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default LoadingSpinner;
