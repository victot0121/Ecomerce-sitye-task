import React from 'react'
import Image from 'next/image'
import svgquotetestimonials from '@/public/assets/testimonials.png'
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';


const images = [
    { src: '/assets/video-clients-image-6.png', width: 100, height: 100 },
    { src: '/assets/Video-clients-img-1.png', width: 100, height: 100 },
    { src: '/assets/Video-clients-img-2.png', width: 100, height: 100 },
    { src: '/assets/Video-clients-img-3.png', width: 100, height: 100 },
    { src: '/assets/video-clients-img-5.png', width: 100, height: 100 }
];




const Accusantium = () => {
    return (
        <div className='mt-12 w-[100%] '>
            <div className='flex justify-center mt-32'>
                <Image src={svgquotetestimonials} alt='svg' />
            </div>
            <div className='w-[100%] mt-5 flex justify-evenly items-center relative'>
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
            </div>
            <div>
            </div>
            <div className='flex w-full justify-center mt-[-200px]'>
                {images.map((image) => (
                    <div className='mt-[230px] flex right-11-[40px]'>
                        <Image
                            key={image} src={image.src} width={image.width} height={image.height}
                        />
                    </div>
                ))}
            </div>


            <div className='w-[100%] flex justify-center'>
                <div className='bg-[url("/assets/background-overlay.png")] bg-cover bg-center mb-3 mt-[127px]'
                    style={{
                        width: '80%', height: '290px'
                    }}
                >

                </div>
            </div>

        </div>
    )
}

export default Accusantium
