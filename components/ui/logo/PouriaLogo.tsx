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
            className={cn("flex items-center truncate", props.className)}>
            <PdIcon className="text-drd-primary" />
            <h3 className="text-xl sm:text-2xl font-bold uppercase mx-0.5 ml-1 mt-2">
                Pouria DRD
            </h3>
        </Link>
    );
};

export default PouriaLogo;
