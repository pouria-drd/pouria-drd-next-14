import { cn, getAppVersion } from "@/utils/base";

interface AppVersionProps {
    className?: string;
}

const AppVersion = (props: AppVersionProps) => {
    return (
        <p
            className={cn(
                "absolute right-4 bottom-4 font-yekanX ss02 transition-colors text-drd-light-neutral-10 hover:text-drd-light-neutral-12 text-right text-sm",
                props.className
            )}>
            ویرایش {getAppVersion()}
        </p>
    );
};

export default AppVersion;
