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
import { ButtonOptions, GridRow, genButOpts } from "../../components";
import { TABLET } from "../../lib/constants";
import { mockUser } from "../../lib/mockData";
import { User, Unit, weekStartDict, TrainingFor } from "../../lib/types";

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

export const Settings = () => {
  const [user, setUser] = useState<User>(mockUser);

  const { width } = useWindowSize();
  const colWidths = {
    label: width > TABLET ? 3 : 5,
    content: width > TABLET ? 6 : 9,
  };

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
          <GridRow width={colWidths} label="First Name">
            <Input
              fluid
              value={user.firstName}
              onChange={handleChange("firstName")}
            />
          </GridRow>
          <GridRow width={colWidths} label="Unit">
            <ButtonOptions
              options={genButOpts(Object.values(Unit))}
              selectedOpt={user.unit}
              handleChange={handleChange("unit")}
            />
          </GridRow>
          <GridRow width={colWidths} label="Week Start">
            <ButtonOptions
              options={genButOpts(Object.values(weekStartDict), true)}
              selectedOpt={user.weekStart}
              handleChange={handleChange("weekStart")}
            />
          </GridRow>
          <GridRow width={colWidths} label="Training For">
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
          </GridRow>
          <GridRow width={colWidths} label="Send Alerts">
            <Checkbox
              toggle
              checked={user.sendAlerts}
              onChange={handleChange("sendAlerts")}
            />
          </GridRow>
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
