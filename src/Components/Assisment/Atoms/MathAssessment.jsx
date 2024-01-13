import React from 'react'
import { useMediaQuery } from 'react-responsive';
import BagIcon from '../../Icons/BagIcon';
import ThreeDotIcon from '../../Icons/ThreeDotIcon';

const MathAssessment = ({ props }) => {
    console.log(props);
    const { assName, date, duration, icon, questions, share, title } = props
    const isMobAndTab = useMediaQuery({
        query: '(max-width: 765px)'
    })
    console.log(isMobAndTab);
    return (
        <div className='d-flex flex-column border rounded-3 p-3 gap-1'  >

            <div className='d-flex justify-content-between'>
                <div className='rounded-3' style={{ backgroundColor: "#ebe8fd" }}>
                    <div className=' d-flex p-3   '><BagIcon/></div>
                </div>
                <div><ThreeDotIcon/></div>
            </div>
            <div className='d-flex flex-column gap-3'>
                <div >
                    <div className='fw-medium fs-5'>{assName}</div>
                    <div className='d-flex gap-1 align-items-center'>
                        <div className='text-capitalize fw-medium '>{title}</div>
                        <div className='d-flex gap-1 text-center align-items-center border-start text-info-emphasis fw-medium px-2' style={{ fontSize: "12px" }}>
                             <span>{date}</span>
                             </div>
                    </div>
                </div>
                <div className='d-flex justify-content-between p-2 border-top'>
                    <div className='d-flex gap-2'>
                        <div >
                            <div className='fw-medium'>{duration}</div>
                            <div style={{ fontSize: "12px" }}>Duration</div>
                        </div>
                        <div>
                            <div className='fw-medium'>{questions}</div>
                            <div style={{ fontSize: "12px" }}>Questions</div>
                        </div>
                    </div>
                    <div className='d-flex  gap-5  align-items-center '>
                        <div className='d-flex align-items-center border fs-6  gap-1  rounded-pill px-2 py-1'>
                            <i className='bi bi-link'></i>
                            <div>Share</div>
                        </div>

                        <div className='d-flex justify-content-between align-items-center gap-4'>
                            <div className=' position-relative '>
                                <div className='rounded-circle d-flex justify-content-center align-items-center text-white position-absolute  fw-medium  p-2' style={{ backgroundColor: "#3079a1", left: "-30px", bottom: "-15px", height: "25px", width: "25px" }}>{share}</div>
                                <div className='rounded-circle d-flex justify-content-center align-items-center text-white position-absolute fw-medium p-2' style={{ backgroundColor: "#6548ee", left: "-20px", bottom: "-15px", height: "25px", width: "25px" }}>{share}</div>
                                <div className='rounded-circle d-flex justify-content-center align-items-center text-white position-absolute fw-medium p-2' style={{ backgroundColor: "#e9407a", left: "-10px", bottom: "-15px", height: "25px", width: "25px" }}>{share}</div>
                            </div>
                            <div>
                                {
                                    isMobAndTab && <div>+123</div>
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default MathAssessment