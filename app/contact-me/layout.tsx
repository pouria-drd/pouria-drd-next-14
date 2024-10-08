import { Fragment } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Me",
    description: "How to Contact pouria darandi",
};

interface ContactMeLayoutProps {
    children: React.ReactNode;
}

function ContactMeLayout(props: ContactMeLayoutProps) {
    return <Fragment>{props.children}</Fragment>;
}

export default ContactMeLayout;
