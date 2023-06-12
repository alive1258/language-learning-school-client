import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png'
import { FaFacebookF, FaPinterestP } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { AiFillYoutube } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';

const Footer = () => {
  return (
    <div className="px-6 md:mt-36 md:px-10 bg-gray-200 md:py-10  ">
      <div className="py-6">
        <div className="grid  md:grid-cols-2 grid-cols-1 gap-10  pb-8">
          <div>
            <div className='flex items-center gap-2'>
              <div className=''>
                <Link to='/'>
                  <img className='h-20 w-20' src={logo} alt="" />
                </Link>
              </div>
              <div className='text-2xl font-bold mb-2'><span className='text-blue-400'>Language Learning</span> School</div>
            </div>
            <div className="pt-6 ">
              <p className=''>
                Our Language Learning School provides a comprehensive and immersive<br />
                environment for individuals to acquire fluency and proficiency in multiple<br />
                languages, enabling them to communicate effectively and embrace diverse<br />
                cultures. With experienced instructors and a tailored curriculum, we offer a <br />
                dynamic and engaging learning experience that empowers students to <br /> achieve their language learning goals.
              </p>
              <div className='flex mt-4 items-center gap-2'> <GoLocation size={30} />

                47 W 13th St, 
                 New York, NY 10003, USA
              </div>
            </div>
          </div>
          <div>
            <div className="grid md:grid-cols-3 grid-cols-2 md:pt-6 gap-4">
              <div className=''>
                <p className="text-lg pb-6 font-semibold">Get To Know Us</p>
                <div className=''>
                  <p>Home</p>

                  <p>Instructors</p>
                  <p>Classes</p>
                  <p>Contact us</p>
                  <p>Careers</p>
                </div>
              </div>
              <div>
                <p className="text-lg pb-6 font-semibold">Let Us Help You</p>
                <div className=''>
                  <p>Your Account</p>
                  <p>Order History</p>
                  <p>Support 24/7</p>
                  <p>Terms and Conditions</p>
                  <p>Payment Information</p>
                </div>
              </div>
              <div>
                <p className="text-lg pb-6  font-semibold">Contact US</p>
                <div className=''>
                  <p>Email: school.usa@gmail.com</p>
                  <p>Phone: +420703666872</p>
                  <p>Tel: +444 333 22</p>
                  {/* <p>French Langues</p>
                <p>chinese Langues</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='border-b border-black'></div>
        <div className="pt-4 pb-4 flex justify-between ">

          <div>
            <p className="font-semibold">
              © Copyright 2023, All Rights Reserved by Language Learning School
            </p>
          </div>

          <div>
            <div className="flex gap-4">
              <p className="font-semibold">Follow us on:</p>

              <div className='bg-gray-400 hover:bg-[#28589c] text-white h-8 w-8 rounded-full flex items-center justify-center'>
                <FaFacebookF />
              </div>
              <div className='bg-gray-400 hover:bg-[#E1306c] text-white h-8 w-8 rounded-full flex items-center justify-center'>
                <BsInstagram />
              </div>
              <div className='bg-gray-400 hover:bg-[#ff0000] text-white h-8 w-8 rounded-full flex items-center justify-center'>
                <AiFillYoutube />

              </div>
              <div className='bg-gray-400 hover:bg-[#a01c23] text-white h-8 w-8 rounded-full flex items-center justify-center'>
                <FaPinterestP />
              </div>



            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;