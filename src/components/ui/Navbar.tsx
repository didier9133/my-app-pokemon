import { useTheme, Text, Spacer } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        padding: "0 20px",
        placeItems: "center",
        backgroundColor: theme?.colors.gray100.value,
      }}
    >
      <Image
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        }
        width={70}
        height={70}
        alt="icono de la app"
        priority={true}
      />

      <Link href={"/"}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            okemon
          </Text>
        </div>
      </Link>

      <Spacer css={{ flex: 1 }} />

      <Link href={"/favorites"}>
        <Text color="white" h3>
          Favoritos
        </Text>
      </Link>
    </div>
  );
};
