import React, { useState } from "react";
import { useWindowSize } from "../hooks";
import { Wrapper, IconText } from "./NavbarItem";
import { RunModal } from "./";
import { Icon } from "semantic-ui-react";
import { TABLET } from "../lib/constants";
import styled from "styled-components";

const AddRunWrapper = styled(Wrapper)`
  align-items: flex-start;
  @media (min-width: ${props => props.theme.screen.tablet}) {
    order: 5;
    grid-template-columns: 2fr 1fr;
  }
`;

export const AddRunButton = () => {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const { width } = useWindowSize();
  const openModal = (val: boolean) => () => setIsAddOpen(val);

  return (
    <>
      <AddRunWrapper onClick={openModal(true)}>
        {width > TABLET && <IconText>Add Run</IconText>}
        <Icon name={"add"} />
      </AddRunWrapper>
      <RunModal
        editType="add"
        isOpen={isAddOpen}
        handleClose={openModal(false)}
      />
    </>
  );
};
