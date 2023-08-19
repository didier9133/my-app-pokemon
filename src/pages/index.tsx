import { GetStaticProps } from "next";
import { MainLayout } from "@/components/layouts";
import { useGetPokemosnQuery } from "@/api";
import axios from "axios";
import { PokemonListResponse, Result } from "@/interfaces";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { PokemonCard } from "@/components/pokemon";

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get<PokemonListResponse>(
    "https://pokeapi.co/api/v2/pokemon?limit=151"
  );

  const newPokemons: Result[] = data.results.map((pokemon, index) => ({
    ...pokemon,
    imagen: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      index + 1
    }.svg`,
    id: index + 1,
  }));

  return {
    props: {
      pokemons: newPokemons,
    },
  };
};

interface Props {
  pokemons: Result[];
}

export default function Home({ pokemons }: Props) {
  // const { data } = useGetPokemosnQuery("/pokemon?limit=151"); // your fetch function here

  return (
    <>
      <MainLayout>
        <Grid.Container justify="flex-start" gap={2}>
          {pokemons.map((pokemon) => {
            return (
              <Grid xs={6} sm={3} md={3} xl={2} key={pokemon.id}>
                <PokemonCard pokemon={pokemon} />
              </Grid>
            );
          })}
        </Grid.Container>
      </MainLayout>
    </>
  );
}
