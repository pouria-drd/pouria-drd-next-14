import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

const keywords: string[] = [
    "Pouria Darandi",

    "React",
    "Unity",
    "Django",
    "Next.js",
    "Django REST",

    "Portfolio",
    "Programmer",

    "Full-Stack Developer",
    "Full Stack Developer",

    "Developer",
    "developer",
    "Web Developer",
    "Back End Developer",
    "Front End Developer",

    "iran",

    "drd",
    "pouria",
    "Darandi",
    "pouria drd",
    "pouria darandi",

    "پوریا",
    "دارندی",
    "پوریا دارندی",

    "برنامه‌ نویس فول‌ استک",

    "ریکت",
    "جنگو",
    "یونیتی",
    "جنگو رست",
    "نکست‌ جی‌اس",
];

export const metadata: Metadata = {
    metadataBase: new URL("https://pouria-drd.ir"),
    title: {
        default: "Pouria DRD",
        template: "Pouria DRD | %s",
    },

    description:
        "Pouria Darandi, React, Next js, Vue js, Django, Django REST and Unity Developer",

    keywords: keywords,

    creator: "Pouria Darandi",
    publisher: "Pouria Darandi",
    authors: [
        {
            name: "Pouria Darandi",
            url: "https://pouria-drd.ir",
        },
    ],
    openGraph: {
        type: "website",
        siteName: "Pouria DRD",
        url: "https://pouria-drd.ir",
        title: "Pouria Darandi | Programmer",
        description:
            "Pouria Darandi, React, Next js, Vue js, Django, Django REST and Unity Developer",
    },
    twitter: {
        creator: "@pouriaDRD",
        creatorId: "@pouriaDRD",
        card: "summary_large_image",
        site: "https://pouria-drd.ir",
        title: "Pouria Darandi | Programmer",
        description:
            "Pouria Darandi, React, Next js, Vue js, Django, Django REST and Unity Developer",
    },
    alternates: {
        canonical: "https://pouria-drd.ir",
    },
    robots: {
        index: true,
        follow: true,
    },
};

function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fa-ir">
            <body
                className={`bg-drd-light-primary-0 flex flex-col min-h-svh ${inter.className}`}>
                <Navbar />
                <main className="flex-1 app-px">{children}</main>
                <Footer />
            </body>
        </html>
    );
}

export default RootLayout;
