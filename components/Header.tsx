import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/Logo.png";

// Header komponent
export default function Header() {

  // Visar headern
  return (
    <header className="content-grid padding-block-small">
        <nav className="flex space-between align-center">
            <Link href="/" className="flex align-center gap-small logo text-gradient"><Image src={Logo} alt="Pokédex logo" width={48} height={48}></Image>Pokédex</Link>
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
