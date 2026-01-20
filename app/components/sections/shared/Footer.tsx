import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex gap-x-24 h-full text-background p-15">
      <div>
        <ul>
          <li>
            <p className="uppercase mb-1">Navigation</p>
          </li>
          <li>
            <Link href={"/"} className="text-sm">Home</Link>
          </li>
          <li>
            <Link href={"/"} className="text-sm">About</Link>
          </li>
          <li>
            <Link href={"/"} className="text-sm">Projects</Link>
          </li>
          <li>
            <Link href={"/"} className="text-sm">Shop</Link>
          </li>
          <li>
            <Link href={"/"} className="text-sm">People</Link>
          </li>
          <li>
            <Link href={"/"} className="text-sm">Contact</Link>
          </li>
        </ul>
      </div>

      <div>
        <ul>
          <li>
            <p className="uppercase mb-1">Location</p>
          </li>
          <li>
            <p className="text-sm max-w-[25ch]">Pushkin st.<br />Kolotushkin building,<br />Almaty, Kazakhstan</p>
          </li>
        </ul>
      </div>

      <div>
        <ul>
          <li>
            <p className="uppercase mb-1">Contact</p>
          </li>
          <li>
            <Link href={"/"} className="text-sm">8 800 555 35 35</Link>
          </li>
          <li>
            <Link href={"/"} className="text-sm">karamzinart@gmail.com</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}