import Link from "next/link";
import { ReactNode } from "react";

export default function Navlink({ children, href }: { children: ReactNode, href: string }) {
  return (
    <Link href={href} className="relative text-sm text-background uppercase after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-background">{children}</Link>
  );
}