import { useMediaQuery } from "react-responsive";
import Navigation from "./Navigation";
import AssessmentPage from "../Assisment/AssessmentPage";
import "/src/Components/Navigation/MainPath.css"

const MainPath = () => {
  const isMobAndTab = useMediaQuery({
    query: "(max-width: 870px)",
  });

  return (
    <div className="bg-body-secondary position-relative">
      {isMobAndTab ? (
        <div>
          <AssessmentPage />
        </div>
      ) : (
        <div className="d-flex gap-3">
          <div className="position-sticky top-0" style={{height:"100vh"}}>
            <Navigation />
          </div>
          <div>
            <AssessmentPage />
          </div>
        </div>
      )}
    </div>
  );
};

export default MainPath;
