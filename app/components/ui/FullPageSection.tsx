import { ReactNode } from "react";

export default function FullPageSection({ children }: { children: ReactNode }) {
  return (
    <section className="full-page-section relative snap-start h-full">
      {children}
    </section>
  );
}