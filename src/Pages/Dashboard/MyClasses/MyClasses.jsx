import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { FaTrash } from 'react-icons/fa';
import useClasses from '../../../Hooks/useClasses';
import { Link } from 'react-router-dom';

const MyClasses = () => {
    const [classes, , refetch] = useClasses()

    const handleDelete = (course) => {
        console.log(course)
    }

    return (
        <div className='w-11/12'>
            <SectionTitle heading="All My Classes" />
            <div className="overflow-y-auto scroll-smooth w-full h-[650px] ">
                <table className="table  w-full">
                    {/* <!-- head --> */}
                    <thead >
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>course_name</th>
                            {/* <th>instructor</th> */}

                            <th>available_seats</th>
                            <th>Price</th>
                            
                            
                            <th>Enrolled Students</th>
                            <th>Feedback </th>
                            <th>Update</th>
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
                                {/* <td>
                                    {course.instructor}


                                </td> */}
                                <td>
                                    {course.available_seats}


                                </td>
                                <td>${course.price}</td>
                                <td>2</td>
                                <td>
                                <Link >
                                    <button className="btn btn-ghost btn-xs">FeedBack</button>
                                    </Link>
                                </td>
                                
                                <td>
                                    <Link to={`/dashboard/updatecourse/${course._id}`}>
                                    <button className="btn btn-ghost btn-xs">Update</button>
                                    </Link>
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

export default MyClasses;