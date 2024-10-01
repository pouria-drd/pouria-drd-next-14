import type { MetadataRoute } from "next";

function siteMap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://pouria-drd.ir",
            lastModified: new Date(),
            // lastModified: "2024-10-01",
            changeFrequency: "weekly",
            priority: 1,
        },
    ];
}
export default siteMap;
