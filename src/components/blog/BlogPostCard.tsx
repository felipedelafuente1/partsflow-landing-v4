import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/blog";

export function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden transition-all hover:border-mint-400/30 hover:bg-white/[0.06]">
        {post.image && (
          <div className="aspect-[16/9] overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              width={600}
              height={338}
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-[10px] uppercase tracking-widest text-mint-400/70 font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-mint-400 transition-colors">
            {post.title}
          </h3>
          <p className="text-sm text-white/50 line-clamp-2">{post.description}</p>
          <p className="mt-4 text-xs text-white/30">
            {new Date(post.date).toLocaleDateString("es-CL", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </article>
    </Link>
  );
}
