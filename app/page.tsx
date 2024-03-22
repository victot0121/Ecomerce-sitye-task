'use client'

import { useState } from 'react'
import Navbat from "@/components/NavList/Navbat";
import Controler from '@/components/controllerIcons/Controler';



const images: string[] = ['assets/main-home-rev-5.jpg.png', 'assets/div.elementor-background-overlay.png'];


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
        className="h-[600px] w-[100%] relative overflow-hidden"
      >
        {images.map((image: string, index: number) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full bg-center bg-cover transition-opacity duration-1000
              ${index === currentIndex ? 'opacity-100' : 'opacity-0 hidden'}
             `}
            style={{ backgroundImage: `url(${image})` }}
          >
            <Navbat />
          </div>
        )
        )}  
        <Controler prevSlide={prevSlide} nextSlide={nextSlide}/>
      </div>

    </main>
  );
}