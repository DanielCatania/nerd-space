import React from "react";
import type { AppProps } from "next/app";

import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import "@/styles/reset.css";

import Header from "@/components/patterns/Header/";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
