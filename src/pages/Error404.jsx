import React from 'react'
import {RiEmotionUnhappyLine} from 'react-icons/ri'

const Error404 = () => {
  return (
    <div className='flex justify-center items-center min-h-screen '>
      <div className='flex flex-col justify-center items-center w-96 h-96 bg-slate-600 rounded-xl'>
        <div className=''>
          <RiEmotionUnhappyLine className='h-52 w-52'/>
        </div>
        <div className=' font-semibold text-5xl'>404</div>
        <div className=' mt-10 text-3xl'>Not Found</div>
      </div>
    </div>
  )
}

export default Error404