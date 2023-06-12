import React from 'react';
import esy1 from '../../../assets/images/esy1.svg';
import easip from '../../../assets/images/easip.png';
import easip2 from '../../../assets/images/easip2.png'
import { Fade } from "react-awesome-reveal";
import Reveal from 'react-awesome-reveal';
import { Slide } from 'react-awesome-reveal';

import './EasyLearn.css'

const EasyLearn = () => {
    return (
        <div className='md:px-24 px-6 py-28 '>
            <div className='border11 '>
                <div className='back22 absolute'>

                    <div className='flex items-center justify-center md:mt-16 mt-4'>
                        <div className=''>
                            <Reveal effect={Fade} duration={1000} delay={200}>
                                <div>
                                    <p className='text-[#51825C] font-semibold flex items-center justify-center mb-4 md:text-2xl '>How it works</p>
                                    <h1 className='text-[#585858] font-semibold text-center md:text-5xl '>Easiest Learning Way</h1>
                                    <div className='border-b-2 border-[#51825C]  mt-6 md:ml-28 w-60'> </div>

                                </div>
                            </Reveal>




                        </div>
                    </div>

                    <div className='md:mt-12 md:relative'>

                        <div className='md:flex items-center justify-center gap-16 '>
                            <Reveal effect={[Fade, Slide]} duration={1000} delay={200}>
                                <div>
                                    <div className='easicar1 md:flex-col flex md:mt-2 gap-4 mt-6'>
                                        <img className='w-24 h-24' src={esy1} alt="" />
                                        <div className='mt-4 flex '>
                                            <div className='flex flex-col'>
                                                <h1 className='font-semibold text-lg text-[#323232] mb-4'>Find Instructors</h1>
                                                <span className='text-sm '> Choose your ideal teacher </span>
                                                <p className='text-sm '>from over 100 qualified  tutors. <br /> Our Learning School</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>


                       
                            <div className='easicar2 md:flex-col flex md:mt-2 gap-4 mt-6'>
                                <img className='w-24 h-24' src={easip} alt="" />
                                <div className='mt-4 flex '>
                                    <div className='flex flex-col'>
                                        <h1 className='font-semibold text-lg text-[#323232] mb-4'>Schedule a class </h1>
                                        <span className='text-sm '> Find the perfect time for </span>
                                        <p className='text-sm '>your schedule.Book lesson</p>
                                        <span className='text-sm '> in seconds via all devices</span>

                                    </div>
                                </div>
                            </div>
                           

                            <Reveal effect={[Fade, Slide]} duration={1000} delay={200}>
                            <div className='easicar3 md:flex-col flex gap-4 md:mt-2 mt-6'>
                                <img className='w-24 h-24' src={easip2} alt="" />
                                <div className='mt-4 flex  '>
                                    <div className='flex  flex-col '>
                                        <h1 className='font-semibold text-lg text-[#323232] mb-4'>Start learning </h1>
                                        <span className='text-sm '> Join class on time, as simple </span>
                                        <p className='text-sm '>as that being punctual and <br /> clicking on the provided meeting link </p>
                                    </div>
                                </div>
                            </div>

                            </Reveal>
                        </div>

                    </div>
                    <div className='baton flex items-center justify-center mt-14'>
                        <button className="px-4 rounded-lg py-2 text-lg font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-400 ">
                            Book a Free Trial
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EasyLearn;