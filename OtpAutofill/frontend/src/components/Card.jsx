import React from 'react'

function Card({link , Name , Content  }) {
  return (
    <div id='Preview' className=' bg-customPink2 hover:border-yellow-500   lg:w-4/5 h-96 border-4 border-black shadow-2xl shadow-slate-900 border-solid hover:shadow-xl hover:shadow-gray-900 rounded-lg'>
       <div className='flex justify-center items-center'><img className=' ml-2 h-3/6' src={link} alt="" /></div>
       <div className='ml-2 text-customBlue text-xl text-shadow-md font-semibold '>{Name}</div>
       <div className='text-base ml-2 text-shadow-sm text-slate-800'>{Content}</div>
    </div>
  )
}

export default Card
