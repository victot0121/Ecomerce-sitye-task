import React from 'react'
import Image from 'next/image'
import svgquotetestimonials from '@/public/assets/testimonials.png'
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';

const images: string[] = ['assets/video-clients-image-6.png',
 'assets/Video-clients-img-1.png', 'assets/Video-clients-img-2.png', 'assets/Video-clients-img-3.png',
 'assets/video-clients-img-5.png'
];


const Accusantium = () => {
    return (
        <div className='mt-12 w-[100%] '>
            <div className='flex justify-center mt-32'>
                <Image src={svgquotetestimonials} alt='svg' />
            </div>
            <div className='w-[100%] mt-5 flex justify-evenly items-center'>
                <div className=' flex items-center w-full'>
                    <button className='bg-grey-800 text-black px-4 py-2 mr-2 text-2xl ml-12 mt-9' >
                        <BsChevronLeft />
                    </button>
                    <p className='w-[60%] text-center flex mx-auto pr-4 mt-9'>
                        Accusantium doloremque laudantium, totam rem aperiam. Sed ut
                        perspiciatis unde omnis iste natus error sit voluptatem.
                    </p>
                    <button className='bg-grey-800 text-black px-4 py-2 absolute right-0 text-2xl mr-12 mt-9'>
                        <BsChevronRight />
                    </button>
                </div>
                {images.map((list:string, index: number)=>(
                    <Image src={list} key={index} className='size-[40px]'/>
                ))}
            </div>
            <div>
         </div>
     </div>
    )
}

export default Accusantium
