const localFavorites = ({ id }: { id: number }) => {
  let pokemonsFavorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  if (pokemonsFavorites.includes(id)) {
    pokemonsFavorites = pokemonsFavorites.filter((pokeId) => pokeId !== id);
  } else {
    pokemonsFavorites = [...pokemonsFavorites, id];
  }

  localStorage.setItem("favorites", JSON.stringify(pokemonsFavorites));
};

const getFavorites = (): number[] => {
  return JSON.parse(localStorage.getItem("favorites") || "[]");
};

export default {
  localFavorites,
  getFavorites,
};
