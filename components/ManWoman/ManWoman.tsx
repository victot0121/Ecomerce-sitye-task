import React from 'react'

const ManWoman = () => {
    return (
        <div className='mt-12 h-[700px] flex'>
            <div className='bg-[url("/assets/main-home-category-img-4.jpg")] h-600 object-contain bg-cover bg-center w-1/2 z-999 pt-[20px] flex justify-center items-center flex-col gap-4 '>
                <h3 className='font-bold text-3xl'>MAN</h3>
                <div className='text-[12px]'>
                    <button className='border border-gray-600  px-9 py-1 text-[14px] font-bold'>shop collection</button>
                </div>
            </div>
            <div className='bg-[url("/assets/main-home-category-img-5.jpg")] h-600 object-contain bg-cover bg-center w-1/2 z-999 pt-[20px] flex justify-center items-center flex-col gap-4 '>
                <h3 className='font-bold text-3xl'>WOMAN</h3>
                <div className='text-[12px]'>
                    <button className='border border-gray-600  px-9 py-1 text-[14px] font-bold'>shop collection</button>
                </div>
            </div>
        </div>
    )   
}

export default ManWoman
