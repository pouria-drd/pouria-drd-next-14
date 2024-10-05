import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://pouria-drd.ir"),
    title: {
        default: "Pouria DRD",
        template: "Pouria DRD | %s",
    },

    description:
        "پوریا دارندی، توسعه دهنده React, Next js, Django, Django REST, Unity و Vue js",

    keywords:
        "Pouria Darandi, Full-Stack Developer, React, Next.js, Django, Django REST, Unity, Programmer, Portfolio, پوریا دارندی, برنامه‌ نویس فول‌ استک, ریکت, نکست‌ جی‌اس, جنگو, جنگو رست, یونیتی, پوریا, دارندی",

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
        url: "https://pouria-drd.ir",
        title: "Pouria Darandi | Full-Stack Developer",
        description:
            "پوریا دارندی، توسعه دهنده React, Next js, Django, Django REST, Unity و Vue js",

        siteName: "Pouria DRD",
    },
    twitter: {
        card: "summary_large_image",
        creatorId: "@pouriaDRD",
        site: "https://pouria-drd.ir",
        creator: "@pouriaDRD",
        title: "Pouria Darandi | Full-Stack Developer",
        description:
            "پوریا دارندی، توسعه دهنده React, Next js, Django, Django REST, Unity و Vue js",
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
                className={`bg-drd-light-primary-0 
                flex flex-col min-h-svh ${inter.className}`}>
                <Navbar />
                <main className="flex-1 app-px py-4">{children}</main>
                <Footer />
            </body>
        </html>
    );
}

export default RootLayout;
