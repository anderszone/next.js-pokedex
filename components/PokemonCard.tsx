import Image from "next/image";

// Definiera typer för props
interface PokemonCardProps {
  pokemon: {
    id: number;
    name: string;
    types: string[];
    stats: { name: string; value: number }[];
    sprite: string;
  };
}

// Komponent för att visa en Pokémons information i ett kort
export default function PokemonCard({ pokemon }: PokemonCardProps) {
  // Filtrera bara HP, Attack och Defense
  const filteredStats = pokemon.stats.filter(stat =>
    ["hp", "attack", "defense"].includes(stat.name)
  );
  
  // Rendera kortet med Pokémon-information
  return (
    <>
        <Image src={pokemon.sprite} alt={pokemon.name} width={60} height={60} />
        <div>#{pokemon.id}</div>
        <h3>{pokemon.name}</h3>
        <div>{pokemon.types.join(", ")}</div>
        <ul>
          {/* Loopar igenom stats för Pokemon (HP, Attack, Defense) och visar dessa */}
          {filteredStats.map(stat => (
            <li key={stat.name}>
              <span>{stat.name}</span>: <span>{stat.value}</span>
            </li>
          ))}
        </ul>
    </>
  );
}
