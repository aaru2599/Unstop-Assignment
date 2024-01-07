import React from 'react'
import NewAssessment from '../Atoms/NewAssessment'
import MathAssessment from '../Atoms/MathAssessment'

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
    return (
        <div className=' p-4 d-flex gap-4 text-prymary '>
            <div className='rounded-3' style={{ backgroundColor: "#f6f8fa", border: "1px dashed #dee2e6", borderStyle: "dashed" }}>
                <NewAssessment />
            </div>
            <div className=' '>
                <MathAssessment props={data} />
            </div>
            <div className=''>
                <MathAssessment props={data} />

            </div>

        </div>
    )
}

export default MyAssessments
