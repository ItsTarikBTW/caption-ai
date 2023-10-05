"use client"

import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import { useState } from "react";

const Navbar = () => {

    let Links = [
        { name: "Company", link: "/" },
        { name: "Marketplace", link: "/" },
        { name: "Features", link: "/" },
        { name: "Team", link: "/" },
        { name: "Contact", link: "/" },
        { name: "Log in", link: "/" },
    ];

    const [open, setOpen] = useState(false);

    return (
        <nav className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-[#5D14A6] py-4 md:px-5 px-7'>
                {/* logo section */}
                <div className='font-bold text-2xl cursor-pointer'>
                    {/* <BookOpenIcon className='w-7 h-7 text-blue-600' /> */}
                    <span className="text-white">SubFast</span>
                </div>
                {/* Menu icon */}
                <div onClick={() => setOpen(!open)} className='absolute right-8 top-4 cursor-pointer md:hidden'>
                    {
                        open ? <Cross1Icon color="white" className='w-7 h-7' /> : <HamburgerMenuIcon color="white" className='w-7 h-7' />
                    }
                </div>
                {/* linke items */}
                <ul className={`md:flex md:items-center md:bg-[#5D14A6] md:pb-0 pb-12 absolute md:static bg-[#5D14A6] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className='md:ml-4 md:my-0 my-7 font-semibold'>
                                <a href={link.link} className='text-white hover:text-blue-400 duration-500'>{link.name}</a>
                            </li>))
                    }
                    <button className='text-[#146C94] btn bg-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Get Started</button>
                </ul>
                {/* button */}
            </div>
        </nav>
    )
}

export default Navbar;