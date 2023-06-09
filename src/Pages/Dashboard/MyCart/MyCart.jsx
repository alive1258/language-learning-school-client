import React from 'react';
import { Helmet } from 'react-helmet-async';
import useClassCart from '../../../Hooks/useClassCart';
import { Link } from 'react-router-dom';


const MyCart = () => {
    const [cart] = useClassCart()
    const total = cart.reduce((sum, course) => course.price + sum, 0)
    return (
        <div className='w-full'>
            <Helmet>
                <title>Language Learning School | MyCart</title>
            </Helmet>
            <div className='uppercase  flex text-[#151515] items-center font-semibold h-24 justify-around'>
                <h3 className='text-3xl'>Total Items: {cart.length}</h3>
                <h3 className='text-3xl'>Total Price: ${total}</h3>
                <Link to='/dashboard/payment'>
                    <button className="btn btn-warning btn-sm">Pay</button>
                </Link>

            </div>
        </div>
    );
};

export default MyCart;