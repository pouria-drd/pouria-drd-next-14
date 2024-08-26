import { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = {
    title: "Contact Me",
    description: "Contact Me Page",
};

interface ContactMeLayoutProps {
    children: React.ReactNode;
}

function ContactMeLayout(props: ContactMeLayoutProps) {
    return <Fragment>{props.children}</Fragment>;
}

export default ContactMeLayout;
