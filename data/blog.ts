import type { BlogPost } from "@/types";

/**
 * Local typed posts. Swap this module later for MDX, a database, or a CMS
 * without changing the blog UI as long as the BlogPost shape stays stable.
 */
export const posts: BlogPost[] = [
  {
    slug: "placeholder-shipping-mern-apps",
    title: "PLACEHOLDER: Shipping a MERN app past the tutorial stage",
    excerpt:
      "Placeholder post. Replace with a real article — auth, data modeling, and what usually breaks in production.",
    content: `This is placeholder content for the blog architecture.

Replace this file (or this entry) with a real post. The route, metadata, and layout are already wired.

Topics this skeleton is ready for:
- Auth and session design
- MongoDB schema choices that age poorly
- When Next.js should own the UI vs. when Express should own the API

Do not publish this post as-is.`,
    date: "2026-01-15",
    author: "YOUR_NAME",
    category: "Engineering",
    tags: ["MERN", "Next.js", "Production"],
    coverImage: "/images/blog/placeholder.svg",
    readingTime: "4 min",
    placeholder: true,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getPublishedPosts(): BlogPost[] {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}
