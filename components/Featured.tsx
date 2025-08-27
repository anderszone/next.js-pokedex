import PokemonCard from "@/components/PokemonCard";

export default function Featured() {
  return (
    <section className="content-grid bg-gradient padding-block-large">
        <h2 className="text-center">Featured Pokémons</h2>
        <ul className="flex space-between">
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
        </ul>
    </section>
  );
}
