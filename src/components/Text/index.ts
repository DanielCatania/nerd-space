import styled from "styled-components";

interface TextProps {
  size?: "s" | "d" | "l" | "xl";
}

const Text = styled.p.withConfig({
  shouldForwardProp: (props) => ![""].includes(props),
})<TextProps>`
  font-family: ${({ theme }) => theme.font.family};

  @media screen and (min-width: 0px) {
    font-size: ${({ theme, size = "d" }) => theme.font.size[size].xs};
  }
  @media screen and (min-width: 768px) {
    font-size: ${({ theme, size = "d" }) => theme.font.size[size].md};
  }
  @media screen and (min-width: 1024px) {
    font-size: ${({ theme, size = "d" }) => theme.font.size[size].lg};
  }
`;

export default Text;
