import React from "react";
import { Grid, SemanticWIDTHSNUMBER } from "semantic-ui-react";

export const GridRow = (props: {
  width: { label: number; content: number };
  label: string;
  children: React.ReactNode;
}) => (
  <Grid.Row>
    <Grid.Column width={props.width.label as SemanticWIDTHSNUMBER}>
      {props.label}
    </Grid.Column>
    <Grid.Column width={props.width.content as SemanticWIDTHSNUMBER}>
      {props.children}
    </Grid.Column>
  </Grid.Row>
);
