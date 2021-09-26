import React from "react";
import { NavbarItem, AddRunButton } from "../components";
import {
  faHome,
  faChartLine,
  faCalendarAlt,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { useWindowSize } from "../hooks";
import styled from "styled-components";

const Wrapper = styled.div.attrs((props: { $width: number }) => ({
  $width: props.$width | 0,
}))<{ $width: number }>`
  grid-area: navbar;

  display: flex;
  justify-content: space-between;

  @media (min-width: ${props => props.theme.screen.tablet}) {
    flex-direction: column;
  }
`;

export const Navbar = () => {
  const { width } = useWindowSize();
  return (
    <Wrapper $width={width}>
      <NavbarItem icon={faHome} text="Home" />
      <NavbarItem icon={faChartLine} text="Analytics" />
      <AddRunButton />
      <NavbarItem icon={faCalendarAlt} text="Calendar" />
      <NavbarItem icon={faCog} text="Settings" />
    </Wrapper>
  );
};
