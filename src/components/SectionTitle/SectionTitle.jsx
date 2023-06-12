import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className='mx-auto text-center  my-8'>
            <h3 className='md:text-4xl text-lg uppercase y-4 font-bold'>{heading}</h3>
            <p className='text-blue-200'>{subHeading}</p>
            
        </div>
    );
};

export default SectionTitle;