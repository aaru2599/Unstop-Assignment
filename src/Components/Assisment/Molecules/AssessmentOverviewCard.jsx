import React from 'react';
import styled from 'styled-components';

const AssessmentOverview = ({ data }) => {
  const TextDiv = styled.div`
  font-size:12px;
  // font-weight:bold
  `;
  const CountDiv = styled.div`
  font-size:12px;
  color:#15c56f;
  font-weight:bold
  `;

  const thirdData=data?.totCount?.thirdSection?.totNo
  // console.log(data?.totCount?.thirdSection?.totNo?"yes":"no");
  return (
    <div className='d-flex flex-column  p-1 gap-2'>
      <div>
        <div className='fw-medium'>{data.heading}</div>
      </div>
      <div className={`d-flex    ${typeof data.totCount !== 'string' ? "align-items-center" : ""}`}>
        <div className='btn disabled border-0 ' style={{ backgroundColor: "#bcbbc3db" }}><i className={`bi bi-${data.logo} fs-5 `}></i></div>
        {/* Check if totCount is an object, if yes, render its properties */}
        {typeof data.totCount === 'object' ? (
          <div className='d-flex gap-3'>
            <div className='d-flex flex-column border-end px-3 '>
              <div className='d-flex align-items-center'>
                <div className='fs-5 fw-bold'>{data.totCount.firstSection.totNo}</div>
                <CountDiv>+{data.totCount.firstSection.increaseBy}</CountDiv>

              </div>
              <TextDiv >{data.totCount.firstSection.text}</TextDiv>
            </div>
            <div className={`${thirdData?"border-end px-3":""}`}>
              <div className='d-flex  align-items-center'>
                <div className='fs-5 fw-bold'>{data.totCount.secondSection.totNo}</div>
                <CountDiv>{+data.totCount.secondSection.increaseBy}</CountDiv>

              </div>
              <TextDiv>{data.totCount.secondSection.text}</TextDiv>

            </div>

            {data?.totCount?.thirdSection?.totNo ? (
              <div>
                <div className='d-flex gap-2 align-items-center'>
                  <div className='fs-5 fw-bold'>{data?.totCount?.thirdSection?.totNo}</div>
                  <CountDiv>+{data?.totCount?.thirdSection?.increaseBy}</CountDiv>

                </div>
                <TextDiv>{data?.totCount?.thirdSection?.text}</TextDiv>

              </div>
            ) : ""}


          </div>
        ) : (
          // If totCount is not an object, render a single value
          <div className=' px-3 d-flex align-items-center fs-5 fw-bold '>{data.totCount}</div>
        )
        }
      </div>
    </div >
  );
};

export default AssessmentOverview;
