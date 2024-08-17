import Link from "next/link";
import { PdIcon } from "@/components/icons";

const PouriaLogo = () => {
    return (
        <Link href="/" className="flex text-drd-neutral-40 truncate">
            <PdIcon className="text-drd-primary" />
            <p className="text-2xl font-bold uppercase mx-0.5 ml-1 mt-2">
                Pouria DRD
            </p>
        </Link>
    );
};

export default PouriaLogo;
