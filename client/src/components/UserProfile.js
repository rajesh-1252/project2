import React from "react";
import styled from "styled-components";
import AddRecipe from "./AddRecipe";
import { CgProfile } from "react-icons/cg";
import "../assets/images/not_found.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TbPizzaOff, Tbpizza } from "react-icons/tb";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function UserProfile(props) {
  const navigate = useNavigate();
  const isLogin = localStorage.getItem("user");
  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <DIV className="profile">
      <TbPizzaOff />
      {isLogin ? (
        <Button onClick={() => logout()}>LOGOUT OUT</Button>
      ) : (
        <Link to={"/register"}>
          <Button>Sign IN</Button>
        </Link>
      )}
    </DIV>
  );
}

const DIV = styled.div`
  .profile {
    cursor: pointer;
  }
`;

export default UserProfile;
