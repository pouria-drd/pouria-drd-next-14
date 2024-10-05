import { Copyright, PouriaLogo, SkillsWriter, SocialCard } from "../ui";

const Footer = () => {
    return (
        <footer
            id="footer"
            className="bg-drd-light-primary-0 flex flex-col gap-4 pt-6 app-px">
            <SocialCard />
            <Copyright />
        </footer>
    );
};

export default Footer;
