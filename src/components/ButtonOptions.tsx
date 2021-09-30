import React from "react";
import { Button, InputOnChangeData } from "semantic-ui-react";

interface ButtonOpt {
  key: string;
  value: any;
  text: string;
}

export const genButOpts = (opts: any[], useIdx?: boolean): ButtonOpt[] =>
  opts.map((opt, idx) => ({ key: opt, value: useIdx ? idx : opt, text: opt }));

export const ButtonOptions = (props: {
  options: ButtonOpt[];
  selectedOpt: string | number;
  handleChange: (_: any, data: InputOnChangeData) => void;
}) => (
  <Button.Group>
    {props.options.map(opt => (
      <Button
        key={opt.key}
        color={props.selectedOpt === opt.value ? "teal" : undefined}
        onClick={() => props.handleChange(null, { value: opt.value })}
      >
        {opt.text}
      </Button>
    ))}
  </Button.Group>
);
