import React from 'react';

import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import ClassCart from '../../../components/ClassCart/ClassCart';
import useClasses from '../../../Hooks/useClasses';
import { Fade, Reveal, Slide } from "react-awesome-reveal";

const AllClasses = () => {
    const [classes] = useClasses()
    // const popularAllClass = information.filter(course => course.category === "popularClass")
    return (
        <div className='pt-28 px-10'>
         <Reveal effect={[Fade, Slide]} duration={1000} delay={200}>
            <SectionTitle heading="Total Language Classes" />
            <p className='text-center'>
                We offer  different language classes to cater to your diverse language learning needs. Each class is taught by <br />
                experienced instructors who are dedicated to helping you achieve your language goals. Join us and explore <br /> the world of languages
                with our comprehensive selection of classes.</p>
                </Reveal>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-10 my-10 md:px-10 pt-10'>
                <Fade>
                {
                    classes.map(course => <ClassCart
                        key={course._id}
                        course={course}
                    >
                    </ClassCart>)
                }
                </Fade>

            </div>
        </div>
    );
};

export default AllClasses;