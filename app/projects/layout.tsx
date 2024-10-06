import { Fragment } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
    description: "Pouria Darandi's Projects",
};

interface ProjectsLayoutProps {
    children: React.ReactNode;
}

function ProjectsLayout(props: ProjectsLayoutProps) {
    return <Fragment>{props.children}</Fragment>;
}

export default ProjectsLayout;
