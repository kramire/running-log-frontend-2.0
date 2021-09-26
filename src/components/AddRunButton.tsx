import React from "react";
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useWindowSize } from "../hooks";
import { Wrapper, IconText } from "./NavBarItem";
import { TABLET } from "../lib/constants";
import styled from "styled-components";

const AddRunWrapper = styled(Wrapper)`
  @media (min-width: ${props => props.theme.screen.tablet}) {
    order: 5;
    grid-template-columns: 2fr 1fr;
  }
`;

export const AddRunButton = () => {
  const { width } = useWindowSize();
  const handleClick = () => console.log("add run");

  return (
    <AddRunWrapper onClick={handleClick}>
      {width > TABLET && <IconText>Add Run</IconText>}
      <FaIcon icon={faPlus} />
    </AddRunWrapper>
  );
};
