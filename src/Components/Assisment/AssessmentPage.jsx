import { useState } from "react";
import AssessmentOverview from "./Molecules/AssessmentOverviewCard";
import MyAssessments from "./Molecules/MyAssessments";
import AssessmentHeading from "./Atoms/AssessmentHeading";
import LeftDashboard from "../Icons/LeftDashboard";
import { useMediaQuery } from "react-responsive";
import Navigation from "../Navigation/Navigation";
import SearchIcon from "../Icons/SearchIcon";
import FilterIcon from "../Icons/FilterIcon";
import BarChartIcon from "../Icons/BarChartIcon";
import { Row, Col } from "react-bootstrap";

const AssessmentPage = () => {
  const [isBorderActive, setIsBorderActive] = useState(false);
  const handleBtnClick = () => {
    setIsBorderActive((prev) => !prev);
  };
  //console.log("isBorderActive", isBorderActive);
  const allData = {
    data1: {
      heading: "Total Assessment",
      bgColor: "#EBE8FD",
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 20 20"
        >
          <g clipPath="url(#clip0_0_483)">
            <path
              fill="#6548EE"
              d="M15.833 4.167V7.5h-12.5V4.167h12.5zm0 8.333v3.333h-12.5V12.5h12.5zm.834-10H2.5a.836.836 0 00-.833.833v5c0 .459.375.834.833.834h14.167a.836.836 0 00.833-.834v-5a.836.836 0 00-.833-.833zm0 8.333H2.5a.836.836 0 00-.833.834v5c0 .458.375.833.833.833h14.167a.836.836 0 00.833-.833v-5a.836.836 0 00-.833-.834z"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_0_483">
              <path fill="#fff" d="M0 0H20V20H0z"></path>
            </clipPath>
          </defs>
        </svg>
      ),
      totCount: "34",
    },
    data2: {
      heading: "Candidates",
      bgColor: "#EBE8FD",
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 20 20"
        >
          <mask
            id="mask0_0_490"
            style={{ maskType: "alpha" }}
            width="20"
            height="20"
            x="0"
            y="0"
            maskUnits="userSpaceOnUse"
          >
            <path fill="#D9D9D9" d="M0 0H20V20H0z"></path>
          </mask>
          <g mask="url(#mask0_0_490)">
            <path
              fill="#6548EE"
              d="M.679 16.92v-2.512c0-.503.13-.965.39-1.387.26-.422.606-.744 1.038-.966.87-.434 1.757-.76 2.66-.978a11.758 11.758 0 015.507-.003c.901.217 1.784.543 2.649.976.431.222.777.543 1.037.964.26.42.39.885.39 1.394v2.513H.68zm15.413 0v-2.664c0-.624-.168-1.226-.505-1.805-.337-.579-.823-1.095-1.458-1.547a10.62 10.62 0 013.595 1.146c.514.278.908.606 1.184.984.275.378.413.79.413 1.237v2.65h-3.229zM7.515 9.916a3.293 3.293 0 01-2.417-1.001 3.293 3.293 0 01-1.001-2.417c0-.943.334-1.748 1.001-2.416a3.293 3.293 0 012.417-1.002c.943 0 1.748.334 2.416 1.002a3.293 3.293 0 011.002 2.416c0 .944-.334 1.75-1.002 2.417a3.293 3.293 0 01-2.416 1.001zm8.577-3.418c0 .94-.334 1.745-1.004 2.414a3.29 3.29 0 01-2.413 1.004c-.157 0-.351-.018-.584-.054a4.856 4.856 0 01-.598-.127 4.983 4.983 0 001.182-3.236 4.99 4.99 0 00-1.182-3.237c.197-.073.393-.121.588-.145.194-.025.391-.037.59-.037.941 0 1.747.335 2.417 1.004.67.67 1.004 1.474 1.004 2.414zM2.575 15.025h9.88v-.592a.754.754 0 00-.115-.408.804.804 0 00-.302-.285 10.759 10.759 0 00-2.226-.82 9.728 9.728 0 00-4.595 0c-.76.185-1.502.458-2.226.82a.804.804 0 00-.302.285.754.754 0 00-.114.408v.592zm4.939-6.93a1.54 1.54 0 001.128-.47c.313-.312.47-.688.47-1.127a1.54 1.54 0 00-.47-1.128 1.536 1.536 0 00-1.126-.47 1.54 1.54 0 00-1.128.47c-.314.312-.47.688-.47 1.127 0 .439.156.815.469 1.128.312.313.688.47 1.127.47z"
            ></path>
          </g>
        </svg>
      ),
      totCount: {
        firstSection: {
          totNo: "11,145",
          increaseBy: "89",
          text: "Total Candidate",
        },
        secondSection: {
          totNo: "1,14",
          increaseBy: "89",
          text: "Who Attempted",
        },
      },
    },
    data3: {
      heading: "Candidates Source",
      bgColor: "#FCE8EF",
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 20 20"
        >
          <mask
            id="mask0_0_509"
            style={{ maskType: "alpha" }}
            width="20"
            height="20"
            x="0"
            y="0"
            maskUnits="userSpaceOnUse"
          >
            <path fill="#D9D9D9" d="M0 0H20V20H0z"></path>
          </mask>
          <g mask="url(#mask0_0_509)">
            <path
              fill="#E9407A"
              d="M7.833 16.292c-.25-.459-.468-.934-.656-1.427a12.243 12.243 0 01-.469-1.532H4.25a6.916 6.916 0 001.51 1.813 5.997 5.997 0 002.073 1.146zm-4.291-4.625h2.833a11.01 11.01 0 01-.094-2.51c.021-.272.052-.546.094-.824H3.542A6.631 6.631 0 003.334 10a6.633 6.633 0 00.208 1.667zm.708-5h2.458c.125-.528.282-1.039.469-1.532.188-.493.406-.968.656-1.427A5.996 5.996 0 005.76 4.854a6.915 6.915 0 00-1.51 1.813zm4.167 0h3.166a9.874 9.874 0 00-.646-1.73A10.578 10.578 0 0010 3.376c-.361.5-.674 1.02-.938 1.563a9.863 9.863 0 00-.645 1.729zm4.875 0h2.458a6.915 6.915 0 00-1.51-1.813 5.995 5.995 0 00-2.073-1.146c.25.459.468.934.656 1.427.187.493.344 1.004.469 1.532zM10 18.333a8.063 8.063 0 01-3.23-.656 8.452 8.452 0 01-2.655-1.792 8.452 8.452 0 01-1.792-2.656A8.063 8.063 0 011.667 10a8.04 8.04 0 01.656-3.24 8.486 8.486 0 011.792-2.645A8.453 8.453 0 016.77 2.323 8.063 8.063 0 0110 1.667a8.04 8.04 0 013.24.656 8.486 8.486 0 012.645 1.792 8.486 8.486 0 011.792 2.645 8.04 8.04 0 01.656 3.24 8.397 8.397 0 01-.041.833h-1.688c.028-.139.045-.274.052-.406.007-.132.01-.274.01-.427a6.618 6.618 0 00-.208-1.667h-2.833A11.023 11.023 0 0113.75 10v.427c0 .132-.007.268-.02.406h-1.668c.014-.139.021-.274.021-.406V10a10.972 10.972 0 00-.125-1.667H8.042a11.003 11.003 0 00-.094 2.51c.02.272.052.546.094.824h2.791v1.666H8.417a9.86 9.86 0 00.645 1.73c.264.541.577 1.062.938 1.562a14.049 14.049 0 00.833-1.375v3.042a8.58 8.58 0 01-.833.041zm6.625-.52l-2.458-2.459v1.854H12.5V12.5h4.708v1.667h-1.875l2.459 2.458-1.167 1.188z"
            ></path>
          </g>
        </svg>
      ),
      totCount: {
        firstSection: {
          totNo: "11,000",
          increaseBy: "89",
          text: "E-mail",
        },
        secondSection: {
          totNo: "145",
          increaseBy: "89",
          text: "Social Share",
        },
        thirdSection: {
          totNo: "145",
          increaseBy: "89",
          text: "Unique Link",
        },
      },
    },
    data4: {
      heading: "Total Purpose",
      bgColor: "#E5F1FC",
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 20 20"
        >
          <mask
            id="mask0_0_534"
            style={{ maskType: "alpha" }}
            width="20"
            height="20"
            x="0"
            y="0"
            maskUnits="userSpaceOnUse"
          >
            <path fill="#D9D9D9" d="M0 0H20V20H0z"></path>
          </mask>
          <g mask="url(#mask0_0_534)">
            <path
              fill="#0073E6"
              d="M9.092 14.336H5.833c-1.2 0-2.222-.422-3.067-1.268-.846-.845-1.269-1.868-1.269-3.067 0-1.2.423-2.223 1.269-3.068.845-.846 1.868-1.269 3.067-1.269h3.26V7.56H5.835c-.679 0-1.255.237-1.73.712A2.352 2.352 0 003.393 10c0 .678.238 1.254.713 1.729a2.356 2.356 0 001.73.711h3.256v1.896zm-2.54-3.463V9.127h6.896v1.746H6.552zm4.356 3.463V12.44h3.257c.678 0 1.255-.237 1.73-.711.475-.475.712-1.051.712-1.729 0-.678-.237-1.254-.712-1.728a2.356 2.356 0 00-1.73-.712h-3.257V5.664h3.259c1.2 0 2.222.423 3.068 1.268.845.846 1.268 1.868 1.268 3.068s-.423 2.222-1.268 3.068c-.846.845-1.868 1.268-3.068 1.268h-3.259z"
            ></path>
          </g>
        </svg>
      ),
      totCount: "11",
    },
  };

  const isMobAndTab = useMediaQuery({
    query: "(max-width: 765px)",
  });

  const isMobile = useMediaQuery({
    query: "(max-width: 458px)",
  });

  return (
    <div className="bg-white w-100" style={{ color: "#1c4980" }}>
      <div className="px-4 py-2 border-bottom align-items-center">
        <div className="d-lg-flex d-md-flex">
          <div className="d-flex align-items-center">
            <div
              className="bg-body-secondary p-1 rounded-5 d-md-none"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
              <LeftDashboard />
            </div>
            <div
              className={`fs-4 p-2 border-end border-2 ${isMobAndTab ? "border-end-0" : ""
                }  fw-medium`}
            >
              Assessment
            </div>
          </div>
          <div className="d-flex p-2 p align-items-center justify-content-between">
            <div
              className={`fs-5 px-2 d-sm-flex d-lg-block text-primary ${isMobile ? "fs-6" : ""
                }`}
            >
              My Assessments
            </div>
            <div
              className={`fs-5 d-sm-block  d-md-none ${isMobile ? "fs-6" : ""}`}
            >
              Unstop Assessment
            </div>
          </div>
        </div>
        <div
          className="offcanvas offcanvas-lg offcanvas-start"
          tabIndex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
          style={{ width: "300px" }}
        >
          <div className="offcanvas-header d-flex">
            <div className="">Menu</div>
            <button
              type="button"
              className="btn btn-sm btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="">
            <Navigation />
          </div>
        </div>

      </div>

      <div className="d-flex flex-column-reverse justify-content-between align-items-center ">
        <div className="d-flex justify-content-between align-items-center w-100">
          <AssessmentHeading data={"My Assessment"} />
          <div className="d-flex align-items-center gap-3 px-4 d-md-none">
            <div>
              <SearchIcon />
            </div>
            <div className="">
              <FilterIcon />
            </div>
            <div
              className={`${isBorderActive
                  ? "d-flex border rounded rounded-5 p-2 border-2"
                  : ""
                }`}
              onClick={handleBtnClick}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <BarChartIcon />
            </div>
          </div>
        </div>
        <div className="collapse d-md-block w-100 " id="collapseExample">
          <div className="d-md-block d-none ">
            <AssessmentHeading data={"Assessment Overview"} />
          </div>
          {isMobAndTab && (
            <Row className="mx-4 my-2 d-flex justify-content-between rounded-4 border-1 col border flex-wrap">
              <Col className="border-bottom">
                <div className=" py-2  order-md-1 order-lg-1">
                  <AssessmentOverview data={allData.data1} />
                </div>
              </Col>
              <Col className="border-bottom">
                <div
                  className={`py-2 px-4 border-start order-md-4 order-lg-4
                } `}
                >
                  <AssessmentOverview data={allData.data4} />
                </div>
              </Col>
              <Col className="border-bottom">
                <div
                  className={`py-2  order-md-2 order-sm-3 border-start ${isMobAndTab ? "border-start-0" : ""
                    }`}
                >
                  <AssessmentOverview data={allData.data2} />
                </div>
              </Col>
              <Col>
                <div
                  className={`py-2  order-sm-4 order-lg-3 border-start ${isMobAndTab
                      ? " border-end-0 border-start-0 border-bottom-0"
                      : ""
                    } `}
                >
                  <AssessmentOverview data={allData.data3} />
                </div>
              </Col>
            </Row>
          )}

          {!isMobAndTab && (
            <div className="mx-4 my-2 d-flex justify-content-between rounded-4 border-1 col border flex-wrap">
              {/* <di/v className={`d-flex ${isMobAndTab ? "border-bottom" : ""}`}> */}
              <div className="py-2 px-4 order-md-1 order-lg-1">
                <AssessmentOverview data={allData.data1} />
              </div>
              <div
                className={`py-2 px-4 border-start order-md-4 order-lg-4 ${isMobAndTab ? "" : ""
                  } `}
              >
                <AssessmentOverview data={allData.data4} />
              </div>
              {/* </div> */}
              <div
                className={`py-2 px-4 order-md-2 order-sm-3 border-start ${isMobAndTab ? "border" : ""
                  }`}
              >
                <AssessmentOverview data={allData.data2} />
              </div>
              <div
                className={`py-2 px-4 order-sm-4 order-lg-3 border-start ${isMobAndTab
                    ? " border-end-0 border-start-0 border-bottom-0"
                    : ""
                  } `}
              >
                <AssessmentOverview data={allData.data3} />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="">
        <MyAssessments />
      </div>
    </div>
  );
};
export default AssessmentPage;
