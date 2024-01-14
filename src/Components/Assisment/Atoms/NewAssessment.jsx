import styled from "styled-components";
import ModalForm from "./ModalForm";
import PlusIcon from "../../Icons/PlusIcon";

const AssText = styled.div`
  text-align: center;
  font-size: 13px;
`;

const NewAssessment = () => {
  return (
    <div
      className="bg-body-secondary  rounded-3"
      style={{ height: "200px", border: "1px dashed #DADCE0" }}
    >
      <div
        className="p-4 gap-2 d-flex flex-column align-items-center justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <div
          className="bg-white p-4 fw-bold rounded-circle d-flex align-items-center justify-content-center"
          style={{ height: "60px", width: "60px" }}
        >
          <div>
            <PlusIcon />
          </div>
        </div>
        <div className="fs-5 fw-medium">New Assessment</div>
        <AssText>
          From here, you can add questions of multiple types like MCQs,
          Subjective (text or paragraph)!
        </AssText>
      </div>
      <ModalForm />
    </div>
  );
};

export default NewAssessment;
