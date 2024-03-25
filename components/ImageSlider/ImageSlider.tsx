import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import styles from '@/components/ImageSlider/ImageSlider.module.css';

const ImageSlider = () => {

  const images = [  'assets/instagram-img-3.jpg', 'assets/instagram-img-1.jpg', 'assets/instagram-img-4.jpg', 'assets/instagram-img-5.jpg','assets/instagram-img-6.jpg', 'assets/instagram-img-7.jpg', ]

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='w-full overflow-hidden mb-11 mt-12'>
      <div className={`flex gap-36 justify-center mt-5 ${styles.slider}`}>
        {images.map((image, index) => (
          <Image className='size-40' key={index} src={`/${image}`} alt={`Image ${index + 1}`} width={100} height={100} />
        ))}
      </div>
    </div>
  )
}

export default ImageSlider
