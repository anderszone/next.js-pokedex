import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import Search from "@/components/Search";

export default async function Home() {
  let pokemons = [];

  try {
    // Totalt antal Pokémon i PokeAPI
    const total = 1302;  

    // Slumpa fram 4 unika ID:n
    const ids: number[] = [];
    while (ids.length < 4) {
      const rand = Math.floor(Math.random() * total) + 1;
      if (!ids.includes(rand)) {
        ids.push(rand);
      }
    }

    // Hämtar alla 4 pokemons
    const promises = ids.map(async (id) => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      if (!res.ok) {
        console.warn(`Pokémon ${id} not found, returning null`);
        return null; // hoppa över
      }
      return res.json();
    });

    let data = await Promise.all(promises);
    // Filtrera bort null
    data = data.filter(Boolean);

    // Mappa till format som Featured och PokemonCard använder
    pokemons = data.map(p => ({
      id: p.id,
      name: p.name,
      types: p.types.map((t: any) => t.type.name),
      stats: p.stats.map((s: any) => ({ name: s.stat.name, value: s.base_stat })),
      sprite: p.sprites.front_default
    }));
    
  } catch (error) {
    console.error(error);
  }
  
  return (
    <>
      <Hero />
      <Search />
      <Featured pokemons={pokemons} />
    </>
  );
}
