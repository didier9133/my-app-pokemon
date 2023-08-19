import { Container, Text, Image } from "@nextui-org/react";

export const NoFavorites = () => {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 70px)",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text h1>No hay favoritos</Text>
      <Image
        css={{
          opacity: 0.2,
        }}
        height={200}
        width={200}
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
      />
    </Container>
  );
};
