import React, { useEffect } from 'react'
import styled from 'styled-components';
import "/src/Components/Assisment/Atoms/ModalForm.css"
const ModalForm = (props) => {
    console.log("props", props.data);
    useEffect(() => {
        const { id, data_bs_backdrop } = props
    })
    const DivContainer = styled.div`
    display:flex;
    flex-direction:column;
    gap:10px
    `;
    return (
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Sub-Section Details </h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body d-flex flex-column gap-3">
                        <DivContainer>

                            <label >Name of assessment</label>
                            <input type="text" className='text-primary form-control' placeholder='Type here' />
                        </DivContainer>
                        <DivContainer>
                            <label >Purpose of the test is</label>

                            <div class="dropdown">
                                <button class="text-secondary d-flex align-items-center justify-content-between form-control  w-100" type="input" data-bs-toggle="dropdown" aria-expanded="false">
                                    <div >Select</div>
                                    <i className='bi bi-chevron-down'></i>

                                </button>
                                <ul class="dropdown-menu">
                                    <li><button class="dropdown-item" type="button">Action</button></li>
                                    <li><button class="dropdown-item" type="button">Another action</button></li>
                                    <li><button class="dropdown-item" type="button">Something else here</button></li>
                                </ul>
                            </div>
                        </DivContainer>
                        <DivContainer>
                            <label >Description</label>
                            <div class="">
                                <button class="d-flex align-items-center justify-content-between form-control  w-100" type="input" data-bs-toggle="dropdown" aria-expanded="false">
                                    <div>Select</div>
                                    <i className='bi bi-chevron-down'></i>
                                </button>
                                <ul class="dropdown-menu w-75">
                                    <li><button class="dropdown-item" type="button">Action</button></li>
                                    <li><button class="dropdown-item" type="button">Another action</button></li>
                                    <li><button class="dropdown-item" type="button">Something else here</button></li>
                                </ul>
                            </div>
                        </DivContainer>
                        <DivContainer>
                            <label >Skills</label>
                            <input type="text" className='form-control' placeholder='Type here' />
                        </DivContainer>
                        <DivContainer>
                            <label >Duration of assessment</label>
                            <input type="text" className='form-control' placeholder='HH:MM:SS' />

                        </DivContainer>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="w-100 btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalForm