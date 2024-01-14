import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "/src/Components/Navigation/Navigation.css";
import { useMediaQuery } from "react-responsive";
import DashboardIcon from "../Icons/DashboardIcon";
import Admin from "../Admin/Admin";
import AdminIcon from "../Icons/Admin";
import AssessmentIcon from "../Icons/AssessmentIcon";
import MyLibraryIcon from "../Icons/MyLibraryIcon";

const Navigation = () => {
  const NavBox = styled.div`
    border-radius: 5px;
    padding: 15px;
    margin: 5px;
    color: #1c4980;
    display: flex;
    flex-direction: column;
    gap: 5px;

    @media (max-width: 768px) {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      gap: 20px;
    }
  `;

  const DivContainer = styled.div`
    text-align: center;
    padding: 20px;
    padding-top: 0;
    font-size: 13px;
    background-color: white;
  `;

  return (
    <DivContainer>
      <div className="border-bottom">
        <NavBox className="main-div">
          <div>
            <DashboardIcon />
          </div>
          <div>Dashboard</div>
        </NavBox>
        <NavBox className="assessment">
          <div>
            <AssessmentIcon />
          </div>
          <div>Assessment</div>
        </NavBox>
        <NavBox>
          <div>
            <MyLibraryIcon />
          </div>
          <div>My Library</div>
        </NavBox>
      </div>
      <div>
        <NavBox>
          <div>
            <AdminIcon />
          </div>
          <div>Admin</div>
        </NavBox>
      </div>
    </DivContainer>
  );
};

export default Navigation;
