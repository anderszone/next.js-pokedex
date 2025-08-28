import PokemonCard from "@/components/PokemonCard";

// Definierar en mall för varje Pokémon
interface Pokemon {
  id: number;
  name: string;
  types: string[];
  stats: { name: string; value: number }[];
  sprite: string;
}

interface FeaturedProps {
  pokemons: Pokemon[];
}

// Featured komponenten
export default function Featured({ pokemons }: FeaturedProps) {
  // Visa en sektion med utvalda pokémons
  return (
    <section className="content-grid gap-large bg-gradient padding-block-large">
        <h2 className="text-center">Featured Pokémons</h2>
        <ul className="flex space-between">
          {/* Loopar igenom utvalda pokemons och visar dessa */}
          {pokemons.map(p => (
            <li key={p.id} className="pokemon-card">
              <PokemonCard pokemon={p} />
            </li>
          ))}
      </ul>
    </section>
  );
}
