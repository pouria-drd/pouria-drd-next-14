import { Copyright, SkillsWriter } from "../ui";

const Footer = () => {
    return (
        <footer id="footer" className="bg-slate-200 flex flex-col pt-8 app-px">
            Footer
            <SkillsWriter />
            <Copyright />
        </footer>
    );
};

export default Footer;
