import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { darkTheme } from "../theme";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { pokeApi } from "@/api/pokeApi";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApiProvider api={pokeApi}>
      <NextUIProvider theme={darkTheme}>
        <Component {...pageProps} />
      </NextUIProvider>
    </ApiProvider>
  );
}
