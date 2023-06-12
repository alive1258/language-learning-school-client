import React from 'react';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useClassCart from '../../Hooks/useClassCart';
import useAdmin from '../../Hooks/useAdmin';
import useInstructor from '../../Hooks/useInstructor';

const ClassCart = ({ course }) => {
  const { _id, image, price, course_name, instructor, available_seats } = course;

  const { user } = useAuth()
  const [, refetch] = useClassCart()
  const navigate = useNavigate()
  const location = useLocation()
  const [isAdmin] = useAdmin()
  const [isInstructor] = useInstructor()



  // console.log(course)
  const handleAddToCart = (course) => {

    
      let user_type = 0;
      if(isAdmin == true){
        user_type = 1;
      } else if(isInstructor == true) {
        user_type = 1;
      } else {
        user_type = 0;
      }

      if (user_type == 1) {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'You can not enroll, because you are not student',       
          showConfirmButton: false,
          timer: 1500
        })
        return false;
      }


    console.log('course', course)
    if (user && user.email) {
      const cartItem = { courseItemId: _id, course_name, image, price, instructor, available_seats, email: user.email }

      fetch('https://language-learning-school-server-bay.vercel.app/carts', {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(cartItem)
      })
        .then(res => res.json())
        .then(data => {

          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Course added on the cart',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
    }
    else {
      Swal.fire({
        title: 'Please login to Enroll the Course',
        // text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login Now'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } })
        }
      })
    }



  }
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure><img className='w-full h-44' src={image} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">
          {course_name}

        </h2>
        <p className='text-gray-700'>Instructor Name: <span className='font-semibold '>{instructor}</span></p>
        <div className='flex'>
          <p className='text-gray-700'>Price: ${price}</p>
          <p className='text-gray-700'>Available Seats: {available_seats}</p>
        </div>
        <div className="card-actions my-4">

        

          <button  onClick={()=>handleAddToCart(course)} className='px-4 rounded-lg py-2 text-lg font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-400'>Enroll Now</button>

        </div>
      </div>
    </div>
  );
};

export default ClassCart;