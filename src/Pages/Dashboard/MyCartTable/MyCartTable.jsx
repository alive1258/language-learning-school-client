import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyCartTable = ({ item, index ,handleDelete}) => {
    return (
        <>
            <tr >
                <td>
                    {index + 1}
                </td>
                <td>
                    <div className="">
                        <div className="avatar">
                            <div className="mask rounded-md w-14 h-14">
                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>

                    </div>
                </td>
                <td>
                    {item.course_name}
                </td>
                <td className=''>
                    {item.instructor}
                </td>
                <td className=''>
                    {item.available_seats}
                </td>
                {/* parseFloat(total.toFixed(2)) */}
                <td className=''>${item.price}</td>
                <td>

                    <Link to={`/dashboard/payment/${item._id}`} >
                        <button className="btn btn-warning btn-md mr-4">Pay</button>
                    </Link>
                    <button onClick={() => handleDelete(item)} className="btn btn-ghost  bg-red-500 text-white"><FaTrash /></button>
                </td>
            </tr>
        </>
    );
};

export default MyCartTable;