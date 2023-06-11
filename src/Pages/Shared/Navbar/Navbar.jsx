import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/images/logo.png'
import './Navbar.css'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BsMoonStars,BsFillMoonFill } from 'react-icons/bs';
import { HiOutlineLightBulb } from 'react-icons/hi';
import useAuth from '../../../Hooks/useAuth';
import useClassCart from '../../../Hooks/useClassCart';

const Navbar = () => {
    const { user, logOut } = useAuth()
    const [cart] = useClassCart()


    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    // const [ light, setLight] = useState(false)
    // const handleToggleTheme = () => setLight(!light)


    const handleLogOut = () => {
        logOut()
            .then()
            .catch((error) => console.log(error));
    };

    const [theme, setTheme] = useState(false)

    const handleToggleTheme = () => {
        setTheme(!theme)

    }

    useEffect(() => {
        if (theme === true) {
            document.body.classList.add("dark")
        } else {
            document.body.classList.remove("dark")
        }

    }, [theme])

    return (
        <>
            <div className='bg-gray-200  max-w-screen-2xl w-full fixed z-10'>

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
                        <div>
                            <button onClick={handleToggleTheme} className='border-2 border-gray-400 px-4 py-2 rounded-xl'>
                                {/* <BsMoonStars /> */}
                                {!theme ? < HiOutlineLightBulb size={20} className='w-5 text-white' /> : <BsFillMoonFill size={20} className='text-black'/>}
                                {/* <BsFillMoonFill /> */}
                            </button>
                        </div>


                    </div>


                    <div onClick={handleNav} className='md:hidden mr-6'>
                        {!nav ? <AiOutlineMenu size={20} className='w-5' /> : <AiOutlineClose />}

                    </div>
                </div>
                {/* mobile menu  */}

                <div >
                    <div className={!nav ? 'hidden' : 'absolute bg-gray-200 w-full text-white  h-screen md:hidden px-8'}>
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