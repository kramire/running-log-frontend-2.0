import React from "react";
import { Icon, SemanticICONS } from "semantic-ui-react";
import { useWindowSize } from "../hooks";
import { TABLET } from "../lib/constants";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr;
  grid-gap: 1em;

  :hover {
    cursor: pointer;
  }

  @media (min-width: ${props => props.theme.screen.tablet}) {
    grid-template-columns: 2fr 1fr;
  }
`;

export const IconText = styled.span.attrs((props: { $width: number }) => ({
  $width: props.$width | 0,
}))<{ $width: number }>`
  display: inherit;
  margin-right: 1em;
`;

export const NavbarItem = (props: { icon: SemanticICONS; text: string }) => {
  const { width } = useWindowSize();
  const { icon, text } = props;
  return (
    <Link to={`/${text.toLowerCase()}`}>
      <Wrapper>
        {width > TABLET && <IconText>{text}</IconText>}
        <Icon name={icon} />
      </Wrapper>
    </Link>
  );
};
