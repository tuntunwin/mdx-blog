"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

const links = [{ displayName: "Blog", herf: "/blog" }];

export default function Header() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <header className="flex justify-between items-center py-6 w-full max-w-5xl mx-auto px-4 md:px-8">
      <Link href={"/"} className="flex space-x-2 items-center">
        <Image
          src={theme === "light" ? "/light-union.svg" : "/dark-union.svg"}
          width={36}
          height={36}
          alt="logo"
          priority
        />
        <div className="text-2xl">
          Meta<span className="font-bold">Blog</span>
        </div>
      </Link>
      <div className="flex items-center space-x-6">
        <nav className="hidden md:flex space-x-6">
          {links.map((l, idx) => (
            <Link href={l.herf} key={idx}>
              {l.displayName}
            </Link>
          ))}
        </nav>
        <button
          onClick={toggleTheme}
          className="focus:outline-none p-1"
          aria-label="Toggle theme"
        >
          <Image
            src={theme === "light" ? "/light-toggle.svg" : "/dark-toggle.svg"}
            alt="theme toggle"
            width={32}
            height={18}
            priority
          />
        </button>
      </div>
    </header>
  );
}
