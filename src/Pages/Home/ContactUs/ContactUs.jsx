import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const ContactUs = () => {
    return (
       
             <div className='mb-10 md:mb-24 md:mt-28 md:px-28 '>
                <SectionTitle heading="CONtact us"/>
                <p className='text-center'>Please feel free to contact us for any inquiries or assistance you may require. 
                We are here to help!<br /> If you have any questions, concerns, or feedback, please don't 
                hesitate to<br />  reach out to us. Our dedicated team is ready to assist you.
                </p>
            <div className='bg-white px-6 md:px-20 py-12 shadow-2xl mb-4 mt-8 rounded-xl'>
               
                 
                    <div >
                       
                        <div className='md:flex gap-6'>
                            <input type="text" placeholder="First Name" className="input input-bordered bg-white  w-full md:mt-2" />
                            <input type="text" placeholder="Last Name" className="input input-bordered bg-white  w-full md:mt-2 mt-4" />

                        </div>
                        <div className='md:flex gap-6 mt-4'>
                            <input type="text" placeholder="Phone" className="input input-bordered w-full bg-white  md:mt-2" />
                            <input type="text" placeholder="Email" className="input input-bordered w-full bg-white  md:mt-2 mt-4" />

                        </div>
                        <div className='mt-4'>
                            <input type="text" placeholder="Adress" className="input bg-white  input-bordered w-full " />
                        </div>

                        <div className='mt-10'>
                        <textarea className="textarea bg-white  textarea-bordered h-36 w-full" placeholder="Message or description"></textarea>

                        </div>
                        <div className='mt-8 flex justify-end'>
                        <button className="ml-6 md:block hidden p-4 rounded-lg  text-lg font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-400">
                        Send Message
                            </button>
                        </div>
                    </div>

                </div>
     
        </div>
      
    );
};

export default ContactUs;