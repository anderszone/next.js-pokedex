import Image from "next/image";
import SearchIcon from "@/public/Search.svg";

// Sökfältskomponenten
export default function Search() {
  
  // Visar sökfältet
  return (
    <section className="content-grid justify-center padding-block-medium">
        <form className="relative" action="/search" method="get">
            <input className="form-input" type="search" name="" id="" placeholder="Search for a Pokémon..." />
            <button className="btn-form absolute" type="submit"><Image src={SearchIcon} alt="Magnifying glass" width={14} height={14}></Image></button>
        </form>
    </section>
  );
}
