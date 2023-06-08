import React from 'react';

const PopularCourse = ({ course }) => {
    const { image, price, course_name,instructor,available_seats} = course;
    // console.log(course)
    return (
     
        <div className="card  bg-base-100 shadow-xl">
        <figure><img className='w-full h-44' src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
          {course_name}
            
          </h2>
          <p>Instructor Name: <span className='font-semibold'>{instructor}</span></p>
         <div className='flex'>
         <p>Price: ${price}</p>
          <p>Available Seats: {available_seats}</p>
         </div>
          <div className="card-actions my-4">
            <button className='btn'>buy Now</button>
            
          </div>
        </div>
      </div>
      
    );
};

export default PopularCourse;