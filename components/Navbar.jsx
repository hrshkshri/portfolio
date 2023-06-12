import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-2 m-2 text-lg font-medium">
      <ul className="flex justify-between items-center space-x-5">
        <li className="hover:underline underline-offset-8">
          <Link href="/">Home</Link>
        </li>
        <div className="flex justify-between items-center space-x-5">
          <li className="hover:underline underline-offset-8">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:underline underline-offset-8">
            <Link href="/whatido">What I do</Link>
          </li>
          <li className="hover:underline underline-offset-8">
            <Link href="/mywork">My Work</Link>
          </li>
          <li className="hover:underline underline-offset-8">
            <Link href="/contact">Contact</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
