import React from 'react';

import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import signup from '../../assets/images/signup.png'
import { Helmet } from 'react-helmet-async';
import useAuth from '../../Hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../SocialLogin/SocialLogin';



const SignUp = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const { createUser, updateUserProfile } = useAuth()

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)

                updateUserProfile(data.name, data.photoUrl)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email }
                        fetch('https://language-learning-school-server-bay.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset()
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'user created successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate('/')
                                }

                            })


                    })
                    .catch(error => console.log(error))


            })
    };





    return (
        <div className='pt-28 w-full px-10'>
            <Helmet>
                <title>Language Learning School | SignUp</title>
            </Helmet>
            <SectionTitle heading="Sign Up" />

            <div className='shadow-xl grid grid-cols-2 '>

                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} name='name' placeholder="Name" className="input input-bordered" />
                            {errors.name && <span className='text-red-600'>Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" {...register("photoUrl", { required: true })} placeholder="photo Url" className="input input-bordered" />
                            {errors.photoUrl && <span className='text-red-600'>photoUrl is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            {errors.email && <span className='text-red-600'>email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' {...register("password", { required: true, minLength: 6, pattern: /(?=.*?[A-Z])(?=.*?[@$!%*#?&])/ })} placeholder="password" className="input input-bordered" />
                            {errors.password?.type === 'required' && <p className='text-red-600'> password is required</p>}
                            {errors.password?.type === 'minLength' && <p className='text-red-600'> password is less than 6 characters</p>}
                            {errors.password?.type === 'pattern' && <p className='text-red-600'> don't have a capital letter,don't have a special character </p>}



                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='confirmPassword' {...register("confirmPassword", { required: true })} placeholder="Confirm Password " className="input input-bordered" />
                            {errors.confirmPassword && <span className='text-red-600'>password is required</span>}
                        </div>

                        <div className="form-control mt-6">

                            <input type="submit" value='Sign Up' className="btn btn-primary" />
                        </div>
                        <div className='pt-6'>
                            <p><small>Already Have an Account ? <Link to='/login'><span className='text-blue-400'>Login Here</span></Link></small></p>

                        </div>

                    </form>
                    <div>
                    <div>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
                </div>
              
                <div className=''>
                    <img src={signup} alt="" />
                </div>
            </div>

        </div>
    );
};

export default SignUp;