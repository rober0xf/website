"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/app/styles/header.css";

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
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" aria-label="Home" className="logo-link">
          <Image src="/logo.svg" alt="logo" width={48} height={48} priority />
        </Link>

        <nav className="site-nav" aria-label="main navigation">
          {TABS.map((tab) => {
            const isActive = pathname === tab.link;
            return (
              <Link
                key={tab.name}
                href={tab.link}
                aria-label={tab.name}
                className={isActive ? "nav-link active" : "nav-link"}
                aria-current={isActive ? "page" : undefined}
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
