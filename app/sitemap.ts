import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://vactionstnh.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/aboutus",
    "/careers",
    "/contactus",
    "/corporatetour",
    "/freeandeasy",
    "/grouptours",
    "/touralbum",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
