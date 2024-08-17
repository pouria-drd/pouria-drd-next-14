import { Copyright, PouriaLogo, SkillsWriter, SocialCard } from "../ui";

const Footer = () => {
    return (
        <footer
            id="footer"
            className="bg-white flex flex-col gap-4 pt-6 app-px">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-px w-full">
                <PouriaLogo />
                <SkillsWriter />
                <SocialCard />
            </div>
            <Copyright />
        </footer>
    );
};

export default Footer;
