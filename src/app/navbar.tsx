import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-center gap-6 py-4 border-b border-zinc-300 dark:border-zinc-800 text-sm">
      <Link href="/" className="hover:underline">Home</Link>
      <Link href="/about" className="hover:underline">About</Link>
      <Link href="/education" className="hover:underline">Education</Link>
      <Link href="/hobbies" className="hover:underline">Hobbies</Link>
      <Link href="/contact" className="hover:underline">Contact</Link>
    </nav>
  );
}
