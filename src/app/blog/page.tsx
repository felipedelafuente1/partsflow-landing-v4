import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { getAllPosts } from "@/lib/blog";
import { BlogPostCard } from "@/components/blog/BlogPostCard";

export const metadata: Metadata = {
  title: "Blog | Partsflow",
  description:
    "Artículos sobre automatización de ventas, IA y el mercado de autopartes en Chile.",
  openGraph: {
    title: "Blog | Partsflow",
    description:
      "Artículos sobre automatización de ventas, IA y el mercado de autopartes en Chile.",
    type: "website",
    url: "/blog",
  },
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <div className="pt-20">
        {/* Header */}
        <div className="border-b border-white/[0.08] bg-black px-6 py-10">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/"
              className="mb-6 inline-flex items-center gap-1.5 text-xs text-white/30 transition-colors hover:text-mint-400"
            >
              <ArrowLeft size={13} />
              Volver al inicio
            </Link>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-mint-400/70">
              Blog
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Recursos y artículos
            </h1>
            <p className="mt-4 max-w-xl text-base text-slate-400 leading-relaxed">
              Tendencias, estrategias y casos prácticos sobre automatización de
              ventas en el mercado de autopartes.
            </p>
          </div>
        </div>

        {/* Posts grid */}
        <div className="mx-auto max-w-4xl px-6 py-14">
          {posts.length === 0 ? (
            <p className="text-center text-white/40">
              Próximamente publicaremos nuevos artículos.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {posts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
