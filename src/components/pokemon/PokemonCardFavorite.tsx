import { Card } from "@nextui-org/react";
import { useRouter } from "next/router";

interface Props {
  pokemonId: number;
}

export const PokemonCardFavorite = ({ pokemonId }: Props) => {
  const router = useRouter();
  const handleClickOnFavorite = () => {
    router.push(`/pokemon/${pokemonId}`);
  };

  return (
    <Card
      onClick={handleClickOnFavorite}
      isHoverable
      isPressable
      css={{ padding: 10 }}
    >
      <Card.Image
        height={140}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
      />
    </Card>
  );
};
