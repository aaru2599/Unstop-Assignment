import styled from "styled-components";
import "/src/Components/Navigation/Navigation.css";
import DashboardIcon from "../Icons/DashboardIcon";
import AdminIcon from "../Icons/Admin";
import AssessmentIcon from "../Icons/AssessmentIcon";
import MyLibraryIcon from "../Icons/MyLibraryIcon";
import { useMediaQuery } from "react-responsive";

const Navigation = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const NavBox = styled.div`
    border-radius: 10px;
    padding: 15px;
    margin: 5px;
    color: #1c4980;
    display: flex;
    flex-direction: column;
    gap: 5px;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: row;
      gap: 20px;
    }
  `;

  const DivContainer = styled.div`
    text-align: center;
    padding: 20px;
    padding-top: 0;
    display: flex;
    gap:20px;
    flex-direction: column;
    font-size: 13px;
    background-color: white;
  `;

  const AdminOuter = styled.div`
    border: 1px solid;
    border-radius: 15px;
    // font-size: 12px;
    
    margin:0px 10px;
    width:50px;
    color:#D63500;
    background-color:"#FBEBEA";
  `;

  return (
    <DivContainer>
      <div className="border-bottom fw-medium">
        <NavBox className="main-div ">
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
      <div className=" ">
        {
          isMobile ?
            <div className="fw-medium d-flex justify-content-between">
              <div className="d-flex gap-2 px-4">
                <div>
                  <AdminIcon />
                </div>
                <div className="px-2"style={{color:"#1c4980"}}>Round Status</div>
              </div>
              <AdminOuter >
                <div className="text-center">Admin</div>
              </AdminOuter>
            </div> :
            <div className="d-flex fw-medium flex-column align-items-center gap-3">
              <AdminOuter>
                <div className="text-center">Admin</div>
              </AdminOuter>
              <div>
                <AdminIcon />
              </div>
              <div className="w-50" style={{color:"#1c4980"}}>Round Status</div>
            </div>
        }



      </div>
    </DivContainer>
  );
};

export default Navigation;
