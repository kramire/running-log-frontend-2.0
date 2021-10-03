import React from "react";
import { InputOnChangeData } from "semantic-ui-react";
import { SmallButton } from "./";

export const LabelButton = (props: {
  value: string;
  selected: boolean;
  handleChange: (_: any, data: InputOnChangeData) => void;
}) => (
  <SmallButton
    style={{ margin: ".3em" }}
    color={props.selected ? "teal" : undefined}
    onClick={() => props.handleChange(null, { value: props.value })}
  >
    {props.value}
  </SmallButton>
);
