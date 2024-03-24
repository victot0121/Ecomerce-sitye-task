'use client'

import React, { useState } from 'react';
import { CiBookmark } from 'react-icons/ci';
import { LiaEyeSolid } from 'react-icons/lia';
import { TbClipboard } from "react-icons/tb";
import { type } from 'os';


type TabName = 'ALL PRODUCTS' | 'LIFESTYLE' | 'BRAND' | 'OURWEAR';

const ImageOne: React.FC = () => {


    const [activeTab, setActiveTab] = useState<TabName>('ALL PRODUCT')

    const handleTabClick = (tabName: TabName) => {
        setActiveTab(tabName)
    }


    return (
        <div className='mt-14 w-[100%] grid justify-center mb-5'>

            <div>
                <ul className='flex gap-4 mb-4 text-[10px] hover:cursor-pointer'>
                    <li
                        className={activeTab === 'ALL PRODUCTS' ? 'border border-gray-600 text-[10px] px-3 bg-gray-100  hover:cursor-pointer' : ' '}
                        onClick={() => handleTabClick('ALL PRODUCTS')}
                    >
                        ALL PRODUCTS
                    </li>
                    <li
                        className={activeTab === 'LIFESTYLE' ? 'border border-gray-600 text-[10px] px-3 bg-gray-100  hover:cursor-pointer' : ' '}
                        onClick={() => handleTabClick('LIFESTYLE')}
                    >
                        LIFESTYLE
                    </li>
                    <li
                        className={activeTab === 'BRAND' ? 'border border-gray-600 text-[10px] px-3 bg-gray-100  hover:cursor-pointer' : ''}
                        onClick={() => handleTabClick('BRAND')}
                    >
                        BRAND
                    </li>
                    <li
                        className={activeTab === 'OURWEAR' ? 'border border-gray-600 text-[10px] px-3 bg-gray-100  hover:cursor-pointer' : ''}
                        onClick={() => handleTabClick('OURWEAR')}
                    >
                        OUTWEAR
                    </li>
                </ul>
            </div>


            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>


                <div className='relative flex flex-col border border-gray-600 bg-[url("/assets/Main-product-list-1.jpg.png")] bg-cover bg-center mb-1'
                    style={{ width: '194px', height: '290px' }}
                >
                    <div className='bg- flex w-full gap-[118px] mt-3'>
                        <div className='ml-2 text-[12px]'>
                            <button className='border border-gray-600 text-[10px] px-3 py-1 bg-white'>New</button>
                        </div>
                        <div className='mt-1 flex flex-col gap-3 mr-2'>
                            <CiBookmark />
                            <LiaEyeSolid />
                        </div>
                    </div>
                    <div className='flex gap-20 absolute mt-[289px] w-[194px] border border-gray-600 '>
                        <div className='ml-4 w-[90px]'>
                            <h6 className='text-[10px] flex'>Black Jacket</h6>
                            <h6 className='text-[10px] '>$350.00</h6>
                        </div>
                        <div className='pt-2 px-2 border border-gray-600 h-[]'>
                            <TbClipboard />
                        </div>
                    </div>
                </div>




                <div className='relative flex flex-col border border-gray-600 bg-[url("/assets/Main-product-list-2.jpg.png")] bg-cover bg-center  mb-8'
                    style={{ width: '194px', height: '290px' }}
                >
                    <div className=' flex w-full gap-[123px] mt-3'>
                        <div className='ml-2 text-[12px]'>
                        </div>
                        <div className='mt-1 flex flex-col gap-3  ml-7'>
                            <CiBookmark />
                            <LiaEyeSolid />
                        </div>
                    </div>
                    <div className='flex gap-20 absolute mt-[289px] w-[194px] border border-gray-600 '>
                        <div className='ml-4'>
                            <h6 className='text-[10px] flex flex-row w-[100px]'>Leather Jacket</h6>
                            <h6 className='text-[10px] '>$300.00</h6>
                        </div>
                        <div className='pt-2 px-2 border border-gray-600 ml-[-37px]'>
                            <TbClipboard />
                        </div>
                    </div>
                </div>





                <div className='relative flex flex-col border border-gray-600 bg-[url("/assets/Main-product-list-3.jpg.png")] bg-cover bg-center'
                    style={{ width: '194px', height: '290px' }}
                >
                    <div className='bg- flex w-full gap-[118px] mt-3'>
                        <div className='ml-2 text-[12px]'>
                            <button className='border border-gray-600 text-[10px] px-3 py-1 bg-white'>SALE</button>
                        </div>
                        <div className='mt-1 flex flex-col gap-3 mr-2'>
                            <CiBookmark />
                            <LiaEyeSolid />
                        </div>
                    </div>
                    <div className='flex gap-20 absolute mt-[289px] w-[194px] border border-gray-600 '>
                        <div className='ml-4'>
                            <h6 className='text-[10px] flex flex-row w-[100px]'>Black Outfit</h6>
                            <h6 className='text-[10px] '>$220.00 $180.00</h6>
                        </div>
                        <div className='pt-2 px-2 border border-gray-600 ml-[-37px]'>
                            <TbClipboard />
                        </div>
                    </div>
                </div>



                <div className='relative flex flex-col border border-gray-600 bg-[url("/assets/product-new-img-1.jpg")] bg-cover bg-center'
                    style={{ width: '194px', height: '290px' }}
                >
                    <div className='bg- flex w-full gap-[118px] mt-3'>
                        <div className='flex w-full gap-[123px] mt-3'>

                        </div>
                        <div className='mt-1 flex flex-col gap-3 mr-2'>
                            <CiBookmark />
                            <LiaEyeSolid />
                        </div>
                    </div>
                    <div className='flex gap-20 absolute mt-[289px] w-[194px] border border-gray-600 '>
                        <div className='ml-4'>
                            <h6 className='text-[10px] flex flex-row w-[100px]'>T-Shirt</h6>
                            <h6 className='text-[10px] '>$300.00</h6>
                        </div>
                        <div className='pt-2 px-2 border border-gray-600 ml-[-37px]'>
                            <TbClipboard />
                        </div>
                    </div>
                </div>




                <div className='relative flex flex-col border border-gray-600 bg-[url("/assets/product-new-img-1.jpg")] bg-cover bg-center mb-3'
                    style={{ width: '194px', height: '290px' }}
                >
                    <div className='bg- flex w-full gap-[118px] mt-3'>
                        <div className='flex w-full gap-[123px] mt-3'>

                        </div>
                        <div className='mt-1 flex flex-col gap-3 mr-2'>
                            <CiBookmark />
                            <LiaEyeSolid />
                        </div>
                    </div>
                    <div className='flex gap-20 absolute mt-[289px] w-[194px] border border-gray-600 '>
                        <div className='ml-4'>
                            <h6 className='text-[10px] flex flex-row w-[100px]'>Black Vest</h6>
                            <h6 className='text-[10px] '>$85.00</h6>
                        </div>
                        <div className='pt-2 px-2 border border-gray-600 ml-[-37px]'>
                            <TbClipboard />
                        </div>
                    </div>
                </div>




                <div className='relative flex flex-col border border-gray-600 bg-[url("/assets/Main-product-list-2.jpg.png")] bg-cover bg-center'
                    style={{ width: '194px', height: '290px' }}
                >
                    <div className='bg- flex w-full gap-[118px] mt-3'>
                        <div className='flex w-full gap-[123px] mt-3'>

                        </div>
                        <div className='mt-1 flex flex-col gap-3 mr-2'>
                            <CiBookmark />
                            <LiaEyeSolid />
                        </div>
                    </div>
                    <div className='flex gap-20 absolute mt-[289px] w-[194px] border border-gray-600 '>
                        <div className='ml-4'>
                            <h6 className='text-[10px] flex flex-row w-[100px]'>Leather Jacket</h6>
                            <h6 className='text-[10px] '>$300.00</h6>
                        </div>
                        <div className='pt-2 px-2 border border-gray-600 ml-[-37px]'>
                            <TbClipboard />
                        </div>
                    </div>
                </div>






                <div className='relative flex flex-col border border-gray-600 bg-[url("/assets/Main-product-list-7.jpg.png")] bg-cover bg-center'
                    style={{ width: '194px', height: '290px' }}
                >
                    <div className='bg- flex w-full gap-[100px] mt-3'>
                        <div className='ml-2 text-[12px]'>
                            <button className='border border-gray-600 text-[10px] px-3 py-1 bg-black text-white'>SOLD</button>
                        </div>
                        <div className='mt-1 flex flex-col gap-3 mr-2'>
                            <CiBookmark />
                            <LiaEyeSolid />
                        </div>
                    </div>
                    <div className='flex gap-20 absolute mt-[289px] w-[194px] border border-gray-600 '>
                        <div className='ml-4'>
                            <h6 className='text-[10px] flex flex-row w-[100px]'>Beige T-Shirt</h6>
                            <h6 className='text-[10px] '>$60.00</h6>
                        </div>
                        <div className='pt-2 px-2 border border-gray-600 ml-[-37px]'>
                            <TbClipboard />
                        </div>
                    </div>
                </div>




                <div className='relative flex flex-col border border-gray-600 bg-[url("/assets/Main-product-list-8.jpg.png")] bg-cover bg-center'
                    style={{ width: '194px', height: '290px' }}
                >
                    <div className='bg- flex w-full gap-[118px] mt-3'>
                        <div className='flex w-full gap-[123px] mt-3'>

                        </div>
                        <div className='mt-1 flex flex-col gap-3 mr-2'>
                            <CiBookmark />
                            <LiaEyeSolid />
                        </div>
                    </div>
                    <div className='flex gap-20 absolute mt-[289px] w-[194px] border border-gray-600 '>
                        <div className='ml-4'>
                            <h6 className='text-[10px] flex flex-row w-[100px]'>Black Hat</h6>
                            <h6 className='text-[10px] '>$45.00</h6>
                        </div>
                        <div className='pt-2 px-2 border border-gray-600 ml-[-37px]'>
                            <TbClipboard />
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default ImageOne;
