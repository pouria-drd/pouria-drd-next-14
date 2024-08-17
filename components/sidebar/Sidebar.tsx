import { PdIcon } from "../icons";
import SideLinks from "./SideLinks";
import styles from "./sidebar.module.css";
import { AppVersion, Backdrop, CloseButton, SocialCard } from "../ui";

interface SidebarProps {
    isOpen: boolean;
    onClick: () => void;
}

const Sidebar = (props: SidebarProps) => {
    return (
        <Backdrop isOpen={props.isOpen} onClose={props.onClick}>
            <aside
                className={`absolute right-0 glass ${styles.drdSidebar} ${
                    props.isOpen ? "translate-x-0" : "translate-x-full"
                }`}
                onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center justify-between w-full">
                    <CloseButton onClick={props.onClick} />

                    <PdIcon className="text-drd-primary" />
                </div>

                <SideLinks isOpen={props.isOpen} onClick={props.onClick} />

                <SocialCard />

                <AppVersion className="right-6" />
            </aside>
        </Backdrop>
    );
};

export default Sidebar;
