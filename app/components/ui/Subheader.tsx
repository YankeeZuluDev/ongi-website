import { ReactNode } from "react";

export default function Subheader({ children, light=true }: { children: ReactNode, light?: boolean }) {
  return (
    <p className={`text-xs text-background/70 tracking-[0.2em] mb-1 ${light ? "text-background" : "text-foreground"}`}>{children}</p>
  );
}