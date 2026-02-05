"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar({ forceBlackWhiteStyle = false }: { forceBlackWhiteStyle?: boolean }) {
  const [isOnTop, setIsOnTop] = useState<boolean>(true);

  const navbarStyle = forceBlackWhiteStyle
    ? "bg-background text-foreground shadow-sm"
    : isOnTop
      ? "bg-transparent text-background"
      : "bg-background text-foreground shadow-sm";

  useEffect(() => {
    const onScroll = () => {
      setIsOnTop(window.scrollY <= 40);
    };

    // Subscribe for scroll event
    window.addEventListener("scroll", onScroll, { passive: true });

    // Trigger initial scroll
    onScroll();

    // Unsubscribe from scroll event on unmount
    return () => {
      window.removeEventListener("scroll", onScroll);
    };

  }, []);

  return (
    <nav className={`px-15 mx-auto fixed z-10 text-xs uppercase tracking-widest w-full ${navbarStyle}`}>
      <ul className={`flex items-center gap-6 min-h-15`}>
        <li>
          <Link href={"/"} className="hover:underline underline-offset-6 decoration-1">Home</Link>
        </li>
        <li>
          <Link href={"/about"} className="hover:underline underline-offset-6 decoration-1">About</Link>
        </li>
        <li className="relative group">
          <Link href={"/projects"} className="hover:underline underline-offset-6 decoration-1">Projects</Link>

          <div className="absolute left-0 top-full pt-2 hidden group-hover:block">
            <div className="bg-background text-foreground p-4 shadow-sm">
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="/projects/residential" className="whitespace-nowrap hover:underline">Residential Spaces</Link>
                </li>
                <li>
                  <Link href="/projects/public" className="whitespace-nowrap hover:underline">Public Spaces</Link>
                </li>
              </ul>
            </div>
          </div>

        </li>
        <li className="relative group">
          <Link href={"/shop"} className="hover:underline underline-offset-6 decoration-1">Shop</Link>

          <div className="absolute left-0 top-full pt-2 hidden group-hover:block">
            <div className="flex gap-8 bg-background text-foreground p-4 shadow-sm">
              <ul className="flex flex-col gap-2">
                <li>
                  <p className="text-sm mb-4 font-baskerville">Collections</p>
                </li>
                <li>
                  <Link href="/projects/residential" className="hover:underline">Nauriz</Link>
                </li>
                <li>
                  <Link href="/projects/commercial" className="hover:underline">New Year</Link>
                </li>
                <li>
                  <Link href="/projects/commercial" className="hover:underline">Luxurious Design</Link>
                </li>
                <li>
                  <Link href="/projects/commercial" className="hover:underline">Rich Only</Link>
                </li>
              </ul>
              <ul className="flex flex-col gap-2">
                <li>
                  <p className="text-sm mb-4 font-baskerville">Categories</p>
                </li>
                <li>
                  <Link href="/projects/residential" className="hover:underline">Vases</Link>
                </li>
                <li>
                  <Link href="/projects/residential" className="hover:underline">Tableware</Link>
                </li>
                <li>
                  <Link href="/projects/residential" className="hover:underline">Tiles</Link>
                </li>
                <li>
                  <Link href="/projects/residential" className="hover:underline">Decorations</Link>
                </li>
                <li>
                  <Link href="/projects/residential" className="hover:underline">Furniture</Link>
                </li>
              </ul>
            </div>
          </div>

        </li>
        <li>
          <Link href={"/contact"} className="hover:underline underline-offset-6 decoration-1">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}