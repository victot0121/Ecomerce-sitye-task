'use client'

import React from 'react';
import Logo from "@/public/assets/corsen-main-logo-x2.png.png"
import { BiSearchAlt } from "react-icons/bi";
import { CiBookmark } from "react-icons/ci";
import { BsClipboardCheck } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className="w-full mx-auto">
            <div className="w-[80%] flex justify-between py-6 border-b-[1px] border-black mx-auto mt-2">
                <div className="flex items-center">
                    <Link href="/">
                        <Image src={Logo} alt="Logo" />
                    </Link>
                </div>
                <div className="flex items-center gap-3">
                    <ul className="flex gap-3">
                        <Link href='/'>
                            <li className='text-black'>
                                HOME
                            </li>
                        </Link>
                        <Link href='/pagespage'>
                            <li>PAGES</li>
                        </Link>
                        <Link href='/shoppage'>
                            <li>SHOP</li>
                        </Link>
                        <Link href='/porfilo'>
                            <li>PORFILO</li>
                        </Link>
                        <Link href='/blog'>
                            <li>BLOG</li>
                        </Link>
                    </ul>
                </div>
                <div className='flex gap-2'>
                    <div className="flex gap-2">
                        <div className=' '>
                            <h3>Search</h3>
                        </div>
                        <div className='pt-1'>
                            <BiSearchAlt />
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div>
                            <h3 className='text-bold'>Cart</h3>
                        </div>
                        <div className='pt-1'>
                            <BsClipboardCheck />
                        </div>
                    </div>
                    <div className="flex gap-3 ml-6">
                        <div className='pt-1'>
                            <CiBookmark />
                        </div>
                        <div>
                            <h3>0</h3>
                        </div>
                        <div className='pt-1'>
                            <BsPerson />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
