import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Label } from "semantic-ui-react";
import styled from "styled-components";
import { UserContext } from "../contexts";

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

const UserLabel = styled(Label)`
  &&&&& {
    font-weight: 300;
    opacity: 0.7;

    :hover {
      cursor: pointer;
    }
  }
`;

export const LogoHeader = () => {
  const { user } = useContext(UserContext);
  return (
    <Wrapper>
      <Link to="/">
        <Logo>Running Log</Logo>
      </Link>
      {user && (
        <Link to="/settings">
          <UserLabel circular color="grey" key={user.id} size="big">
            {user.firstName.split("")[0]}
          </UserLabel>
        </Link>
      )}
    </Wrapper>
  );
};
