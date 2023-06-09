import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/images/logo.png'
import './Navbar.css'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import useAuth from '../../../Hooks/useAuth';
import useClassCart from '../../../Hooks/useClassCart';

const Navbar = () => {
    const { user, logOut } = useAuth()
const [cart]=useClassCart()


    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)
  

    const handleLogOut = () => {
        logOut()
            .then()
            .catch((error) => console.log(error));
    };

   

    return (
        <>
            <div className='bg-gray-700  max-w-screen-2xl w-full fixed z-10'>

                <div className='py-2 md:px-10  flex justify-between items-center '>

                    <div className='flex items-center gap-2'>
                        <div className=''>
                            <Link to='/'>
                                <img className='h-20 w-20' src={logo} alt="" />
                            </Link>
                        </div>
                        <div className='md:text-2xl text-xl  font-bold mb-2'><span className='text-blue-400'>Language Learning</span> School</div>
                    </div>

                    <div className="md:flex items-center hidden gap-8 text-lg  font-semibold">
                        <NavLink to="/" className='text-white'>Home</NavLink>
                        <NavLink to='/Instructors' className='text-white'>Instructors</NavLink>
                        <NavLink to='/classes' className='text-white'>Classes</NavLink>
                        <NavLink to='/dashboard/mycart' className='text-white'>Dashboard </NavLink>
                        <NavLink to='/dashboard/mycart' className='text-white'>
                            <button className="btn">
                                
                                <div className="badge">+{cart?.length || 0}</div>
                            </button>

                        </NavLink>

                        <div className="md:flex justify-center items-center">



                            <div className='md:block hidden'>
                                {
                                    user ? <>

                                        <button onClick={handleLogOut} className="px-4 rounded-lg py-2 text-lg font-semibold text-white bg-[#ff8c00] hover:bg-[#e78f24] w-full">LogOut</button>
                                    </> : <>
                                        <Link to='/login'>
                                            <button className="px-4 rounded-lg py-2 text-lg font-semibold text-white bg-[#ff8c00] hover:bg-[#e78f24] ml-2 md:block hidden">Login</button>
                                        </Link>
                                    </>
                                }


                            </div>

                            <div className='md:flex items-center md:ml-4'>
                                {user && (
                                    <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                                        <button className="">
                                            <img
                                                style={{
                                                    background: "white",
                                                    height: "40px",
                                                    width: "40px",
                                                    borderRadius: "50%",
                                                }}
                                                src={user?.photoURL}
                                                alt=""
                                            />

                                        </button>
                                    </div>

                                )}
                            </div>
                        </div>


                    </div>


                    <div onClick={handleNav} className='md:hidden mr-6'>
                        {!nav ? <AiOutlineMenu size={20} className='w-5' /> : <AiOutlineClose />}

                    </div>
                </div>
                {/* mobile menu  */}

                <div >
                    <div className={!nav ? 'hidden' : 'absolute bg-[#4ee9d9] w-full text-white  h-screen md:hidden px-8'}>
                        <p className='border-b-2 mb-4 border-[#ff8c00] w-full'>
                            <NavLink to="/">Home</NavLink>
                        </p>
                        <p className='border-b-2 mb-4 border-[#ff8c00] w-full'>
                            <NavLink to='/instructors'>Instructors</NavLink>
                        </p>
                        <p className='border-b-2 mb-4 border-[#ff8c00] w-full'>
                            <NavLink to='/classes'>Classes</NavLink>
                        </p>
                        {
                            user && <>
                                <NavLink to='/secret'>Secret</NavLink>
                            </>
                        }
                        <div className=''>
                            {
                                user ? <button onClick={handleLogOut} className="px-4 rounded-lg py-2 text-lg font-semibold text-white bg-[#ff8c00] hover:bg-[#e78f24] w-full">LogOut</button> : <Link to='/login'>

                                    <button className="px-4 rounded-lg py-2 text-lg font-semibold text-white bg-[#ff8c00] hover:bg-[#e78f24] w-full">login</button>
                                </Link>
                            }


                        </div>


                    </div>

                </div>

            </div>
        </>

    );
};

export default Navbar;