import React, { useState } from 'react';
import googlelogo from '../../assets/images/google.png'
import useAuth from '../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    // const [userInfos, setUserInfos] = useState(null);
    const from = location.state?.from?.pathname || "/"

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser)
                // setUserInfos(loggedInUser)
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true })
                    })
            
            })
            .catch((error) => {
                console.log(error.massage);
            });
    }
    return (
        <div className='px-8'>
            <div className='divider'></div>

            <div className='text-center pb-12'>
                <button onClick={handleGoogleSignIn} className='flex justify-center items-center border py-1 rounded-lg px-8 w-full'>
                    <img className='w-16 h-14' src={googlelogo} alt="" />
                    {/* <FaGoogle size={25} className=''></FaGoogle> */}
                    Google Login
                </button>

            </div>
        </div>
    );
};

export default SocialLogin;