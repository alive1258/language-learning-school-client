import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useRouteError } from 'react-router-dom';
import erroepic from '../../assets/images/errorpic.png'

const ErrorPage = () => {
    const error=useRouteError()
    return (
        <div>
            <Helmet>
                <title>Language Learning School | Error Page</title>
            </Helmet>

            <div>
            <div id="error-page" className='text-center mt-10'>
           <div className='flex justify-center'>
           <img className='w-1/2 rounded-lg'
                    src={erroepic}
                    alt=""
                />
           </div>
                
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
            <div className="text-center">
              
              
            </div>
            <div className="text-center mt-6">
                <button className='bg-blue-400 p-4 rounded-lg text-white font-bold'><Link to='/'>Go Back to Home</Link></button>
            </div>
        </div>
        </div>
    );
};

export default ErrorPage;