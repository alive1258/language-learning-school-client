import React from 'react';

import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import ClassCart from '../../../components/ClassCart/ClassCart';
import useClasses from '../../../Hooks/useClasses';

const AllClasses = () => {
    const [classes] = useClasses()
    // const popularAllClass = information.filter(course => course.category === "popularClass")
    return (
        <div className='pt-28 px-10'>
            <SectionTitle heading="Total Language Classes" />
            <p className='text-center'>
                We offer  different language classes to cater to your diverse language learning needs. Each class is taught by <br />
                experienced instructors who are dedicated to helping you achieve your language goals. Join us and explore <br /> the world of languages
                with our comprehensive selection of classes.</p>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-10 my-10 md:px-10 pt-10'>
                {
                    classes.map(course => <ClassCart
                        key={course._id}
                        course={course}
                    >
                    </ClassCart>)
                }

            </div>
        </div>
    );
};

export default AllClasses;