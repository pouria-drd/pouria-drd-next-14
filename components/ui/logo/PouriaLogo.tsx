import Link from "next/link";
import { cn } from "@/utils/base";
import { PdIcon } from "@/components/icons";

interface PouriaLogoProps {
    className?: string;
}

const PouriaLogo = (props: PouriaLogoProps) => {
    return (
        <Link
            href="/"
            className={cn(
                "transition-all flex text-drd-light-neutral-12 hover:text-drd-light-neutral-14 truncate",
                props.className
            )}>
            <PdIcon className="text-drd-primary" />
            <p className="text-xl sm:text-2xl font-bold uppercase mx-0.5 ml-1 mt-2">
                Pouria DRD
            </p>
        </Link>
    );
};

export default PouriaLogo;
