import { ReactNode } from "react";

export default function Subheader({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs text-background/70 tracking-[0.2em] mb-1">{children}</p>
  );
}