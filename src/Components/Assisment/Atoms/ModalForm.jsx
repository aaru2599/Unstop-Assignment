import React, { useEffect } from "react";
import styled from "styled-components";
import "/src/Components/Assisment/Atoms/ModalForm.css";

const ModalForm = (props) => {
  //console.log("props", props.data);
  useEffect(() => {
    const { id, data_bs_backdrop } = props;
  }, []);

  const DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `;

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Sub-Section Details{" "}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body d-flex flex-column gap-3">
            <DivContainer>
              <label htmlFor="assessmentName">Name of assessment</label>
              <input
                id="assessmentName"
                type="text"
                className="text-primary form-control"
                placeholder="Type here"
              />
            </DivContainer>
            <DivContainer>
              <label htmlFor="purposeOfTest">Purpose of the test is</label>
              <div className="dropdown">
                <button
                  className="text-secondary d-flex align-items-center justify-content-between form-control w-100"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div>Select</div>
                  <i className="bi bi-chevron-down"></i>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button className="dropdown-item" type="button">
                      Action
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" type="button">
                      Another action
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" type="button">
                      Something else here
                    </button>
                  </li>
                </ul>
              </div>
            </DivContainer>
            <DivContainer>
              <label htmlFor="description">Description</label>
              <div className="dropdown">
                <button
                  className="text-secondary d-flex align-items-center justify-content-between form-control w-100"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div>Select</div>
                  <i className="bi bi-chevron-down"></i>
                </button>
                <ul className="dropdown-menu w-75">
                  <li>
                    <button className="dropdown-item" type="button">
                      Action
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" type="button">
                      Another action
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" type="button">
                      Something else here
                    </button>
                  </li>
                </ul>
              </div>
            </DivContainer>
            <DivContainer>
              <label htmlFor="skills">Skills</label>
              <input
                id="skills"
                type="text"
                className="form-control"
                placeholder="Type here"
              />
            </DivContainer>
            <DivContainer>
              <label htmlFor="duration">Duration of assessment</label>
              <input
                id="duration"
                type="text"
                className="form-control"
                placeholder="HH:MM:SS"
              />
            </DivContainer>
          </div>
          <div className="modal-footer">
            <button type="button" className="w-100 btn btn-primary">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
