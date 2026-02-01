import { ReactNode } from "react";

export default function Section({ children, light }: { children: ReactNode, light?: boolean }) {
  return (
    <section className={`${light ? "bg-background" : "bg-foreground"}`}>{children}</section>
  );
}