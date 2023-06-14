import React from 'react';
import AllInstructor from '../AllInstructor/AllInstructor';
import ContactUs from '../../Home/ContactUs/ContactUs';

const Instructors = () => {
    return (
        <div className='pt-28 md:px-10 '>
            <AllInstructor></AllInstructor>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Instructors;