import styled from "styled-components";

export const Small = styled.p`
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.font.size["s"]};
  font-weight: 300;
`;

export const Default = styled.p`
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.font.size["d"]};
`;

export const Large = styled.p`
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.font.size["l"]};
  font-weight: 700;
`;

export const ExtraLarge = styled.p`
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.font.size["xl"]};
  font-weight: 800;
`;

const Text = {
  Small,
  Default,
  Large,
  ExtraLarge,
};

export default Text;
