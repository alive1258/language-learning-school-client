import React from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';

import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaBook, FaUsers } from 'react-icons/fa';
import { MdManageHistory ,MdOutlinePeople} from 'react-icons/md';
// import { FaPeopleLine } from 'react-icons/fa';
import { BsBook } from 'react-icons/bs';
import { AiOutlineFileAdd } from 'react-icons/ai';
import useClassCart from '../Hooks/useClassCart';
import useAdmin from '../Hooks/useAdmin';
import useInstructor from '../Hooks/useInstructor';

const Dashboard = () => {
    const [cart] = useClassCart()
    // const isAdmin = true


    const [isAdmin] = useAdmin()

    const [isInstructor] = useInstructor()
    // console.log(isInstructor)

    return (
        <div>
            <Navbar></Navbar>
            <div className='pt-24  fixed w-full'>
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content ">
                        <Outlet></Outlet>
                        {/* <h1 className=''>skdljgh </h1> */}
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 h-full text-white bg-gray-300 text-lg font-semibold">
                            {/* Sidebar content here */}


                            {
                                isAdmin ? <>
                                    <li>

                                        <li><NavLink to='/dashboard/adminhome'><FaHome />Admin Home</NavLink></li>
                                        <li><NavLink to='/dashboard/manageclasses'><MdManageHistory />Manage Classes</NavLink></li>
                                        <li><NavLink to='/dashboard/history'><FaBook />Manage Booking</NavLink></li>
                                        <li><NavLink to='/dashboard/allusers'><FaUsers />All Users</NavLink></li>

                                    </li>
                                    </> : 
                                    isInstructor ? <>
                                        <li>
                                            <li><NavLink to='/dashboard/instructorhome'><FaHome />Instructor Home</NavLink></li>
                                            <li><NavLink to='/dashboard/addcourse'><AiOutlineFileAdd />Add an course</NavLink></li>
                                            <li><NavLink to='/dashboard/myclasses'><BsBook />My Classes</NavLink></li>
                                            <li><NavLink to='/dashboard/enrollstudents'><MdOutlinePeople />Total Enrolled Students</NavLink></li>
                                        </li>
                                        </>: 
                                        <>
                                            <li><NavLink to='/dashboard/studenthome' ><FaHome />User Home</NavLink></li>
                                            <li><NavLink to='/dashboard/reservations'><FaCalendarAlt />Reservations</NavLink></li>
                                            <li><NavLink to='/dashboard/history'><FaWallet />Payment History</NavLink></li>
                                            <li>
                                                <NavLink to='/dashboard/mycart'><FaShoppingCart />
                                                    My Cart <span className="">+{cart?.length || 0}</span>

                                                </NavLink>

                                            </li>
                                        </>
                                    
                                
                            }


                            {/* <!-- Sidebar content here --> */}


                            <div className='border-b my-4 text-[#ffffff]'></div>
                            {/* <li><NavLink to='/'><FaHome /> Home</NavLink></li>
                        <li><NavLink to='/menu'><GiHamburgerMenu /> Our Menu</NavLink></li>
                        <li><NavLink to='/order/salad'><FaHome /> Order Food</NavLink></li> */}

                        </ul>

                    </div>
                </div>
            </div>



        </div>
    );
};

export default Dashboard;