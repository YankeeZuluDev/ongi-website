import Link from "next/link";
import { ReactNode } from "react";

export default function Navlink({ children, href, light = true }: { children: ReactNode, href: string, light?: boolean }) {
  return (
    <Link href={href} className={`text-sm text-background uppercase underline underline-offset-6 decoration-1 ${light ? "text-background" : "text-foreground"}`}>{children}</Link>
  );
}