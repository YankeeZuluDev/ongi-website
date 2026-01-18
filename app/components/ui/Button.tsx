import { ReactNode } from "react";

export default function Button({ children }: { children: ReactNode }) {
  return (
    <button className=" w-full bg-foreground text-background px-8 py-4 hover:cursor-pointer">{children}</button>
  );
}