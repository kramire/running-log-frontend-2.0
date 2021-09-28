import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Icon,
  Grid,
  InputOnChangeData,
  CheckboxProps,
} from "semantic-ui-react";
import { useWindowSize } from "../../hooks";
import { TABLET } from "../../lib/constants";
import { mockUser } from "../../lib/mockData";
import { User, Unit, weekStartDict, TrainingFor } from "../../lib/types";

interface ButtonOpt {
  key: string;
  value: any;
  text: string;
}

const FormRow = (props: {
  width: number;
  label: string;
  children: React.ReactNode;
}) => (
  <Grid.Row>
    <Grid.Column width={props.width > TABLET ? 3 : 5}>
      {props.label}
    </Grid.Column>
    <Grid.Column width={props.width > TABLET ? 6 : 9}>
      {props.children}
    </Grid.Column>
  </Grid.Row>
);

const ButtonOptions = (props: {
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

const TrainForButton = (props: {
  value: string;
  selected: boolean;
  handleChange: (_: any, data: InputOnChangeData) => void;
}) => (
  <Button
    color={props.selected ? "teal" : undefined}
    onClick={() => props.handleChange(null, { value: props.value })}
  >
    {props.value}
  </Button>
);

const genButOpts = (opts: any[], useIdx?: boolean): ButtonOpt[] =>
  opts.map((opt, idx) => ({ key: opt, value: useIdx ? idx : opt, text: opt }));

export const Settings = () => {
  const [user, setUser] = useState<User>(mockUser);
  const { width } = useWindowSize();

  const changeUser = (label: string, value: any) =>
    setUser({ ...user, [label]: value });

  const handleChange =
    (label: string) => (_: any, data: InputOnChangeData | CheckboxProps) =>
      changeUser(label, data.value);

  const handleSubmit = () => console.log("to do");

  return (
    <>
      <h1>Settings</h1>
      <Form onSubmit={handleSubmit}>
        <Grid centered={width < TABLET} style={{ margin: 0 }}>
          <FormRow width={width} label="First Name">
            <Input
              fluid
              value={user.firstName}
              onChange={handleChange("firstName")}
            />
          </FormRow>
          <FormRow width={width} label="Unit">
            <ButtonOptions
              options={genButOpts(Object.values(Unit))}
              selectedOpt={user.unit}
              handleChange={handleChange("unit")}
            />
          </FormRow>
          <FormRow width={width} label="Week Start">
            <ButtonOptions
              options={genButOpts(Object.values(weekStartDict), true)}
              selectedOpt={user.weekStart}
              handleChange={handleChange("weekStart")}
            />
          </FormRow>
          <FormRow width={width} label="Training For">
            {Object.values(TrainingFor).map(val => (
              <TrainForButton
                key={val}
                value={val.toString()}
                selected={user.trainingFor === val}
                handleChange={handleChange("trainingFor")}
              />
            ))}
            <Button
              icon="delete"
              onClick={() => changeUser("trainingFor", null)}
            />
          </FormRow>
          <FormRow width={width} label="Send Alerts">
            <Checkbox
              toggle
              checked={user.sendAlerts}
              onChange={handleChange("sendAlerts")}
            />
          </FormRow>
          <Grid.Row>
            <Form.Button animated="vertical">
              <Button.Content visible>Save</Button.Content>
              <Button.Content hidden>
                <Icon name="checkmark" />
              </Button.Content>
            </Form.Button>
          </Grid.Row>
        </Grid>
      </Form>
    </>
  );
};
