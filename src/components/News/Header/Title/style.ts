import styled from "styled-components";

const TitleStyle = styled.span`
  color: ${({ theme }) => theme.colors.primary.default};
  text-align: center;

  @media screen and (max-width: 450px) {
    h1 {
      font-size: ${({ theme }) => theme.font.size.l};
    }
  }
`;

export default TitleStyle;
