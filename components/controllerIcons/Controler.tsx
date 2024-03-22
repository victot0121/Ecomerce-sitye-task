import React from 'react'
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';

const Controler = ({ nextSlide, prevSlide }) => {
    return (
        <div className='absolute top-[300px] left-0 flex items-center w-full'>
            <button className='bg-grey-800 text-black px-4 py-2 mr-2 text-2xl ml-7' onClick={prevSlide}>
                <BsChevronLeft />
            </button>
            <button className='bg-grey-800 text-black px-4 py-2 absolute right-0 text-2xl mr-7' onClick={nextSlide}>
                <BsChevronRight />
            </button>

        </div>
    )
}

export default Controler
