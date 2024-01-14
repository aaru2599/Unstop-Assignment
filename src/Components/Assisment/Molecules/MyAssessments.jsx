import NewAssessment from "../Atoms/NewAssessment";
import MathAssessment from "../Atoms/MathAssessment";
import { useMediaQuery } from "react-responsive";

import { Container, Row, Col } from "react-bootstrap";

const MyAssessments = () => {
  const data = {
    icon: "bag",
    assName: "Math Assessment",
    title: "job",
    date: "20 Apr 2023",
    duration: "00",
    questions: "00",
    share: "LP",
  };
  const isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="p-4">
      <Row className="d-flex gap-2">
        <Col>
          <NewAssessment />
        </Col>
        <Col>
          <MathAssessment props={data} />
        </Col>
        <Col>
          <MathAssessment props={data} />
        </Col>
        {
          isTabletMid && <>
            <Col>
              <MathAssessment props={data} />
            </Col>
            <Col>
              <MathAssessment props={data} />
            </Col> <Col>
              <MathAssessment props={data} />
            </Col>

          </>
        }
      </Row>
    </div>
  );
};

export default MyAssessments;
