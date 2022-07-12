import React from "react";
import { useCallback } from "react";
import { Link } from "react-router-dom";
// import { useAuth } from "../context/Auth";
import styled from "styled-components";
import { useAuth } from "../hooks/useAuth";

const StyledContainer = styled.div`
  width: 90%;
  max-width: 1080px;
  margin: 0 auto;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  padding: 0 5px;
  border-radius: 10px;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;

  li {
    margin-left: 20px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;
const Nav = () => {
  const auth = useAuth();
  const onClick = useCallback(() => {
    auth.user && auth.logout();
  }, [auth]);
  return (
    <StyledContainer>
      <StyledNav>
        <div>
          <p>Weather App</p>
        </div>
        <StyledList>
          <li>{auth.user && <div>Welcome {auth.user}</div>}</li>
          <li onClick={onClick}>
            <Link to="/login">{!auth.user ? "login" : "logout"}</Link>
          </li>
        </StyledList>
      </StyledNav>
    </StyledContainer>
  );
};

export default Nav;
