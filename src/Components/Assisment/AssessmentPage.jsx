import React from "react"
import AssessmentOverview from "./Molecules/AssessmentOverviewCard";
import MyAssessments from "./Molecules/MyAssessments";
import AssessmentHeading from "./Atoms/AssessmentHeading";
import LeftDashboard from "../Icons/LeftDashboard";
import "/src/Components/Assisment/AssessmentCss.css"
import { useMediaQuery } from "react-responsive";
import Navigation from "../Navigation/Navigation";
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
        <div className="bg-white w-100 " style={{ color: "#1c4980" }}>


            <div className=" px-4 py-2 border-bottom  align-items-center">

                <div className="d-lg-flex d-md-flex ">
                    <div className=" d-flex align-items-center">
                        <div className="d-md-none " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                            <LeftDashboard />
                        </div>
                        <div className="fs-4  p-2 border-end border-2 border-sm-end-0 assessment-cls   fw-medium">Assessment</div>

                    </div>
                    <div className="d-flex p-2 p align-items-center justify-content-between">
                        <div className="fs-5 px-2 d-sm-flex d-lg-block     text-primary">My Assessments</div>
                        <div className="d-sm-block d-md-none">Unstop Assessment</div>
                    </div>
                </div>
                <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                    <div class="offcanvas-header">
                        <Navigation />
                    </div>

                </div>
            </div>
            <div>
                <div className="d-none   d-md-block ">
                    <AssessmentHeading data={"Assessment Overview"} />
                </div>
                <div className=" d-flex justify-content-between align-items-center px-2 d-md-none">
                    <AssessmentHeading data={"My Assessment"} />
                    <div>Hello</div>
                </div>
            </div>
            <div className="p-4">
                <div className="container">
                    <div className="d-flex flex-wrap justify-content-between rounded-4 border-1 row border">
                        <div className="p-2 col-md-3 col-sm-6 order-md-1 order-sm-1">
                            <AssessmentOverview data={allData.data1} />
                        </div>
                        <div className="col-md-3 col-sm-6 order-md-4 order-sm-2 border-start px-4 py-2">
                            <AssessmentOverview data={allData.data4} />
                        </div>
                        <div className="col-md-6 col-sm-12 order-md-2 order-sm-3 border-start px-4 py-2">
                            <AssessmentOverview data={allData.data2} />
                        </div>
                        <div className="col-md-12 col-sm-12 order-md-3 order-sm-4 border-start px-4 py-2">
                            <AssessmentOverview data={allData.data3} />
                        </div>
                    </div>
                </div>


            </div>
            <div >
                <AssessmentHeading data={"My Assessment"} />

            </div>
            <div>
                <MyAssessments />
            </div>

            <div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 col-sm-6 order-md-1">Box 1</div>
                        <div class="col-md-3 col-sm-6 order-md-3 order-sm-4">Box 2</div>
                        <div class="col-md-3 col-sm-6 order-md-4 order-sm-3">Box 3</div>
                        <div class="col-md-3 col-sm-6 order-md-2 order-sm-2">Box 4</div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default AssessmentPage