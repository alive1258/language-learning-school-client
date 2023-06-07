import React from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import signup from '../../assets/images/signup.png'


const SignUp = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        // Handle form submission
        console.log(data);
    };

    return (
        <div className='pt-28 px-10'>
            <Helmet>
                <title>Language Learning School | SignUp</title>
            </Helmet>
            <SectionTitle heading="Sign Up" />

            <div className='shadow-xl grid grid-cols-2 '>

                <div>
                    <form className='p-12' onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name='name' placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className='text-red-600'>Name is required</span>}
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
                                <input type="password" name='password' {...register("password", { required: true, minLength: 6,  pattern: /(?=.*?[A-Z])(?=.*?[@$!%*#?&])/ })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className='text-red-600'> password is required</p>}
                                {errors.password?.type === 'minLength' && <p className='text-red-600'> password must be 6 characters</p>}

                                {errors.password?.type === 'pattern' && <p className='text-red-600'>don't have a capital letter ,don't have a special character </p>}



                                
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" {...register("confirmPassword", { required: true })} placeholder="Confirm Password" className="input input-bordered" />
                                {errors.confirmPassword && <span className='text-red-600'>Confirm Password is required</span>}
                            </div>

                       <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" {...register("photoUrl", { required: true })} placeholder="photo Url" className="input input-bordered" />
                                {errors.photoUrl && <span className='text-red-600'>photoUrl is required</span>}
                            </div>





                        <div className='mt-4'>
                            <input type="submit" className='btn ' />
                        </div>
                        <div className='mt-6'>
                            <p><small>New Here ? <Link to='/login'><span className='text-blue-400'>Create an Account</span></Link></small></p>

                        </div>
                    </form>
                </div>
                <div>
                    <img src={signup} alt="" />
                </div>
            </div>

        </div>
    );
};

export default SignUp;