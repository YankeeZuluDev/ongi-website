import { ReactNode } from "react";

export default function Section({ children, light }: { children: ReactNode, light?: boolean }) {
  return (
    <section>{children}</section>
  );
}