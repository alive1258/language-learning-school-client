import React from 'react';
import { Helmet } from 'react-helmet-async';
import useClassCart from '../../../Hooks/useClassCart';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import MyCartTable from '../MyCartTable/MyCartTable';



const MyCart = () => {
    const [cart, refetch] = useClassCart()
    const total = cart.reduce((sum, course) => course.price + sum, 0)
    // const availableSeat = cart.reduce((subtract, course) => course.available_seats - subtract, 0)

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })


            }
        })

    }


    return (
        <div className='w-11/12 pb-20 px-4 shadow-xl '>
            <Helmet>
                <title>Language Learning School | MyCart</title>
            </Helmet>
            <div className='uppercase w-full flex text-[#151515] items-center font-semibold h-24 justify-evenly'>
                <h3 className='text-3xl'>Total Items: {cart.length}</h3>
                <h3 className='text-3xl'>Total Price: ${total}</h3>
                {/* <h3 className='text-3xl'>availableSeat: {availableSeat}</h3> */}
                {/* <Link to='/dashboard/payment'>
                    <button className="btn btn-warning btn-sm">Pay</button>
                </Link> */}

            </div>
            <div className="overflow-y-auto overflow-x-auto scroll-smooth w-11/12 h-[650px]">
                <table className="table w-full">
                    {/* head */}
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
                        {/* const {_id, image, price, course_name,instructor,available_seats} = course; */}
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
            </div>

        </div>
    );
};

export default MyCart;