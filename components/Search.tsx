import Image from "next/image";
import SearchIcon from "@/public/Search.svg";

export default function Search() {
  return (
    <section>
        <form action="/search" method="get">
            <input type="search" name="" id="" placeholder="Search for a Pokémon..." />
            <button type="submit"><Image src={SearchIcon} alt="Magnifying glass" width={20} height={20}></Image></button>
        </form>
    </section>
  );
}
