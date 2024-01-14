import styled from "styled-components";
import "/src/Components/Navigation/Navigation.css";
import DashboardIcon from "../Icons/DashboardIcon";
import AdminIcon from "../Icons/Admin";
import AssessmentIcon from "../Icons/AssessmentIcon";
import MyLibraryIcon from "../Icons/MyLibraryIcon";
import { useMediaQuery } from "react-responsive";

const Navigation = () => {
  // const isMobile=useMediaQuery({query:"(max-width:768px)"})
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  console.log("isMobilevvv", isMobile);
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
      // justify-content: space-between;
      // align-items:center
      flex-direction: row;
      gap: 20px;
    }
  `;


  const DivContainer = styled.div`
    text-align: center;
    padding: 20px;
    padding-top: 0;
    display:flex;
    flex-direction:column;
    font-size: 13px;
    background-color: white;
    
  `;
  const AdminOuter = styled.div`
border:1px solid;
border-radius:15px;
font-size:12px;
padding:0px 8px;
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
      <div className="d-flex ">
        <div className="d-none d-sm-flex ">
          {/* Desktop View - Hidden on Small Screens */}
          <div>
            <AdminOuter >
              <div>Admin</div>
            </AdminOuter>
            <div>
              <AdminIcon />
            </div>
            <div>Round Status</div>
          </div>
        </div>

        {/* Mobile View - Hidden on Larger Screens */}
        {
          isMobile && <div className="  d-sm-none justify-content-between d-flex flex-row p-4 align-items-center">
            <div className="d-flex align-items-center gap-2">
              <div>
                <AdminIcon />
              </div>
              <div>Round Status</div>
            </div>
            <AdminOuter>
              <div >Admin</div>
            </AdminOuter>
          </div>
        }

      </div>

    </DivContainer>
  );
};

export default Navigation;
