import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black text-white p-2 flex justify-between">
      <h1 className="text-3xl">Pins</h1>
      <nav className="my-1 mx-1">
        <Link className="underline" href="#">
          GitHub
        </Link>
      </nav>
    </header>
  );
}
