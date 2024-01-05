import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Navigation = () => {
  const NavBox = styled.div`
background-color:#e5f1fc;
border:1px solid #0073e6;
border-radius:5px;
padding:10px;
margin:5px
`;

  const DivContainer = styled.div`
text-align:center;
padding:10px;
background-color:white;
display:flex,
flex-direction:column;
// margin-top:20px
`;
  return (
    <DivContainer className='  ' style={{ height: "100vh" }} >
      <div>
        <NavBox className=''>
          <div><img src="/dashboard.png" width={20} height={20} alt="" /></div>

          <div>Dashboard</div>
        </NavBox>
        <NavBox to={"/assisment"}>
          <div><img src="/assessment.png" height={20} width={20} alt="" /></div>
          <Link>Assisment</Link>
        </NavBox>
        <NavBox>
          <div>logo</div>

          <Link to={"/library"}>Library</Link>
        </NavBox>

      </div>
      <div>
        <NavBox>
          <div >logo</div>
          <Link to={"/admin"}>Admin</Link>
        </NavBox>
      </div>
    </DivContainer>
  )
}

export default Navigation