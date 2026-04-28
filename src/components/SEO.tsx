import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
}

/**
 * Sets the page <title> and <meta name="description"> dynamically per route.
 * Place at the top of each page component's JSX return.
 */
export default function SEO({ title, description }: SEOProps) {
  useEffect(() => {
    document.title = title;

    // Update or create meta description
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = description;

    // Update or create OG tags
    const ogTags: Record<string, string> = {
      "og:title": title,
      "og:description": description,
      "og:type": "website",
    };
    Object.entries(ogTags).forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.content = content;
    });
  }, [title, description]);

  return null;
}
