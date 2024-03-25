import React from 'react'
import Frmame from '@/public/assets/Frame.png'
import svg from '@/public/assets/svg.png'
import svgOne from '@/public/assets/svg-1.png'
import svgTwo from '@/public/assets/svg-2.png'
import Image from 'next/image'


const FastDeliery = () => {
    return (
        <div className='mt-[230px] w-[100%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-12'>
            <div className='flex py-5 justify-center border border-black gap-2'>
                <Image src={Frmame} alt='Frame' width={18} height={18} />
                <h4>FAST DELIVERY</h4>
            </div>
            <div className='flex py-5  justify-center  border border-black gap-2'>
                <Image src={svg} alt='Frame' width={18} height={18} />
                <h4>FREE RETURNS</h4>
            </div>
            <div className='flex py-5 justify-center  border border-black gap-2'>
                <Image src={svgOne} alt='Frame' width={18} height={18} />
                <h4>SECURE CHECKOUT</h4>
            </div>
            <div className='flex py-5 justify-center  border border-black gap-2'>
                <Image src={svgTwo} alt='Frame' width={18} height={18} />
                <h4>ORDER TRACKING</h4>
            </div>
        </div>
    )
}

export default FastDeliery
