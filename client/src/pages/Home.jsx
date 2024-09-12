import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <nav className='flex items-center  px-16 py-5 shadow-xl' > <div>
                <span className='flex-1 text-3xl font-extrabold font-sans'>
                    BOOK
                    Store
                </span>
            </div>

                <div className='ml-28 font-sans text-xl flex gap-5 font-medium text-[#666]' >
                    <Link className='hover:text-black transition-all duration-200' to={"/"}>Home</Link>
                    <Link className='hover:text-black transition-all duration-200' to={"/"}>Books</Link>
                    <Link className='hover:text-black transition-all duration-200' to={"/"}>Services</Link>
                    <Link className='hover:text-black transition-all duration-200' to={"/"}>FAQs</Link>
                    <Link className='hover:text-black transition-all duration-200' to={"/"}>Help</Link>
                </div>

                <div className='flex-1 flex justify-end' >
                    <a href="" className="text-white text-lg bg-black px-7 py-3 rounded-[20px] hover:scale-105 transition-all duration-200">Login Now</a>
                </div>
            </nav>
        </div>
    )
}
