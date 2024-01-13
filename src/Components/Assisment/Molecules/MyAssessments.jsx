import React from 'react'
import NewAssessment from '../Atoms/NewAssessment'
import MathAssessment from '../Atoms/MathAssessment'
import { useMediaQuery } from 'react-responsive'

const MyAssessments = () => {
    const data = {
        icon: "bag",
        assName: "Math Assessment",
        title: "job",
        date: "20 Apr 2023",
        duration: "00",
        questions: "00",
        share: "LP"
    }
    const isTabletMid = useMediaQuery({ query: '(max-width: 768px)' });
    console.log("isTabletMid", isTabletMid);
    return (

        <div className=' px-4 d-flex flex-column flex-md-row  '>
            <div className='col-md-4 rounded-3 mb-3 mb-md-0' style={{ backgroundColor: "#f6f8fa", border: "1px dashed #dee2e6", borderStyle: "dashed" }}>
                <NewAssessment />
            </div>
            <div className='col-md-4 mb-3 mb-md-0'>
                <MathAssessment props={data} />
            </div>
            <div className='col-md-4'>
                <MathAssessment props={data} />
            </div>
        </div>




    )
}

export default MyAssessments
