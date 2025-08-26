import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/Logo.png";

export default function Header() {
  return (
    <header className="content-grid padding-block-small">
        <nav className="flex space-between align-center">
            <Link href="/" className="flex align-center gap-small"><Image src={Logo} alt="Pokédex logo" width={40} height={40}></Image>Pokédex</Link>
            <ul className="flex gap-medium">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/">Pokedex</Link>
                </li>
                <li>
                    <Link href="/">Types</Link>
                </li>
                <li>
                    <Link href="/">Favourites</Link>
                </li>
            </ul>
        </nav>
    </header>
  );
}
