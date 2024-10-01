import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                yekan: "IRANYekanWeb",
                yekanX: "IRANYekanX",
            },
            colors: {
                drd: {
                    primary: "#256EFF",

                    light: {
                        primary: {
                            // Backgrounds, Pairs with: Steps 11, 12 text
                            0: "#FCFCFC", // Main background
                            1: "#F9FAFC", // Usage: Backgrounds
                            2: "#F2F6FD", // Usage: Backgrounds

                            // Interactive components
                            3: "#E7EFFD", // Pairs with: Steps 11 labels, Step 12 text
                            4: "#D7E7FF", // Pairs with: Steps 11, 12 labels
                            5: "#C6DCFF", // Pairs with: Step 12 labels

                            // Borders and separators, Pairs with: Steps 1–5 backgrounds
                            6: "#B1CFFF", // Usage: Borders and separators
                            7: "#98BCFE", // Usage: Borders and separators
                            8: "#74A3F9", // Usage: Borders, focus rings

                            // Solid colors, Pairs with: White text
                            9: "#256EFF", //  Usage: Solid background and buttons
                            10: "#1860ED", // Usage: Solid background and buttons

                            // Accessible text, Pairs with: Background colors
                            11: "#175BE1", // Usage: Secondary text and links
                            12: "#112E69", // Usage: High-contrast text
                        },

                        neutral: {
                            // Backgrounds, Pairs with: Steps 11, 12 text
                            0: "#FCFCFC",
                            1: "#F9F9FA", // Usage: Backgrounds
                            2: "#F5F6F8", // Usage: Backgrounds

                            // Usage: Interactive components
                            3: "#ECECF0", // Pairs with: Steps 11 labels, Step 12 text
                            4: "#E3E4E8", // Pairs with: Steps 11, 12 labels
                            5: "#DCDDE2", // Pairs with: Step 12 labels

                            // Borders and separators, Pairs with: Steps 1–5 backgrounds
                            6: "#D4D5DC", // Usage: Borders and separators
                            7: "#C8CAD2", // Usage: Borders and separators
                            8: "#B4B6C2", // Usage: Borders, focus rings and disabled text

                            // Solid colors, Pairs with: White text
                            9: "#878994", //  Usage: Solid background and disabled text
                            10: "#7C7E89", // Usage: Solid background and disabled text

                            // Accessible text, Pairs with: Background colors
                            11: "#5E5F68", // Usage: Secondary text and links
                            12: "#3f3f46", // Usage: Secondary text and links
                            13: "#27272a", // Usage: Secondary text and links
                            14: "#1E1F24", // Usage: High-contrast text
                        },
                    },

                    dark: {},
                },
            },
        },
    },
    plugins: [],
};
export default config;
