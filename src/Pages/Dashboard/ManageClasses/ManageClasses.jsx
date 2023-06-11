import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useClasses from '../../../Hooks/useClasses';
import useAuth from '../../../Hooks/useAuth';

const ManageClasses = () => {
    const [classes] = useClasses()
    const { user } = useAuth()
    return (
        <div className='w-11/12'>
            <SectionTitle heading="Manage All Classes" />

            <div className="overflow-y-auto overflow-x-auto scroll-smooth w-full h-[650px] ">
                <table className="table  w-full">
                    {/* <!-- head --> */}
                    <thead >
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>course_name</th>
                            <th>instructor</th>
                            

                            <th>available_seats</th>
                            <th>Price</th>
                            <th>email</th>
                            
                            
                            {/* <th>Enrolled Students</th> */}
                            <th>Feedback </th>
                           
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* const { course_name, price, instructor, email, available_seats } = data */}
                        {
                            classes.map((course, index) => <tr key={course._id} >

                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask  w-16 h-14 rounded-md">
                                                <img src={course.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    <div className="font-bold">{course.course_name}</div>

                                </td>
                                <td>
                                    {course.instructor}
                                    <br />
                                    


                                </td>
                                <td>
                                    {course.available_seats}


                                </td>
                                <td>${course.price}</td>
                                <td>{course.email}</td>
                                {/* <td>{user.email}</td> */}
                                {/* <td>2</td> */}
                                <td>
                                
                                    <button className="btn btn-ghost btn-xs">FeedBack</button>
                                  
                                </td>
                                
                                <td>
                                   
                                    <button className="btn btn-ghost btn-xs">Approve</button>
                                 
                                </td>
                                <td>
                                   
                                    <button className="btn btn-ghost btn-xs">Deny </button>
                                 
                                </td>
                                {/* <td>
                                    <button onClick={() => handleDelete(course)} className="btn btn-ghost  bg-red-500 text-white"><FaTrash /></button>
                                </td> */}
                            </tr>
                            )
                        }






                    </tbody>


                </table>
            </div>


        </div>
    );
};

export default ManageClasses;