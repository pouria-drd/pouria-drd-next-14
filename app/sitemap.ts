import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://pouria-drd.ir",
            // lastModified: new Date(),
            lastModified: "2024-08-14",
            changeFrequency: "monthly",
            priority: 1,
        },
    ];
}
