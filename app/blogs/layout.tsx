import { Fragment } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blogs",
    description: "Blogs Page",
};

interface BlogsLayoutProps {
    children: React.ReactNode;
}

function BlogsLayout(props: BlogsLayoutProps) {
    return <Fragment>{props.children}</Fragment>;
}

export default BlogsLayout;
