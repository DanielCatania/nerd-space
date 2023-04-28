import React from "react";
import type { AppProps } from "next/app";
import Globals from "@/styles/globals";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Globals />
      <Component {...pageProps} />
    </>
  );
}
