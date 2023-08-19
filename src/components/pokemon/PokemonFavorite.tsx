import { Grid } from "@nextui-org/react";
import { PokemonCardFavorite } from "./PokemonCardFavorite";

interface Props {
  pokemonsFavorite: number[];
}

export const PokemonFavorite = ({ pokemonsFavorite }: Props) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemonsFavorite.map((pokemonId) => (
        <Grid key={pokemonId} xs={6} sm={3} md={2}>
          <PokemonCardFavorite pokemonId={pokemonId} />
        </Grid>
      ))}
    </Grid.Container>
  );
};
