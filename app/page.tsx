'use client'

import { useState } from 'react'
import Navbat from "@/components/NavList/Navbat";
import Controler from '@/components/controllerIcons/Controler';
import ImageOne from '@/components/imageDisplayOne/imageOne'
import ManWoman from '@/components/ManWoman/ManWoman'
import Accusantium from '@/components/Accusantium/Accusantium'
import OurBlog from '@/components/OurBlog/OurBlog'
import Signup from '@/components/Signup/Signup'
import MeetTheArtists from '@/components/MeetTheArtists/MeetTheArtists'



const images: string[] = ['assets/main-home-rev-5.jpg', 'assets/background-overlay.png'];


export default function Home() {

  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const nextSlide = (): void => {
    const newIndex: number = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex)
  }

  const prevSlide = (): void => {
    const newIndex: number = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex)
  }

  return (
    <main className="">
      <div
        className="h-[790px] w-[100%] relative overflow-hidden"
      >
        {images.map((o: string, index: number) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full bg-center bg-cover transition-opacity duration-1000
              ${index === currentIndex ? 'opacity-100' : 'opacity-0 hidden'}
             `}
            style={{ backgroundImage: `url(${o})` }}
          >
            <Navbat />
          </div>
        )
        )}
        <Controler prevSlide={prevSlide} nextSlide={nextSlide} />
        <div className='absolute top-[450px] ml-12 flex flex-col gap-5 w-[90%] py-12 border-b-[1px] border-black'>
          <div className='mb-2'>
            <h2 className='text-4xl space-x-2 font-bold'>Mixed Textiles</h2>
          </div>
          <div className='w-[42%] mb-3'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
            </p>
          </div>
          <div>
            <button className='border-[1px] border-black flex py-4 px-4'>
              SHOP COLLECTION
            </button>
          </div>
        </div>
      </div>

      <section className='mt-4 w-[100%] relative'>
        <div>
          <div className='pt-8 flex flex-col justify-center items-center '>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod  </p>
            <p> tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim</p>
            <p> veniam, quis nostrud.</p>
          </div>
        </div>
        <ImageOne />
      </section>

      <section className='mt-12 w-[100%]'>
        <ManWoman />
      </section>

      <section>
        <Accusantium />
      </section>

      <section>
        <OurBlog />
      </section>


      <section>
        <Signup />
      </section>

      <section>
         <MeetTheArtists/>
      </section>
    </main>
  );
}