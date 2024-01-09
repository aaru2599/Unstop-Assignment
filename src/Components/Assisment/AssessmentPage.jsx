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
            <div>

                {/* <div class="d-lg-none">hide on lg and wider screens</div> */}
                {/* <div class="d-none d-lg-block">hide on screens smaller than lg</div> */}
            </div>

            <div className="d-lg-flex p-4 border-bottom  align-items-center">
                <div className=" d-sm-block  lg-fs-4 d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><LeftDashboard />
                    <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                        <div class="offcanvas-header">
                            <Navigation />
                        </div>

                    </div>
                </div>
                <div className="fs-4  p-2 border-end border-2 assessment-cls   fw-medium">Assessment</div>
                <div >
                    <div className="fs-5  d-sm-block d-lg-none    p-2 text-primary">My Assessments</div>
                    <div className="d-sm-block d-lg-none">Unstop Assessment</div>
                </div>
            </div>
            <AssessmentHeading data={"Assessment Overview"} />
            <div className="p-4">
                <div className="">
                    <div className="d-flex justify-content-between rounded-4 border-1   border">
                        <div className="p-2 " >
                            <AssessmentOverview data={allData.data1} />
                        </div>
                        <div className=" border-start px-4 py-2 ">
                            <AssessmentOverview data={allData.data2} />
                        </div>
                        <div className="border-start px-4 py-2 ">
                            <AssessmentOverview data={allData.data3} />
                        </div>
                        <div className=" border-start px-4 py-2">
                            <AssessmentOverview data={allData.data4} />
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
        </div>

    )
}
export default AssessmentPage