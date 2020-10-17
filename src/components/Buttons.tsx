import styled from "styled-components";

export const InvertedButton = styled.button`
  height: fit-content;

  font-family: "Source Sans Pro", sans-serif !important;

  border: 1px solid ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primary};
  background-color: transparent;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }
`;

export const AddButton = styled(InvertedButton)`
  font-size: 16px;
  padding: 0.75em 1em;
`;
