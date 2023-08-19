import { Card, Row, Text } from "@nextui-org/react";
import { Result } from "../../interfaces/pokemon-list";
import { useRouter } from "next/router";

interface Props {
  pokemon: Result;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/name/${pokemon.name}`);
  };

  return (
    <>
      <Card
        isHoverable
        isPressable
        css={{ justifyContent: "space-between" }}
        onClick={handleClick}
      >
        <Card.Body css={{ p: 1 }}>
          <Card.Image
            src={pokemon.imagen}
            width="100%"
            css={{
              height: "140px",
            }}
          />
          <Card.Footer>
            <Row justify="space-between">
              <Text transform="capitalize">{pokemon.name}</Text>
              <Text>{pokemon.id}</Text>
            </Row>
          </Card.Footer>
        </Card.Body>
      </Card>
    </>
  );
};
