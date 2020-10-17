import React, { FC } from "react";
import { TagType } from "../base";
import styled from "styled-components";

const StyledTag = styled.div`
  color: ${props => props.theme.colors.primary};
`;

export const Tag: FC<{ tagName: TagType }> = ({ tagName }) => (
  <StyledTag>#{tagName}</StyledTag>
);
