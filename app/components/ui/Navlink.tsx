import Link from "next/link";
import { ReactNode } from "react";

export default function Navlink({ children, href }: { children: ReactNode, href: string }) {
  return (
    <Link href={href} className="text-sm text-background uppercase underline underline-offset-6 decoration-1">{children}</Link>
  );
}