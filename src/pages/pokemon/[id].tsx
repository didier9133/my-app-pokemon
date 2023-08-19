import { useState, useEffect } from "react";

import { MainLayout } from "@/components/layouts";

import { Pokemon } from "@/interfaces";
import { localStorageFn } from "@/utils";
import { Button, Card, Container, Grid, Text, Image } from "@nextui-org/react";
import axios from "axios";
import { GetStaticProps, GetStaticPaths } from "next";

interface Props {
  pokemon: Pokemon;
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const paramsStatic = [];

  for (let i = 1; i < 151; i++) {
    paramsStatic.push({
      params: {
        id: i.toString(),
      },
    });
  }
  return {
    paths: paramsStatic,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const { data } = await axios.get<Pokemon>(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  );

  return {
    props: {
      pokemon: data,
    },
  };
};

const PokemonPage = ({ pokemon }: Props) => {
  const [isPokemonsFavorites, setIsPokemonsFavorites] = useState(false);

  const toggleFavorites = () => {
    localStorageFn.localFavorites({ id: pokemon.id });
    setIsPokemonsFavorites(!isPokemonsFavorites);
  };

  useEffect(() => {
    const pokemons: number[] = localStorageFn.getFavorites();
    if (pokemons.includes(pokemon.id)) {
      setIsPokemonsFavorites(true);
    }
  }, []);

  return (
    <MainLayout title={pokemon.name}>
      <Grid.Container gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable={true} css={{ padding: "30px" }}>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.dream_world.front_default}
                alt={pokemon.name}
                css={{ height: "200px" }}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text h1 transform="capitalize">
                {pokemon.name}
              </Text>
              <Button
                onClick={toggleFavorites}
                color="gradient"
                ghost={!isPokemonsFavorites}
              >
                {isPokemonsFavorites ? "Atrapado!" : "Atrapalo ya!"}
              </Button>
            </Card.Header>

            <Card.Body>
              <Text h2 size={30}>
                Sprites:
              </Text>

              <Container direction="row" display="flex">
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </MainLayout>
  );
};

export default PokemonPage;
