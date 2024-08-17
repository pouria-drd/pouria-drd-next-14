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
        template: "%s Pouria DRD",
    },
    description:
        "Pouria Darandi, a full-stack developer skilled in React, Next.js, Django, Django REST, and Unity.",
    keywords:
        "Pouria Darandi, Full-Stack Developer, React, Next.js, Django, Django REST, Unity, Programmer, Portfolio, پوریا دارندی, برنامه‌نویس فول‌استک, ریکت, نکست‌جی‌اس, جنگو, جنگو رست, یونیتی, پوریا, دارندی",

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
            "A full-stack developer skilled in React, Next.js, Django, Django REST, and Unity.",

        siteName: "Pouria DRD",
    },
    twitter: {
        card: "summary_large_image",
        creatorId: "@pouriaDRD",
        site: "https://pouria-drd.ir",
        creator: "@pouriaDRD",
        title: "Pouria Darandi | Full-Stack Developer",
        description:
            "A full-stack developer skilled in React, Next.js, Django, Django REST, and Unity.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fa-IR">
            <body
                className={`bg-white flex flex-col min-h-svh ${inter.className}`}>
                <Navbar />
                <main className="bg-gray-50 text-drd-neutral-40 flex-1 app-px py-4">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
