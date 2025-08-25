import Image from "next/image";
import Pokemon from "@/public/pokemon.png";

export default function PokemonCard() {
  return (
    <li>
        <Image src={Pokemon} alt="Pokémon" width={60} height={60}></Image>
        <div>#025</div>
        <h3>Pikachu</h3>
        <div>Electric</div>
        <ul>
            <li><span>HP</span><span>35</span></li>
            <li><span>Attack</span><span>45</span></li>
            <li><span>Defense</span><span>40</span></li>
        </ul>
    </li>
  );
}
