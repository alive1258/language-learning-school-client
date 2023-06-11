import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../../assets/images/children.jpeg'
import banner2 from '../../../assets/images/banner2.jpg'
import banner3 from '../../../assets/images/banr3.jpg'
import banner4 from '../../../assets/images/banar4.jpg'
import banner5 from '../../../assets/images/as.jpg'




const Banner = () => {




    return (
        <div className='pt-[96px]'>
            <Carousel >
                <div className='grid grid-cols-2 items-center bg-gray-300 gap-6 p-10'>
                    <div>
                        <img src={banner1} />
                    </div>
                    <p className="text-3xl font-bold ">Putting Children First.
                        Preparing Children <br /> For
                        Success In Life</p>
                </div>
                <div className='grid grid-cols-2 items-center bg-gray-300 p-10'>
                <img  src={banner2} />
                    <p className="text-3xl font-bold ">Experience Effective Language <br /> Education at our School</p>
                </div>
                <div className='grid grid-cols-2 items-center bg-gray-300 p-10'>
                <img  src={banner3} />
                    <p className="text-3xl font-bold ">Transform Your Communication Skills <br /> at our Language School</p>
                </div>
                <div className='grid grid-cols-2 items-center bg-gray-300 p-10'>
                <img src={banner4} />
                    <p className="text-3xl font-bold ">To have another
                         language is to  <br /> possess
                        a second soul</p>
                </div>
                
                <div className='grid grid-cols-2 items-center bg-gray-300 p-10'>
                <img className='' src={banner5} />
                    <p className="text-3xl font-bold">
                        Teaching Turning
                        Today's Learners <br /> Into
                        Tomorrow's Leaders</p>
                </div>

            </Carousel>

        </div>



    )
}



export default Banner;
