import PokemonCard from "@/components/PokemonCard";

export default function Featured() {
  return (
    <section>
        <h2>Featured Pokémons</h2>
        <ul>
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
        </ul>
    </section>
  );
}
