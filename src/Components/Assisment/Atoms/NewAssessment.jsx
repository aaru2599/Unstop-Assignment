import React from 'react'
import styled from 'styled-components'
import ModalForm from './ModalForm';
import PlusIcon from '../../Icons/PlusIcon';

const NewAssessment = () => {
    const AssText=styled.div`
    text-align:center;
    font-size:13px
    `;

  return (
   <div>
   
   <div  data-bs-toggle="modal" data-bs-target="#exampleModal" className=' cursor-pointer p-4  gap-2  d-flex flex-column align-items-center justify-content-center '  >
        <div className=' bg-white p-4 fw-bold rounded-circle d-flex align-items-center justify-content-center' style={{height:"60px", width:"60px"}}>
            <div className='  '><PlusIcon/></div>
        </div>
        <div className='fs-5 fw-medium'>New Assessment</div>
        <AssText >From Here you can add question of multiple types like MCQs, Subjective (text or paragraph)! </AssText>
    </div>
    <ModalForm />
    
  
   </div>
  
  )
}

export default NewAssessment