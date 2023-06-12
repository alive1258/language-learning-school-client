import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/images/logo.png'
import './Navbar.css'
import { AiOutlineClose, AiOutlineMenu, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsFillMoonFill } from 'react-icons/bs';
import { HiOutlineLightBulb } from 'react-icons/hi';
import useAuth from '../../../Hooks/useAuth';
import useClassCart from '../../../Hooks/useClassCart';
import useAdmin from '../../../Hooks/useAdmin';
import useInstructor from '../../../Hooks/useInstructor';

const Navbar = () => {
    const { user, logOut } = useAuth()
    const [cart] = useClassCart()
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()


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
            <div className='max-w-screen-2xl bg-[#cbf8f8] w-full fixed z-10'>

                <div className='py-2 md:px-10 text-gray-700 flex justify-between items-center '>


                    <div className='flex items-center gap-2'>
                        <div className=''>
                            <Link to='/'>
                                <img className='h-20 w-20' src={logo} alt="" />
                            </Link>
                        </div>
                        <div className='md:text-2xl text-xl  font-bold mb-2'><span className='text-blue-500'>Language Learning</span> School</div>
                    </div>

                    <div className="md:flex items-center hidden gap-8 text-lg font-semibold">
                        <NavLink to="/" >Home</NavLink>
                        <NavLink to='/Instructors' >Instructors</NavLink>
                        <NavLink to='/classes' >Classes</NavLink>

                        {
                            isAdmin ? <>

                                <NavLink to='/dashboard/adminhome' >Dashboard</NavLink>


                            </> :
                                isInstructor ? <>

                                    <NavLink to='/dashboard/instructorhome' >Dashboard</NavLink>

                                </> : <>

                               {
                                user && (
                                    <div>
                                             <NavLink to='/dashboard/studenthome' >Dashboard</NavLink>
                                    <NavLink to='/dashboard/mycart' className='mx-4 mt-4'>
                                        <button className="relative text-gray-700">
                                            <div><AiOutlineShoppingCart size={25} className='' /></div>

                                            <div className="badge absolute -top-4" >+{cart?.length || 0}</div>
                                        </button>

                                    </NavLink>
                                    </div>
                                )

                               }

                                </>



                        }



                        <div className="md:flex justify-center items-center">



                            <div className='md:block hidden'>
                                {
                                    user ? <>

                                        <button onClick={handleLogOut} className="px-4 rounded-lg py-2 text-lg font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-400 w-full">LogOut</button>
                                    </> : <>
                                        <Link to='/login'>
                                            <button className="px-4 rounded-lg py-2 text-lg font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-400 ml-2 md:block hidden">Login</button>
                                        </Link>
                                    </>
                                }


                            </div>

                            <div className='md:flex items-center md:ml-4'>
                                {
                                user && (
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
                        <div className='md:block hidden'>
                            <button onClick={handleToggleTheme} className='border-2 border-indigo-500 px-4 py-2 rounded-xl'>

                                {!theme ? < HiOutlineLightBulb size={20} className='w-5 text-[#8b83f9]' /> : <BsFillMoonFill size={20} className='text-black' />}

                            </button>
                        </div>


                    </div>


                    <div onClick={handleNav} className='md:hidden mr-6'>
                        {!nav ? <AiOutlineMenu size={20} className='w-5' /> : <AiOutlineClose />}

                    </div>
                </div>
                {/* mobile menu  */}

                <div >
                    <div className={!nav ? 'hidden' : 'absolute bg-gray-200 font-semibold w-full text-white  h-screen md:hidden px-8'}>
                        <p className='border-b-2 mb-4 border-purple-500 w-full'>
                            <NavLink to="/">Home</NavLink>
                        </p>
                        <p className='border-b-2 mb-4 border-purple-500 w-full'>
                            <NavLink to='/instructors'>Instructors</NavLink>
                        </p>
                        <p className='border-b-2 mb-4 border-purple-500 w-full'>
                            <NavLink to='/classes'>Classes</NavLink>
                        </p>
                        {
                            user && <>
                                <NavLink to='/secret'>Dashboard</NavLink>
                            </>
                        }
                        <div className=''>
                            {
                                user ? <button onClick={handleLogOut} className="px-4 rounded-lg py-2 text-lg font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-400 w-full">LogOut</button> : <Link to='/login'>

                                    <button className="px-4 rounded-lg py-2 text-lg font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-400 w-full">login</button>
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