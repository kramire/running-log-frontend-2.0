import React, { useEffect, useState } from "react";
import {
  Modal,
  Button,
  Input,
  InputOnChangeData,
  CheckboxProps,
  Grid,
} from "semantic-ui-react";
import { ButtonOptions, GridRow, genButOpts } from "../components";
import { Run, RunType, Unit } from "../lib/types";
import { mockRun } from "../lib/mockData";
import { LabelButton } from "./LabelButton";
import styled from "styled-components";

const DistanceWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const DistanceInput = styled(Input)`
  &&&&& {
    width: 25%;
    margin-right: 1em;
  }
`;

type EditType = "add" | "edit";

const contentDict: {
  [key in EditType]: {
    title: string;
  };
} = {
  add: {
    title: "Add New Run",
  },
  edit: {
    title: "Edit Run",
  },
};

interface AddRunProps {
  editType: EditType;
  isOpen: boolean;
  run?: Run;
  handleClose(): void;
}

export const RunModal = (props: AddRunProps) => {
  const { editType, isOpen, run: passedRun, handleClose } = props;
  const [run, setRun] = useState<Run>(mockRun);
  const colWidths = { label: 5, content: 11 };

  const changeRun = (label: string, value: any) =>
    setRun({ ...run, [label]: value });

  const handleChange =
    (label: string) => (_: any, data: InputOnChangeData | CheckboxProps) =>
      changeRun(label, data.value);

  const changeRunType = (type: RunType) => () => {
    if (run.runType.includes(type)) {
      changeRun(
        "runType",
        run.runType.filter(t => t !== type)
      );
    } else {
      changeRun("runType", run.runType.concat(type));
    }
  };

  useEffect(() => {
    if (passedRun) {
      setRun(passedRun);
    }
  }, []);

  return (
    <Modal size={"tiny"} open={isOpen} onClose={handleClose}>
      <Modal.Header>{contentDict[editType].title}</Modal.Header>
      <Modal.Content>
        <Grid style={{ margin: 0 }}>
          <GridRow width={colWidths} label="Distance">
            <DistanceWrapper>
              <DistanceInput
                fluid
                value={run.distance}
                onChange={handleChange("distance")}
              />
              <ButtonOptions
                options={genButOpts(Object.values(Unit))}
                selectedOpt={run.unit}
                handleChange={handleChange("unit")}
              />
            </DistanceWrapper>
          </GridRow>
          <GridRow width={colWidths} label="Date">
            <Input fluid value={run.date} onChange={handleChange("date")} />
          </GridRow>
          <GridRow width={colWidths} label="Location">
            <Input
              fluid
              value={run.location}
              onChange={handleChange("location")}
            />
          </GridRow>
          <GridRow width={colWidths} label="Type">
            {Object.values(RunType).map(val => (
              <LabelButton
                key={val}
                value={val.toString()}
                selected={run.runType.includes(val)}
                handleChange={changeRunType(val)}
              />
            ))}
          </GridRow>
          <GridRow width={colWidths} label="Note">
            <Input fluid value={run.note} onChange={handleChange("note")} />
          </GridRow>
        </Grid>
      </Modal.Content>
      <Modal.Actions>
        <Button color="grey" onClick={handleClose}>
          Cancel
        </Button>
        <Button color="blue">Save</Button>
      </Modal.Actions>
    </Modal>
  );
};
