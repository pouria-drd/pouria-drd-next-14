import { cn } from "@/utils/base";

interface TitleProps {
    className?: string;
    children?: React.ReactNode;
}

const Title = (props: TitleProps) => {
    return (
        <h1
            className={cn(
                "transition-all text-drd-light-neutral-12 hover:text-drd-light-neutral-13 font-bold text-xl sm:text-2xl text-center w-full r2l",
                props.className
            )}>
            {props.children}
        </h1>
    );
};

export default Title;
