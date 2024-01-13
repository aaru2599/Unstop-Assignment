import React from "react"
import AssessmentOverview from "./Molecules/AssessmentOverviewCard";
import MyAssessments from "./Molecules/MyAssessments";
import AssessmentHeading from "./Atoms/AssessmentHeading";
import LeftDashboard from "../Icons/LeftDashboard";
import "/src/Components/Assisment/AssessmentCss.css"
import { useMediaQuery } from "react-responsive";
import Navigation from "../Navigation/Navigation";
import SearchIcon from "../Icons/SearchIcon";
import FilterIcon from "../Icons/FilterIcon";
import BarChartIcon from "../Icons/BarChartIcon";
const AssessmentPage = () => {
    const allData = {
        data1: {
            heading: "Total Assessment",
            logo: "grid-3x2-gap",
            totCount: "34"
        },
        data2: {
            heading: "Candidates",
            logo: "people",
            totCount: {
                firstSection: {
                    totNo: "11,145",
                    increaseBy: "89",
                    text: "Total Candidate"
                },
                secondSection: {
                    totNo: "1,14",
                    increaseBy: "89",
                    text: "Who Attempted"
                },
            }
        },
        data3: {
            heading: "Candidates Source",
            logo: "globe2",
            totCount: {
                firstSection: {
                    totNo: "11,000",
                    increaseBy: "89",
                    text: "E-mail"
                },
                secondSection: {
                    totNo: "145",
                    increaseBy: "89",
                    text: "Social Share"
                },
                thirdSection: {
                    totNo: "145",
                    increaseBy: "89",
                    text: "Unique Link"
                }
            }
        },
        data4: {
            heading: "Total Purpose",
            logo: "link",
            totCount: "11"
        },
    };


    const isMobAndTab = useMediaQuery({
        query: '(max-width: 765px)'
    })
    console.log(isMobAndTab);
    return (
        <div className="bg-white  " style={{ color: "#1c4980" }}>


            <div className="px-4 py-2 border-bottom align-items-center">
                <div className="d-lg-flex d-md-flex">
                    <div className="d-flex align-items-center">
                        <div className="d-md-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                            <LeftDashboard />
                        </div>
                        <div className="fs-4 p-2 border-end border-2 border-sm-end-0 assessment-cls fw-medium">Assessment</div>
                    </div>
                    <div className="d-flex p-2 p align-items-center justify-content-between">
                        <div className="fs-5 px-2 d-sm-flex d-lg-block text-primary">My Assessments</div>
                        <div className="d-sm-block d-md-none">Unstop Assessment</div>
                    </div>
                </div>
                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style={{ width: "200px" }}>
                    <div className="offcanvas-header">
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body overflow-hidden">
                        <Navigation />
                    </div>
                </div>
            </div>

            <div className="d-flex flex-column-reverse justify-content-between align-items-center ">
                <div className="d-flex justify-content-between align-items-center w-100">
                    <AssessmentHeading data={"My Assessment"} />
                    <div className="d-flex d-md-none">
                        <div><SearchIcon /></div>
                        <div><FilterIcon /></div>
                        <div type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"><BarChartIcon /></div>
                    </div>
                </div>
                <div className="collapse d-md-block w-100 " id="collapseExample">


                    <div className="d-md-block d-none " >
                        <AssessmentHeading data={"Assessment Overview"} />

                    </div>
                    <div className="mx-4 my-2     d-flex justify-content-between rounded-4 border-1 col border flex-wrap">
                        <div className="py-2 px-4  ">
                            <AssessmentOverview data={allData.data1} />
                        </div>
                        <div className="py-2 px-4   order-sm-2 order-md-2 order-lg-4  ">
                            <AssessmentOverview data={allData.data4} />
                        </div>
                        <div className="py-2 px-4   order-sm-3 border-bottom  border-0">
                            <AssessmentOverview data={allData.data2} />
                        </div>

                        <div className="py-2 px-4   order-sm-3 border-start ">
                            <AssessmentOverview data={allData.data3} />
                        </div>
                    </div>




                </div>
            </div>



            <div className="">
                <MyAssessments />
            </div>

            {/* <div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 col-sm-6 order-md-1">Box 1</div>
                        <div class="col-md-3 col-sm-6 order-md-3 order-sm-4">Box 2</div>
                        <div class="col-md-3 col-sm-6 order-md-4 order-sm-3">Box 3</div>
                        <div class="col-md-3 col-sm-6 order-md-2 order-sm-2">Box 4</div>
                    </div>
                </div>
            </div> */}
        </div>

    )
}
export default AssessmentPage