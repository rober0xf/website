"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Tab = {
  name: string;
  link: string;
};

const TABS: Tab[] = [
  { name: "blog", link: "/blog" },
  { name: "projects", link: "/projects" },
  { name: "bookshelf", link: "/books" },
];

export const HeaderComponent = () => {
  const pathname = usePathname();

  return (
    <header>
      <div className="mx-auto flex w-full max-w-300 items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          aria-label="Home"
          className="relative z-10 flex shrink-0 items-center p-0 text-stone-900"
        >
          <Image
            src="/logo.svg"
            alt="logo"
            width={48}
            height={48}
            className="h-12 sm:h-14"
            priority
          />
        </Link>

        <nav className="poppins hidden items-center gap-6 font-serif sm:flex">
          {TABS.map((tab) => {
            const isActive = pathname === tab.link;
            return (
              <Link
                key={tab.name}
                href={tab.link}
                aria-label={tab.name}
                className={`relative p-0 text-center text-lg after:absolute after:-bottom-0.5 after:left-0 after:h-px after:bg-[#1e40af] after:transition-all after:duration-300 after:content-[''] hover:after:w-full ${
                  isActive
                    ? "text-[#1e40af] after:w-full"
                    : "text-stone-600 hover:text-stone-900 after:w-0"
                }`}
              >
                {tab.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
