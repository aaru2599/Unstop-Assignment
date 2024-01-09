import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import "/src/Components/Navigation/Navigation.css"
import { useMediaQuery } from 'react-responsive'

const Navigation = () => {
  const NavBox = styled.div`
  

border-radius:5px;
padding:15px;
margin:5px;
color:#1c4980;
display:flex;
flex-direction:column ;
gap:5px;

@media (max-width: 768px) {
  display:flex;
  justify-content:space-between;
    flex-direction: row;
    gap:20px
 }

`;

  const DivContainer = styled.div`
text-align:center;
padding:20px;
padding-top:0;
font-size:13px;
background-color:white;

`;

  return (
    <DivContainer className='     ' style={{ height: "100vh" }} >
 <div className='border-bottom   '>
          <NavBox className='main-div'>
            <i className='bi bi-ui-checks-grid'></i>

            <div className=''>Dashboard</div>
          </NavBox>
          <NavBox className='assessment'>
            <i className='bi bi-clipboard-check'></i>
            <div>Assisment</div>
          </NavBox>
          <NavBox className=''>
            <i className='bi bi-journal-text'></i>

            <div>My Library</div>
          </NavBox>

        </div>
      <div>
        <NavBox>
          <div ></div>
          <div>Admin</div>
        </NavBox>
      </div>

    </DivContainer>
  )
}

export default Navigation