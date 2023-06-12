import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../../assets/images/children.jpeg'
import banner2 from '../../../assets/images/banner2.jpg'
import banner3 from '../../../assets/images/banr3.jpg'
import banner4 from '../../../assets/images/banar4.jpg'
import banner5 from '../../../assets/images/as.jpg'
import './Banner.css'




const Banner = () => {




    return (
        <div className='pt-[96px]'>
            <Carousel >
                <div className='grid grid-cols-2 items-center bg-[#e8e2ec]  gap-8 p-10'>
                    <div>
                        <img className='rounded-2xl' src={banner1} />
                    </div>
                    <div className='md:px-10'>
                        <h1 className="md:text-3xl  font-bold ">Putting Children First.
                            Preparing Children  For
                            Success In Life</h1>
                        <p className='md:pt-8 md:block hidden'>Preparing children for success in life involves equipping them with
                            essential life skills, such as problem-solving, communication, and
                            resilience.Nurturing their curiosity and fostering a love for learning
                            sets the foundation for a lifelong pursuit of knowledge and personal growth.</p>

                    </div>
                </div>
                <div className='grid grid-cols-2 items-center bg-[#e8e2ec] p-10'>
                    <img className='rounded-2xl' src={banner2} />
                    <div className='md:px-10 '>
                        <h1 className="md:text-3xl font-bold ">Experience Effective Language <br /> Education at our School</h1>
                        <p className='md:pt-8 md:block hidden'>Our dedicated team of experienced language teachers utilizes innovative teaching methods to create an engaging and interactive learning environment.
                            We offer a comprehensive language curriculum that focuses on all aspects of language acquisition, including reading, writing, listening, and speaking.</p>

                    </div>
                </div>
                <div className='grid grid-cols-2 items-center bg-[#e8e2ec] p-10'>
                    <img className='rounded-2xl' src={banner3} />
                    <div className='md:px-10'>
                        <h1 className="md:text-3xl font-bold ">Transform Your Communication Skills <br /> at our Language School</h1>
                        <p className='md:pt-8 md:block hidden'>Our experienced and passionate language instructors provide personalized guidance and support to help you achieve your language goals.
                            Whether you're a beginner or an advanced learner, we offer a wide range of language courses tailored to your proficiency level and learning needs.</p>
                    </div>


                </div>
                <div className='grid grid-cols-2 items-center bg-[#e8e2ec] p-10'>
                    <img className='rounded-2xl' src={banner4} />
                    <div className='md:px-10'>
                        <h1 className="md:text-3xl  font-bold ">To have another
                            language is to  <br /> possess
                            a second soul</h1>
                        <p className='md:pt-8 md:block hidden '>
                            pHaving a second language is like having a key that opens doors to different communities, allowing for deeper connections and understanding.
                            It is through the mastery of a second language that we can truly appreciate the nuances and intricacies of different cultures and their unique ways of thinking.
                        </p>


                    </div>
                </div>

                <div className='grid grid-cols-2 items-center bg-[#e8e2ec] p-10'>
                    <img className='rounded-2xl' src={banner5} />
                    <div className='md:px-10'>
                        <h1 className="md:text-3xl font-bold">
                            Teaching Turning
                            Today's Learners <br /> Into
                            Tomorrow's Leaders</h1>
                        <p className='md:pt-8 md:block hidden '>
                            We strive to provide an innovative and forward-thinking learning environment that equips students with the knowledge, skills, and values necessary for leadership in the future.
                            Our dedicated educators are passionate about nurturing the potential of each student, fostering critical thinking, creativity, and problem-solving abilities.
                        </p>
                    </div>


                </div>

            </Carousel>

        </div>



    )
}



export default Banner;
