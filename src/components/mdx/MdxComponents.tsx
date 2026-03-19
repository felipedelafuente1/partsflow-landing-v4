import type { MDXComponents } from "mdx/types";
import Image from "next/image";

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1 className="text-3xl font-bold text-white mt-10 mb-4" {...props} />
  ),
  h2: (props) => (
    <h2 className="text-2xl font-bold text-white mt-8 mb-3" {...props} />
  ),
  h3: (props) => (
    <h3 className="text-xl font-semibold text-white mt-6 mb-2" {...props} />
  ),
  p: (props) => (
    <p className="text-base text-white/70 leading-relaxed mb-4" {...props} />
  ),
  a: (props) => (
    <a
      className="text-mint-400 underline underline-offset-2 hover:text-mint-300"
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="list-disc pl-6 mb-4 text-white/70 space-y-1"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="list-decimal pl-6 mb-4 text-white/70 space-y-1"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-mint-400 pl-4 my-6 italic text-white/60"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="bg-white/10 text-mint-400 px-1.5 py-0.5 rounded text-sm"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="bg-zinc-900 border border-white/10 rounded-xl p-4 overflow-x-auto mb-6"
      {...props}
    />
  ),
  img: (props) => (
    <Image
      src={props.src || ""}
      alt={props.alt || ""}
      width={800}
      height={400}
      className="rounded-xl my-6 w-full"
    />
  ),
};
