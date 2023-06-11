import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
// import useClassCart from '../../../Hooks/useClassCart';
import { useParams } from 'react-router-dom';
// import MyCartTable from '../MyCartTable/MyCartTable';
// import { useLoaderData } from 'react-router-dom';
// import useAxiosSecure from './../../../Hooks/useAxiosSecure';
// import { data } from 'autoprefixer';

const Payment = () => {
    // const [cart, refetch] = useClassCart()
    // const [axiosSecure]=useAxiosSecure()
    const { id } = useParams()
    console.log("id", id)
    const [data, setData] = useState(null);
    // const [cart, setCart] = useState(null);



    useEffect(() => {
        fetch(`http://localhost:5000/carts/${id}`)
            .then(res => res.json())
            .then(data => {
                // setCart(data)
                setData(data)
            })

    }, [id])
    // const singleCourse = useLoaderData()

    //    const {_id, image, price, course_name,instructor,available_seats} = cart;

    // console.log('cart',cart)

    return (
        <div className='w-11/12'>
            <SectionTitle heading="payment Your Course" />

            {/* <div>
                ${cart.price}
            </div> */}
            <div>
      {/* Display the fetched data */}
      {data ? (
        <div>
          <h2>{data.price}</h2>
          {/* <p>{data.description}</p> */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
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