import React, { FC, useState, ChangeEvent } from "react";
import { Header, AddButton } from "../../components";
import { Icon } from "semantic-ui-react";
import styled from "styled-components";

const Wrapper = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2em;

  font-size: 13px;
  color: ${props => props.theme.colors.primary};
  background-color: #1a222d;
  z-index: 10;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 90vh;

  transform: ${props => (props.isOpen ? "translateY(0)" : "translateY(100%)")};
  transition: transform 0.6s ease;
`;

const MenuIcon = styled(Icon)`
  &&&&&& {
    text-align: right;
    width: 100%;
    &:hover {
      cursor: pointer;
    }
  }
`;

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 1em;
`;

const StyledInput = styled.input`
  width: 100%;
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.bgPrimary};
  padding: 0.5em;
  border-radius: 5px;
  border: none;
  font-family: "Source Sans Pro", sans-serif !important;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.bgPrimary};
  padding: 0.5em;
  border-radius: 5px;
  border: none;
  font-family: "Source Sans Pro", sans-serif !important;
`;

interface AddRunProps {
  isOpen: boolean;
  setIsOpen(value: boolean): void;
}

interface RunFields {
  distance: number;
  date: string;
  location: string;
  note: string;
}

const defaultRunFields: RunFields = {
  distance: 0,
  date: new Date().toString(),
  location: "",
  note: "",
};

export const AddRun: FC<AddRunProps> = ({ isOpen, setIsOpen }) => {
  const closeWindow = () => {
    setIsOpen(false);
    setRunFields(defaultRunFields);
  };
  const [runFields, setRunFields] = useState<RunFields>(defaultRunFields);

  const updateFields = (e: ChangeEvent<HTMLInputElement>) =>
    setRunFields({
      ...runFields,
      [e.target.name]: e.target.value,
    });

  return (
    <Wrapper isOpen={isOpen}>
      <MenuIcon name="close" size="large" onClick={closeWindow} />
      <Header>Add New Run</Header>
      <InputWrapper>
        <div>Distance</div>
        <StyledInput
          type="number"
          min="0"
          step="0.5"
          name="distance"
          value={runFields.distance}
          onChange={updateFields}
        />
        <div>Date</div>
        <StyledInput
          type="date"
          name="date"
          value={runFields.date}
          onChange={updateFields}
        />
        <div>Location</div>
        <StyledInput
          name="location"
          value={runFields.location}
          onChange={updateFields}
        />
        <div>Notes</div>
        <StyledTextArea
          placeholder="Anything to note?"
          name="note"
          value={runFields.note}
          onChange={updateFields}
        />
      </InputWrapper>
      <AddButton onClick={closeWindow}>Save Run</AddButton>
    </Wrapper>
  );
};
