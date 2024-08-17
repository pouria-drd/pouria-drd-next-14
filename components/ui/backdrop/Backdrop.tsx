import styles from "./backdrop.module.css";

interface BackdropProps {
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

const Backdrop = (props: BackdropProps) => {
    return (
        <div
            onClick={props.onClose}
            className={`${styles.drdBackdrop} ${
                props.isOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
            }`}>
            {props.children}
        </div>
    );
};

export default Backdrop;
