import React, { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  grid-area: main;
`;

export const Main: FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
