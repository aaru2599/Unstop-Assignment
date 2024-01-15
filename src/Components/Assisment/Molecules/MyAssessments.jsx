import NewAssessment from "../Atoms/NewAssessment";
import MathAssessment from "../Atoms/MathAssessment";
import { Row, Col } from "react-bootstrap";

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

  return (
    <div className="px-4">
      <Row className="d-flex flex-wrap">
        {[...Array(8)].map((_, index) => (
          <Col
            key={index}
            xs={12}
            md={6}
            lg={6}
            xl={4}
            style={{ marginBottom: "16px" }}
          >
            {index === 0 ? (
              <NewAssessment props={data} />
            ) : (
              <MathAssessment props={data} />
            )}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MyAssessments;
