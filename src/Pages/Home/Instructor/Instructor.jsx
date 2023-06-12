import React from 'react';


const Instructor = ({ instructors }) => {
  const { instructor_name, image, email } = instructors
  // const {name,image,email}=instructors
  

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img className='h-44 w-full' src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-gray-700">
            {instructor_name}
            {/* {name} */}

          </h2>
          <p className='text-gray-700'>Instructor Email: <span className='font-semibold '>{email}</span></p>

          <div className="card-actions my-4">



            
            <button className='px-4 rounded-lg py-2 text-lg font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>See More</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;