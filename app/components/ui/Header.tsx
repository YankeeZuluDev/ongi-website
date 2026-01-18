import { ReactNode } from "react";

export default function Header({ children, light = true }: { children: ReactNode, light?: boolean }) {
  return (
    <h1 className={`text-2xl text-background font-baskerville uppercase tracking-widest mb-3 ${light ? "text-background" : "text-foreground"}`}>{children}</h1>
  );
}