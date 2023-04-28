import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Globals from "@/styles/globals";
import theme from "@/styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Globals />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
