import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/json-ld";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { getPostBySlug, posts } from "@/data/blog";
import { articleJsonLd } from "@/lib/json-ld";
import { createMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.coverImage,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd data={articleJsonLd(post)} />
      <article className="py-16 sm:py-24">
        <Container className="max-w-3xl">
          <div className="flex flex-wrap gap-2">
            <Badge>{post.category}</Badge>
            {post.placeholder ? <Badge>Placeholder</Badge> : null}
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight">
            {post.title}
          </h1>
          <p className="mt-4 font-mono text-xs text-muted">
            {formatDate(post.date)} · {post.readingTime} · {post.author}
          </p>
          <div className="relative mt-8 aspect-[16/8] overflow-hidden rounded-2xl border border-border">
            <Image
              src={post.coverImage}
              alt=""
              fill
              priority
              sizes="48rem"
              className="object-cover"
            />
          </div>
          <div className="mt-10 space-y-4 text-base leading-7 text-muted whitespace-pre-wrap">
            {post.content}
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-10">
            <Link href="/blog" className="text-sm text-muted hover:text-foreground">
              ← All posts
            </Link>
          </p>
        </Container>
      </article>
    </>
  );
}
