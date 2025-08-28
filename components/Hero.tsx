// Klientkomponent (körs i webbläsaren, inte på servern)
"use client";

import Image from "next/image";
import PokemonCard from "@/components/PokemonCard";
import { useState } from "react";

// Typdefinition för en Pokémon
interface Pokemon {
  id: number;
  name: string;
  types: string[];
  stats: { name: string; value: number }[];
  sprite: string;
}

// Hero-komponenten
export default function Hero() {
  // State för den slumpmässiga pokémonen
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  // Funktion för att hämta en slumpmässig pokémon
  const getRandomPokemon = async () => {
    try {
      const total = 1302;
      
      // Slumpar fram ett ID
      const id = Math.floor(Math.random() * total) + 1;
      
      // Hämtar den slumpade pokémonen från PokeAPI
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

      // Om pokémonen inte finns, prova igen
      if (!res.ok) {
        console.warn(`Pokémon ${id} not found, retrying...`);
        return getRandomPokemon(); // prova ett nytt slump-ID
      }

      // Konverterar pokemon till JSON-format
      const data = await res.json();

      // Förenklar formatet/strukturen för datan och använder bara datan som behövs
      const mapped: Pokemon = {
        id: data.id,
        name: data.name,
        types: data.types.map((t: any) => t.type.name),
        stats: data.stats.map((s: any) => ({ name: s.stat.name, value: s.base_stat })),
        sprite: data.sprites.front_default,
      };

      // Uppdaterar state med den nya pokémonen
      setPokemon(mapped);
    } catch (error) {
      console.error("Failed to fetch Pokémon:", error);
    }
  };

  // Renderar komponenten
  return (
    <section className="flex flex-col items-center gap-4 bg-gradient-to-br [background-image:linear-gradient(-10deg,_#C97FE4,_#AECDF6)] p-14">
        <h1 className="text-center mt-14 text-8xl font-extrabold text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">Gotta catch 'em all!</h1>
        <p className="text-center text-white text-xl">Discover, search and explore the amazing world of Pokémon. Find<br /> your favourite and learn about their stats.</p>
        
        {/* Hämtar en slumpmässig pokemon vid klick */}
        <button onClick={getRandomPokemon} className="btn-primary"><Image src="/Dice.svg" width={25} height={25} alt="Dice" />Random Pokémon</button>

        {/* Om en slumpmässig pokemon har hämtats, visa kortet annars visas inte kortet */}
        {pokemon && (
          <div className="pokemon-card">
            <PokemonCard pokemon={pokemon} />
          </div>
        )}
    </section>
  );
}
