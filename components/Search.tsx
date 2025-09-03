"use client";

import { useState } from "react";
import Image from "next/image";
import SearchIcon from "@/public/Search.svg";

interface SearchProps {
  onSearch: (results: { name: string; url: string }[], query: string) => Promise<void> | void;
}

export default function SearchComponent({ onSearch }: SearchProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;

    try {
      // Hämta alla Pokémon-namn
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1302");
      const data = await res.json();

      const results = data.results.filter((p: any) =>
        p.name.toLowerCase().startsWith(query.toLowerCase())
      );

      onSearch(results, query); // skickar tillbaka till HomeSafe
    } catch (error) {
      console.error("Failed to search Pokémon:", error);
    }
  };

  return (
    <section className="content-grid justify-center padding-block-medium">
      <form className="relative" onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="search"
          placeholder="Search for a Pokémon..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn-form absolute" type="submit">
          <Image src={SearchIcon} alt="Magnifying glass" width={14} height={14} />
        </button>
      </form>
    </section>
  );
}
