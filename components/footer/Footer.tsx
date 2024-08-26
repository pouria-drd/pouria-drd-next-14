import { Copyright, PouriaLogo, SkillsWriter, SocialCard } from "../ui";

const Footer = () => {
    return (
        <footer
            id="footer"
            className="bg-drd-light-primary-0 flex flex-col gap-4 pt-6 app-px">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-px w-full">
                <SkillsWriter className="justify-center sm:justify-normal w-full" />
                <PouriaLogo className="justify-center sm:justify-normal w-full hidden sm:flex" />
                <SocialCard />
            </div>
            <Copyright />
        </footer>
    );
};

export default Footer;
