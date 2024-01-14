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

  const skillData = [
    { data: "UI/UX and Design" },
    { data: "Web Development" },
    { data: "UI/UX and Design" },
    { data: "Web Development" },
    { data: "No of Questions" },
  ]
  console.log("skillData", skillData);
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog " >
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
               
              </div>
            </DivContainer>
            <DivContainer>
              <label htmlFor="skills">Skills</label>
              <div className="border rounded">
                <div className=" p-3 " >
                  <div className="row row-cols-3 gap-2 p-2">
                    {skillData.map((item, index) => (
                      <div
                        key={index}
                        className="col-md-3 p-2 mainfuc  d-flex bg-body-secondary rounded-5 justify-content-between align-items-center "
                        style={{ width: "180px", }}
                      >
                        <div >{item.data}</div>
                        <div className="bi bi-x"></div>
                      </div>
                    ))}
                  </div>

                </div>
                <div className="border-top ">
                  <input type="text" placeholder="Type here" className="form-control p-2 outline-0 border-0" />
                </div>
              </div>

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
