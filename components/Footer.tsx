import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/Logo.png";
import FB from "@/public/Facebook.svg";
import IG from "@/public/Instagram.svg";

export default function Footer() {
  return (
    <footer className="content-grid justify-center gap-medium padding-block-large bg-dark">
        <Link href="/" className="flex align-center gap-small color-light"><Image src={Logo} alt="Pokédex logo" width={40} height={40}></Image>Pokédex</Link>
        <p className="color-gray">Explore the world of Pokémon</p>
        <ul className="flex align-center gap-large">
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Image src={FB} alt="Facebook logo" width={40} height={40}></Image></a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Image src={IG} alt="Instagram logo" width={40} height={40}></Image></a></li>
        </ul>
    </footer>
  );
}
