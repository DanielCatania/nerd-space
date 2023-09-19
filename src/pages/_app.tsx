import React from "react";
import { AppProps } from "next/app";

import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import Header from "@/components/Header";

import "@/styles/global.css";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}
