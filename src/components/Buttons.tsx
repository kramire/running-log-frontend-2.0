import styled from "styled-components";

export const InvertedButton = styled.button`
  border: 2px solid ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primary};
  background-color: transparent;
`;
