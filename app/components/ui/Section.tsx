import { ReactNode } from "react";

export default function Section({ children, light }: { children: ReactNode, light?: boolean }) {
  return (
    <section className={`px-15 pt-30 ${light ? "bg-background" : "bg-foreground"}`}>{children}</section>
  );
}