import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import login from '../../assets/images/login.png'
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        // Handle form submission
        console.log(data);
    };

    return (
        <div className='pt-28 px-10'>
            <Helmet>
                <title>Language Learning School | Login</title>
            </Helmet>
            <SectionTitle heading="Login"/>

            <div className='shadow-xl grid grid-cols-2 '>

                <div>
                <form className='p-12' onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Name</span>
                        </label>
                        <input
                        className="input input-bordered border-gray-500 w-full "
                            {...register("name", { required: true })}
                            aria-invalid={errors.name ? "true" : "false"}
                        />
                         {errors.name?.type === 'required' && <p role="alert">Name is required</p>}


                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input
                        className="input input-bordered border-gray-500 w-full "
                            {...register("email", { required: true })}
                            aria-invalid={errors.email ? "true" : "false"}
                        />
                         {errors.email?.type === 'required' && <p role="alert">Email is required</p>}


                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input
                        className="input input-bordered border-gray-500 w-full "
                            {...register("password", { required: true })}
                            aria-invalid={errors.password ? "true" : "false"}
                        />
                         {errors.password?.type === 'required' && <p role="alert">Password required</p>}


                    </div>

                   

                 

                    <input type="submit"  className='btn pt-6'/>
                    <div className='pt-6'>
                    <p><small>New Here ? <Link to='/signup'><span className='text-blue-400'>Create an Account</span></Link></small></p>

                    </div>
                </form>
                </div>
                <div>
                    <img src={login} alt="" />
                </div>
            </div>
            

            
        </div>
    );
};

export default Login;