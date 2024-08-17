import { twMerge } from "tailwind-merge";
import packageJson from "@/package.json";
import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getAppVersion() {
    try {
        const version = packageJson.version;
        return version;
    } catch (error) {
        return "1.0.0";
    }
}
