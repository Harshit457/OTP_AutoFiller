import React from 'react'
import Header from '../components/Header'
import Detail from '../components/Detail'
function About() {
  return (
    <div className='overflow-hidden'>
      <div className='ml-44 text-slate-200 text-2xl font-bold mb-3'>About</div>
      <div className='border-2 w-screen border-neutral-900 mb-10 border-opacity-40'></div>
    <div className='bg-gray-900 h-auto  w-10/12  ml-32 rounded-2xl pt-3 pb-5 ' id='About'>
      
       <Header heading={"AUTO FILL"}></Header>
       <Detail></Detail>
    </div>
    </div>
  )
}

export default About
