import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import UserProfile from "./UserProfile";
const SharedLayout = () => {
  return (
    <div>
      <Nav>
        <GiKnifeFork />
        <Logo to={"/"}>Recipe Management</Logo>
        <UserProfile className="profile" />
      </Nav>
      <Outlet />
    </div>
  );
};

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    font-size: 2rem;
  }

  .profile {
    cursor: pointer;
  }
`;
const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;

export default SharedLayout;
