import { Pokemon } from "@/interfaces";
import axios from "axios";

export const pokemonsFilter = async ({ path }: { path: string }) => {
  const {
    data: { id, name: pokemonName, sprites },
  } = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${path}`);

  return {
    id,
    name: pokemonName,
    sprites,
  };
};
