import React from 'react'

function Header({heading}) {
  return (
    <div className='bg-purple-900 text-center w-36 h-11 pt-2 rounded-lg text-white text-xl ml-4 font-semibold '>
       {heading}
    </div>
  )
}

export default Header
