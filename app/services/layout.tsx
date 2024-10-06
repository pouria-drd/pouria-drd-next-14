import { Fragment } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services",

    description:
        "Services of Pouria Darandi, a Software Engineer and a Full Stack Developer",
};

interface ServicesLayoutProps {
    children: React.ReactNode;
}

function ServicesLayout(props: ServicesLayoutProps) {
    return <Fragment>{props.children}</Fragment>;
}

export default ServicesLayout;
