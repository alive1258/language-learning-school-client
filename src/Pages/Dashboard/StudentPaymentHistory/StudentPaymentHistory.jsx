import React from 'react';
import usePayment from '../../../Hooks/usePayment';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const StudentPaymentHistory = () => {
    const [payment, refetch] = usePayment()
    console.log('payment', payment)
    return (
        <div>
            <div className='w-11/12'>
                <SectionTitle heading="all my payment history" />

                <div className="overflow-y-auto overflow-x-auto scroll-smooth w-full h-[650px] ">
                    <table className="table  w-full">
                        {/* <!-- head --> */}
                        <thead >
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>transactionId</th>
                                <th>Date</th>
                                <th>Price</th>
                                {/* <th>instructor</th>
                                <th>Course name</th> */}
                                <th>email</th>

                            </tr>
                        </thead>
                        <tbody>

                            {
                                payment.map((course, index) => <tr key={course._id} >

                                    <td>
                                        {index + 1}
                                    </td>

                                    <td>
                                        {course.transactionId}
                                        <br />
                                    </td>
                                    <td>
                                        {course.date}
                                    </td>
                                    <td>${course.price}</td>
                                    {/* <td>{course.instructor}</td>
                                    <td>{course.itemNames}</td> */}
                                    <td>{course.email}</td>

                                </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default StudentPaymentHistory;