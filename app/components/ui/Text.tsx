import { ReactNode } from "react";

export default function Text({ children, light = true }: { children: ReactNode, light?: boolean }) {
  return (
    <p className={`text-sm max-w-[60ch] text-background ${light ? "text-background" : "text-foreground"}`}>{children}</p>
  );
}