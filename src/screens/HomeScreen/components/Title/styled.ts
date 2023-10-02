import styled from "styled-components";

const Line = styled.span`
  display: block;

  height: 10px;
  width: 4em;
  margin-top: 5px;

  background-color: ${({ theme }) => theme.colors.primary.default};
`;

export default Line;
