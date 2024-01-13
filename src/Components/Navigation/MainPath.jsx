import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Navigation from './Navigation'
import AssessmentPage from '../Assisment/AssessmentPage'

const MainPath = () => {
  // const isMobAndTab = useMediaQuery({ query: 'max-width:"768px"' });
  const isMobAndTab = useMediaQuery({
    query: '(max-width: 768px)'
  })
  return (
    <div className='bg-body-secondary'>
      {
        isMobAndTab?<div ><AssessmentPage/></div>:<div className='d-flex gap-2  ' ><Navigation/><AssessmentPage/></div>
      }
    </div>
  )
}

export default MainPath