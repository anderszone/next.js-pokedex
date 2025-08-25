import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/Logo.png";

export default function Header() {
  return (
    <header className="content-grid">
        <Link href="/"><Image src={Logo} alt="Pokédex logo" width={40} height={40}></Image>Pokédex</Link>
        <nav>
            <ul>
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
