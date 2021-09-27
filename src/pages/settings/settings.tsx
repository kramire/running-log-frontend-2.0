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
import { User } from "../../lib/types";

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
  options: string[];
  selected: string | number;
  handleChange: (_: any, data: InputOnChangeData) => void;
}) => (
  <Button.Group basic>
    {props.options.map(opt => (
      <Button onClick={() => props.handleChange(null, { value: opt })}>
        {opt}
      </Button>
    ))}
  </Button.Group>
);

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
              options={["mi", "km"]}
              selected={user.unit}
              handleChange={handleChange("unit")}
            />
          </FormRow>
          <FormRow width={width} label="Week Start">
            <ButtonOptions
              options={["Sun", "Mon"]}
              selected={user.weekStart}
              handleChange={handleChange("weekStart")}
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
