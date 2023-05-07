import React from "react";
import CoverStyle from "./style";

interface ICover {
  src: string;
  alt: string;
}

export default function Cover({ src, alt }: ICover) {
  return <CoverStyle src={src} alt={alt} />;
}
