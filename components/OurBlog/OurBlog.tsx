import React from 'react'

import { TbClipboard } from "react-icons/tb";

const OurBlog = () => {
    return (
        <div className='w-[100%] mt-14'>
            <div className='flex justify-center '>
                <h3 className='text-2xl'>Read Our Blog Posts</h3>
            </div>
            <div className='flex flex-col'>
                <p className='w-[47%] justify-center mx-auto mt-5 mb-3'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing ectetur
                </p>
                <p className='w-[47%] justify-center flex mx-auto  mt-1'> elit, sed do eiusmod.</p>
            </div>
           
           
            <div className='gap-12 mt-9 pl-[129px] w-[100%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>

                <div className='relative flex flex-col border border-gray-600 bg-[url("/assets/Blog-list-img-1.jpg")] bg-cover bg-center mb-[200px]'
                    style={{ width: '240px', height: '290px' }}
                >
                    <div className=' flex w-full gap-[118px] mt-3 '>
                        <div className='ml-2 text-[12px]'>
                            <button className='border border-gray-600 text-[10px] px-3 py-1 bg-white'>September 29, 2022</button>
                        </div>

                    </div>
                    <div className='flex gap-20 flex-col absolute mt-[289px] w-[194px]  mb-10'>
                        <div className='ml-1 w-[250px] mt-5 flex flex-cols border-b border-gray-600 pb-4 mr-5'>
                            <h6 className='text-[13px] font-bold flex flex-col items-center pl-[50px]'>Fashion | Inspiration</h6>
                        </div>
                        <div className='mb-[30px] sm:w-[360px] md:w-[285px] flex flex-col justify-center mt-[-50px] ml-2 text-[11px]'>
                            <h4 className='items-center md:mb-3'>Top 10 Winter Essentials For 2022 You Should </h4>
                            <h4 className='flex justify-center ml-[-70px]'>Try</h4>
                        </div>
                        <div className='ml-[80px] w-[65px] flex flex-col justify-center mt-[-90px]  text-[9px] border-b border-gray-600'>
                            <h4 className='flex justify-center  '>READ ME</h4>
                        </div>
                    </div>
                </div>


                <div className='relative flex flex-col border border-gray-600 bg-[url("/assets/Blog-list-img-2.jpg")] bg-cover bg-center mb-[200px] mr-3 ml-14'
                    style={{ width: '250px', height: '390px' }}
                >
                    <div className=' flex w-full gap-[118px] mt-3 '>
                        <div className='ml-2 text-[12px]'>
                            <button className='border border-gray-600 text-[10px] px-3 py-1 bg-white'>September 29, 2022</button>
                        </div>

                    </div>
                    <div className='flex gap-20 flex-col absolute mt-[390px] w-[194px]  mb-10'>
                        <div className='ml-4 w-[250px] mt-5 flex flex-cols border-b border-gray-600 pb-4'>
                            <h6 className='text-[13px] font-bold flex flex-col items-center pl-[50px]'>Fashion | Inspiration</h6>
                        </div>
                        <div className='mb-[30px] sm:w-[360px] md:w-[285px] flex flex-col justify-center mt-[-50px] ml-4 text-[12px]'>
                            <h4 className='items-center md:mb-3 text-[11px]'>The Complete Communication Skills Master Class For Work </h4>
                            <h4 className='flex justify-center'>Try</h4>
                        </div>
                        <div className='ml-[120px] w-[65px] flex flex-col justify-center mt-[-90px]  text-[9px] border-b border-gray-600'>
                            <h4 className='flex justify-center '>READ ME</h4>
                        </div>
                    </div>
                </div>


                <div className='relative ml-[120px] flex flex-col border border-gray-600 bg-[url("/assets/Blog-list-img-3.jpg")] bg-cover bg-center mb-[200px]'
                    style={{ width: '240px', height: '290px' }}
                >
                    <div className=' flex w-full gap-[118px] mt-3 '>
                        <div className='ml-2 text-[12px]'>
                            <button className='border border-gray-600 text-[10px] px-3 py-1 bg-white'>September 29, 2022</button>
                        </div>

                    </div>
                    <div className='flex gap-20 flex-col absolute mt-[289px] w-[194px]  mb-10'>
                        <div className='ml-1 w-[250px] mt-5 flex flex-cols border-b border-gray-600 pb-4 mr-5'>
                            <h6 className='text-[13px] font-bold flex flex-col items-center pl-[50px]'>Fashion | Inspiration</h6>
                        </div>
                        <div className='mb-[30px] sm:w-[360px] md:w-[285px] flex flex-col justify-center mt-[-50px] ml-2 text-[11px]'>
                            <h4 className='items-center md:mb-3 ml-5'>Premium Consultant Course For You </h4>
                            <h4 className='flex justify-center ml-[-70px]'>Try</h4>
                        </div>
                        <div className='ml-[80px] w-[65px] flex flex-col justify-center mt-[-90px]  text-[9px] border-b border-gray-600'>
                            <h4 className='flex justify-center  '>READ ME</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurBlog
