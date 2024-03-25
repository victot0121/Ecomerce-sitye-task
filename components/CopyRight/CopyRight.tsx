import React from 'react'

const CopyRight = () => {
  return (
    <div className='w-[100%] h-[70px] flex sm:flex-col md:flex-row border border-black justify-between py-3'>
      <div className='pl-5 flex gap-4 w-[70%] '>
        <h3 className='flex'> © 2023 </h3>
        <div className='w-[20%] h-[10px] bg-black mt-2'></div>
        <h3>, All Rights Reserved</h3>
      </div>
      <div className='flex gap-4 pr-5'>
        <div className='border-r border-black px-4'>ENG</div>
        <div className='border-r border-black px-6'>FRA</div>
        <div>SKR</div>
      </div>
    </div>
  )
}

export default CopyRight
