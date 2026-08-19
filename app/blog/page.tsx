import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { getPublishedPosts } from "@/data/blog";
import { profile } from "@/data/profile";
import { webPageJsonLd } from "@/lib/json-ld";
import { createMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Blog",
  description: `Notes on MERN, Next.js, and shipping production software by ${profile.name}.`,
  path: "/blog",
});

export default function BlogPage() {
  const posts = getPublishedPosts();

  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          title: `Blog — ${profile.name}`,
          description: "Engineering notes and placeholders for future posts.",
          path: "/blog",
        })}
      />
      <section className="py-16 sm:py-24">
        <Container>
          <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
            Blog
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight">
            Writing.
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            Local typed posts for now. Swap data/blog.ts for MDX, a database, or a CMS
            later without rewriting this page.
          </p>
          {posts.length === 0 ? (
            <p className="mt-10 text-sm text-muted">No posts yet.</p>
          ) : (
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="overflow-hidden rounded-2xl border border-border bg-card"
                >
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="relative aspect-[16/8]">
                      <Image
                        src={post.coverImage}
                        alt=""
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-3 p-5">
                      <div className="flex items-center gap-2">
                        <Badge>{post.category}</Badge>
                        {post.placeholder ? <Badge>Placeholder</Badge> : null}
                      </div>
                      <h2 className="text-xl font-semibold">{post.title}</h2>
                      <p className="text-sm leading-6 text-muted">{post.excerpt}</p>
                      <p className="font-mono text-[11px] text-muted">
                        {formatDate(post.date)} · {post.readingTime}
                      </p>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
