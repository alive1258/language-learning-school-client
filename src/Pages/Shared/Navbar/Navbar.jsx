import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/images/logo.png'

const Navbar = () => {
const [nav,setNav]=useState(false)
const handleNav=()=>setNav(!nav)




    return (
        <div className='bg-white'>
            <div className='py-4 md:px-10 flex justify-between items-center max-w-screen-2xl'>
                <div className='flex items-center gap-1'>
                    <div className='pl-2'>
                        <Link to='/'>
                            <img className='h-20 w-24' src={logo} alt="" />
                        
                        </Link>

                    </div>
                    <div className='md:text-2xl text-xl font-bold mb-2'>Language Learning School</div>

                </div>
                <div className='md:flex hidden gap-8 text-lg  font-semibold'>
                    <NavLink>Home</NavLink>
                    <NavLink>Instructors</NavLink>
                    <NavLink>Classes</NavLink>
                    <NavLink>Dashboard </NavLink>

                    <div>
                    <button className="px-4 rounded-lg py-2 text-lg font-semibold text-white bg-[#ff8c00] hover:bg-[#e78f24] ml-2 md:block hidden">Login</button>
                    </div>

                </div>

            </div>
            
        </div>
    );
};

export default Navbar;