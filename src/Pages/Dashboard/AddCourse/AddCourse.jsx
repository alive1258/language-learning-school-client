import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
const AddCourse = () => {

    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const { register, handleSubmit, reset } = useForm();
    // console.log('img_hosting_token',img_hosting_token)
    const img_hosting_url = `https://api.imgbb.com/1/upload?&key=${img_hosting_token}`

    const onSubmit = data => {

        const formData = new FormData();
        formData.append('image', data.image[0])
        console.log('data', data)

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                console.log(imgResponse)
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;

                    const { course_name, price, instructor, email, available_seats } = data
                    const courseItem = { course_name, price: parseFloat(price), instructor, email, available_seats, image: imgURL }
                    console.log(courseItem)
                    axiosSecure.post('/classes',courseItem)
                    .then(data=>{
                        console.log('after posting new course Item', data.data)
                        if(data.data.insertedId){
                            reset();
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'course added successfully',
                                showConfirmButton: false,
                                timer: 1500
                              })

                        }

                    })


                }

            })

    }

    return (
        <div className='w-11/12 '>
            <SectionTitle heading="Add a New Course" />
            {/* <h1>{user?.displayName}</h1>
            <h1>{user?.email}</h1> */}

            <form onSubmit={handleSubmit(onSubmit)} className='h-[500px] shadow-xl p-8 rounded-lg'>

                <div className='grid grid-cols-2 gap-4'>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold"> Instructor name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} readOnly
                            {...register("instructor", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold"> Instructor Email</span>
                        </label>
                        <input type="email" defaultValue={user?.email} readOnly
                            {...register("email", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold"> Class name</span>
                        </label>
                        <input type="text"
                            placeholder="Class name"
                            {...register("course_name", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Class Image*</span>
                        </label>
                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full " />
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Available seats</span>
                        </label>
                        <input type="number" {...register("available_seats", { required: true })} placeholder="Available seats" className="input input-bordered w-full " />
                    </div>


                </div>
                <input className="btn btn-lg mt-4" type="submit" value="Add Course" />




            </form>



        </div>
    );
};

export default AddCourse;