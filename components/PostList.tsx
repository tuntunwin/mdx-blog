import Image from "next/image";
import Link from "next/link";
import { posts } from "@/posts";

export default function PostList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
      {posts.map((p, idx) => (
        <Link
          key={idx}
          href={`/blog/${p.slug}`}
          className="p-4 group rounded-lg border border-gray-200 dark:border-gray-700 w-full"
        >
          {/* image */}
          <div className="h-48 w-full relative overflow-hidden rounded-md object-cover group-hover:scale-105 duration-300 transition-all">
            <Image
              src={p.thumbnail}
              alt={`${p.title} - thumbnail`}
              sizes="100vh"
              fill
              className="object-cover"
            />
          </div>

          {/* category */}
          <p className="text-xs bg-gray-100 dark:bg-gray-700/95 text-blue-700 dark:text-blue-500 font-semibold my-3 w-fit px-2 py-1 rounded-sm">
            {p.category}
          </p>

          {/* title */}
          <h2 className="text-md md:text-lg font-bold line-clamp-2">
            {p.title}
          </h2>

          {/* author and date */}
          <div className="text-gray-500 flex justify-between text-xs">
            <div>{p.author}</div>
            <div>{p.date}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
