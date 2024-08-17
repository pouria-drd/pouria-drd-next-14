import {
    GithubIcon,
    InstagramIcon,
    TelegramIcon,
    TwitterIcon,
} from "@/components/icons";
import SocialLink from "../link/SocialLink";

const SocialCard = () => {
    return (
        <div className="flex items-center justify-center gap-3.5">
            <SocialLink
                className="border-r-2 border-drd-neutral-95 pr-2.5"
                href="https://twitter.com/pouriaDRD/"
                icon={<TwitterIcon />}
            />
            <SocialLink
                className="border-r-2 border-drd-neutral-95 pr-2.5"
                href="https://www.instagram.com/pouria.drd?igsh=OTdmZndkajBhbzF2&utm_source=qr/"
                icon={<InstagramIcon />}
            />
            <SocialLink
                className="border-r-2 border-drd-neutral-95 pr-2.5"
                href="https://t.me/pouria_drd/"
                icon={<TelegramIcon />}
            />
            <SocialLink
                className="border-r-2 border-drd-neutral-95 pr-2.5"
                href="https://github.com/pouria-drd/"
                icon={<GithubIcon />}
            />
        </div>
    );
};

export default SocialCard;
