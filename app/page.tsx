"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import SearchComponent from "@/components/Search";

interface Pokemon {
  id: number;
  name: string;
  types: string[];
  stats: { name: string; value: number }[];
  sprite: string;
}

export default function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Hämtar 4 slumpade Pokémon initialt
  useEffect(() => {
    const fetchRandomPokemons = async () => {
      const total = 1302;
      const results: Pokemon[] = [];

      const fetchPokemon = async (id: number): Promise<Pokemon | null> => {
        try {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
          if (!res.ok) return null;
          const data = await res.json();
          return {
            id: data.id,
            name: data.name,
            types: data.types.map((t: any) => t.type.name),
            stats: data.stats.map((s: any) => ({ name: s.stat.name, value: s.base_stat })),
            sprite: data.sprites.front_default || "/pokemon.png",
          };
        } catch {
          return null;
        }
      };

      while (results.length < 4) {
        const rand = Math.floor(Math.random() * total) + 1;
        if (results.some(p => p.id === rand)) continue;
        const p = await fetchPokemon(rand);
        if (p) results.push(p);
      }

      setPokemons(results);
    };

    fetchRandomPokemons();
  }, []);

  // Hantera sökning från SearchComponent
  const handleSearch = async (results: { name: string; url: string }[], query: string) => {
    const detailed: Pokemon[] = [];

    for (const p of results.slice(0, 4)) { // max 4 Pokémon
      try {
        const res = await fetch(p.url);
        if (!res.ok) continue;
        const data = await res.json();
        detailed.push({
          id: data.id,
          name: data.name,
          types: data.types.map((t: any) => t.type.name),
          stats: data.stats.map((s: any) => ({ name: s.stat.name, value: s.base_stat })),
          sprite: data.sprites.front_default || "/pokemon.png",
        });
      } catch {
        continue;
      }
    }

    if (detailed.length > 0) setPokemons(detailed);
    setSearchQuery(query);
  };

  return (
    <>
      <Hero />
      <SearchComponent onSearch={handleSearch} />
      <Featured
        pokemons={pokemons}
        title={searchQuery ? `Search results for "${searchQuery}"` : "Featured Pokémons"}
      />
    </>
  );
}
