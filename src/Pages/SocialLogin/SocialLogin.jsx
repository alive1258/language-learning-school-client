import React, { useState } from 'react';
import googlelogo from '../../assets/images/google.png'
import useAuth from '../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {googleSignIn}=useAuth()
    const navigate=useNavigate()
    const location =useLocation()
    // const [userInfos, setUserInfos] = useState(null);
    const from = location.state?.from?.pathname || "/"

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser)
                // setUserInfos(loggedInUser)
                navigate(from, { replace: true })
            })
            .catch((error) => {
                console.log(error.massage);
              });
    }
    return (
        <div>
            <div className='divider'></div>

            <div className='my-4 text-center'>
                <button onClick={handleGoogleSignIn} className='btn  btn-circle btn-outline'>
                    <img src={googlelogo} alt="" />
                    {/* <FaGoogle size={25} className=''></FaGoogle> */}
                </button>

            </div>
        </div>
    );
};

export default SocialLogin;