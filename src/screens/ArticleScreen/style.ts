import styled from "styled-components";
import BaseText from "@/components/Text";
import NextLink from "next/link";

export const Main = styled.main`
  margin: 0 5%;
`;

export const Text = styled(BaseText)`
  margin: 0.5em 0;
`;

export const Cover = styled.header`
  margin-bottom: 2em;
`;

export const CoverImage = styled.img`
  width: 100%;
  // screen size - header size - a spacing
  max-height: calc(100vh - 132px - 2em);
  object-fit: cover;

  border-radius: ${({ theme }) => theme.radius};

  margin-bottom: 1em;
`;

export const CoverInfo = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Link = styled(NextLink)`
  color: blue;
  text-decoration: underline;
`;

export const Content = styled.main`
  width: 80%;
  display: block;
  margin: 0 auto;
`;

export const Image = styled.img`
  max-height: 80vh;
  max-width: fit-content;
  width: 100%;

  display: block;
  margin: 0 auto;
`;

export const ReadToo = styled.section`
  margin: 1em 0;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
