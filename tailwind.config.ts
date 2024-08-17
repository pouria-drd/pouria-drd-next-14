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
                    bg: {
                        primary: "#ffffff",
                        secondary: "#fafbfd",
                        bgBlue: "#F9FEFF",
                    },

                    neutral: {
                        0: "#000000",
                        10: "#10152B",
                        20: "#1B2134",
                        30: "#2A3041",
                        40: "#3E424E",
                        50: "#535762",
                        60: "#757984",
                        70: "#989BA4",
                        80: "#BEC1C8",
                        90: "#DBDDE2",
                        95: "#EDEDEF",
                        99: "#FBFBFB",
                        100: "#FFFFFF",
                    },
                },
            },
        },
    },
    plugins: [],
};
export default config;
