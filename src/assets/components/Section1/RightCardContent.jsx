import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full  p-7 flex flex-col justify-between'>
          <h2 className='bg-white text-xl rounded-full h-10 w-10 flex justify-center items-center font-semibold'>{props.id+1}</h2>
          <div>
            <p className='text-shadow-2xl text-[16px] text-white leading-relaxed mb-13'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente quos beatae, voluptatibus enim pariatur libero.</p>
            <div className='flex justify-between'>
                <button className='bg-blue-600 text-sm font-semibold text-white rounded-full py-3 px-8'>{props.tag}</button> 

                <button className='bg-blue-600 text-sm font-medium text-white rounded-full py-3 px-4'><i className='ri-arrow-right-line'></i></button>
            </div>
          </div>
    </div>
  )
}

export default RightCardContent