import React from 'react';

const Instructor = ({instructors}) => {
    const {instructor_name,image,email}=instructors
    // const {name,image,email}=instructors
    return (
        <div>
               <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img className='h-44 w-full' src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
          {instructor_name}
          {/* {name} */}
            
          </h2>
          <p>Instructor Email: <span className='font-semibold'>{email}</span></p>
        
          <div className="card-actions my-4">
            <button className='btn'>See more</button>
            
          </div>
        </div>
      </div>
        </div>
    );
};

export default Instructor;