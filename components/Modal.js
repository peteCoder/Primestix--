import React from 'react'
import "./modal.css"

const Modal = ({closeModal}) => {
  return (
    <div className='modalBackground font-raleway'>
        <div className='modalContainer'>
           
            <div className='flex flex-row items-start justify-between'>
                <div>
                    <div className='flex flex-col gap-1'>
                    <h1 className='uppercase text-xl font-bold tracking-wider'> Schedule a call with us</h1>
                    <p>*All fields are required.</p>
                    </div>

                    <div>
                        <form className='mb-0 space-y-6' action='#' method='POST'>
                            <div>
                                
                            </div>
                        </form>
                    </div>
                </div>
                <div>
                     <button className='py-1 px-3 font-bold border-2 border-gray-500'  onClick={() => closeModal(false)}>
                     <i class="ri-close-fill"></i>
                     </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal