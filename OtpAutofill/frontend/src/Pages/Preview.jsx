import React from 'react'
import Slider from '../components/Slider'
const Preview = () => {
  return (
    <div className='overflow-hidden mt-16'>
      <div className='ml-44 text-slate-200 text-2xl font-bold mb-3'>Preview</div>
      <div className='border-2 w-screen border-neutral-900 mb-10 border-opacity-40'></div>
    <div className=' h-auto  w-10/12  ml-32 rounded-2xl pt-3 pb-5 ' id='About'>
      <Slider></Slider>
    </div>
      </div>
  )
}

export default Preview