import styled from "styled-components";

const FooterBox = styled.footer`
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 2em;
  background-color: ${({ theme }) => theme.colors.primary.default};

  color: #ccc;
`;

export default FooterBox;
