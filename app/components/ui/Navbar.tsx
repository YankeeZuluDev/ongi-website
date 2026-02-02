import Link from "next/link";

export default function Navbar({ light = true }: { light?: boolean }) {
  return (
    <nav className="px-15 mx-auto fixed text-background z-10 text-xs uppercase tracking-widest">
      <ul className={`flex items-center justify-center gap-6 min-h-15 ${light ? "text-background" : "text-foreground"}`}>
        <li>
          <Link href={"/"} className="hover:underline underline-offset-6 decoration-1">Home</Link>
        </li>
        <li>
          <Link href={"/about"} className="hover:underline underline-offset-6 decoration-1">About</Link>
        </li>
        <li>
          <Link href={"/projects"} className="hover:underline underline-offset-6 decoration-1">Projects</Link>
        </li>
        <li>
          <Link href={"/"} className="hover:underline underline-offset-6 decoration-1">Shop</Link>
        </li>
        <li>
          <Link href={"/"} className="hover:underline underline-offset-6 decoration-1">People</Link>
        </li>
        <li>
          <Link href={"/contact"} className="hover:underline underline-offset-6 decoration-1">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}