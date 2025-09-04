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
        <Image className="pokemon-image margin-bottom-small" src={pokemon.sprite} alt={pokemon.name} width={100} height={100} />
        <div className="pokemon-id margin-bottom-small">#{pokemon.id}</div>
        <h3 className="margin-bottom-small capitalize">{pokemon.name}</h3>
        <ul className="flex gap-tiny margin-bottom-medium">
          {pokemon.types.map(type => (
            <li key={type} className="pokemon-tag">{type}</li>
          ))}
        </ul>
        <ul className="stretch">
          {/* Loopar igenom stats för Pokemon (HP, Attack, Defense) och visar dessa */}
          {filteredStats.map(stat => (
            <li key={stat.name} className="flex space-between bold">
              <span className={stat.name === "hp" ? "uppercase" : "capitalize"}>{stat.name}</span>&nbsp;<span>{stat.value}</span>
            </li>
          ))}
        </ul>
    </>
  );
}
