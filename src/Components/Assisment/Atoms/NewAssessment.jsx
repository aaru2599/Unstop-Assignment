import React from 'react'
import styled from 'styled-components'

const NewAssessment = () => {
    const AssText=styled.div`
    text-align:center;
    font-size:13px
    `;

  return (
    <div  className=' p-4 rounded-3 gap-2 border d-flex flex-column align-items-center justify-content-center '  style={{backgroundColor:"#f6f8fa",width:"355px"}}>
        <div className=' bg-white p-4 fw-bold rounded-circle d-flex align-items-center justify-content-center' style={{height:"60px", width:"60px"}}>
            <i className='bi bi-plus-lg text-center fs-3 fw-bold 'style={{color:"#0073e6"}}></i>
        </div>
        <div className='fs-5 fw-medium'>New Assessment</div>
        <AssText >From Here you can add question of multiple types like MCQs, Subjective (text or paragraph)! </AssText>
    </div>
  )
}

export default NewAssessment