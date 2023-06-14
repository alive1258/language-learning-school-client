import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';


const ManageClasses = () => {
    // const [classes] = useClasses()
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes')
        return res.data;
    })


    const handleClick = (course) => {
        fetch(`https://language-learning-school-server-bay.vercel.app/classes/admin/${course._id}`, {
            method: 'PATCH',

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: "Course is Approved",
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }

    const handleClickDeny = (course) => {
        fetch(`https://language-learning-school-server-bay.vercel.app/classes/instructor/${course._id}`, {
            method: 'PATCH',

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: "Course is Deney",
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }
    return (
        <div className='w-11/12'>
            <SectionTitle heading="Manage All Classes" />

            <div className="overflow-y-auto  scroll-smooth w-full h-[650px] ">
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
                                    {course.email}


                                </td>
                                <td>
                                    {course.available_seats}


                                </td>
                                <td>${course.price}</td>
                                {/* <td></td> */}
                                {/* <td>{user.email}</td> */}
                                {/* <td>2</td> */}
                                <td>
                                    <button>
                                        fedback
                                    </button>

                                    {/* You can open the modal using ID.showModal() method */}
                                    {/* <button className="btn" onClick={() => window.my_modal_3.showModal()}>open modal</button>
                                    <dialog id="my_modal_3" className="modal">
                                        <form method="dialog" className="modal-box">
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                            <h3 className="font-bold text-lg">Hello!</h3>
                                            <p className="py-4">Press ESC key or click on ✕ button to close</p>
                                        </form>
                                    </dialog> */}


                                </td>

                                <td>

                                    {
                                        course.status === 'approved' ? <span className='font-bold text-primary'>Course Approved </span> :
                                            <button onClick={() => handleClick(course)} className="p-2 rounded-lg bg-blue-500 text-white">approve</button>
                                    }
                                </td>
                                <td>


                                    {
                                        course.status === 'deny' ? <span className='font-bold text-orange-500'>Course Dinned </span> :
                                            <button onClick={() => handleClickDeny(course)} className="p-2 rounded-lg bg-blue-500 text-white">Deny</button>
                                    }

                                </td>
                                {/* <td>
                                {
                                    course.status === "approved"
                                }
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