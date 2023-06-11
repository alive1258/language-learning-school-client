import React from 'react';
import useInformation from '../../../Hooks/useInformation';
import TotalInstructor from '../TotalInstructor/TotalInstructor';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const AllInstructor = () => {
    const [information] = useInformation()
    // const [information] = useInformation()

    const popularALlInstructor = information.filter(teacher => teacher.category === "instructor")
    return (
        <div>
            <SectionTitle heading="Total instructor"/>
            <p className='text-center'>We have skilled and knowledgeable instructors who are passionate
                 create an engaging and effective<br />  learning  experience for our students. 
                 Join our classes and learn from our talented instructors <br /> who are here to support
                  and guide you every step of the way.
                  </p>
              <div className='grid md:grid-cols-3 grid-cols-1 px-10 gap-10 mt-10'>
                {
                    popularALlInstructor.map(instructors => <TotalInstructor
                        key={instructors._id}
                        instructors={instructors}
                    ></TotalInstructor>)
                }
            </div>
        </div>
    );
};

export default AllInstructor;