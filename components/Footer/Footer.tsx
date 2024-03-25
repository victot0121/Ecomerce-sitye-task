import React from 'react';
import Logo from "@/public/assets/corsen.png";
import Image from 'next/image';
import { BsArrowRight } from "react-icons/bs";
import { VscArrowSmallRight } from "react-icons/vsc";

const Footer = () => {
    return (
        <div className='py-9 px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            <div className="flex flex-col">
                <Image src={Logo} alt="Logo" />
                <p className='pt-9'>
                    Sed ut perspiciatis unde omnis iste natus
                </p>
                <p> error sit voluptatem accusantium</p>
            </div>
            <div className='ml-0 md:ml-2 pt-2 flex flex-col'>
                <h4>SUPPORT</h4>
                <ul className='pt-2 gap-2 flex flex-col'>
                    <li>Help & Contact Us</li>
                    <li>Return & Refunds</li>
                    <li>Return & Refunds</li>
                    <li>Online Stores</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='ml-0 md:ml-2 pt-2 flex flex-col'>
                <h4>COMPANY</h4>
                <div className='w-[70%] pt-6'>
                    <div className='w-[80%] h-[20px] bg-black'></div>
                    <div className='w-[65%] h-[20px] bg-black mt-5'></div>
                    <div className='w-[80%] h-[20px] bg-black mt-5'></div>
                    <div className='w-[35%] h-[20px] bg-black mt-5'></div>
                </div>
            </div>
            <div className='ml-0 md:ml-2 pt-3 flex flex-col'>
                <h4>LOCATIONS</h4>
                <h5>Vienna, Hansalgasse, Austria</h5>
                <h5>Berlin, Buschallee, Germany</h5>
                <h5>The Piazza, London, UK</h5>
            </div>
            <div className="flex flex-col">
                <h4>Get The Latest News</h4>
                <div className='border-b border-black w-[300px] py-4 flex'>
                    <input type="email" placeholder='Email' className='outline-none focus:border-none'/>
                    <BsArrowRight className='h-[20px] w-[50px] text-black-300' />
                </div>
            </div>
        </div>
    )
}

export default Footer;
