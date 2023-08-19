import { useEffect, useState } from "react";
import { MainLayout } from "@/components/layouts";
import { NoFavorites, PokemonFavorite } from "@/components/pokemon";
import { localStorageFn } from "@/utils";

const FavoritePage = () => {
  const [pokemonsFavorite, setPokemonsFavorite] = useState<number[]>([]);

  useEffect(() => {
    setPokemonsFavorite(localStorageFn.getFavorites());
  }, []);

  return (
    <MainLayout title="Pokemons - favoritos">
      {pokemonsFavorite.length !== 0 ? (
        <PokemonFavorite pokemonsFavorite={pokemonsFavorite} />
      ) : (
        <NoFavorites />
      )}
    </MainLayout>
  );
};

export default FavoritePage;
