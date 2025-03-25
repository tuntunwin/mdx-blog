import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { posts } from "@/posts";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center px-4 md:px-8">
      <Header />

      {/* hero */}
      <div className="mb-16 w-full max-w-5xl">
        <div className="h-[200px] md:h-[400px] rounded-md relative">
          <Image src={"/images/hero.png"} alt="hero image" sizes="100vh" fill className="object-cover rounded-md" />
          <div className="absolute -bottom-6 bg-white dark:bg-[#242535] p-4 md:p-6 mx-4 md:mx-10 rounded-lg shadow-lg max-w-[90%] md:max-w-[50%]">
            <p className="text-xs bg-blue-700 w-fit py-1 px-2 text-white rounded-md mb-2">
              Technology
            </p>
            <h2 className="text-xs md:text-xl font-bold">
              The Impact of Technology on the Workplace: How Technology is Changing
            </h2>
            <p className="text-xs md:text-sm mt-2">Jason Francisco | August 20, 2022</p>
          </div>
        </div>
      </div>

      {/* content */}
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

      <Footer />
    </div>
  );
}
