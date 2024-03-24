import React from 'react'

const MeetTheArtists = () => {
  return (
    <div className='w-[100%] h-[500px] mt-[120px] flex sm:flex-col md:flex-row justify-center gap-9'>
      <div className='w-[20%] h-[290px] bg-[url("/assets/qodef-m-image.png")] bg-cover bg-center '>

      </div>
      <div className='w-[20%] h-[290px] bg-[url("/assets/main-home-image-3-1.jpg")] bg-cover bg-center '>

      </div>
      <div className='w-[18%] h-[250px] py-7'>
        <h4>
          Meet The Artists Behind The Corsen Maria & Sophia
        </h4>
        <p className='text-[10px] mt-4'>
          Lorem ipsum dolor sit amet, consectetur elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna.
        </p>
        <div className='text-[10px] border border-black px-2 py-2 mt-5 flex justify-center cursor-pointer'>
          Shop Collection
        </div>
      </div>
    </div>
  )
}

export default MeetTheArtists
