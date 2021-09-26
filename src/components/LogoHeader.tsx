import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 24px;
`;

export const LogoHeader = () => {
  const handleClick = () => console.log("go home");
  return (
    <Wrapper onClick={handleClick}>
      <Logo>Running Log</Logo>
    </Wrapper>
  );
};
