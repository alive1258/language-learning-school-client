import React, { useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

import { useParams } from 'react-router-dom';
import useClassCart from '../../../Hooks/useClassCart';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {
    const [cart, refetch] = useClassCart()
    console.log('cart')


    const { id } = useParams()
    console.log("id", id)


    const singleCart = cart.find((c) => c._id == id)
    // const { _id, price, course_name, instructor, available_seats, image } = singleCart;
    console.log('singleCart', singleCart)
    const total = singleCart.price
    const price = parseFloat(total.toFixed(2))



    return (
        <div className='w-11/12 mx-10'>
            <SectionTitle heading="payment Your Course" />
            <div className="overflow-y-auto scroll-smooth w-full rounded-2xl h-[400px] px-10 shadow-2xl py-10">
                <table className="table  w-full">
                    <thead >
                        <tr>
                            <th>Image</th>
                            <th>course_name</th>
                            <th>instructor</th>
                            <th>available_seats</th>
                            <th>Price</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr  >
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask  w-16 h-14 rounded-md">
                                            <img src={singleCart.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="font-bold">{singleCart.course_name}</div>

                            </td>
                            <td>
                                {singleCart.instructor}
                            </td>
                            <td>
                                {singleCart.available_seats}


                            </td>
                            <td className='font-semibold'>${singleCart.price}</td>
                        </tr>

                    </tbody>
                </table>



                <div className=''>
                    <Elements stripe={stripePromise}>
                        <PaymentForm price={price} singleCart={singleCart}></PaymentForm>
                    </Elements>
                </div>

            </div>




        </div>
    );
};

export default Payment;

{/* <div className="overflow-y-auto overflow-x-auto scroll-smooth w-11/12 h-[650px]">
<table className="table w-full">
 
    <thead >
        <tr className=''>
            <th >
                #
            </th>
            <th>Image</th>
            <th>Course Name</th>
            <th>Instructor</th>
            <th>Available Seats</th>
            <th>Course Price</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
      
        {
            cart.map((item, index) =><MyCartTable
            key={item._id}
            item={item}
            index={index}
            
            ></MyCartTable>
            
            
            )
        }






    </tbody>


</table>
</div> */}