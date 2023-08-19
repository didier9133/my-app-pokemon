import Head from "next/head";
import { ReactNode } from "react";
import { Navbar } from "../ui";

interface Props {
  children: ReactNode;
  title?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const MainLayout = ({ children, title }: Props) => {
  console.log({ origin });
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"} </title>
        <meta name="author" content="Didier Contreras" />
        <meta
          name="description"
          content="Informacion sobre el pokemon : pikachu"
        />
        <meta
          name="keywords"
          content="pikachu, pokemon, pokedex, information"
        />

        <meta property="og:title" content={`Informacion sobre ${title}`} />
        <meta
          property="og:description"
          content={`Esta es la pagina que te dira todo sobre pokemones como ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner2.jpg`} />
      </Head>

      <Navbar />

      <main
        style={{
          padding: "0 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
