import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Navigation from './Navigation'
import AssessmentPage from '../Assisment/AssessmentPage'

const MainPath = () => {
  // const isMobAndTab = useMediaQuery({ query: 'max-width:"768px"' });
  const isMobAndTab = useMediaQuery({
    query: '(max-width: 765px)'
  })
  return (
    <div>
      {
        isMobAndTab?<div ><AssessmentPage/></div>:<div className='d-flex'><Navigation/><AssessmentPage/></div>
      }
    </div>
  )
}

export default MainPath