import { Fragment } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "About Page",
};

interface AboutLayoutProps {
    children: React.ReactNode;
}

function AboutLayout(props: AboutLayoutProps) {
    return <Fragment>{props.children}</Fragment>;
}

export default AboutLayout;
